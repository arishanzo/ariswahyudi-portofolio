<script setup lang="ts">
const year = new Date().getFullYear()
</script>
<template>
  <footer class="bg-white border-t border-gray-200 py-6">
    <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
    
      <!-- Text -->
      <p class="text-gray-500 text-sm text-center md:text-left">
        © {{ year }} Aris Wahyudi. Built with ❤️ and Vue.js.
      </p>

      <!-- Back to Top -->
      <a href="#home" class="flex items-center justify-center w-10 h-10 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition" aria-label="Back to top">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 19V5M5 12l7-7 7 7"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </a>
    </div>
  </footer>
</template>