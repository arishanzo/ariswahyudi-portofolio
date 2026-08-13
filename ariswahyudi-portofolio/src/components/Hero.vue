<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import heroImg from '../assets/image.png'
import { Icon } from '@iconify/vue'

const roles = ['Full Stack Developer', 'Software Engineer', 'IT Consultant']
const typed = ref('')
const roleIndex = ref(0)
const charIndex = ref(0)
const deleting = ref(false)

let timer: number | undefined

const typeLoop = () => {
  const current = roles[roleIndex.value]
  if (!deleting.value) {
    typed.value = current.slice(0, ++charIndex.value)
    if (charIndex.value === current.length) {
      deleting.value = true
      timer = window.setTimeout(typeLoop, 1800)
      return
    }
    timer = window.setTimeout(typeLoop, 90)
  } else {
    typed.value = current.slice(0, --charIndex.value)
    if (charIndex.value === 0) {
      deleting.value = false
      roleIndex.value = (roleIndex.value + 1) % roles.length
    }
    timer = window.setTimeout(typeLoop, 50)
  }
}

onMounted(() => typeLoop())
onUnmounted(() => window.clearTimeout(timer))
</script><template>
  <section id="home" class="relative bg-white text-gray-900 py-16 md:py-20 ">
    <div class="container mx-auto flex flex-col items-center text-center">

      <!-- Hero Image -->
      <div class="relative">
        <img :src="heroImg" alt="Aris Wahyudi" 
             class="w-38 h-38 md:w-48 md:h-48 rounded-full border-4 border-gray-200 shadow-lg" />
      </div>

      <!-- Title -->
      <h1 class="text-3xl md:text-5xl font-bold mb-4 md:mt-12 mt-4">
        Hai, saya 
        <span class="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">
          Aris Wahyudi
        </span>
      </h1>

      <!-- Typed text -->
      <p class="text-md md:text-xl text-gray-600 mb-6">
        <span class="font-medium">Saya seorang </span>
        <span class="text-orange-500 font-semibold">{{ typed }}</span>
        <span class="animate-pulse">|</span>
      </p>

      <!-- Description -->
      <p class="md:max-w-2xl max-w-sm p-4 mx-auto text-gray-500 mb-8 leading-relaxed">
        Saya membangun aplikasi web modern, cepat, dan responsif dengan pengalaman yang luar biasa. 
        Fokus pada performa, aksesibilitas, dan desain yang bersih.
      </p>

      <!-- Actions -->
      <div class="flex gap-4 mb-12">
        <a href="#projects" 
           class="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold text-white transition">
          Lihat Proyek
        </a>

      <a href="CV_ARIS WAHYUDI.pdf" 
   target="_blank"
   class="inline-flex items-center gap-2 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition">
    Review CV
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" 
            stroke="currentColor" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round"/>
    </svg>
</a>

      </div>

      <!-- Social Media Icons -->
     <div class="flex gap-6  text-2xl">
    <a href="https://github.com/arishanzo" target="_blank" class="text-gray-500 hover:text-black transition">
      <Icon icon="mdi:github" />
    </a>
    <a href="https://x.com/username" target="_blank" class="text-gray-500 hover:text-black transition">
      <Icon icon="mdi:twitter" /> <!-- X/Twitter -->
    </a>
    <a href="https://instagram.com/aris.wahyudi86" target="_blank" class="text-gray-500 hover:text-pink-500 transition">
      <Icon icon="mdi:instagram" />
    </a>
    <a href="https://www.linkedin.com/in/aris-wahyudi-09a729165/" target="_blank" class="text-gray-500 hover:text-blue-600 transition">
      <Icon icon="mdi:linkedin" />
    </a>
    <a href="https://www.tiktok.com/@ariswahyudi.86" target="_blank" class="text-gray-500 hover:text-gray-800 transition">
      <Icon icon="ic:baseline-tiktok" />
    </a>
  </div>

    </div>
  </section>
</template>


