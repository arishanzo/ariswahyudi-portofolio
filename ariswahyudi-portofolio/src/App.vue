<script setup lang="ts">
import { onMounted } from 'vue'
import NavBar from './components/NavBar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Experience from './components/Experience.vue'
import Projects from './components/Projects.vue'
import Footer from './components/Footer.vue'
import SnakeBackground from './components/SnakeBackground.vue'
import Contact from './components/Contact.vue'
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
          entry.target.classList.add('animate-in')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.08 }
  )
  document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el))
})
</script>

<template>
 
  <NavBar />

  <main>
    <div data-animate="fade-up">
       <SnakeBackground />
      <Hero />
    </div>
    <div data-animate="fade-up" style="transition-delay: 0.05s">
      <About />
    </div>
    <div data-animate="fade-up" style="transition-delay: 0.05s">
      <Skills />
    </div>
    <div data-animate="fade-up" style="transition-delay: 0.05s">
      <Experience />
    </div>
    <div data-animate="fade-up" style="transition-delay: 0.05s">
      <Projects />
    </div>
    <div data-animate="fade-up" style="transition-delay: 0.05s">
      <Contact />
    </div>
  </main>
  <Footer />
</template>

<style>
/* ── Base state: hidden ─────────────────────────────────── */
[data-animate="fade-up"] {
  opacity: 0;
  transform: translateY(48px);
  transition: opacity 0.7s cubic-bezier(0.22,1,0.36,1),
              transform 0.7s cubic-bezier(0.22,1,0.36,1);
}
[data-animate="fade-left"] {
  opacity: 0;
  transform: translateX(-48px);
  transition: opacity 0.7s cubic-bezier(0.22,1,0.36,1),
              transform 0.7s cubic-bezier(0.22,1,0.36,1);
}
[data-animate="fade-right"] {
  opacity: 0;
  transform: translateX(48px);
  transition: opacity 0.7s cubic-bezier(0.22,1,0.36,1),
              transform 0.7s cubic-bezier(0.22,1,0.36,1);
}
[data-animate="zoom-in"] {
  opacity: 0;
  transform: scale(0.92);
  transition: opacity 0.65s cubic-bezier(0.22,1,0.36,1),
              transform 0.65s cubic-bezier(0.22,1,0.36,1);
}

/* ── Visible state ──────────────────────────────────────── */
[data-animate].animate-in {
  opacity: 1;
  transform: none;
}
</style>
