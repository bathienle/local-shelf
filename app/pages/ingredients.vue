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

        <IngredientList />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Ingredient } from '~/types/interfaces';

const { recognise } = useRecognise();
const { parseIngredients } = useIngredientParser();

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
</script>