<template>
  <div class="space-y-4">
    <h2 class="text-xl font-bold mb-2 text-blue-700 text-center">Your Ingredients</h2>

    <div v-if="store.ingredients.length === 0" class="text-gray-500 italic">
      No ingredients yet.
    </div>

    <div class="space-y-4 max-h-96 overflow-y-auto">
      <span
        v-for="(ingredient, index) in store.ingredients"
        :key="index"
        class="max-w-sm mx-auto rounded-2xl shadow-md bg-white p-4 flex flex-col text-left space-y-2"
      >
        <div class="flex justify-between items-center w-full">
          <div>
            <h2 class="font-semibold text-gray-800">{{ ingredient.name }}</h2>
            <p class="text-gray-500 text-sm">
              {{ ingredient.quantity ? `${ingredient.quantity} ` : '' }}
            </p>
          </div>
          <button
            class="text-red-500 hover:text-red-700 font-bold"
            @click="remove(index)"
          >
            <Icon name="uil:multiply" />
          </button>
        </div>
      </span>
    </div>

    <button
      v-if="store.ingredients.length"
      class="flex items-center gap-1 text-sm text-red-500 hover:text-red-700 underline mx-auto"
      @click="clearAll"
    >
      <Icon name="uil:trash" class="text-xl" />
      Clear all
    </button>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '~/stores/store';

const store = useStore();

const remove = (index: number) => {
  const updated = [...store.ingredients];
  updated.splice(index, 1);
  store.setIngredients(updated);
};

const clearAll = () => {
  store.setIngredients([]);
};
</script>