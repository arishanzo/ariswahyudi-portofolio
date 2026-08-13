
<script setup lang="ts">


import { ref, computed} from 'vue'
import { projects } from '../libs/projects';


const categories = ['All', 'Full Stack', 'Frontend', 'E-commerce', 'MicroServices']
const activeCategory = ref('All')

const filteredProjects = computed(() =>
  activeCategory.value === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory.value)
)
</script>


<template>
  <section id="projects" class="py-4 md:py-20 ">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Heading -->
      <div class="text-center mb-12">
        <span class="uppercase tracking-wide text-orange-500 font-semibold">Projects</span>
        <h2 class="text-3xl md:text-4xl font-bold mt-2">
          Selected <span class="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">Works</span>
        </h2>
        <p class="text-gray-600 mt-4 max-w-2xl mx-auto">
          A collection of projects I have worked on. Each one reflects my dedication, creativity, and passion for building modern, scalable, and user‑friendly applications. 
          These projects showcase my ability to solve problems, implement efficient solutions, and deliver high‑quality results.
        </p>
      </div>

      <!-- Category Filter -->
      <div class="flex flex-wrap justify-center gap-4 mb-10">
        <button
          v-for="cat in categories"
          :key="cat"
          @click="activeCategory = cat"
          class="px-4 py-2 rounded-lg font-semibold transition"
          :class="activeCategory === cat 
            ? 'bg-orange-500 text-white shadow-md' 
            : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Projects Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(project, i) in filteredProjects"
          :key="i"
          class="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:border-orange-500 transition transform hover:-translate-y-1 hover:shadow-xl"
        >
          <!-- Image -->
          <div class="relative aspect-video overflow-hidden">
            <img 
              :src="project.img" 
              :alt="project.title" 
              class="w-full h-full object-contain transition-transform duration-500 hover:scale-105 bg-gray-50"
            />
            <span class="absolute top-4 left-4 px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r from-orange-500 to-pink-600 rounded-full shadow-md">
              {{ project.category }}
            </span>
          </div>

          <!-- Body -->
          <div class="p-6">
            <h3 class="text-lg font-bold text-gray-800 mb-2">{{ project.title }}</h3>
            <p class="text-gray-600 text-sm mb-4">{{ project.desc }}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <img
                v-for="tag in project.tags"
                :key="tag"
                :src="`${tag}`" 
                :alt="tag"
                class="w-8 h-8 object-contain rounded-md border border-gray-200 bg-white p-1"
              />
            </div>

            <div class="flex gap-4">
              <!-- GitHub Button -->
              <a :href="project.github"
                 target="_blank"
                 rel="noopener noreferrer"
                 class="inline-flex items-center gap-2 text-orange-600 font-semibold text-sm hover:gap-3 transition-all">
                <!-- GitHub Icon -->
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" 
                     viewBox="0 0 24 24">
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.5-3.9-1.5-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.6 2.1 2.9 1.5.1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.4 1.2a11.8 11.8 0 0 1 6.2 0c2.4-1.5 3.4-1.2 3.4-1.2.6 1.7.2 3 .1 3.3.8.9 1.2 2 1.2 3.3 0 4.6-2.7 5.6-5.3 5.9.4.3.8 1 .8 2v3c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/>
                </svg>
                GitHub
              </a>

              <!-- View Button -->
              <a :href="project.link"
                 class="inline-flex items-center gap-2 text-gray-600 font-semibold text-sm hover:gap-3 transition-all">
                <!-- Eye Icon -->
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" 
                     viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M1.5 12s4-7.5 10.5-7.5S22.5 12 22.5 12s-4 7.5-10.5 7.5S1.5 12 1.5 12Z" 
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <circle cx="12" cy="12" r="3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                View
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
