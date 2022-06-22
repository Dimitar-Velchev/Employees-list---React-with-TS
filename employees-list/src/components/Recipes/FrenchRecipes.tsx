import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { IRecipes } from "../../types";

const FrenchRecipes = (): JSX.Element => {
  const [french, setFrench] = useState<IRecipes["recipes"]>([]);

  useEffect(() => {
    getFrenchRecipes();
  }, []);

  const frenchURL =
    "https://api.spoonacular.com/recipes/complexSearch?apiKey=c6036e3205044e70ba962b6e578dd81d&cuisine=french";

  const getFrenchRecipes = async () => {
    const cached = localStorage.getItem("french-recipes");
    if (cached) {
      setFrench(JSON.parse(cached));
    } else {
      const api = await fetch(frenchURL);
      const data = await api.json();
      setFrench(data.results);
      localStorage.setItem("french-recipes", JSON.stringify(data.results));
    }
  };

  return (
    <>
      <h3>French Recipes</h3>
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
        {french.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <RecipeCard recipe={recipe} />
            </SplideSlide>
          );
        })}
      </Splide>
    </>
  );
};

export default FrenchRecipes;
