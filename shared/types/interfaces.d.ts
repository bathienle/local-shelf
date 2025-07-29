export { }

declare global {
  export interface Ingredient {
    id?: number;
    name: string;
    amount?: string;
    unit?: string;
  }

  export interface Recipe {
    id: number;
    title: string;
    image: string;
    missedIngredients: Ingredient[];
    usedIngredients: Ingredient[];
  }
}
