<template>
  <div class="container mx-auto px-4 max-w-screen-lg">
    <div class="w-full text-center text-sm text-gray-500 py-4 mt-10">
      <h1 class="text-4xl font-extrabold mb-8 text-blue-700 text-center">The ingredients</h1>

      <div class="grid grid-cols-2 gap-2">
        <div class="space-y-4">
          <h2 class="text-xl font-bold mb-2 text-blue-700 text-center">Add ingredients</h2>
          <ImageUploadForm @upload-image="handleImageUpload" />
          <IngredientForm @add-ingredient="handleAddIngredient" />
        </div>

        <div class="space-y-4">
          <h2 class="text-xl font-bold mb-2 text-blue-700 text-center">List of ingredients</h2>
          <div class="relative h-128 border border-gray-200 rounded p-4 flex flex-col justify-between">
            <IngredientList />

            <div class="sticky bottom-0 bg-white pt-4">
              <button
                class="w-full px-6 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition flex items-center justify-center gap-2"
                @click="handleFindRecipes">
                <Icon name="uil:utensils-alt" class="text-white text-lg" />
                <span>Find Recipes</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Ingredient, Recipe } from '~/types/interfaces';

const { recognise } = useRecognise();
const { parseIngredients } = useIngredientParser();

const router = useRouter();
const store = useStore();

const handleAddIngredient = (newIngredient: Ingredient) => {
  store.addIngredient(newIngredient);
};

const handleImageUpload = async (imageUrl: string) => {
  const response = await recognise(imageUrl);
  const parsedIngredients = parseIngredients(response);

  parsedIngredients.forEach((ingredient: Ingredient) => {
    store.addIngredient({ name: ingredient.name, quantity: '' });
  });
};

const handleFindRecipes = async () => {
  const ingredients = store.ingredients.map(i => i.name).join(',');
  const recipes = await $fetch<Recipe[]>('/api/recipes', { query: { ingredients } });
  store.setRecipes(recipes);

  await router.push('/recipes');
};
</script>