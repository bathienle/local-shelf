<template>
  <form class="max-w-md mx-auto p-4 border rounded shadow-sm bg-white space-y-4 self-start" @submit.prevent="handleSubmit">
    <h1 class="text-lg font-semibold mb-4 text-blue-700">Add an ingredient manually</h1>

    <div class="flex gap-2 items-center">
      <input
        v-model="name"
        type="text"
        placeholder="Ingredient name"
        class="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        v-model="quantity"
        type="text"
        placeholder="Quantity"
        class="w-24 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>

    <button
      class="block inline-flex items-center gap-2 m-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      :disabled="!name"
    >
      <Icon name="uil:plus" class="text-xl" />
      Add ingredient
    </button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import type { Ingredient } from '~/types/interfaces';

const emits = defineEmits<{
  'add-ingredient': [payload: Ingredient];
}>();

const name = ref('');
const quantity = ref('');

const handleSubmit = () => {
  emits('add-ingredient', {
    name: name.value.trim(),
    quantity: quantity.value.trim(),
  });

  name.value = '';
  quantity.value = '';
};
</script>