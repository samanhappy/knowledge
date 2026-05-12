# knowledge

一个使用 **VitePress + pnpm + Markdown + GitHub Pages** 搭建的个人知识库项目。

## 特性

- 使用 GitHub 仓库存储知识内容
- 使用 Markdown 作为核心内容格式
- 支持图片和视频展示
- 支持部署后在浏览器直接访问
- 以 `raw/` → `docs/` 的方式组织 AI 驱动知识整理流程

## 目录结构

```text
knowledge/
├── docs/                   # 对外发布的知识库内容
│   ├── .vitepress/         # VitePress 配置
│   ├── growth/             # 成长
│   ├── life/               # 生活
│   ├── tech/               # 技术
│   ├── invest/             # 投资
│   └── public/             # 图片、视频等静态资源
├── raw/                    # 原始素材输入区
├── .github/
│   ├── workflows/
│   └── copilot-instructions.md
├── guide.txt
└── package.json
```

## 本地开发

```bash
pnpm install
pnpm docs:dev
```

## 构建

```bash
pnpm docs:build
pnpm docs:preview
```

## 媒体使用

### 图片

把图片放进 `docs/public/images/`，然后在 Markdown 中引用：

```md
![示例图片](/images/example.png)
```

### 视频

- 外链视频：使用 `iframe` 嵌入
- 本地视频：放到 `docs/public/videos/` 后使用 `video` 标签

## AI 工作流建议

1. 把网页摘录、笔记、截图、文章先放进 `raw/`
2. 让 AI 整理为结构化 Markdown
3. 按主题归档到 `docs/`
4. 同步更新索引页和关联阅读

## 部署

默认使用 GitHub Pages，通过 `.github/workflows/deploy.yml` 自动构建并发布。

> 如果仓库名不是 `knowledge`，记得调整 `docs/.vitepress/config.mts` 里的 `base` 配置。
