<script setup lang="ts">
import { ref } from 'vue'

type Category = 'Frontend' | 'Backend' | 'DevOps & Tools'
type Skill = { name: string; icon: string; level: number }

const categories: { name: Category; icon: string; desc: string }[] = [
  { name: 'Frontend', icon: '🎨', desc: 'UI & User Experience' },
  { name: 'Backend', icon: '⚙️', desc: 'Server & API' },
  { name: 'DevOps & Tools', icon: '☁️', desc: 'Infrastructure & Workflow' }
]

const skillsByCategory: Record<Category, Skill[]> = {
 Frontend: [
   { name: 'Vue.js', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBuH6rON-4JZVXqcx-kpNGrOj0KhtXBTE0nxBg_60g2NUFr7sUQLew8fM&s=10', level: 85},
    { name: 'React.js', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5agxXUSsI3J6nJYssKdxaZEO5xpTCsh4P6U4qKGXH2w&s=10', level: 75 },
    { name: 'Next.js', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR24UV5-wJhPNSF3IgnX2cGbYkiElk3Vzav3OT0Ez5dRA&s=10', level: 70 },
    { name: 'TypeScript', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWcH0IulCXWR2cMYC7nnKIsb3buCxDmxaU4YJ9fDoYgg&s=10', level: 70 },
  ],
  Backend: [
    { name: 'Laravel', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtej9AlTUnNffaTZt0PB7aLL_B5LSGFPgx7XhMY9TDcA&s=10', level: 85 },
    { name: 'Node.js', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSpAC9VN2-OOwPxa5rFOgg7lJC4s0d_BcNsxpxixX8SQ&s=10', level: 75 },
    { name: 'Express.js', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ2s_kkfY34IHhvPizpBbjhbMXcpmumq9fWe4OxgDvDA&s=10', level: 68 },
    { name: 'CodeIgniter', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlarGCqZViIqtIuw59WoTsSpTsXcLyAWCupYpFq0SuZQ&s=10', level: 60 },
    { name: 'Golang', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXrK-WQPqcJjQuf220O0U9UytJ8Vp3vqIOIFm8mhb0nw&s=10', level: 60 },
  ],
  'DevOps & Tools': [
    { name: 'Docker', icon: 'https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHM0OYfiFeMI2p9MWie0CvL99U4GA1gf6_kayTt_kBblFwHwo8BW8JXlqfnYxKPmmBfijdF281DL1PeDgEJEoHA4Vn7X7l6f7bNsRc3vv5Kr6r5Yy4hO7WcTZ6mpAEjMw.nIR_3I36XXiM.jcofFxpPQ-&format=source', level: 65 },
    { name: 'Git', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0QMURSVODsiy7eSMaNP5I7kSc5v3qpr2US8MHjojOhQ&s', level: 85 },
  ]
}

const activeCategory = ref<Category>('Frontend')

function levelLabel(level: number) {
  if (level >= 80) return { text: 'Expert', color: 'text-emerald-600 bg-emerald-50' }
  if (level >= 65) return { text: 'Advanced', color: 'text-blue-600 bg-blue-50' }
  return { text: 'Intermediate', color: 'text-orange-600 bg-orange-50' }
}
</script>

<template>
  <section id="skills" class="md:py-20 py-2">
    <div class="container max-w-6xl mx-auto px-6 md:px-0">

      <!-- Header -->
      <div class="mb-12 text-center">
        <span class="inline-block text-sm font-semibold tracking-widest text-orange-500 uppercase mb-2">Tech Stack</span>
        <h2 class="text-4xl font-extrabold text-gray-900">Skills & <span class="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">Expertise</span></h2>
        <p class="mt-3 text-gray-500 max-w-md mx-auto text-sm">Teknologi yang saya gunakan untuk membangun produk digital yang scalable dan modern.</p>
      </div>

      <!-- Category Tabs -->
      <div class="flex justify-center gap-3 mb-10 flex-wrap">
        <button
          v-for="cat in categories"
          :key="cat.name"
          @click="activeCategory = cat.name"
          class="group flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border"
          :class="activeCategory === cat.name
            ? 'bg-orange-500 text-white border-orange-500 shadow-lg shadow-orange-200'
            : 'bg-white text-gray-600 border-gray-200 hover:border-orange-300 hover:text-orange-500'"
        >
          <span>{{ cat.icon }}</span>
          <span>{{ cat.name }}</span>
        </button>
      </div>

      <!-- Active category subtitle -->
      <p class="text-center text-xs text-gray-400 mb-8 tracking-wide uppercase">
        {{ categories.find(c => c.name === activeCategory)?.desc }}
      </p>

      <!-- Skills Grid -->
      <Transition name="fade" mode="out-in">
        <div :key="activeCategory" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          <div
            v-for="skill in skillsByCategory[activeCategory]"
            :key="skill.name"
            class="group relative bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center gap-3"
          >
            <!-- Icon -->
            <div class="w-14 h-14 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <img :src="skill.icon" :alt="skill.name" class="w-8 h-8 object-contain" />
            </div>

            <!-- Name -->
            <span class="font-semibold text-gray-800 text-sm">{{ skill.name }}</span>

            <!-- Progress bar -->
            <div class="w-full">
              <div class="flex justify-between text-xs text-gray-400 mb-1">
                <span>Proficiency</span>
                <span class="font-semibold text-gray-600">{{ skill.level }}%</span>
              </div>
              <div class="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  class="h-full bg-gradient-to-r from-orange-400 to-pink-500 rounded-full transition-all duration-700"
                  :style="{ width: skill.level + '%' }"
                />
              </div>
            </div>

            <!-- Level badge -->
            <span
              class="text-xs font-semibold px-2.5 py-0.5 rounded-full"
              :class="levelLabel(skill.level).color"
            >
              {{ levelLabel(skill.level).text }}
            </span>
          </div>
        </div>
      </Transition>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.25s ease, transform 0.25s ease; }
.fade-enter-from { opacity: 0; transform: translateY(10px); }
.fade-leave-to   { opacity: 0; transform: translateY(-6px); }
</style>
