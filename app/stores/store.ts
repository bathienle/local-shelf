import { defineStore } from 'pinia';

export const useStore = defineStore('store', {
  state: () => ({
    ingredients: [] as Ingredient[],
    recipes: [] as Recipe[],
  }),

  actions: {
    addIngredient(newIngredient: Ingredient) {
      this.ingredients.push(newIngredient);
    },
    setIngredients(newIngredients: Ingredient[]) {
      this.ingredients = newIngredients;
    },
    setRecipes(newRecipes: Recipe[]) {
      this.recipes = newRecipes;
    },
  },
});
