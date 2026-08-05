<script setup lang="ts">
import heroImg from '../assets/hero.png'

const projects = [
  {
    title: 'Aplikasi E-commerce',
    category: 'Full Stack',
    desc: 'Platform e-commerce lengkap dengan keranjang, pembayaran, dan dashboard admin. Dibangun dengan Vue.js dan Node.js.',
    tags: ['Vue', 'Node.js', 'PostgreSQL'],
    img: heroImg,
  },
  {
    title: 'Dashboard Analitik',
    category: 'Frontend',
    desc: 'Dashboard analitik real-time dengan visualisasi data interaktif dan fitur export laporan.',
    tags: ['Vue', 'Chart.js', 'TypeScript'],
    img: heroImg,
  },
  {
    title: 'Landing Page Startup',
    category: 'UI/UX',
    desc: 'Landing page modern dengan animasi halus dan optimasi performa untuk konversi tinggi.',
    tags: ['Vue', 'CSS', 'Vite'],
    img: heroImg,
  },
  {
    title: 'Aplikasi Manajemen Tugas',
    category: 'Full Stack',
    desc: 'Aplikasi manajemen tugas kolaboratif dengan fitur real-time dan notifikasi.',
    tags: ['Vue', 'Firebase', 'Vuex'],
    img: heroImg,
  },
  {
    title: 'Sistem Reservasi',
    category: 'Backend',
    desc: 'Sistem reservasi online dengan API RESTful dan manajemen jadwal otomatis.',
    tags: ['Node.js', 'MongoDB', 'Express'],
    img: heroImg,
  },
  {
    title: 'Portofolio Interaktif',
    category: 'Frontend',
    desc: 'Website portofolio interaktif dengan animasi scroll dan desain modern yang responsif.',
    tags: ['Vue', 'TypeScript', 'Vite'],
    img: heroImg,
  },
]
</script>

<template>
  <section id="projects" class="projects">
    <div class="container">
      <div class="proj-head">
        <span class="section-tag">Proyek</span>
        <h2 class="section-title">
          Proyek <span class="gradient-text">Terpilih</span>
        </h2>
        <p class="section-sub">
          Beberapa proyek yang telah saya kerjakan. Setiap proyek adalah
          hasil dari dedikasi dan semangat untuk menciptakan yang terbaik.
        </p>
      </div>

      <div class="projects-grid">
        <div
          v-for="(project, i) in projects"
          :key="i"
          class="project-card reveal"
        >
          <div class="project-img">
            <img :src="project.img" :alt="project.title" />
            <span class="project-cat">{{ project.category }}</span>
          </div>
          <div class="project-body">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-desc">{{ project.desc }}</p>
            <div class="project-tags">
              <span v-for="tag in project.tags" :key="tag" class="tag">
                {{ tag }}
              </span>
            </div>
            <a href="#" class="project-link" @click.prevent>
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

<style scoped>
.proj-head {
  text-align: center;
  margin-bottom: 48px;
}
.proj-head .section-tag,
.proj-head .section-sub {
  display: flex;
  justify-content: center;
}
.proj-head .section-sub {
  margin-left: auto;
  margin-right: auto;
}
.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.project-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s;
}
.project-card:hover {
  transform: translateY(-8px);
  border-color: var(--primary);
  box-shadow: var(--shadow);
}
.project-img {
  position: relative;
  overflow: hidden;
  aspect-ratio: 16/10;
}
.project-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}
.project-card:hover .project-img img {
  transform: scale(1.05);
}
.project-cat {
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 5px 12px;
background: rgba(124, 92, 255, 0.9);
  backdrop-filter: blur(8px);
  color: #fff;
  border-radius: 99px;
  font-size: 0.75rem;
  font-weight: 600;
}
.project-body {
  padding: 22px;
}
.project-title {
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 10px;
}
.project-desc {
  color: var(--text);
  font-size: 0.9rem;
  margin-bottom: 16px;
}
.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 18px;
}
.tag {
  padding: 4px 12px;
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: 99px;
  font-size: 0.75rem;
  color: var(--primary-2);
}
.project-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--primary-2);
  font-weight: 600;
  font-size: 0.9rem;
  transition: gap 0.3s;
}
.project-link:hover {
  gap: 12px;
}

@media (max-width: 1000px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 650px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
