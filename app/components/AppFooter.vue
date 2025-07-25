<template>
  <footer class="w-full text-center text-sm text-gray-500 py-4 border-t border-gray-200 mt-10">
    <p>
      <Icon name="uil:utensils-alt" class="text-black" />
      Built with
      <a
        href="https://nuxt.com/"
        target="_blank"
        rel="noopener"
        class="text-blue-500 hover:text-blue-800 transition-colors"
      >
        Nuxt 3
      </a>
      &
      <a
        href="https://tailwindcss.com/"
        target="_blank"
        rel="noopener"
        class="text-blue-500 hover:text-blue-800 transition-colors"
      >
        TailwindCSS
      </a>
      by Ba Thien.
    </p>
    <p class="mt-1">
      <a
        href="https://github.com/bathienle/local-shelf"
        target="_blank"
        rel="noopener"
        class="group inline-flex items-center justify-center gap-1"
      >
        <span class="group-hover:text-blue-800 transition-colors">View on GitHub</span>
        <Icon name="uil:github" class="w-4 h-4 text-black group-hover:text-blue-800 transition-colors" />
      </a>
    </p>
    <p class="text-xs text-gray-400 select-none">
      &copy; {{ new Date().getFullYear() }} Ba Thien. All rights reserved.
    </p>
  </footer>
</template>
