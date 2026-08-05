<script setup lang="ts">
import { ref, onMounted } from 'vue'

const contributions = ref<any>(null)

const showMoreFYEP = ref(false)
const showMoreIDCAMP = ref(false)
const showMoreGoogle = ref(false)


const highlights = [
  'Membangun aplikasi web full-stack yang scalable',
  'Pengalaman dengan Vue.js, Next JS, TypeScript, Node.js, Laravel, Dll',
  'Desain UI/UX yang modern dan responsif',
  'Optimasi performa Aplikasi sdan SEO',
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

  <section id="github" class="md:mb-28 mb-16">
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
    <div class="max-w-7xl p-2 mx-auto flex flex-col md:flex-row items-center md:items-start gap-22 md:gap-42 px-6 md:px-12">

     
     <!-- Konten kanan -->
<div class="md:w-1/2  text-center md:text-left">
  <span class="uppercase tracking-wide text-orange-500 font-semibold">Tentang Saya</span>
  <h2 class="text-3xl md:text-4xl font-bold mt-2 mb-12">
    Profil Singkat
    <span class="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">
      Perjalanan Saya
    </span>
  </h2>
  <p class="text-gray-600 leading-relaxed mb-6 text-justify">
    Lulusan S1 Teknik Informatika dengan pengalaman lebih dari 3 tahun di pengembangan web. 
    Berperan sebagai Full Stack Developer, Web Developer, dan IT Staff, saya terbiasa membangun 
    aplikasi modern menggunakan Next.js, React.js, Express.js, PHP, dan MySQL. 
  </p>

  <!-- Highlights -->
  <ul class="space-y-3 mb-8">
    <li v-for="item in highlights" :key="item" class="flex text-start gap-2 text-gray-700">
      <span class="text-orange-500 font-bold">✓</span>
      {{ item }}
    </li>
  </ul>

  <!-- Actions -->
  <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
    <a href="https://wa.me/088805317354" 
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

    <div class="md:w-1/2  md:text-left">
    <h2 class="text-3xl md:text-4xl font-bold mb-3  md:text-left">
      <span class="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">
        Pendidikan
      </span>
    </h2>

    <!-- Timeline Pendidikan -->
    <div class="space-y-12">
      <!-- Pendidikan Formal -->
      <div>
        <h3 class="text-xl font-semibold text-gray-800 mb-6">Pendidikan Formal</h3>
        <div class="relative border-l-4 border-orange-500 pl-8 space-y-8">
          <div class="relative">
            <span class="absolute -left-5 top-0 w-4 h-4 bg-orange-500 rounded-full"></span>
            <p class="text-gray-700 font-semibold">-S1 Teknik Informatika –Universitas Islam Lamongan (2018–2022)</p>
            <p class="text-gray-500 text-sm">- Membuat aplikasi sistem perangkingan siswa berprestasi berbasis website menggunakan metode SAW untuk
            tugas akhir dengan akurasi perhitungan 99%. </p>
            <p class="text-gray-500 text-sm">
            -  Mendapatkan sertifikat Machine Learning dari Dicoding Indonesia sebagai tugas mata kuliah Kecerdasan
              Buatan, mendapat apresiasi dosen atas penyelesaian lebih awal</p>
          </div>
         </div>
      </div>

      <!-- Pendidikan Non-Formal -->
  <div>
    <h3 class="text-xl font-semibold text-gray-800 mb-6">Pendidikan Non‑Formal</h3>
    <div class="relative border-l-4 border-pink-500 pl-8 space-y-8">

      <!-- FYEP -->
      <div class="relative md:text-justify">
        <span class="absolute -left-5 top-0 w-4 h-4 bg-pink-500 rounded-full"></span>
        <p class="text-gray-700 font-semibold">
          FYEP Web Programming – Kitakerja.id (Jan 2026 - Mar 2026)
        </p>
        <p class="text-gray-400 text-sm">
           Membuat website landing page ecommerce Sport menggunakan Next.js selama 1 bulan.
          Menerapkan fitur order, transaction
          <span v-if="showMoreFYEP">
          Membuat website landing page ecommerce Sport menggunakan Next.js selama 1 bulan.
          Menerapkan fitur order, transaction, transfer bank dan admin untuk mengonfirmasi setiap orderan masuk. 
          Teknologi yang digunakan dalam membangun website landing page ecommerce Sport yaitu untuk next.js,
          express js, MongoDB untuk database.
          Deploy website menggunakan Vercel app untuk deploy frontend dan railway untuk deploy backend.
          </span>
        </p>
        <button @click="showMoreFYEP = !showMoreFYEP"
                class="text-pink-500 text-sm font-semibold mt-1 hover:underline">
          {{ showMoreFYEP ? 'Read Less' : 'Read More' }}
        </button>
      </div>

      <!-- ID CAMP -->
      <div class="relative">
        <span class="absolute -left-5 top-0 w-4 h-4 bg-pink-500 rounded-full"></span>
        <p class="text-gray-700 font-semibold">
          ID CAMP 2024 – Indosat Ooredoo Online (Jul 2024 - Dec 2024)
        </p>
        <p class="text-gray-400 text-sm">
           Belajar dasar dari HTML, CSS dan JavaScript. sebagai 3 pilar pembentuk website. 
            Menguasai JavaScript sebagai bahasa pemrograman populer
          <span v-if="showMoreIDCAMP">
           Belajar dasar dari HTML, CSS dan JavaScript. sebagai 3 pilar pembentuk website. 
            Menguasai JavaScript sebagai bahasa pemrograman populer, mulai dari fundamental, sintaks dan fitur ES6,
            hingga konsep automation test menggunakan framework ternama. 
            Mengambil materi Bootcamp untuk React Developer dengan materi: dasar pemrograman website, JavaScript,
            front-end web, dan pembuatan aplikasi React.js.          </span>
        </p>
        <button @click="showMoreIDCAMP = !showMoreIDCAMP"
                class="text-pink-500 text-sm font-semibold mt-1 hover:underline">
          {{ showMoreIDCAMP ? 'Read Less' : 'Read More' }}
        </button>
      </div>

      <!-- Google IT Support -->
      <div class="relative">
        <span class="absolute -left-5 top-0 w-4 h-4 bg-pink-500 rounded-full"></span>
        <p class="text-gray-700 font-semibold">
          IT Support Specialist Google – Work In Tech Jatim (Jul 2022 - Dec 2022)
        </p>
        <p class="text-gray-400 text-sm">
            Menyelesaikan sertifikasi kursus, termasuk Jaringan Komputer, Administrasi Sistem, Sistem Operasi,
            Dukungan Teknis, dan Keamanan IT. 
          <span v-if="showMoreGoogle">
            Menyelesaikan sertifikasi kursus, termasuk Jaringan Komputer, Administrasi Sistem, Sistem Operasi,
            Dukungan Teknis, dan Keamanan IT. 
            Menyelesaikan bootcamp IT SUPPORT selama kurang lebih 6 bulan sebelum batas yang ditentukan. 
            Memberikan pengalaman untuk mempelajari studi kasus yang sering terjadi saat menjadi IT SUPPORT. 
          </span>
        </p>
        <button @click="showMoreGoogle = !showMoreGoogle"
                class="text-pink-500 text-sm font-semibold mt-1 hover:underline">
          {{ showMoreGoogle ? 'Read Less' : 'Read More' }}
        </button>
      </div>

    </div>
  </div>
  </div>
  </div>


    </div>
  </section>
</template>
