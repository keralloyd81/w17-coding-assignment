// A reusable form for both adding and editing a recipe

import React, { useEffect, useState } from 'react';

interface Recipe {
  id?: string;
  name: string;
  ingredients: string;
  instructions: string;
  favorite?: boolean;
}

interface Props {
  onSubmit: (recipe: Recipe) => void;
  selectedRecipe: Recipe | null;
}

const RecipeForm: React.FC<Props> = ({ onSubmit, selectedRecipe }) => {
  const [formData, setFormData] = useState<Recipe>({
    name: '',
    ingredients: '',
    instructions: '',
  });

  useEffect(() => {
    if (selectedRecipe) setFormData(selectedRecipe);
  }, [selectedRecipe]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: '', ingredients: '', instructions: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        className="form-control mb-2"
        name="name"
        placeholder="Recipe name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        className="form-control mb-2"
        name="ingredients"
        placeholder="Ingredients"
        value={formData.ingredients}
        onChange={handleChange}
        required
      />
      <textarea
        className="form-control mb-2"
        name="instructions"
        placeholder="Instructions"
        value={formData.instructions}
        onChange={handleChange}
        required
      />
      <button type="submit" className="btn btn-primary">
        {formData.id ? 'Update Recipe' : 'Add Recipe'}
      </button>
    </form>
  );
};

export default RecipeForm;
