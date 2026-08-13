<script setup lang="ts">
import { ref } from 'vue'

type Category = 'Frontend' | 'Backend' | 'DevOps & Tools'

type Skill = {
  name: string
  icon: string
  level: number
}

const categories: { name: Category; icon: string }[] = [
  { name: 'Frontend', icon: '🎨' },
  { name: 'Backend', icon: '⚙️' },
  { name: 'DevOps & Tools', icon: '☁️' }
]


const skillsByCategory: Record<Category, Skill[]> = {
  Frontend: [
    { name: 'Vue.js', icon: 'data:image/png;base64,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', level: 80 },
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
</script>

<template>
  <section id="skills" class="skills mb-10 md:py-20 ">
    <div class="container max-w-6xl mx-auto px-6 md:px-0 flex flex-col md:flex-row gap-12">
      
      <!-- Sidebar kategori -->
      <aside class="md:w-1/4 border-r border-gray-200 pr-6">
        <h3 class="text-lg font-semibold mb-4">Kategori</h3>
        <ul class="space-y-2">
          <li v-for="cat in categories" :key="cat.name">
            <button
              @click="activeCategory = cat.name"
              class="w-full text-left px-3 py-2 rounded-lg transition"
              :class="activeCategory === cat.name 
                ? 'bg-orange-500 text-white font-semibold' 
                : 'hover:bg-gray-100 text-gray-700'"
            >
              <span class="mr-2">{{ cat.icon }}</span>{{ cat.name }}
            </button>
          </li>
        </ul>
      </aside>

      <!-- Konten skill -->
      <div class="md:w-3/4">
        <h2 class="text-2xl font-bold mb-6">{{ activeCategory }}</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div
            v-for="skill in skillsByCategory[activeCategory]"
            :key="skill.name"
            class="skill-card shadow-md rounded-lg p-4 transition hover:scale-105"
          >
           <div class="skill-top flex items-center gap-2 mb-2">
            <img :src="skill.icon" :alt="skill.name" class="w-6 h-6 animate-bounce" />
            <span class="skill-name font-semibold text-gray-800">{{ skill.name }}</span>
          </div>
            <div class="skill-bar h-2 bg-gray-200 rounded">
              <div class="skill-fill h-2 bg-gradient-to-r from-orange-500 to-pink-600 rounded"
                   :style="{ width: skill.level + '%' }"></div>
            </div>
            <span class="skill-level text-sm text-gray-600 mt-2 block">{{ skill.level }}%</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
