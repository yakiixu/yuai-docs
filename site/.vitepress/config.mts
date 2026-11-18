import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "zh-CN",
  title: "yuai 文档",
  description: "Yuai 模型网关接入指南：Claude Code、Codex、OpenCode、HTTP API 与 SDK。",
  base: "/",
  cleanUrls: false,
  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/brand/favicon.svg" }],
    ["meta", { name: "theme-color", content: "#f4f6f5", media: "(prefers-color-scheme: light)" }],
    ["meta", { name: "theme-color", content: "#101c1f", media: "(prefers-color-scheme: dark)" }],
  ],
  themeConfig: {
    logo: { light: "/brand/mark.svg", dark: "/brand/mark-dark.svg", alt: "" },
    siteTitle: "yuai 文档",
    nav: [
      { text: "指南", link: "/guide/quickstart", activeMatch: "/guide/" },
      { text: "Claude Code", link: "/claude-code/macos", activeMatch: "/claude-code/" },
      { text: "Codex", link: "/codex/cli", activeMatch: "/codex/" },
      { text: "更多工具", link: "/tools/opencode", activeMatch: "/tools/" },
      { text: "API", link: "/api/http" },
    ],
    sidebar: [
      {
        text: "开始",
        items: [
          { text: "站点介绍", link: "/" },
          { text: "快速开始", link: "/guide/quickstart" },
          { text: "客户端下载", link: "/guide/downloads" },
          { text: "API 密钥与成本控制", link: "/guide/api-keys" },
          { text: "用量与计费", link: "/guide/billing" },
          { text: "常见问题", link: "/guide/faq" },
        ],
      },
      {
        text: "Claude Code",
        items: [
          { text: "macOS", link: "/claude-code/macos" },
          { text: "Windows", link: "/claude-code/windows" },
          { text: "Linux / WSL", link: "/claude-code/linux" },
        ],
      },
      {
        text: "Codex",
        items: [
          { text: "Codex CLI", link: "/codex/cli" },
          { text: "Codex 桌面端", link: "/codex/desktop" },
        ],
      },
      {
        text: "更多工具",
        items: [
          { text: "OpenCode", link: "/tools/opencode" },
          { text: "Qwen Code", link: "/tools/qwen-code" },
          { text: "pi", link: "/tools/pi" },
          { text: "Cline", link: "/tools/cline" },
          { text: "Aider", link: "/tools/aider" },
        ],
      },
      { text: "开发接口", items: [{ text: "HTTP API 与 SDK", link: "/api/http" }] },
    ],
    outline: { label: "本页目录", level: [2, 3] },
    docFooter: { prev: "上一篇", next: "下一篇" },
    darkModeSwitchLabel: "外观",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
    sidebarMenuLabel: "目录",
    returnToTopLabel: "返回顶部",
    skipToContentLabel: "跳转到正文",
    search: {
      provider: "local",
      options: {
        // Match Chinese substrings as well as Latin tool and configuration names.
        miniSearch: {
          options: {
            tokenize: (text: string) =>
              text.toLowerCase().match(/[a-z0-9_]+|[\u3400-\u9fff]/g) || [],
          },
          searchOptions: { prefix: true, fuzzy: false },
        },
        translations: {
          button: { buttonText: "搜索文档", buttonAriaLabel: "搜索文档" },
          modal: {
            displayDetails: "显示详情",
            resetButtonTitle: "清空搜索",
            backButtonTitle: "关闭搜索",
            noResultsText: "没有找到相关文档",
            footer: {
              selectText: "选择",
              selectKeyAriaLabel: "回车",
              navigateText: "切换",
              navigateUpKeyAriaLabel: "向上",
              navigateDownKeyAriaLabel: "向下",
              closeText: "关闭",
              closeKeyAriaLabel: "Esc",
            },
          },
        },
      },
    },
    footer: {
      message:
        '基于 <a href="https://github.com/QuantumNous/new-api">New API</a> · <a href="https://github.com/QuantumNous">QuantumNous</a> · <a href="https://github.com/songquanpeng/one-api">One API</a>',
      copyright: "Yuai 使用文档",
    },
  },
});
