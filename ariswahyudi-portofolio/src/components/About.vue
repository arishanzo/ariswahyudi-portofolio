<script setup lang="ts">
import heroImg from '../assets/hero.png'

import { ref, onMounted } from 'vue'

const contributions = ref<any>(null)


const highlights = [
  'Membangun aplikasi web full-stack yang scalable',
  'Pengalaman dengan Vue.js, TypeScript, dan Node.js',
  'Desain UI/UX yang modern dan responsif',
  'Optimasi performa dan SEO',
]


function getColor(count: number) {
  if (count === 0) return '#f3f4f6' // abu-abu untuk kosong
  if (count < 3) return '#fb923c'   // orange-400
  if (count < 6) return '#f97316'   // orange-500
  if (count < 10) return '#ec4899'  // pink-500
  return '#db2777'                  // pink-600
}

onMounted(async () => {
  const token = import.meta.env.VITE_GITHUB_TOKEN
  const query = `
    {
      user(login: "arishanzo") {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
                color
              }
            }
          }
        }
      }
    }
  `
  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query })
  })
  const json = await res.json()
  contributions.value = json.data.user.contributionsCollection.contributionCalendar
})
</script>

<template>

  <section id="github" class="md:mb-28 mb-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-6 text-center">
      <h2 class="md:text-3xl text-xl font-bold mb-2">Aktivitas GitHub Saya</h2>
      <p class="text-gray-600 mb-8">
        {{ contributions?.totalContributions }} kontribusi dalam setahun terakhir
      </p>

      <!-- Wrapper scrollable -->
       <div class="overflow-x-auto snap-x snap-mandatory">
        <!-- Grid kontribusi -->
        <div class="grid grid-cols-53 gap-1 min-w-5xl mx-auto">
          <template v-for="week in contributions?.weeks" :key="week">
            <template v-for="day in week.contributionDays" :key="day.date">
              <div 
                class="w-3 h-3 rounded-sm"
                :style="{ backgroundColor: getColor(day.contributionCount) }"
                :title="`${day.date}: ${day.contributionCount} kontribusi`"
              ></div>
            </template>
          </template>
        </div>
      </div>
    </div>
  </section>


  <section id="about" class=" bg-white mb-18">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-22 md:gap-42 px-6 md:px-12">

    <!-- Visual kiri -->
<div class="relative  h-full flex items-center justify-center md:justify-start">
  <img 
    :src="heroImg" 
    alt="Tentang Aris Wahyudi" 
    class=" rounded-2xl shadow-lg border-4 border-gray-200 object-cover" 
  />

  <!-- Badge pengalaman -->
  <div 
    class="absolute -bottom-6 left-1/2 md:left-auto md:right-8 transform -translate-x-1/2 md:translate-x-0 
           bg-gradient-to-r from-orange-500 to-pink-600 text-white 
           px-6 py-4 rounded-xl shadow-lg flex flex-col items-center"
  >
    <strong class="text-2xl">3+</strong>
    <span class="text-sm text-center">Tahun<br/>Pengalaman</span>
  </div>
</div>


      <!-- Konten kanan -->
      <div class="md:w-1/2 text-center md:text-left">
        <span class="uppercase tracking-wide text-orange-500 font-semibold">Tentang Saya</span>
        <h2 class="text-3xl md:text-4xl font-bold mt-2 mb-4">
          Mengubah ide menjadi 
          <span class="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">
            produk digital
          </span>
        </h2>
        <p class="text-gray-600 leading-relaxed mb-6">
          Saya adalah seorang Full Stack Developer yang berfokus pada pengembangan web modern. 
          Senang memecahkan masalah kompleks dan membangun solusi yang berdampak nyata bagi pengguna.
        </p>

        <!-- Highlights -->
        <ul class="space-y-3 mb-8">
          <li v-for="item in highlights" :key="item" class="flex items-center gap-2 text-gray-700">
            <span class="text-orange-500 font-bold">✓</span>
            {{ item }}
          </li>
        </ul>

        <!-- Actions -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a href="#contact" 
             class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition">
            Mari Berkolaborasi
          </a>
          <a href="#experience" 
             class="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white 
                    px-6 py-3 rounded-lg font-semibold transition">
            Lihat Pengalaman
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
