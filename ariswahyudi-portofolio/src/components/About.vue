<script setup lang="ts">
import { ref, onMounted } from 'vue'

const contributions = ref<any>(null)
const showMoreFYEP = ref(false)
const showMoreIDCAMP = ref(false)
const showMoreGoogle = ref(false)

const highlights = [
  'Building scalable full-stack web applications',
  'Experience with Vue.js, Next.js, TypeScript, Node.js, Laravel, etc.',
  'Modern and responsive UI/UX design',
  'Application performance optimization and SEO',
]

function getColor(count: number) {
  if (count === 0) return '#f3f4f6'
  if (count < 3) return '#fb923c'
  if (count < 6) return '#f97316'
  if (count < 10) return '#ec4899'
  return '#db2777'
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
    headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ query })
  })
  const json = await res.json()
  contributions.value = json.data.user.contributionsCollection.contributionCalendar
})
</script>

<template>
 

 <section id="github" class="md:mb-28 mb-16">
  <div class="max-w-7xl mx-auto px-6 text-center">
    <div class="inline-block bg-white/70 backdrop-blur-sm rounded-2xl px-4 py-4 shadow-sm max-w-full">
      <h2 class="text-xl sm:text-2xl md:text-3xl font-bold mb-2">My GitHub Activity</h2>
      <p class="text-sm sm:text-base text-gray-600 mb-8">
        {{ contributions?.totalContributions }} contributions in the last year
      </p>

      <!-- Scroll hint untuk HP -->
      <div class="relative">
        <div class="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 sm:hidden">
          ➡️
        </div>
        <div class="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 sm:hidden">
          ⬅️
        </div>

        <!-- Grid scrollable -->
        <div class="overflow-x-auto snap-x snap-mandatory">
          <div class="grid grid-cols-53 gap-1 min-w-[700px] sm:min-w-[900px] md:min-w-[1100px] mx-auto">
            <template v-for="week in contributions?.weeks" :key="week">
              <template v-for="day in week.contributionDays" :key="day.date">
                <div
                  class="w-4 h-4 sm:w-3 sm:h-3 rounded-sm"
                  :style="{ backgroundColor: getColor(day.contributionCount) }"
                  :title="`${day.date}: ${day.contributionCount} contributions`"
                ></div>
              </template>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


  <section id="about" class="mb-18">
    <div class="max-w-7xl p-2 mx-auto flex flex-col md:flex-row items-center md:items-start gap-22 md:gap-42 px-6 md:px-12">

      <!-- Left -->
      <div class="md:w-1/2 text-center md:text-left">
        <div class="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
          <span class="uppercase tracking-wide text-orange-500 font-semibold">About Me</span>
          <h2 class="text-3xl md:text-4xl font-bold mt-2 mb-6">
            Short Profile
            <span class="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">My Journey</span>
          </h2>
          <p class="text-gray-600 leading-relaxed mb-6 text-justify">
            Graduate of Informatics Engineering with more than 3 years of experience in web development.
            Working as a Full Stack Developer, Web Developer, and IT Staff, I am used to building
            modern applications using Next.js, React.js, Express.js, PHP, and MySQL.
          </p>
          <ul class="space-y-3 mb-8">
            <li v-for="item in highlights" :key="item" class="flex text-start gap-2 text-gray-700">
              <span class="text-orange-500 font-bold">✓</span>{{ item }}
            </li>
          </ul>
          <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="https://wa.me/6288805317354"
               class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition shadow-md">
              Let's Collaborate
            </a>
            <a href="#experience"
               class="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition bg-white/50">
              View Experience
            </a>
          </div>
        </div>
      </div>

      <!-- Right -->
      <div class="md:w-1/2 md:text-left">
        <div class="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
          <h2 class="text-3xl md:text-4xl font-bold mb-3">
            <span class="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">Education</span>
          </h2>
          <div class="space-y-12">
            <div>
              <h3 class="text-xl font-semibold text-gray-800 mb-6">Formal Education</h3>
              <div class="relative border-l-4 border-orange-500 pl-8 space-y-8">
                <div class="relative">
                  <span class="absolute -left-5 top-0 w-4 h-4 bg-orange-500 rounded-full"></span>
                  <p class="text-gray-700 font-semibold">- Bachelor of Informatics Engineering – Universitas Islam Lamongan (2018–2022)</p>
                  <p class="text-gray-500 text-sm">- Built a web-based student ranking system using the SAW method for final project with 99% calculation accuracy.</p>
                  <p class="text-gray-500 text-sm">- Earned a Machine Learning certificate from Dicoding Indonesia as part of the Artificial Intelligence course, received lecturer appreciation for early completion.</p>
                </div>
              </div>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-gray-800 mb-6">Non‑Formal Education</h3>
              <div class="relative border-l-4 border-pink-500 pl-8 space-y-8">
                <div class="relative md:text-justify">
                  <span class="absolute -left-5 top-0 w-4 h-4 bg-pink-500 rounded-full"></span>
                  <p class="text-gray-700 font-semibold">FYEP Web Programming – Kitakerja.id (Jan 2026 - Mar 2026)</p>
                  <p class="text-gray-400 text-sm">
                    Built a sports ecommerce landing page using Next.js within 1 month. Implemented order and transaction features
                    <span v-if="showMoreFYEP"> with bank transfer and admin confirmation. Technologies: Next.js, Express.js, MongoDB. Deployed on Vercel & Railway.</span>
                  </p>
                  <button @click="showMoreFYEP = !showMoreFYEP" class="text-pink-500 text-sm font-semibold mt-1 hover:underline">
                    {{ showMoreFYEP ? 'Read Less' : 'Read More' }}
                  </button>
                </div>
                <div class="relative">
                  <span class="absolute -left-5 top-0 w-4 h-4 bg-pink-500 rounded-full"></span>
                  <p class="text-gray-700 font-semibold">ID CAMP 2024 – Indosat Ooredoo Online (Jul 2024 - Dec 2024)</p>
                  <p class="text-gray-400 text-sm">
                    Learned the basics of HTML, CSS and JavaScript as the 3 pillars of web development.
                    <span v-if="showMoreIDCAMP"> Mastered JavaScript fundamentals, ES6 features, and automation testing. Took Bootcamp for React Developer.</span>
                  </p>
                  <button @click="showMoreIDCAMP = !showMoreIDCAMP" class="text-pink-500 text-sm font-semibold mt-1 hover:underline">
                    {{ showMoreIDCAMP ? 'Read Less' : 'Read More' }}
                  </button>
                </div>
                <div class="relative">
                  <span class="absolute -left-5 top-0 w-4 h-4 bg-pink-500 rounded-full"></span>
                  <p class="text-gray-700 font-semibold">IT Support Specialist Google – Work In Tech Jatim (Jul 2022 - Dec 2022)</p>
                  <p class="text-gray-400 text-sm">
                    Completed certification courses including Computer Networking, System Administration, Operating Systems, Technical Support, and IT Security.
                    <span v-if="showMoreGoogle"> Finished IT SUPPORT bootcamp ~6 months ahead of schedule. Gained experience in common IT SUPPORT case studies.</span>
                  </p>
                  <button @click="showMoreGoogle = !showMoreGoogle" class="text-pink-500 text-sm font-semibold mt-1 hover:underline">
                    {{ showMoreGoogle ? 'Read Less' : 'Read More' }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
