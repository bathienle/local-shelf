<template>
  <section class="min-h-screen max-w-5xl mx-auto px-6 py-12">
    <h1 class="text-4xl font-extrabold mb-8 text-blue-700 text-center">Recipes</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <article
        v-for="recipe in store.recipes"
        :key="recipe.id"
        class="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col"
      >
        <div class="aspect-w-4 aspect-h-3 mb-4 overflow-hidden rounded">
          <img :src="recipe.image" alt="Recipe Image" class="object-cover w-full h-full" />
        </div>
        <h2 class="font-semibold mb-2">{{ recipe.title }}</h2>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
const store = useStore();
</script>