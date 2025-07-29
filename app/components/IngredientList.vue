<template>
  <div class="space-y-4">
    <div v-if="store.ingredients.length === 0" class="text-gray-500 italic">
      No ingredients yet.
    </div>

    <div
      v-for="(ingredient, index) in store.ingredients"
      :key="index"
      class="max-w-sm mx-auto rounded-2xl shadow-md bg-white p-4 flex flex-col text-left space-y-2"
    >
      <div class="flex justify-between items-center w-full">
        <div class="w-full space-y-1">
          <template v-if="editingIndex === index">
            <input
              v-model="editedName"
              type="text"
              class="w-full border rounded px-2 py-1"
              placeholder="Ingredient name"
            />
            <input
              v-model="editedAmount"
              type="text"
              class="w-full border rounded px-2 py-1"
              placeholder="Amount"
            />
          </template>
          <template v-else>
            <h2 class="font-semibold text-gray-800">{{ ingredient.name }}</h2>
            <p class="text-gray-500 text-sm">{{ ingredient.amount }}</p>
          </template>
        </div>

        <div class="flex flex-row items-center gap-1 text-xl ml-4">
          <template v-if="editingIndex === index">
            <button class="text-green-600" @click="save(index)">
              <Icon name="uil:check" />
            </button>
            <button class="text-gray-500" @click="cancel">
              <Icon name="uil:times" />
            </button>
          </template>
          <template v-else>
            <button @click="edit(index, ingredient)">
              <Icon name="uil:edit" />
            </button>
            <button class="text-red-500 hover:text-red-700 font-bold" @click="remove(index)">
              <Icon name="uil:multiply" />
            </button>
          </template>
        </div>
      </div>
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

const editingIndex = ref<number | null>(null);
const editedName = ref('');
const editedAmount = ref('');

const edit = (index: number, ingredient: Ingredient) => {
  editingIndex.value = index;
  editedName.value = ingredient.name;
  editedAmount.value = ingredient.amount || '';
};

const save = (index: number) => {
  const ingredient = store.ingredients[index];
  if (!ingredient) {
    return;
  };

  ingredient.name = editedName.value;
  ingredient.amount = editedAmount.value;
  editingIndex.value = null;
};

const cancel = () => {
  editingIndex.value = null;
};

const remove = (index: number) => {
  store.ingredients.splice(index, 1);
};

const clearAll = () => {
  store.setIngredients([]);
};
</script>