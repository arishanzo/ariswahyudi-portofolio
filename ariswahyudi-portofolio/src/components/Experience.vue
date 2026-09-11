<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const items = [
  {
    period: 'Desember 2022 - Present',
    role: 'Founder Developer Kilat',
    company: 'Devklit Tech',
    num: '01',
    desc: 'Initiated projects based on client briefs using Waterfall methodology and CI/CD practices. Developed e-commerce apps integrated with Midtrans payment gateway. Used React.js, Vue.js, Laravel, CodeIgniter, and Express.js.',
  },
  {
    period: 'April 2026 - September 2026',
    role: 'Fullstack Developer',
    company: 'PT. Eintio Academic & Technology',
    num: '02',
    desc: 'Developed the company landing page using Next.js focused on performance and UX. Delivered web solutions resulting in 25% increase in project efficiency. Created technical proposals, workflows, and project documentation.',
  },
  {
    period: 'Februari 2024 - Mei 2024',
    role: 'Internship Web Developer',
    company: 'CV. Caraka Abadi',
    num: '03',
    desc: 'Built an Inventory Management app to digitize stock management, incoming/outgoing goods, and profit-loss calculations. Developed UI using PHP, JavaScript, AJAX, CSS, and CodeIgniter.',
  },
  {
    period: 'Desember 2021 - April 2022',
    role: 'Staff IT',
    company: 'Silmi Fashion',
    num: '04',
    desc: 'Built a Payroll Management app automating salary calculations with ~99% accuracy. Provided IT support for hardware, network, and operational issues. Coordinated with HR and management teams.',
  },
]

const sectionRef = ref<HTMLElement | null>(null)
const started    = ref(false)
let obs: IntersectionObserver | null = null

onMounted(() => {
  obs = new IntersectionObserver(([e]) => {
    if (e.isIntersecting) { started.value = true; obs?.disconnect() }
  }, { threshold: 0.1 })
  if (sectionRef.value) obs.observe(sectionRef.value)
})
onUnmounted(() => obs?.disconnect())
</script>

<template>
  <section id="experience" ref="sectionRef" class="py-10 md:py-20">
    <div class="max-w-7xl mx-auto px-6">

      <!-- Heading -->
      <div class="mb-8">
        <span class="text-sm font-semibold uppercase tracking-widest text-orange-500">Experience</span>
        <h2 class="text-3xl md:text-4xl font-bold mt-2">
          My <span class="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">Career Journey</span>
        </h2>
        <p class="text-gray-500 mt-3 max-w-lg text-sm leading-relaxed">
          Every role has been a milestone in my growth as a developer.
        </p>
      </div>

      <!-- ── DESKTOP ─────────────────────────────────────────────── -->
      <div class="relative hidden md:block">

        <!--
          Row height = 240px  →  total 4 × 240 = 960px
          Node kiri  x=40,  kanan x=960
          Connector turun di y = row*240+120 (tengah row)
          Horizontal bridge di y = row*240+240 (bawah row)

          Path:
          01 center (40 , 120)
             turun ke y=240, lalu H960, lalu naik ke y=360 → 02 center (960,360)
             turun ke y=480, lalu H40,  lalu naik ke y=600 → 03 center (40 ,600)
             turun ke y=720, lalu H960, lalu naik ke y=840 → 04 center (960,840)
        -->
        <svg
          class="pointer-events-none absolute inset-0 w-full z-0"
          style="height:960px"
          viewBox="0 0 1000 960"
          preserveAspectRatio="none"
          fill="none"
          overflow="visible"
        >
          <defs>
            <filter id="blur"><feGaussianBlur stdDeviation="5"/></filter>
            <filter id="glow" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="4" result="b"/>
              <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>

          <!-- Track abu — rel background -->
          <path
            d="M40,120 V240 H960 V360 V480 H40 V600 V720 H960 V840"
            stroke="#e2e8f0"
            stroke-width="2"
            stroke-linecap="square"
            stroke-linejoin="miter"
          />

          <!-- Glow lembut di belakang rel -->
          <path
            d="M40,120 V240 H960 V360 V480 H40 V600 V720 H960 V840"
            stroke="#f97316"
            stroke-width="8"
            stroke-linecap="square"
            stroke-linejoin="miter"
            opacity="0.06"
            filter="url(#blur)"
          />

          <!-- Cahaya berjalan -->
          <path
            d="M40,120 V240 H960 V360 V480 H40 V600 V720 H960 V840"
            pathLength="1"
            stroke="#f97316"
            stroke-width="3"
            stroke-linecap="square"
            stroke-linejoin="miter"
            class="circuit-flow"
            :class="started ? 'flow-run' : ''"
            filter="url(#glow)"
          />

          <!-- Dot junction di setiap sudut belok -->
          <circle cx="40"  cy="240" r="4" fill="#f97316" opacity="0.5"/>
          <circle cx="960" cy="240" r="4" fill="#f97316" opacity="0.5"/>
          <circle cx="960" cy="480" r="4" fill="#ec4899" opacity="0.5"/>
          <circle cx="40"  cy="480" r="4" fill="#ec4899" opacity="0.5"/>
          <circle cx="40"  cy="720" r="4" fill="#8b5cf6" opacity="0.5"/>
          <circle cx="960" cy="720" r="4" fill="#8b5cf6" opacity="0.5"/>

          <!-- Tick marks kecil di sepanjang horizontal (circuit detail) -->
          <g stroke="#cbd5e1" stroke-width="1" opacity="0.5">
            <template v-for="x in [200,400,600,800]" :key="'t1'+x">
              <line :x1="x" y1="236" :x2="x" y2="244"/>
            </template>
            <template v-for="x in [200,400,600,800]" :key="'t2'+x">
              <line :x1="x" y1="476" :x2="x" y2="484"/>
            </template>
            <template v-for="x in [200,400,600,800]" :key="'t3'+x">
              <line :x1="x" y1="716" :x2="x" y2="724"/>
            </template>
          </g>
        </svg>

        <!-- Cards + Nodes -->
        <div class="relative z-10" style="height:960px; padding-bottom:40px">

          <template v-for="(item, i) in items" :key="i">
            <!-- Row 240px, node di tengah vertikal row (top = i*240 + 96) -->
            <div
              class="absolute w-full"
              :style="{ top: `${i * 240}px`, height: '400px' }"
            >
              <!-- Node -->
              <div
                class="absolute top-1/2 -translate-y-1/2 z-20 transition-all duration-500"
                :class="[
                  i % 2 === 0 ? 'left-0' : 'right-0',
                  started ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                ]"
                :style="{ transitionDelay: `${i * 0.35 + 0.15}s` }"
              >
                <div class="node-wrap">
                  <div class="node-ring"></div>
                  <div class="node-core">{{ item.num }}</div>
                </div>
              </div>

              <!-- Card — lebar 440px, jarak dari node 76px -->
              <div
                class="absolute top-1/2 -translate-y-1/2 w-[440px] transition-all duration-[600ms]"
                :class="[
                  i % 2 === 0 ? 'left-[76px]' : 'right-[76px]',
                  started ? 'opacity-100 translate-x-0' : i % 2 === 0 ? 'opacity-0 -translate-x-10' : 'opacity-0 translate-x-10'
                ]"
                :style="{ transitionDelay: `${i * 0.35 + 0.3}s` }"
              >
                <article class="bg-white/85 backdrop-blur-sm rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-lg hover:border-orange-200 hover:-translate-y-0.5 transition-all duration-300">
                  <div class="flex items-center gap-2 mb-3">
                    <span class="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                    <span class="text-xs font-semibold uppercase tracking-widest text-orange-500">{{ item.period }}</span>
                  </div>
                  <h3 class="text-lg font-bold text-gray-900 mb-0.5">{{ item.role }}</h3>
                  <p class="text-pink-500 font-medium text-sm mb-3">{{ item.company }}</p>
                  <p class="text-gray-400 text-sm leading-relaxed">{{ item.desc }}</p>
                </article>
              </div>

            </div>
          </template>

        </div>
      </div>

      <!-- ── MOBILE ──────────────────────────────────────────────── -->
      <div class="relative md:hidden">

        <!-- Rel kiri -->
        <div class="absolute left-5 top-0 bottom-0 w-px bg-gray-200"></div>
        <!-- Animasi rel -->
        <div
          class="absolute left-5 top-0 w-px bg-gradient-to-b from-orange-500 via-pink-500 to-violet-500 transition-all duration-[2s] ease-out"
          :style="{ height: started ? '100%' : '0%' }"
        ></div>

        <div class="space-y-8">
          <div
            v-for="(item, i) in items"
            :key="i"
            class="relative flex gap-5 transition-all duration-500"
            :class="started ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'"
            :style="{ transitionDelay: `${i * 0.25 + 0.3}s` }"
          >
            <!-- Node mobile -->
            <div class="relative z-10 shrink-0 flex items-start pt-1">
              <div class="node-wrap-sm">
                <div class="node-core-sm">{{ item.num }}</div>
              </div>
            </div>

            <!-- Card mobile -->
            <article class="flex-1 bg-white/85 backdrop-blur-sm rounded-xl border border-gray-100 p-5 shadow-sm">
              <div class="flex items-center gap-2 mb-2">
                <span class="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0"></span>
                <span class="text-xs font-semibold uppercase tracking-widest text-orange-500">{{ item.period }}</span>
              </div>
              <h3 class="text-base font-bold text-gray-900 mb-0.5">{{ item.role }}</h3>
              <p class="text-pink-500 font-medium text-sm mb-3">{{ item.company }}</p>
              <p class="text-gray-400 text-sm leading-relaxed">{{ item.desc }}</p>
            </article>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* ── Node desktop ─────────────────────────────── */
.node-wrap {
  position: relative;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.node-ring {
  position: absolute;
  inset: 0;
  border-radius: 9999px;
  border: 1.5px solid #f97316;
  opacity: 0.35;
  animation: ringPulse 2.4s ease-out infinite;
}
.node-core {
  position: relative;
  z-index: 1;
  width: 40px;
  height: 40px;
  border-radius: 9999px;
  background: #fff;
  border: 2px solid #f97316;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 700;
  color: #f97316;
  box-shadow: 0 0 12px rgba(249,115,22,0.2);
}

/* ── Node mobile ──────────────────────────────── */
.node-wrap-sm {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.node-core-sm {
  width: 32px;
  height: 32px;
  border-radius: 9999px;
  background: #fff;
  border: 2px solid #f97316;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 700;
  color: #f97316;
  box-shadow: 0 0 8px rgba(249,115,22,0.15);
}

/* ── Ring pulse ───────────────────────────────── */
@keyframes ringPulse {
  0%   { transform: scale(1);   opacity: 0.35; }
  70%  { transform: scale(1.7); opacity: 0; }
  100% { transform: scale(1.7); opacity: 0; }
}

/* ── Cahaya berjalan di circuit ───────────────── */
.circuit-flow {
  stroke-dasharray: 0.06 0.94;
  stroke-dashoffset: 1;
}
.flow-run {
  animation: flowMove 5s linear infinite;
}
@keyframes flowMove {
  from { stroke-dashoffset: 1; }
  to   { stroke-dashoffset: 0; }
}

/* ── Reduced motion ───────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .flow-run       { animation: none; stroke-dashoffset: 0; }
  .node-ring      { animation: none; }
}
</style>
