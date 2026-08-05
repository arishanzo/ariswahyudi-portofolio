
<script setup lang="ts">
import heroImg from '../assets/hero.png'

import { ref, computed} from 'vue'

const projects = [
  {
    title: 'Aplikasi E-commerce',
    category: 'Full Stack',
    desc: 'Platform e-commerce lengkap dengan keranjang, pembayaran, dan dashboard admin. Dibangun dengan Vue.js dan Node.js.',
    tags: ['Vue', 'Node.js', 'PostgreSQL'],
    img: heroImg,
  },
  {
    title: 'Dashboard Analitik',
    category: 'Frontend',
    desc: 'Dashboard analitik real-time dengan visualisasi data interaktif dan fitur export laporan.',
    tags: ['Vue', 'Chart.js', 'TypeScript'],
    img: heroImg,
  },
  {
    title: 'Landing Page Startup',
    category: 'UI/UX',
    desc: 'Landing page modern dengan animasi halus dan optimasi performa untuk konversi tinggi.',
    tags: ['Vue', 'CSS', 'Vite'],
    img: heroImg,
  },
  {
    title: 'Aplikasi Manajemen Tugas',
    category: 'Full Stack',
    desc: 'Aplikasi manajemen tugas kolaboratif dengan fitur real-time dan notifikasi.',
    tags: ['Vue', 'Firebase', 'Vuex'],
    img: heroImg,
  },
  {
    title: 'Sistem Reservasi',
    category: 'Backend',
    desc: 'Sistem reservasi online dengan API RESTful dan manajemen jadwal otomatis.',
    tags: ['Node.js', 'MongoDB', 'Express'],
    img: heroImg,
  },
  {
    title: 'Portofolio Interaktif',
    category: 'Frontend',
    desc: 'Website portofolio interaktif dengan animasi scroll dan desain modern yang responsif.',
    tags: ['Vue', 'TypeScript', 'Vite'],
    img: heroImg,
  },
]

const categories = ['All', 'Full Stack', 'Frontend', 'Backend', 'UI/UX']
const activeCategory = ref('All')

const filteredProjects = computed(() =>
  activeCategory.value === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory.value)
)
</script>

<template>
  <section id="projects" class="py-20 ">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Heading -->
      <div class="text-center mb-12">
        <span class="uppercase tracking-wide text-orange-500 font-semibold">Proyek</span>
        <h2 class="text-3xl md:text-4xl font-bold mt-2">
          Proyek <span class="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">Terpilih</span>
        </h2>
        <p class="text-gray-600 mt-4 max-w-2xl mx-auto">
          Beberapa proyek yang telah saya kerjakan. Setiap proyek adalah hasil dari dedikasi dan semangat untuk menciptakan yang terbaik.
        </p>
      </div>

      <!-- Filter kategori -->
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

      <!-- Projects grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(project, i) in filteredProjects"
          :key="i"
          class="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:border-orange-500 transition transform hover:-translate-y-1 hover:shadow-xl"
        >
          <!-- Image -->
          <div class="relative aspect-video overflow-hidden">
            <img :src="project.img" :alt="project.title" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
            <span class="absolute top-4 left-4 px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r from-orange-500 to-pink-600 rounded-full shadow-md">
              {{ project.category }}
            </span>
          </div>

          <!-- Body -->
          <div class="p-6">
            <h3 class="text-lg font-bold text-gray-800 mb-2">{{ project.title }}</h3>
            <p class="text-gray-600 text-sm mb-4">{{ project.desc }}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span v-for="tag in project.tags" :key="tag" class="px-3 py-1 text-xs rounded-full bg-gray-100 border border-gray-200 text-gray-700">
                {{ tag }}
              </span>
            </div>
            <a href="#" class="inline-flex items-center gap-2 text-orange-600 font-semibold text-sm hover:gap-3 transition-all">
              Lihat Detail
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14M12 5l7 7-7 7"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>