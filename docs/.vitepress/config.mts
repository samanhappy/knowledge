import { defineConfig } from 'vitepress'

const repo = 'https://github.com/samanhappy/knowledge'
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1]
const isGithubActions = process.env.GITHUB_ACTIONS === 'true'
const base = isGithubActions && repositoryName ? `/${repositoryName}/` : '/'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Saman 的知识库',
  description: '一个由 AI 协助维护、用 Markdown 持续生长的个人知识库。',
  cleanUrls: true,
  lastUpdated: true,
  base,
  themeConfig: {
    logo: '🧠',
    siteTitle: 'Saman Knowledge',
    search: {
      provider: 'local'
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '成长', link: '/growth/' },
      { text: '生活', link: '/life/' },
      { text: '技术', link: '/tech/' },
      { text: '投资', link: '/invest/' },
      { text: '原始素材', link: '/workflow/' }
    ],
    sidebar: {
      '/growth/': [
        {
          text: '🌱 成长',
          items: [
            { text: '总览', link: '/growth/' },
            { text: '成长认知与复利思维', link: '/growth/mindset' },
            { text: '工作与领导力', link: '/growth/leadership' },
            { text: '习惯系统', link: '/growth/habit-system' }
          ]
        }
      ],
      '/life/': [
        {
          text: '🏠 生活',
          items: [
            { text: '总览', link: '/life/' },
            { text: '人生哲学', link: '/life/philosophy' },
            { text: '居家系统', link: '/life/home-os' }
          ]
        }
      ],
      '/tech/': [
        {
          text: '⚡ 技术',
          items: [
            { text: '总览', link: '/tech/' },
            { text: 'AI 工作流', link: '/tech/ai-workflow' },
            { text: '工程师原则', link: '/tech/engineering-principles' }
          ]
        }
      ],
      '/invest/': [
        {
          text: '📈 投资',
          items: [
            { text: '总览', link: '/invest/' },
            { text: '投资框架', link: '/invest/investing-framework' }
          ]
        }
      ],
      '/workflow': [
        {
          text: '开始使用',
          items: [
            { text: '首页', link: '/' },
            { text: '工作流说明', link: '/workflow' }
          ]
        }
      ]
    },
    socialLinks: [{ icon: 'github', link: repo }],
    footer: {
      message: 'Built with VitePress, Markdown, and a healthy amount of AI horsepower.',
      copyright: 'Copyright © 2026 Saman'
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    outline: {
      label: '本页导航'
    }
  }
})
