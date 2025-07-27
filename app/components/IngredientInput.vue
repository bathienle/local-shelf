<template>
  <div class="flex gap-2 items-center">
    <input
      v-model="name"
      type="text"
      placeholder="Ingredient name"
      class="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      @input="onInput"
    />
    <input
      v-model="quantity"
      type="text"
      placeholder="Quantity"
      class="w-24 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      @input="onInput"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import type { Ingredient } from '~/types/interfaces';

const emits = defineEmits<{
  'add-ingredient': [payload: Ingredient];
}>();

const name = ref('');
const quantity = ref('');

const onInput = () => {
  emits('add-ingredient', {
    name: name.value.trim(),
    quantity: quantity.value.trim(),
  });
};
</script>