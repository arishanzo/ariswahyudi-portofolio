<script setup lang="ts">
import { ref } from 'vue'

const form = ref({ name: '', email: '', message: '' })
const sent = ref(false)

const submit = () => {
  if (form.value.name && form.value.email && form.value.message) {
    sent.value = true
    form.value = { name: '', email: '', message: '' }
    setTimeout(() => (sent.value = false), 4000)
  }
}

const socials = [
  {
    name: 'GitHub',
    href: 'https://github.com',
    icon: `
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.54 2.87 8.39 6.84 9.74.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.39-3.37-1.39-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1.01.07 1.54 1.07 1.54 1.07.9 1.58 2.35 1.12 2.93.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.15-4.56-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05a9.16 9.16 0 0 1 5-.01c1.91-1.33 2.74-1.05 2.74-1.05.56 1.41.21 2.46.11 2.72.64.72 1.03 1.63 1.03 2.75 0 3.94-2.35 4.81-4.58 5.07.36.32.68.95.68 1.91v2.83c0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"/>
      </svg>
    `
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: `
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.94 8.5a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2ZM5.55 9.72h2.78V19H5.55V9.72ZM10.08 9.72h2.67v1.27h.04c.37-.7 1.28-1.44 2.63-1.44 2.81 0 3.33 1.85 3.33 4.25V19h-2.78v-4.62c0-1.1-.02-2.52-1.54-2.52-1.55 0-1.79 1.2-1.79 2.44V19h-2.56V9.72Z"/>
      </svg>
    `
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    icon: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
        <rect x="3" y="3" width="18" height="18" rx="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
      </svg>
    `
  },
  {
    name: 'Email',
    href: 'mailto:ariswahyud86@email.com',
    icon: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2"/>
        <path d="m3 7 9 6 9-6"/>
      </svg>
    `
  }
]
</script>

<template>
  <section id="contact" class="py-16 md:py-24">
    <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">

      <!-- Info -->
      <div class="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-white/50">
        <span class="uppercase tracking-wide text-orange-500 font-semibold text-sm">Kontak</span>
        <h2 class="text-3xl md:text-4xl font-bold mt-2 mb-4">
          Mari <span class="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">Bekerja Sama</span>
        </h2>
        <p class="text-gray-600 mb-8 leading-relaxed">
          Punya proyek atau ide yang ingin diwujudkan? Jangan ragu untuk menghubungi saya.
          Saya selalu terbuka untuk kolaborasi dan kesempatan baru.
        </p>
        <div class="flex flex-wrap gap-3">
          <a v-for="social in socials" :key="social.name" :href="social.href"
             target="_blank" rel="noopener"
             class="inline-flex items-center gap-2 px-4 py-3 bg-white/80 border border-gray-200 rounded-xl text-gray-700 font-medium text-sm hover:border-orange-400 hover:text-orange-600 hover:-translate-y-1 transition-all shadow-sm">
         <span
  class="flex h-5 w-5 items-center justify-center"
  v-html="social.icon"
></span>
            <span>{{ social.name }}</span>
          </a>
        </div>
      </div>

      <!-- Form -->
      <div class="bg-white/75 backdrop-blur-sm border border-white/50 rounded-2xl p-8 shadow-lg">
        <form class="flex flex-col gap-5" @submit.prevent="submit">
          <div class="flex flex-col gap-2">
            <label class="text-gray-700 font-medium text-sm">Nama</label>
            <input v-model="form.name" type="text" placeholder="Nama lengkap Anda" required
                   class="px-4 py-3 bg-white/60 border border-gray-200 rounded-xl text-gray-800 text-sm focus:outline-none focus:border-orange-400 transition placeholder-gray-400" />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-gray-700 font-medium text-sm">Email</label>
            <input v-model="form.email" type="email" placeholder="email@contoh.com" required
                   class="px-4 py-3 bg-white/60 border border-gray-200 rounded-xl text-gray-800 text-sm focus:outline-none focus:border-orange-400 transition placeholder-gray-400" />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-gray-700 font-medium text-sm">Pesan</label>
            <textarea v-model="form.message" rows="5" placeholder="Tulis pesan Anda di sini..." required
                      class="px-4 py-3 bg-white/60 border border-gray-200 rounded-xl text-gray-800 text-sm focus:outline-none focus:border-orange-400 transition placeholder-gray-400 resize-vertical"></textarea>
          </div>
          <button type="submit"
                  class="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl transition shadow-md">
            Kirim Pesan
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <p v-if="sent" class="text-green-500 font-medium text-center">✓ Pesan berhasil dikirim!</p>
        </form>
      </div>

    </div>
  </section>
</template>
