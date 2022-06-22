import { FC } from "react";
import { IRecipe } from "../types";

const RecipeCard: FC<IRecipe> = ({ recipe }) => {
  return <h3>{recipe.title}</h3>;
};

export default RecipeCard;
