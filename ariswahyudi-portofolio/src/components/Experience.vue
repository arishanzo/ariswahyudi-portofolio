<script setup lang="ts">
const items = [
  {
    period: '2023 - Sekarang',
    role: 'Full Stack Developer',
    company: 'Tech Startup',
    desc: 'Mengembangkan aplikasi web full-stack menggunakan Vue.js dan Node.js. Memimpin pengembangan fitur baru dan meningkatkan performa aplikasi hingga 40%.',
  },
  {
    period: '2021 - 2023',
    role: 'Frontend Developer',
    company: 'Digital Agency',
    desc: 'Membangun antarmuka pengguna yang responsif dan modern untuk berbagai klien. Kolaborasi dengan tim desain untuk menghasilkan UI yang menarik.',
  },
  {
    period: '2020 - 2021',
    role: 'Junior Web Developer',
    company: 'Freelance',
    desc: 'Mengerjakan berbagai proyek website untuk UMKM dan perusahaan kecil. Mengasah keterampilan dalam HTML, CSS, dan JavaScript.',
  },
  {
    period: '2018 - 2020',
    role: 'Sarjana Teknik Informatika',
    company: 'Universitas',
    desc: 'Mendapatkan gelar sarjana di bidang Teknik Informatika dengan fokus pada pengembangan web dan basis data.',
  },
]
</script>

<template>
  <section id="experience" class="experience">
    <div class="container">
      <div class="exp-head">
        <span class="section-tag">Pengalaman</span>
        <h2 class="section-title">
          Perjalanan <span class="gradient-text">Karir Saya</span>
        </h2>
        <p class="section-sub">
          Dari awal karir hingga sekarang, setiap langkah adalah bagian dari
          perjalanan yang terus berkembang.
        </p>
      </div>

      <div class="timeline">
        <div
          v-for="(item, i) in items"
          :key="i"
          class="timeline-item reveal"
        >
          <div class="timeline-dot"></div>
          <div class="timeline-card">
            <span class="timeline-period">{{ item.period }}</span>
            <h3 class="timeline-role">{{ item.role }}</h3>
            <span class="timeline-company">{{ item.company }}</span>
            <p class="timeline-desc">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience {
  background: var(--bg-2);
}
.exp-head {
  text-align: center;
  margin-bottom: 56px;
}
.exp-head .section-tag,
.exp-head .section-sub {
  display: flex;
  justify-content: center;
}
.exp-head .section-sub {
  margin-left: auto;
  margin-right: auto;
}
.timeline {
  position: relative;
  max-width: 760px;
  margin: 0 auto;
}
.timeline::before {
  content: '';
  position: absolute;
  left: 12px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(var(--primary), var(--primary-2));
}
.timeline-item {
  position: relative;
  padding-left: 48px;
  padding-bottom: 40px;
}
.timeline-item:last-child {
  padding-bottom: 0;
}
.timeline-dot {
  position: absolute;
  left: 6px;
  top: 6px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--gradient);
  box-shadow: 0 0 0 5px rgba(124, 92, 255, 0.2);
}
.timeline-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 24px;
  transition: transform 0.3s, border-color 0.3s;
}
.timeline-card:hover {
  transform: translateX(6px);
  border-color: var(--primary);
}
.timeline-period {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--primary-2);
  background: var(--surface-2);
  padding: 4px 12px;
  border-radius: 99px;
  margin-bottom: 12px;
}
.timeline-role {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 4px;
}
.timeline-company {
  color: var(--primary);
  font-weight: 500;
  font-size: 0.9rem;
}
.timeline-desc {
  color: var(--text);
  margin-top: 12px;
  font-size: 0.95rem;
}

@media (max-width: 600px) {
  .timeline-item {
    padding-left: 40px;
  }
  .timeline-card {
    padding: 18px;
  }
}
</style>
