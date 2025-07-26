import { defineStore } from 'pinia';

import type { Ingredient, Recipe } from '~/types/interfaces';

export const useStore = defineStore('store', {
  state: () => ({
    ingredients: [] as Ingredient[],
    recipes: [] as Recipe[],
    loading: false,
    error: null as string | null,
  }),

  actions: {
    setIngredients(newIngredients: Ingredient[]) {
      this.ingredients = newIngredients;
    },
    setRecipes(newRecipes: Recipe[]) {
      this.recipes = newRecipes;
    },
    setLoading(value: boolean) {
      this.loading = value;
    },
    setError(message: string | null) {
      this.error = message;
    },
    clearData() {
      this.ingredients = [];
      this.recipes = [];
      this.loading = false;
      this.error = null;
    },
  },
});
