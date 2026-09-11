<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const canvas = ref<HTMLCanvasElement | null>(null)
let animId: number
let resizeTimer: number

const CELL = 36
const BG_COLOR       = '#f8fafc'
const GRID_LINE      = 'rgba(148,163,184,0.12)'
const GRID_DOT       = 'rgba(148,163,184,0.22)'

const PALETTES = [
  { line: '#f97316', glow: '#fed7aa' },
  { line: '#fb923c', glow: '#ffedd5' },
  { line: '#ec4899', glow: '#fce7f3' },
  { line: '#0ea5e9', glow: '#bae6fd' },
  { line: '#8b5cf6', glow: '#ede9fe' },
  { line: '#64748b', glow: '#cbd5e1' },
]

const SNAKE_COUNT = 16
const MAX_LEN = 30
const MIN_LEN = 12

type Point = { x: number; y: number }
type Snake = {
  path: Point[]
  dir: Point
  palette: typeof PALETTES[0]
  speed: number
  tick: number
  maxLen: number
}

function randDir(): Point {
  const d = [{ x:1,y:0 },{ x:-1,y:0 },{ x:0,y:1 },{ x:0,y:-1 }]
  return d[Math.floor(Math.random() * 4)]
}

function makeSnake(cols: number, rows: number): Snake {
  return {
    path: [{ x: Math.floor(Math.random() * cols), y: Math.floor(Math.random() * rows) }],
    dir: randDir(),
    palette: PALETTES[Math.floor(Math.random() * PALETTES.length)],
    speed: Math.floor(Math.random() * 3) + 2,
    tick: 0,
    maxLen: Math.floor(Math.random() * (MAX_LEN - MIN_LEN)) + MIN_LEN,
  }
}

onMounted(() => {
  const cv  = canvas.value!
  const ctx = cv.getContext('2d')!

  const setSize = () => {
    cv.width  = window.innerWidth
    cv.height = document.documentElement.scrollHeight
  }
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer)
    resizeTimer = window.setTimeout(setSize, 150)
  })

  const cols = () => Math.floor(cv.width  / CELL)
  const rows = () => Math.floor(cv.height / CELL)

  // ── Grid ────────────────────────────────────────────────────────────
  function drawGrid() {
    ctx.fillStyle = BG_COLOR
    ctx.fillRect(0, 0, cv.width, cv.height)

    ctx.strokeStyle = GRID_LINE
    ctx.lineWidth   = 1
    for (let r = 0; r <= rows(); r++) {
      ctx.beginPath(); ctx.moveTo(0, r * CELL); ctx.lineTo(cv.width, r * CELL); ctx.stroke()
    }
    for (let c = 0; c <= cols(); c++) {
      ctx.beginPath(); ctx.moveTo(c * CELL, 0); ctx.lineTo(c * CELL, cv.height); ctx.stroke()
    }
    // intersection dots
    ctx.fillStyle = GRID_DOT
    for (let r = 0; r <= rows(); r++) {
      for (let c = 0; c <= cols(); c++) {
        ctx.beginPath()
        ctx.arc(c * CELL, r * CELL, 1.6, 0, Math.PI * 2)
        ctx.fill()
      }
    }
  }

  // ── Snake ───────────────────────────────────────────────────────────
  function drawSnake(s: Snake) {
    if (s.path.length < 2) return
    const { line, glow } = s.palette
    const len = s.path.length

    // — garis tubuh dengan fade —
    for (let i = 0; i < len - 1; i++) {
      const a = s.path[i]
      const b = s.path[i + 1]
      const t = 1 - i / len

      ctx.save()
      ctx.globalAlpha = t * 0.65
      ctx.strokeStyle = line
      ctx.lineWidth   = 2
      ctx.lineCap     = 'round'
      ctx.lineJoin    = 'round'
      ctx.beginPath()
      ctx.moveTo(a.x * CELL, a.y * CELL)
      ctx.lineTo(b.x * CELL, b.y * CELL)
      ctx.stroke()
      ctx.restore()
    }

    // — dot di setiap belokan (junction) —
    for (let i = 1; i < len - 1; i++) {
      const prev = s.path[i - 1], curr = s.path[i], next = s.path[i + 1]
      if (prev.x !== next.x && prev.y !== next.y) {
        const t = (1 - i / len) * 0.7
        ctx.save()
        ctx.globalAlpha = t
        ctx.fillStyle   = line
        ctx.beginPath()
        ctx.arc(curr.x * CELL, curr.y * CELL, 2.5, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }
    }

    // — EKOR: dot lingkaran kecil fade —
    const tail = s.path[len - 1]
    ctx.save()
    ctx.globalAlpha = 0.25
    ctx.fillStyle   = line
    ctx.beginPath()
    ctx.arc(tail.x * CELL, tail.y * CELL, 3, 0, Math.PI * 2)
    ctx.fill()
    // ring ekor
    ctx.globalAlpha = 0.12
    ctx.strokeStyle = line
    ctx.lineWidth   = 1
    ctx.beginPath()
    ctx.arc(tail.x * CELL, tail.y * CELL, 5.5, 0, Math.PI * 2)
    ctx.stroke()
    ctx.restore()

    // — KEPALA: dot besar glowing + ring pulse —
    const h = s.path[0]
    // outer ring pulse
    ctx.save()
    ctx.globalAlpha = 0.2
    ctx.strokeStyle = glow
    ctx.lineWidth   = 1.5
    ctx.shadowColor = glow
    ctx.shadowBlur  = 8
    ctx.beginPath()
    ctx.arc(h.x * CELL, h.y * CELL, 10, 0, Math.PI * 2)
    ctx.stroke()
    ctx.restore()

    // middle ring
    ctx.save()
    ctx.globalAlpha = 0.45
    ctx.strokeStyle = line
    ctx.lineWidth   = 1.5
    ctx.shadowColor = glow
    ctx.shadowBlur  = 6
    ctx.beginPath()
    ctx.arc(h.x * CELL, h.y * CELL, 6.5, 0, Math.PI * 2)
    ctx.stroke()
    ctx.restore()

    // inner filled dot
    ctx.save()
    ctx.globalAlpha = 1
    ctx.fillStyle   = line
    ctx.shadowColor = glow
    ctx.shadowBlur  = 14
    ctx.beginPath()
    ctx.arc(h.x * CELL, h.y * CELL, 3.5, 0, Math.PI * 2)
    ctx.fill()
    ctx.restore()
  }

  // ── Loop ────────────────────────────────────────────────────────────
  const snakes: Snake[] = Array.from({ length: SNAKE_COUNT }, () => makeSnake(cols(), rows()))

  const animate = () => {
    drawGrid()

    for (let i = 0; i < snakes.length; i++) {
      const s = snakes[i]
      s.tick++
      if (s.tick >= s.speed) {
        s.tick = 0
        const head = s.path[0]

        if (Math.random() < 0.18) {
          s.dir = s.dir.x !== 0
            ? (Math.random() < 0.5 ? { x:0,y:1 } : { x:0,y:-1 })
            : (Math.random() < 0.5 ? { x:1,y:0 } : { x:-1,y:0 })
        }

        const nx = head.x + s.dir.x
        const ny = head.y + s.dir.y

        if (nx < 0 || nx >= cols() || ny < 0 || ny >= rows()) {
          snakes[i] = makeSnake(cols(), rows()); continue
        }

        s.path.unshift({ x: nx, y: ny })
        if (s.path.length > s.maxLen) s.path.pop()
      }
      drawSnake(s)
    }

    animId = requestAnimationFrame(animate)
  }

  setSize()
  animate()

  onUnmounted(() => {
    cancelAnimationFrame(animId)
    clearTimeout(resizeTimer)
  })
})
</script>

<template>
  <canvas ref="canvas" class="fixed inset-0 w-full h-full -z-10 pointer-events-none" />
</template>
