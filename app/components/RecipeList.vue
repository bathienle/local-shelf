<template>
  <div>
    <div v-if="loading" class="text-center py-8">Loading recipes...</div>
    <div v-else-if="error" class="text-center text-red-600 py-8">{{ error }}</div>
    <div v-else-if="recipes.length === 0" class="text-center py-8">No recipes found.</div>
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div v-for="recipe in recipes" :key="recipe.id" class="border rounded shadow hover:shadow-lg transition p-4">
        <img :src="recipe.image" :alt="recipe.title" class="w-full h-40 object-cover rounded" />
        <h3 class="mt-2 font-semibold text-lg">{{ recipe.title }}</h3>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Recipe } from '~/types/interfaces';

defineProps<{
  recipes: Recipe[];
  loading: boolean;
  error: string | null;
}>();
</script>