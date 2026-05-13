<script setup lang="ts">
import { withBase } from 'vitepress'

const categories = [
  {
    icon: '🌱',
    title: '成长',
    desc: '习惯 · 认知 · 复利',
    href: '/growth/',
    color: '#7c5cff'
  },
  {
    icon: '🏠',
    title: '生活',
    desc: '健康 · 家庭 · 体验',
    href: '/life/',
    color: '#22d3ee'
  },
  {
    icon: '⚡',
    title: '技术',
    desc: '工程 · AI · 工具链',
    href: '/tech/',
    color: '#5b8def'
  },
  {
    icon: '📈',
    title: '投资',
    desc: '框架 · 配置 · 纪律',
    href: '/invest/',
    color: '#34d399'
  }
]
</script>

<template>
  <div class="sk-home-mini">
    <div class="sk-mini-inner">
      <span class="sk-badge">
        <span class="dot" />
        AI-Powered · 持续生长中
      </span>

      <h1 class="sk-title">
        让每一次思考<br />
        都能沉淀为<span class="grad">可复用资产</span>
      </h1>

      <p class="sk-subtitle">
        用 Markdown 存知识、用 GitHub 做版本、由 AI 协助整理 —— 一个会自己长大的个人知识系统。
      </p>

      <div class="sk-grid">
        <a
          v-for="c in categories"
          :key="c.title"
          class="sk-card"
          :href="withBase(c.href)"
          :style="{
            '--sk-card-color': c.color,
            '--sk-card-glow': `radial-gradient(circle at 0% 0%, ${c.color}33, transparent 60%)`
          }"
        >
          <span class="icon">{{ c.icon }}</span>
          <div class="meta">
            <h3>{{ c.title }}</h3>
            <p>{{ c.desc }}</p>
          </div>
          <span class="arrow">→</span>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sk-home-mini {
  min-height: calc(100vh - var(--vp-nav-height, 64px));
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 32px;
  box-sizing: border-box;
}

.sk-mini-inner {
  width: 100%;
  max-width: 980px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.sk-title {
  margin: 20px 0 0;
  font-size: clamp(36px, 5.2vw, 64px);
  line-height: 1.1;
  letter-spacing: -0.035em;
  font-weight: 800;
}

.sk-title .grad {
  background: linear-gradient(120deg, #7c5cff 0%, #5b8def 40%, #22d3ee 80%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.sk-subtitle {
  margin: 18px auto 0;
  max-width: 620px;
  font-size: 16px;
  line-height: 1.65;
  color: var(--vp-c-text-2);
}

.sk-grid {
  margin-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
}

@media (max-width: 860px) {
  .sk-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 480px) {
  .sk-grid { grid-template-columns: 1fr; }
}

.sk-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  padding: 18px 18px 20px;
  border-radius: 16px;
  background: color-mix(in srgb, var(--vp-c-bg-soft) 65%, transparent);
  border: 1px solid var(--vp-c-divider);
  backdrop-filter: blur(10px);
  text-decoration: none !important;
  background-image: none !important;
  color: inherit !important;
  overflow: hidden;
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
  text-align: left;
}

.sk-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--sk-card-glow);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.sk-card:hover {
  transform: translateY(-3px);
  border-color: color-mix(in srgb, var(--sk-card-color) 55%, transparent);
  box-shadow: 0 20px 40px -22px color-mix(in srgb, var(--sk-card-color) 60%, transparent);
}

.sk-card:hover::before { opacity: 1; }

.sk-card .icon {
  font-size: 22px;
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 11px;
  background: color-mix(in srgb, var(--sk-card-color) 14%, transparent);
  border: 1px solid color-mix(in srgb, var(--sk-card-color) 35%, transparent);
}

.sk-card h3 {
  margin: 0;
  font-size: 17px;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--vp-c-text-1);
}

.sk-card p {
  margin: 4px 0 0;
  font-size: 13px;
  line-height: 1.5;
  color: var(--vp-c-text-2);
}

.sk-card .arrow {
  position: absolute;
  top: 18px;
  right: 18px;
  font-size: 14px;
  color: var(--vp-c-text-3);
  transition: transform 0.25s ease, color 0.25s ease;
}

.sk-card:hover .arrow {
  color: var(--sk-card-color);
  transform: translate(2px, -2px);
}

/* hide footer on home for single-screen feel */
:global(.VPHome + .VPFooter),
:global(body:has(.sk-home-mini) .VPFooter) {
  display: none;
}
</style>
