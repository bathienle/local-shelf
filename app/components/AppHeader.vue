<template>
  <header class="w-full border-b border-gray-200 py-4 bg-white shadow-sm">
    <div class="max-w-4xl mx-auto flex items-center justify-between px-4">
      <div class="flex items-center gap-2 hover:opacity-80 transition">
        <Icon name="uil:store-alt" class="w-6 h-6 text-green-600" />
        <NuxtLink to="/" class="text-2xl font-extrabold text-blue-600">LocalShelf</NuxtLink>
      </div>

      <button class="md:hidden text-gray-600 focus:outline-none" @click="isOpen = !isOpen">
        <Icon :name="isOpen ? 'uil:multiply' : 'uil:bars'" class="w-6 h-6" />
      </button>

      <nav class="hidden md:block">
        <ul class="flex gap-6 text-gray-600">
          <li><NuxtLink class="font-bold hover:text-blue-600 transition-colors" to="/">Home</NuxtLink></li>
          <li><NuxtLink class="font-bold hover:text-blue-600 transition-colors" to="/ingredients">Ingredients</NuxtLink></li>
          <li><NuxtLink class="font-bold hover:text-blue-600 transition-colors" to="/recipes">Recipes</NuxtLink></li>
          <li><NuxtLink class="font-bold hover:text-blue-600 transition-colors" to="/about">About</NuxtLink></li>
        </ul>
      </nav>
    </div>

    <div v-if="isOpen" class="md:hidden px-4 pt-4">
      <ul class="flex flex-col gap-4 text-gray-600">
        <li><NuxtLink class="font-bold hover:text-blue-600" to="/" @click="isOpen = false">Home</NuxtLink></li>
        <li><NuxtLink class="font-bold hover:text-blue-600" to="/ingredients" @click="isOpen = false">Ingredients</NuxtLink></li>
        <li><NuxtLink class="font-bold hover:text-blue-600" to="/recipes" @click="isOpen = false">Recipes</NuxtLink></li>
        <li><NuxtLink class="font-bold hover:text-blue-600" to="/about" @click="isOpen = false">About</NuxtLink></li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);
</script>
