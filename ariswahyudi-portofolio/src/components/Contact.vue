<script setup lang="ts">
import { ref } from 'vue'

const form = ref({ name: '', email: '', message: '' })
const sent = ref(false)

const submit = () => {
  if (form.value.name && form.value.email && form.value.message) {
    sent.value = true
    form.value = { name: '', email: '', message: '' }
    setTimeout(() => (sent.value = false), 4000)
  }
}

const socials = [
  { name: 'GitHub', icon: '🐙', href: 'https://github.com' },
  { name: 'LinkedIn', icon: '💼', href: 'https://linkedin.com' },
  { name: 'Instagram', icon: '📸', href: 'https://instagram.com' },
  { name: 'Email', icon: '✉️', href: 'mailto:ariswahyud86@email.com' },
]
</script>

<template>
  <section id="contact" class="contact">
    <div class="container contact-inner">
      <div class="contact-info">
        <span class="section-tag">Kontak</span>
        <h2 class="section-title">
          Mari <span class="gradient-text">Bekerja Sama</span>
        </h2>
        <p class="contact-desc">
          Punya proyek atau ide yang ingin diwujudkan? Jangan ragu untuk
          menghubungi saya. Saya selalu terbuka untuk kolaborasi dan
          kesempatan baru.
        </p>
        <div class="contact-socials">
          <a
            v-for="social in socials"
            :key="social.name"
            :href="social.href"
            target="_blank"
            rel="noopener"
            class="social-btn"
          >
            <span class="social-icon">{{ social.icon }}</span>
            <span>{{ social.name }}</span>
          </a>
        </div>
      </div>

      <div class="contact-form-wrap">
        <form class="contact-form" @submit.prevent="submit">
          <div class="form-group">
            <label for="name">Nama</label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              placeholder="Nama lengkap Anda"
              required
            />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              placeholder="email@contoh.com"
              required
            />
          </div>
          <div class="form-group">
            <label for="message">Pesan</label>
            <textarea
              id="message"
              v-model="form.message"
              rows="5"
              placeholder="Tulis pesan Anda di sini..."
              required
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary form-submit">
            Kirim Pesan
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <p v-if="sent" class="form-success">✓ Pesan berhasil dikirim!</p>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  background: var(--bg-2);
}
.contact-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;
}
.contact-desc {
  color: var(--text);
  margin-bottom: 32px;
  font-size: 1.05rem;
}
.contact-socials {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
.social-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 20px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 14px;
  color: var(--text);
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.3s;
}
.social-btn:hover {
  border-color: var(--primary);
  color: var(--text-h);
  transform: translateY(-3px);
}
.social-icon {
  font-size: 1.2rem;
}

.contact-form-wrap {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 32px;
  box-shadow: var(--shadow);
}
.contact-form {
  display: grid;
  gap: 20px;
}
.form-group {
  display: grid;
  gap: 8px;
}
.form-group label {
  color: var(--text-h);
  font-weight: 500;
  font-size: 0.9rem;
}
.form-group input,
.form-group textarea {
  width: 100%;
  padding: 14px 16px;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 12px;
  color: var(--text-h);
  font-family: var(--sans);
  font-size: 0.95rem;
  transition: border-color 0.3s;
  resize: vertical;
}
.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary);
}
.form-group input::placeholder,
.form-group textarea::placeholder {
  color: var(--muted);
}
.form-submit {
  justify-content: center;
  width: 100%;
}
.form-success {
  color: #22c55e;
  font-weight: 500;
  text-align: center;
}

@media (max-width: 900px) {
  .contact-inner {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
</style>
