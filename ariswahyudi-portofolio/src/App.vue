<script setup lang="ts">
import { onMounted } from 'vue'
import NavBar from './components/NavBar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Experience from './components/Experience.vue'
import Projects from './components/Projects.vue'
import Footer from './components/Footer.vue'

import { useHead } from '@vueuse/head'

useHead({
  title: 'Aris Portofolio | Full Stack Developer | IT Developer',
  meta: [
    { property: 'og:title', content: 'Aris Portofolio | Full Stack Developer | IT Developer' },
    { property: 'og:description', content: 'Portofolio yang saya bangun menggunakan Vue Js 3 dengan desain responsive, modern, dan clean serta kumpulan projek yang telah saya selsaikan' },
    { property: 'og:image', content: 'https://ariswahyudi-portfolio-ten.vercel.app/cover.jpg' },
    { property: 'og:url', content: 'https://ariswahyudi-portfolio-ten.vercel.app/' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Aris Portofolio | Full Stack Developer | IT Developer' },
    { name: 'twitter:description', content: 'Portofolio yang saya bangun menggunakan Vue Js 3 dengan desain responsive, modern, dan clean serta kumpulan projek yang telah saya selsaikan' },
    { name: 'twitter:image', content: 'https://ariswahyudi-portfolio-ten.vercel.app/cover.jpg' }
  ]
})

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    { threshold: 0.1 }
  )

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
})
</script>

<template>

   <div class="py-4">
    <NavBar />
   </div>

  <main>
    <Hero />
    <About />
    <Skills />
    <Experience />
    <Projects />
  </main>
  <Footer />
</template>
