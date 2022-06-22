import { FC } from "react";
import { Card } from "react-bootstrap";
import { IRecipe } from "../types";

const RecipeCard: FC<IRecipe> = ({ recipe }) => {
  return (
    <>
      <Card style={{ width: "18rem", height:"20rem" }}>
        <Card.Img variant="top" src={recipe.image} />
        <Card.Body>
          <Card.Title>{recipe.title}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};

export default RecipeCard;
