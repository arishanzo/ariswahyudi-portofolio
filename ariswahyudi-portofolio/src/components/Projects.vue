
<script setup lang="ts">


import docsapp from '../assets/docsapp.png'
import belonjoapp from '../assets/belonjoapp.png'
import webcompany from '../assets/webcompany.jpg'
import goopintar from '../assets/goopintar.jpg'
import myca from '../assets/myca.jpg'
import silmi from '../assets/silmi.jpg'
import logistik from '../assets/logistik.jpg'
import sporton from '../assets/sporton.jpg'


import { ref, computed} from 'vue'


const projects = [
  {
    title: 'Aplikasi E-Dokumen',
    category: 'Full Stack',
    desc: 'Platform e-dokumen dengan fitur upload, download, dan manajemen dokumen, dilengkapi notifikasi otomatis untuk mempermudah alur kerja.',
    tags: [
      'data:image/png;base64,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',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtej9AlTUnNffaTZt0PB7aLL_B5LSGFPgx7XhMY9TDcA&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWcH0IulCXWR2cMYC7nnKIsb3buCxDmxaU4YJ9fDoYgg&s=10',
      'https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHM0OYfiFeMI2p9MWie0CvL99U4GA1gf6_kayTt_kBblFwHwo8BW8JXlqfnYxKPmmBfijdF281DL1PeDgEJEoHA4Vn7X7l6f7bNsRc3vv5Kr6r5Yy4hO7WcTZ6mpAEjMw.nIR_3I36XXiM.jcofFxpPQ-&format=source',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGoRVCediUjrL1lHlyry5gqBbHI9LvXOXkV7QQS8ucRQ&s=10'
    ],
    img: docsapp,
  },
  {
    title: 'Landing Page Pallet PT. Indonesia Pallet Logistic',
    category: 'Frontend',
    desc: 'Landing page perusahaan pallet dengan desain responsif dan animasi interaktif untuk meningkatkan pengalaman pengguna.',
    tags: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5agxXUSsI3J6nJYssKdxaZEO5xpTCsh4P6U4qKGXH2w&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtej9AlTUnNffaTZt0PB7aLL_B5LSGFPgx7XhMY9TDcA&s=10'
    ],
    img: logistik,
  },
  {
    title: 'Webcompany PT. Eintio Academic & Technology',
    category: 'Frontend',
    desc: 'Website perusahaan modern dengan desain responsif dan animasi interaktif untuk meningkatkan pengalaman pengguna.',
    tags: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR24UV5-wJhPNSF3IgnX2cGbYkiElk3Vzav3OT0Ez5dRA&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWcH0IulCXWR2cMYC7nnKIsb3buCxDmxaU4YJ9fDoYgg&s=10'
    ],
    img: webcompany,
  },
  {
    title: 'Goopintar Les Private',
    category: 'UI/UX',
    desc: 'Desain UI/UX untuk platform les privat online dengan fokus pada pengalaman pengguna yang intuitif dan menarik.',
    tags: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5agxXUSsI3J6nJYssKdxaZEO5xpTCsh4P6U4qKGXH2w&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtej9AlTUnNffaTZt0PB7aLL_B5LSGFPgx7XhMY9TDcA&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVPQaKN0OpWiL4ISrdz009ZCntJ6UtUuAD6joLmGiUsw&s=10'
    ],
    img: goopintar,
  },
  {
    title: 'Myca Les Renang',
    category: 'Full Stack',
    desc: 'Website pemesanan les renang online dengan fitur manajemen jadwal, pembayaran, dan notifikasi otomatis untuk meningkatkan efisiensi operasional.',
    tags: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR24UV5-wJhPNSF3IgnX2cGbYkiElk3Vzav3OT0Ez5dRA&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWcH0IulCXWR2cMYC7nnKIsb3buCxDmxaU4YJ9fDoYgg&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVPQaKN0OpWiL4ISrdz009ZCntJ6UtUuAD6joLmGiUsw&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ2s_kkfY34IHhvPizpBbjhbMXcpmumq9fWe4OxgDvDA&s=10'
    ],
    img: myca,
  },
  {
    title: 'Aplikasi Payroll Silmi Fashion',
    category: 'Backend',
    desc: 'Aplikasi untuk mengotomatisasi perhitungan gaji karyawan berdasarkan absensi, lembur, cuti, dan komponen penggajian lainnya, meningkatkan akurasi hingga 99%.',
    tags: [
      'https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVPQaKN0OpWiL4ISrdz009ZCntJ6UtUuAD6joLmGiUsw&s=10'
    ],
    img: silmi,
  },
  {
    title: 'E-Commerce Sport ON',
    category: 'Backend',
    desc: 'Platform e-commerce untuk menjual berbagai macam alat olahraga dengan backend yang aman, scalable, serta mendukung integrasi pembayaran dan manajemen produk.',
    tags: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR24UV5-wJhPNSF3IgnX2cGbYkiElk3Vzav3OT0Ez5dRA&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWcH0IulCXWR2cMYC7nnKIsb3buCxDmxaU4YJ9fDoYgg&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEfdD8p_Gz70ykqNtURPVYY8im767hadDZLgrqvRIT9w&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ2s_kkfY34IHhvPizpBbjhbMXcpmumq9fWe4OxgDvDA&s=10'
    ],
    img: sporton,
  },
  {
    title: 'Aplikasi Belonjo',
    category: 'Full Stack',
    desc: 'Aplikasi e-commerce untuk marketplace lokal dengan fitur pencarian, keranjang belanja, dan pembayaran online.',
    tags: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR24UV5-wJhPNSF3IgnX2cGbYkiElk3Vzav3OT0Ez5dRA&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWcH0IulCXWR2cMYC7nnKIsb3buCxDmxaU4YJ9fDoYgg&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEfdD8p_Gz70ykqNtURPVYY8im767hadDZLgrqvRIT9w&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ2s_kkfY34IHhvPizpBbjhbMXcpmumq9fWe4OxgDvDA&s=10'
    ],
    img: belonjoapp,
  },
];


const categories = ['All', 'Landing Page', 'Website App', 'Backend', 'UI/UX']
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
            <img
                  v-for="tag in project.tags"
                  :key="tag"
                  :src="`${tag}`" 
                  :alt="tag"
                  class="w-8 h-8 object-contain rounded-md border border-gray-200 bg-white p-1"
                />
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