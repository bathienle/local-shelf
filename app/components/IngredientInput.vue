<template>
  <div class="flex gap-2 items-center">
    <input
      v-model="ingredientName"
      type="text"
      placeholder="Ingredient name"
      class="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      aria-label="Ingredient name"
      @input="onInput"
    >
    <input
      v-model="ingredientQty"
      type="text"
      placeholder="Quantity"
      class="w-24 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      aria-label="Quantity"
      @input="onInput"
    >
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import type { Ingredient } from '~/types/interfaces';

const ingredientName = ref<string>('');
const ingredientQty = ref<string>('');

const emits = defineEmits<{
  (e: 'update:ingredient', payload: Ingredient): void
}>();

const onInput = () => {
  emits('update:ingredient', {
    name: ingredientName.value.trim(),
    quantity: ingredientQty.value.trim(),
  });
};
</script>