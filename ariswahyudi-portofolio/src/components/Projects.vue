
<script setup lang="ts">


import docsapp from '../assets/docsapp.png'
import belonjoapp from '../assets/belonjoapp.png'
import webcompany from '../assets/webcompany.jpg'
import goopintar from '../assets/goopintar.jpg'
import myca from '../assets/myca.jpg'
import silmi from '../assets/silmi.jpg'
import logistik from '../assets/logistik.jpg'

import { ref, computed} from 'vue'

const projects = [
  {
    title: 'Aplikasi E-Dokumen',
    category: 'Full Stack',
    desc: 'Platform e-Dokumen lengkap dengan fitur upload, download, dan manajemen dokumen. Dibangun dengan Vue.js dan Node.js.',
    tags: ['Vue', 'Node.js', 'PostgreSQL'],
    img: docsapp,
  },
    {
    title: 'Landing Page Pallet PT. Indonesia Pallet Logistic',
    category: 'Frontend',
    desc: ' Landing page perusahaan Pallet dengan desain responsif dan animasi interaktif untuk meningkatkan pengalaman pengguna.',
    tags: ['Vue', 'TypeScript', 'Vite'],
    img: logistik,
  },
  
  {
    title: 'webcompany PT. Eintio Academic & Technology',
    category: 'Frontend',
    desc: ' Website perusahaan modern dengan desain responsif dan animasi interaktif untuk meningkatkan pengalaman pengguna.',
    tags: ['Vue', 'Chart.js', 'TypeScript'],
    img: webcompany,
  },
  {
    title: 'Goopintar Les Private',
    category: 'UI/UX',
    desc: ' Desain UI/UX untuk platform les privat online dengan fokus pada pengalaman pengguna yang intuitif dan menarik.',
    tags: ['Vue', 'CSS', 'Vite'],
    img: goopintar,
  },
  {
    title: 'Myca Les Renang',
    category: 'Full Stack',
    desc: 'website pemesanan les renang online dengan fitur manajemen jadwal, pembayaran, dan notifikasi otomatis untuk meningkatkan efisiensi operasional.',
    tags: ['Vue', 'Firebase', 'Vuex'],
    img: myca,
  },
  {
    title: 'Aplikasi Payroll Silmi Fashion',
    category: 'Backend',
    desc: 'Aplikasi untuk mengotomatisasi perhitungan gaji karyawan berdasarkan absensi, lembur, cuti, dan komponen penggajian lainnya. Meningkatkan akurasi perhitungan payroll hingga sekitar 99%.',
    tags: ['Node.js', 'MongoDB', 'Express'],
    img: silmi,
  },
{
    title: 'Aplikasi Belonjo',
    category: 'Full Stack',
    desc: 'Aplikasi e-commerce untuk marketplace lokal dengan fitur pencarian, keranjang belanja, dan pembayaran online.',
    tags: ['Vue', 'Node.js', 'MongoDB'],
    img: belonjoapp,
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