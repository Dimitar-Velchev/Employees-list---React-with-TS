//import { FC } from 'react'
import PopularRecipes from '../components/Recipes/PopularRecipes'
import FrenchRecipes from '../components/Recipes/FrenchRecipes'

const RecipesCatalog = () => {
  return (
    <div>
        <PopularRecipes />
        <FrenchRecipes />
    </div>
  )
}

export default RecipesCatalog