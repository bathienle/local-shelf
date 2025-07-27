import type { Ingredient, Recipe } from "~/types/interfaces";

const mapIngredient = (ingredient: any): Ingredient => ({
  id: ingredient.id,
  name: ingredient.name,
  quantity: ingredient.amount,
  unit: ingredient.unit,
});

export const transformApiResponse = (data: any[]): Recipe[] => {
  return data.map(recipe => ({
    id: recipe.id,
    title: recipe.title,
    image: recipe.image,
    missedIngredients: recipe.missedIngredients.map(mapIngredient),
    usedIngredients: recipe.usedIngredients.map(mapIngredient),
  }));
};