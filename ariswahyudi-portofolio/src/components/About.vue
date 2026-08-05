<script setup lang="ts">
import heroImg from '../assets/hero.png'

const highlights = [
  'Membangun aplikasi web full-stack yang scalable',
  'Pengalaman dengan Vue.js, TypeScript, dan Node.js',
  'Desain UI/UX yang modern dan responsif',
  'Optimasi performa dan SEO',
]
</script>

<template>
  <section id="about" class="about">
    <div class="container about-inner">
      <div class="about-visual">
        <div class="about-img-wrap">
          <img :src="heroImg" alt="Tentang Aris Wahyudi" class="about-img" />
          <div class="exp-badge">
            <strong>3+</strong>
            <span>Tahun<br />Pengalaman</span>
          </div>
        </div>
      </div>

      <div class="about-content">
        <span class="section-tag">Tentang Saya</span>
        <h2 class="section-title">
          Mengubah ide menjadi <span class="gradient-text">produk digital</span>
        </h2>
        <p class="about-text">
          Saya adalah seorang Full Stack Developer yang berfokus pada
          pengembangan web modern. Saya senang memecahkan masalah kompleks dan
          membangun solusi yang berdampak nyata bagi pengguna.
        </p>
        <ul class="about-list">
          <li v-for="item in highlights" :key="item">
            <span class="check">✓</span>
            {{ item }}
          </li>
        </ul>
        <div class="about-actions">
          <a href="#contact" class="btn btn-primary">Mari Berkolaborasi</a>
          <a href="#experience" class="btn btn-outline">Lihat Pengalaman</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  background: var(--bg-2);
}
.about-inner {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 60px;
  align-items: center;
}
.about-visual {
  display: flex;
  justify-content: center;
}
.about-img-wrap {
  position: relative;
  width: 100%;
  max-width: 360px;
}
.about-img {
  width: 100%;
  border-radius: 30px;
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
}
.exp-badge {
  position: absolute;
  bottom: -20px;
  right: -20px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 22px;
  background: var(--gradient);
  border-radius: 18px;
  color: #fff;
  box-shadow: var(--shadow);
}
.exp-badge strong {
  font-size: 2rem;
  font-weight: 800;
  font-family: var(--heading);
}
.exp-badge span {
  font-size: 0.8rem;
  line-height: 1.3;
  font-weight: 500;
}
.about-text {
  color: var(--text);
  margin-bottom: 24px;
  font-size: 1.05rem;
}
.about-list {
  list-style: none;
  padding: 0;
  margin: 0 0 32px;
  display: grid;
  gap: 14px;
}
.about-list li {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--text);
}
.check {
  flex-shrink: 0;
  width: 26px;
  height: 26px;
  display: grid;
  place-items: center;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 50%;
  color: var(--primary-2);
  font-size: 0.8rem;
}
.about-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

@media (max-width: 900px) {
  .about-inner {
    grid-template-columns: 1fr;
    gap: 50px;
    text-align: center;
  }
  .about-img-wrap {
    max-width: 280px;
    margin: 0 auto;
  }
  .about-list {
    text-align: left;
    max-width: 420px;
    margin-left: auto;
    margin-right: auto;
  }
  .about-actions {
    justify-content: center;
  }
}
</style>
