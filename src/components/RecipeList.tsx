// Maps the list of recipes into RecipeCard components

import RecipeCard from './RecipeCard';

interface Recipe {
  id: string;
  name: string;
  ingredients: string;
  instructions: string;
  favorite?: boolean;
}

interface Props {
  recipes: Recipe[];
  onEdit: (recipe: Recipe) => void;
  onDelete: (id: string) => void;
  onFavorite: (id: string, current: boolean) => void;
}

const RecipeList: React.FC<Props> = ({ recipes, onEdit, onDelete, onFavorite }) => {
  return (
    <div>
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          onEdit={onEdit}
          onDelete={onDelete}
          onFavorite={onFavorite}
        />
      ))}
    </div>
  );
};

export default RecipeList;
