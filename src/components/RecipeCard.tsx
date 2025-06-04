// A single recipe card that shows recipe info + buttons

interface Recipe {
  id: string;
  name: string;
  ingredients: string;
  instructions: string;
  favorite?: boolean;
}

interface Props {
  recipe: Recipe;
  onEdit: (recipe: Recipe) => void;
  onDelete: (id: string) => void;
  onFavorite: (id: string, current: boolean) => void;
}

const RecipeCard: React.FC<Props> = ({ recipe, onEdit, onDelete, onFavorite }) => (
  <div className="card mb-3">
    <div className="card-body">
      <h5 className="card-title">
        {recipe.name}{' '}
        <button
          className="btn btn-sm btn-outline-warning"
          onClick={() => onFavorite(recipe.id, recipe.favorite || false)}
        >
          {recipe.favorite ? '★' : '☆'}
        </button>
      </h5>
      <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
      <p><strong>Instructions:</strong> {recipe.instructions}</p>
      <button className="btn btn-sm btn-outline-primary me-2" onClick={() => onEdit(recipe)}>Edit</button>
      <button className="btn btn-sm btn-outline-danger" onClick={() => onDelete(recipe.id)}>Delete</button>
    </div>
  </div>
);

export default RecipeCard;
