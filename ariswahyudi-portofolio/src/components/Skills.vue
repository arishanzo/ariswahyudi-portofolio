<script setup lang="ts">
const skills = [
  { name: 'Vue.js', level: 90, icon: '🟢' },
  { name: 'TypeScript', level: 85, icon: '🔷' },
  { name: 'JavaScript', level: 92, icon: '🟨' },
  { name: 'HTML & CSS', level: 95, icon: '🎨' },
  { name: 'Node.js', level: 80, icon: '🟩' },
  { name: 'Vite', level: 85, icon: '⚡' },
  { name: 'UI/UX Design', level: 78, icon: '🖌️' },
  { name: 'Git & GitHub', level: 88, icon: '🐙' },
]

const tools = [
  'Figma',
  'VS Code',
  'Docker',
  'PostgreSQL',
  'MongoDB',
  'REST API',
  'Tailwind CSS',
  'Firebase',
]
</script>

<template>
  <section id="skills" class="skills">
    <div class="container">
      <div class="skills-head">
        <span class="section-tag">Keahlian</span>
        <h2 class="section-title">Teknologi &amp; <span class="gradient-text">Tools</span></h2>
        <p class="section-sub">
          Teknologi dan alat yang saya gunakan untuk membangun produk digital
          berkualitas tinggi.
        </p>
      </div>

      <div class="skills-grid">
        <div
          v-for="skill in skills"
          :key="skill.name"
          class="skill-card reveal"
        >
          <div class="skill-top">
            <span class="skill-icon">{{ skill.icon }}</span>
            <span class="skill-name">{{ skill.name }}</span>
          </div>
          <div class="skill-bar">
            <div class="skill-fill" :style="{ width: skill.level + '%' }"></div>
          </div>
          <span class="skill-level">{{ skill.level }}%</span>
        </div>
      </div>

      <div class="tools">
        <span class="tool" v-for="tool in tools" :key="tool">{{ tool }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-head {
  text-align: center;
  margin-bottom: 48px;
}
.skills-head .section-tag,
.skills-head .section-sub {
  display: flex;
  justify-content: center;
}
.skills-head .section-sub {
  margin-left: auto;
  margin-right: auto;
}
.skills-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
.skill-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 24px;
  transition: transform 0.3s, border-color 0.3s, background 0.3s;
}
.skill-card:hover {
  transform: translateY(-6px);
  border-color: var(--primary);
  background: var(--surface-2);
}
.skill-top {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 18px;
}
.skill-icon {
  font-size: 1.6rem;
}
.skill-name {
  color: var(--text-h);
  font-weight: 600;
  font-family: var(--heading);
}
.skill-bar {
  height: 8px;
  background: var(--surface-2);
  border-radius: 99px;
  overflow: hidden;
  margin-bottom: 10px;
}
.skill-fill {
  height: 100%;
  background: var(--gradient);
  border-radius: 99px;
  transition: width 1.2s ease;
}
.skill-level {
  font-size: 0.8rem;
  color: var(--muted);
  font-weight: 600;
}
.tools {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  margin-top: 48px;
}
.tool {
  padding: 10px 20px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 999px;
  font-size: 0.88rem;
  color: var(--text);
  transition: all 0.3s;
}
.tool:hover {
  border-color: var(--primary-2);
  color: var(--text-h);
  transform: translateY(-3px);
}

@media (max-width: 1000px) {
  .skills-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 700px) {
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 420px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
