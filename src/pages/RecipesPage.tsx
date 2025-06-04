// src/pages/RecipesPage.tsx

import { useEffect, useState } from 'react';
import { Recipe } from '../types/Recipe';
import {
  getRecipes,
  createRecipe,
  deleteRecipe,
  updateRecipe,
} from '../services/recipeService';
import RecipeForm from '../components/RecipeForm';
import RecipeCard from '../components/RecipeCard';

function RecipesPage() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadRecipes();
  }, []);

  // Load recipes from the API
  const loadRecipes = async () => {
    try {
      const data = await getRecipes();
      console.log('Fetched from API:', data);

      // Ensure we have an array before setting state
      if (Array.isArray(data)) {
        setRecipes(data);
        setError(null); // Clear any previous error
      } else {
        throw new Error('Data format is not an array');
      }
    } catch (err: any) {
      console.error('Error fetching recipes:', err);
      setError('Failed to load recipes.');
    }
  };

  // Handle adding a new recipe
  const handleAdd = async (recipe: Omit<Recipe, 'id'>) => {
    try {
      const newRecipe = await createRecipe(recipe);
      setRecipes([...recipes, newRecipe]);
    } catch (err) {
      console.error('Error adding recipe:', err);
      setError('Failed to add recipe.');
    }
  };

  // Handle deleting a recipe
  const handleDelete = async (id: string) => {
    try {
      await deleteRecipe(id);
      setRecipes(recipes.filter((r) => r.id !== id));
    } catch (err) {
      console.error('Error deleting recipe:', err);
      setError('Failed to delete recipe.');
    }
  };

  // Handle toggling favorite status
  const handleToggleFavorite = async (recipe: Recipe) => {
    try {
      const updated = await updateRecipe(recipe.id, {
        ...recipe,
        favorite: !recipe.favorite,
      });

      // Replace the old recipe with the updated one
      setRecipes(
        recipes.map((r) => (r.id === updated.id ? updated : r))
      );
    } catch (err) {
      console.error('Error toggling favorite:', err);
      setError('Failed to update recipe.');
    }
  };

  return (
    <div className="container py-4">
      <h2>Recipes</h2>
      {/* Show error message if something goes wrong */}
      {error && <div className="alert alert-danger">{error}</div>}

      <RecipeForm onAdd={handleAdd} />

      {/* Make sure recipes is an array before mapping */}
      {Array.isArray(recipes) ? (
        recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            onDelete={handleDelete}
            onToggleFavorite={handleToggleFavorite}
          />
        ))
      ) : (
        <p>No recipes to display.</p>
      )}
    </div>
  );
}

export default RecipesPage;
