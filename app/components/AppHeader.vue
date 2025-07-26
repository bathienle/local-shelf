<template>
  <header class="w-full border-b border-gray-200 py-4 bg-white shadow-sm">
    <div class="max-w-4xl mx-auto flex items-center justify-between px-4">
      <div class="flex items-center gap-2 hover:opacity-80 transition">
        <Icon name="uil:store-alt" class="w-6 h-6 text-green-600" />
        <NuxtLink to="/" class="text-2xl font-extrabold text-blue-600">LocalShelf</NuxtLink>
      </div>
      <nav>
        <ul class="flex gap-6 text-gray-600">
          <li>
            <NuxtLink to="/" class="font-bold hover:text-blue-600 transition-colors">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/ingredients" class="font-bold hover:text-blue-600 transition-colors">Ingredients</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/" class="font-bold hover:text-blue-600 transition-colors">Recipes</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" class="font-bold hover:text-blue-600 transition-colors">About</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
