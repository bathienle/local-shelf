<template>
  <section>
    <div class="aspect-w-4 aspect-h-3 mb-4 overflow-hidden rounded">
      <img :src="recipe.image" alt="Recipe Image" class="object-cover w-full h-full" />
    </div>

    <h2 class="font-semibold text-lg mb-4">{{ recipe.title }}</h2>

    <div v-if="recipe.usedIngredients.length" class="mb-2">
      <h3 class="text-green-700 font-medium text-sm mb-1 flex items-center gap-1">
        <Icon name="uil:check-square" class="text-xl" />
        Used Ingredients:
      </h3>
      <ul class="list-disc list-inside text-sm text-gray-700">
        <li v-for="ingredient in recipe.usedIngredients" :key="ingredient.id">
          {{ ingredient.quantity ?? '' }} {{ ingredient.unit ?? '' }} {{ ingredient.name }}
        </li>
      </ul>
    </div>

    <div v-if="recipe.missedIngredients.length">
      <h3 class="text-red-600 font-medium text-sm mb-1 flex items-center gap-1">
        <Icon name="uil:exclamation-triangle" class="text-xl" />
        Missed Ingredients:
      </h3>
      <ul class="list-disc list-inside text-sm text-gray-700">
        <li v-for="ingredient in recipe.missedIngredients" :key="ingredient.id">
          {{ ingredient.quantity ?? '' }} {{ ingredient.unit ?? '' }} {{ ingredient.name }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Recipe } from '~/types/interfaces';

defineProps<{
  recipe: Recipe;
}>();
</script>