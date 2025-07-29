<template>
  <section class="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 via-white to-green-50 px-6 text-center pt-20">
    <h1 class="text-5xl font-extrabold text-blue-700 mb-4">
      LocalShelf
    </h1>

    <p class="text-xl text-gray-700 max-w-xl mb-8">
      Scan your list of ingredients with AI-powered OCR, then get recipe ideas instantly.
      Save time, reduce waste, and cook smarter!
    </p>

    <div class="flex flex-wrap gap-6 justify-center mb-12">
      <NuxtLink
        to="/ingredients"
        class="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold shadow-md transition"
      >
        Start Scanning
      </NuxtLink>

      <NuxtLink
        to="/recipes"
        class="px-8 py-4 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-100 transition"
      >
        Browse Recipes
      </NuxtLink>
    </div>

    <section class="max-w-4xl mx-auto my-16 px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      <h2 class="col-span-full text-3xl font-semibold text-blue-600">Feature Highlights</h2>
      <p class="col-span-full mb-8 text-gray-500">Discover what makes LocalShelf powerful and unique</p>
      <div class="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
        <Icon name="uil:robot" class="mx-auto mb-4 w-12 h-12 text-green-600" />
        <h3 class="font-semibold mb-2">AI-powered OCR</h3>
        <p>Extract ingredients quickly and accurately from images.</p>
      </div>
      <div class="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
        <Icon name="uil:edit" class="mx-auto mb-4 w-12 h-12 text-green-600" />
        <h3 class="font-semibold mb-2">Ingredient Editor</h3>
        <p>Adjust and refine your scanned ingredient list easily.</p>
      </div>
      <div class="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
        <Icon name="uil:utensils" class="mx-auto mb-4 w-12 h-12 text-green-600" />
        <h3 class="font-semibold mb-2">Recipe Suggestions</h3>
        <p>Get meal ideas based on what you already have at home.</p>
      </div>
    </section>

    <section class="max-w-4xl mx-auto mb-16 px-4 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
      <h2 class="col-span-full text-3xl font-semibold text-blue-600">Step-by-Step Workflow</h2>
      <p class="col-span-full mb-8 text-gray-500">How to go from scanning to cooking in 3 simple steps</p>
      <div>
        <div class="text-4xl mb-4 font-bold text-blue-600">1</div>
        <div class="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
          <Icon name="uil:camera" class="mx-auto mb-4 w-16 h-16 text-green-600" />
          <h4 class="font-semibold mb-2">Scan Your Fridge</h4>
          <p class="text-gray-700">Upload or snap a photo of your recipe list.</p>
        </div>
      </div>
      <div>
        <div class="text-4xl mb-4 font-bold text-blue-600">2</div>
        <div class="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
          <Icon name="uil:pen" class="mx-auto mb-4 w-16 h-16 text-green-600" />
          <h4 class="font-semibold mb-2">Edit Ingredients</h4>
          <p class="text-gray-700">Review, add, or remove items to perfect your ingredient list.</p>
        </div>
      </div>
      <div>
        <div class="text-4xl mb-4 font-bold text-blue-600">3</div>
        <div class="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
          <Icon name="uil:utensils" class="mx-auto mb-4 w-16 h-16 text-green-600" />
          <h4 class="font-semibold mb-2">Find Recipes</h4>
          <p class="text-gray-700">Discover recipes you can make with what you have.</p>
        </div>
      </div>
    </section>

    <section class="max-w-4xl mx-auto mb-16 px-4 text-center">
      <h2 class="col-span-full text-3xl font-semibold text-blue-600">Tech Stack & Tools</h2>
      <p class="col-span-full mb-8 text-gray-500">Technologies that power LocalShelf</p>
      <div class="flex flex-wrap justify-center gap-6 text-gray-700">
        <div class="flex items-center gap-2 px-4 py-2 bg-white rounded shadow">
          <Icon name="logos:vue" class="w-6 h-6 text-green-500" />
          Vue 3
        </div>
        <div class="flex items-center gap-2 px-4 py-2 bg-white rounded shadow">
          <Icon name="logos:nuxt-icon" class="w-6 h-6 text-green-500" />
          Nuxt 4
        </div>
        <div class="flex items-center gap-2 px-4 py-2 bg-white rounded shadow">
          <Icon name="logos:tailwindcss-icon" class="w-6 h-6 text-blue-400" />
          TailwindCSS
        </div>
        <div class="flex items-center gap-2 px-4 py-2 bg-white rounded shadow">
          <Icon name="tabler:hexagon-3d" class="w-6 h-6 text-gray-700" />
          Tesseract.js (OCR)
        </div>
        <div class="flex items-center gap-2 px-4 py-2 bg-white rounded shadow">
          <Icon name="hugeicons:spoon" class="w-6 h-6 text-red-600" />
          Spoonacular API
        </div>
      </div>
    </section>
  </section>
</template>
