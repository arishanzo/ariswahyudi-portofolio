<script setup lang="ts">
const items = [
  {
    period: 'Desenber 2022 - Sekarang',
    role: 'Founder Developer Kilat',
    company: 'Devklit Tech',
    desc: 'Membangun Hubungan dengan client untuk kebutuhan pembuatan website dan menjadi IT Konsultan untuk digitalisasi bisnis klien baik UMKM maupun perusahaan.'
  
  },
  {
    period: 'April 2026 - September 2026',
    role: 'Full Stack Developer',
    company: 'PT. Eintio Academic & Technology',
    desc: 'Mengembangkan dan mengimplementasikan landing page PT. Eintio Academic & Technology menggunakan Next.js dengan fokus pada performa, responsivitas, dan pengalaman pengguna.',
  },
  
  {
    period: 'Februari 2024 - Mei 2024',
    role: 'Internship Web Developer',
    company: 'CV. Caraka Abadi',
    desc: 'Mengembangkan aplikasi Inventory Management untuk digitalisasi proses pengelolaan stok barang perusahaan.Membangun fitur manajemen stok, barang masuk, barang keluar, serta perhitungan laba dan rugi' },
  {
    period: '2018 - 2020',
    role: 'Sarjana Teknik Informatika',
    company: 'Universitas',
    desc: 'Mendapatkan gelar sarjana di bidang Teknik Informatika dengan fokus pada pengembangan web dan basis data.',
  },
]
</script>


<template>
  <section id="experience" class="py-8 bg-gray-50">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Heading -->
      <div class="text-start mb-12">
        <span class="uppercase tracking-wide text-orange-500 font-semibold">Pengalaman</span>
        <h2 class="text-3xl md:text-4xl font-bold mt-2">
          Perjalanan <span class="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">Karir Saya</span>
        </h2>
        <p class="text-gray-600 mt-4  mx-auto">
          Dari awal karir hingga sekarang, setiap langkah adalah bagian dari perjalanan yang terus berkembang.
        </p>
      </div>

      <!-- Timeline style -->
      <div class="relative  pl-8 md:pl-16 space-y-12">
        <div
          v-for="(item, i) in items"
          :key="i"
          class="relative"
        >
         
          <!-- Card -->
          <div class="bg-white rounded-xl sp-6  hover:border-orange-500 transition">
            <span class="inline-block text-sm font-semibold text-orange-600 bg-orange-100 px-3 py-1 rounded-full mb-4">
              {{ item.period }}
            </span>
            <h3 class="text-lg md:text-xl font-bold text-gray-800 mb-1">{{ item.role }}</h3>
            <span class="text-pink-600 font-medium">{{ item.company }}</span>
            <p class="text-gray-400 mt-3 px-8 text-justify">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
