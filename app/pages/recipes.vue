<template>
  <section class="min-h-screen max-w-5xl mx-auto px-6 py-12">
    <h1 class="text-4xl font-extrabold mb-8 text-blue-700 text-center">Recipes</h1>
    <div v-if="store.recipes.length === 0" class="text-center">No recipes available.</div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <article
        v-for="recipe in store.recipes"
        :key="recipe.id"
        class="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col"
      >
        <RecipeCard :recipe="recipe" />
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
const store = useStore();
</script>