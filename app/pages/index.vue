<template>
  <div class="container mx-auto px-4 max-w-screen-lg">
    <div class="w-full text-center text-sm text-gray-500 py-4 mt-10">
      <h1 class="text-3xl font-bold pb-6">The ingredients</h1>

      <div class="grid grid-cols-2 gap-2">
        <ImageUploadForm @submit="handleImageUpload" />

        <div class="space-y-4">
          <div class="space-x-2">
            <button
              class="block inline-flex items-center gap-2 mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              @click="addIngredient"
            >
              <Icon name="uil:plus" class="text-xl" />
              Add ingredient
            </button>
            <button
              class="block inline-flex items-center gap-2 mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              @click="removeAllIngredients"
            >
              <Icon name="uil:trash-alt" class="text-xl" />
              Clear all ingredients
            </button>
          </div>

          <div class="max-h-80 overflow-y-auto space-y-2">
            <div v-for="(ingredient, index) in ingredients" :key="ingredient.name" class="flex items-center gap-2">
              <div class="flex-grow flex justify-center gap-1">
                <IngredientInput
                  :model-value="ingredient"
                  @update:ingredient="(newIngredient) => updateIngredient(index, newIngredient)"
                />
                <button
                  class="text-red-500 hover:text-red-700"
                  @click="removeIngredient(index)"
                >
                  <Icon name="uil:trash" class="text-xl" />
                </button>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import type { Ingredient } from '~/types/interfaces';

const { recognise } = useRecognise();
const { parseIngredients } = useIngredientParser();

const ingredients = ref<Ingredient[]>([]);

const updateIngredient = (index: number, newIngredient: Ingredient) => {
  ingredients.value[index] = newIngredient;
};

const addIngredient = () => {
  ingredients.value.push({ name: '', quantity: '' });
};

const removeIngredient = (index: number) => {
  ingredients.value.splice(index, 1);
};

const removeAllIngredients = () => {
  ingredients.value = [];
};

const handleImageUpload = async (imageUrl: string) => {
  const response = await recognise(imageUrl);
  const parsedIngredients = parseIngredients(response);
  
  parsedIngredients.forEach((ingredient: Ingredient) => {
    ingredients.value.push({ name: ingredient.name, quantity: '' });
  });
};
</script>