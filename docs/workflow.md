# 工作流说明

## 核心思路

这个知识库采用两层结构：

- `raw/`：原始输入层，放未经整理的文章、摘录、截图、图片、视频、链接和草稿
- `docs/`：发布层，放已经过筛选、归纳、结构化后的 Markdown 内容

## 推荐流程

### 1. 收集

把素材先放到以下目录：

- `raw/articles/`：文章、论文、网页剪藏
- `raw/notes/`：零散想法、语音转写、会议记录
- `raw/images/`：截图、图表、配图
- `raw/videos/`：视频文件或说明文档
- `raw/links/`：外部资源链接清单

### 2. 编译

让 AI 基于原始资料完成：

- 摘要提炼
- 主题归类
- 建立索引
- 补充关联文章链接
- 生成专题综述

### 3. 发布

将整理好的内容写入 `docs/`，并在分类首页或相关索引页中挂上入口。

## 图片与视频

### 图片

推荐放到 `docs/public/images/` 中，再在 Markdown 中使用：

```md
![示意图](/images/example.png)
```

### 视频

推荐优先使用嵌入方式：

```html
<iframe
  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
  title="Video"
  width="100%"
  height="420"
  frameborder="0"
  allowfullscreen
></iframe>
```

如需本地视频，也可放在 `docs/public/videos/`，然后这样引用：

```html
<video controls width="100%" src="/videos/demo.mp4"></video>
```

## AI 维护原则

- 优先更新已有页面，而不是无限新增碎片页面
- 每篇文章都应写清楚主题、来源、标签和关联内容
- 优先沉淀可复用框架、清单、索引和综述页
