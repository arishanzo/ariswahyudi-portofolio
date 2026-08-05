<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'


const links = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Projects', href: '/#projects' },
]

const scrolled = ref(false)
const activeLink = ref('/') // default aktif di Home

const onScroll = () => {
  scrolled.value = window.scrollY > 40
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
  onScroll()
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))

const setActive = (href: string) => {
  activeLink.value = href
}

</script>
<template>
  <header 
    class="fixed top-6 left-1/2 transform -translate-x-1/2 
           w-full md:max-w-md max-w-[90%] mx-auto
           bg-white/90 backdrop-blur-md shadow-md rounded-2xl px-6 py-3 
           flex items-center justify-center transition-all duration-300 z-50"
  >
    <!-- Navigation Links -->
    <nav class="flex flex-wrap items-center gap-4 md:gap-6 font-medium text-gray-700">
      <a v-for="link in links" 
         :key="link.href" 
         :href="link.href" 
         @click="setActive(link.href)"
        :class="activeLink === link.href 
                  ? 'text-orange-500 font-semibold' 
                  : 'text-gray-700 hover:text-orange-500 transition'"
         class="text-sm sm:text-base">
        {{ link.label }}
      </a>
    </nav>
  </header>
</template>
