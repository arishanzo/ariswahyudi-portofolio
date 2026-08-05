<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container footer-inner">
      <a href="#home" class="logo">
        <span class="logo-mark">AW</span>
        <span class="logo-text">Aris<span>Wahyudi</span></span>
      </a>
      <p class="footer-text">
        © {{ year }} Aris Wahyudi. Dibuat dengan ❤️ dan Vue.js.
      </p>
      <a href="#home" class="back-top" aria-label="Kembali ke atas">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 19V5M5 12l7-7 7 7"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </a>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
  padding: 30px 0;
  background: var(--bg);
}
.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
}
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}
.logo-mark {
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  background: var(--gradient);
  border-radius: 10px;
  color: #fff;
  font-weight: 800;
  font-family: var(--heading);
  font-size: 0.8rem;
}
.logo-text {
  font-family: var(--heading);
  font-weight: 700;
  color: var(--text-h);
  font-size: 1rem;
}
.logo-text span {
  color: var(--primary-2);
}
.footer-text {
  color: var(--muted);
  font-size: 0.9rem;
}
.back-top {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  color: var(--text);
  transition: all 0.3s;
}
.back-top:hover {
  background: var(--gradient);
  color: #fff;
  transform: translateY(-3px);
}
</style>
