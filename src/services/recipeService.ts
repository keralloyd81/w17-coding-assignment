// src/services/recipeService.ts

// recipeService.ts
const BASE_URL = 'https://684050c55b39a8039a57a97c.mockapi.io/api/v1/Recipe';

/**
 * Get all recipes from the API
 */
export const getRecipes = async () => {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  console.log('Fetched recipes:', data); // Debugging
  return data;
};

/**
 * Create a new recipe
 */
export const createRecipe = async (recipe: any) => {
  console.log('Creating recipe:', recipe); // Debugging
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(recipe),
  });
  const data = await response.json();
  console.log('Created recipe response:', data); // Debugging
  return data;
};

/**
 * Update an existing recipe
 */
export const updateRecipe = async (id: string, recipe: any) => {
  console.log(`Updating recipe ${id}:`, recipe); // Debugging
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(recipe),
  });
  const data = await response.json();
  console.log('Updated recipe response:', data); // Debugging
  return data;
};

/**
 * Delete a recipe
 */
export const deleteRecipe = async (id: string) => {
  console.log('Deleting recipe with ID:', id); // Debugging
  await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' });
};

/**
 * Toggle the "favorite" property on a recipe
 */
export const toggleFavorite = async (id: string, current: boolean) => {
  console.log(`Toggling favorite for recipe ${id}:`, !current); // Debugging
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ favorite: !current }),
  });
  const data = await response.json();
  console.log('Toggled favorite response:', data); // Debugging
  return data;
};
