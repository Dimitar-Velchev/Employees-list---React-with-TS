import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { IRecipes } from "../types";

const PopularRecipes = (): JSX.Element => {
  const [popular, setPopular] = useState<IRecipes["recipes"]>([]);

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
      <h3>Popular Recipes</h3>
      <Splide
        options={{
          rewind: true,
          gap: "2rem",
          perPage: 4,
          type: "loop",
          perMove: 1,
          pagination: false,
        }}
      >
        {popular.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <RecipeCard recipe={recipe}  />
            </SplideSlide>
          );
        })}
      </Splide>
    </>
  );
};

export default PopularRecipes;
