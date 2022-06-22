import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import { IPopular } from "../types";

const PopularRecipes = (): JSX.Element => {
  const [popular, setPopular] = useState<IPopular["popular"]>([]);

  useEffect(() => {
    getPopularRecipes();
  }, []);

  const mainURL =
    "https://api.spoonacular.com/recipes/complexSearch?apiKey=b5c49b3a33f94adba1c034f7388c86ce";

  const getPopularRecipes = async () => {
    const api = await fetch(mainURL);
    const data = await api.json();
    setPopular(data.results);
  };

  return (
    <>
      {popular.map((recipe) => {
       return <RecipeCard recipe={recipe} key={recipe.id} />;
      })}
    </>
  );
};

export default PopularRecipes;
