<script setup lang="ts">
import { onMounted } from 'vue'
import NavBar from './components/NavBar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Experience from './components/Experience.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

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
    <Contact />
  </main>
  <Footer />
</template>
