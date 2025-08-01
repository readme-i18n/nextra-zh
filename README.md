# Nextra

基于 Next.js 构建的简单、强大且灵活的站点生成框架，囊括您喜爱的所有特性。

## 文档

https://nextra.site

## 开发指南

### 安装

Nextra 代码库采用 [PNPM Workspaces](https://pnpm.io/workspaces) 和 [Turborepo](https://github.com/vercel/turborepo) 架构。

1. 运行 `corepack enable` 启用 Corepack。

   > 若上述命令失败，请执行 `npm install -g corepack@latest` 安装最新版 [Corepack](https://github.com/nodejs/corepack?tab=readme-ov-file#manual-installs)。

2. 运行 `pnpm install` 安装项目依赖。

### 构建 `nextra`

```bash
pnpm --filter nextra build
```

监听模式：`pnpm --filter nextra dev`

### 构建 `nextra-theme-docs`

```bash
pnpm --filter nextra-theme-docs build
```

### 开发指南

您可以在本地结合网站进行调试。例如要启动 `examples/docs` 本地环境，请运行

```bash
pnpm --filter example-docs dev
```

对 `example/docs` 的任何修改都会即时重新渲染。

若更新核心包或主题包，需重新构建。您也可以在独立终端中同时启用 Nextra 和主题的监听模式。

## 赞助商

<div>
 <a href="https://xyflow.com?utm_source=github&utm_campaign=nextra&utm_content=logolink">
   <img src="/docs/app/showcase/_logos/xyflow.png" alt="xyflow preview" width="256">
 </a>
 <a href="https://speakeasyapi.dev/docs?utm_source=github&utm_campaign=nextra&utm_content=logolink">
   <img src="/docs/app/showcase/_logos/speakeasy.png" alt="Speakeasy preview" width="256">
 </a>
 <a href="https://the-guild.dev/graphql/hive?utm_source=github&utm_campaign=nextra&utm_content=logolink">
   <img src="/docs/app/showcase/_logos/graphql-hive.png" alt="GraphQL Hive preview" width="256">
 </a>
</div>