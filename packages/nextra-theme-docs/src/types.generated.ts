export interface LayoutProps {
  /**
   * 渲染的 [`<Banner>` 组件](/docs/built-ins/banner)。例如 `<Banner {...bannerProps} />`
   */
  banner?: React.ReactNode

  children: React.ReactNode

  /**
   * 显示或隐藏深色模式选择按钮。
   * @default true
   */
  darkMode?: boolean

  /**
   * 文档仓库的 URL。
   * @default "https://github.com/shuding/nextra"
   */
  docsRepositoryBase?: string

  /**
   * 编辑链接的内容。
   * @default "Edit this page"
   */
  editLink?: React.ReactNode

  /**
   * @default {
   *   "content": "Question? Give us feedback",
   *   "labels": "feedback"
   * }
   */
  feedback?: {
    /**
     * 反馈链接的内容。
     * @default "Question? Give us feedback"
     */
    content?: React.ReactNode

    /**
     * 可以添加到新创建问题中的标签。
     * @default "feedback"
     */
    labels?: string

    /**
     * 反馈链接的 URL。
     * 
     * 默认情况下，它是指向文档仓库问题创建表单的链接，并预填了当前页面标题：
     * [示例](https://github.com/shuding/nextra/issues/new?title=Feedback%20for%20%E2%80%9CTheme%20Configuration%E2%80%9D&labels=feedback)。
     */
    link?: string
  }

  /**
   * 渲染的 [`<Footer>` 组件](/docs/docs-theme/built-ins/footer)。例如 `<Footer {...footerProps} />`
   */
  footer?: React.ReactNode

  /**
   * 为 [国际化文档网站](/docs/guide/i18n) 配置语言下拉菜单的选项。
   * @default []
   */
  i18n?: {
    /**
     * 来自 `next.config` 文件中 `i18n.locales` 字段的区域设置。
     */
    locale: string

    /**
     * 下拉菜单中的区域名称。
     */
    name: string
  }[]

  /**
   * 渲染最后更新信息的组件。
   * @default <LastUpdated />
   */
  lastUpdated?: React.ReactElement

  /**
   * 渲染的 [`<Navbar>` 组件](/docs/docs-theme/built-ins/navbar)。例如 `<Navbar {...navbarProps} />`
   */
  navbar?: React.ReactNode

  /**
   * 启用或禁用导航链接。
   * @default true
   */
  navigation?: boolean | {
    next: boolean

    prev: boolean
  }

  /**
   * [next-themes](https://github.com/pacocoursey/next-themes#themeprovider) 包的配置。
   * @default {
   *   "attribute": "class",
   *   "defaultTheme": "system",
   *   "disableTransitionOnChange": true,
   *   "storageKey": "theme"
   * }
   */
  nextThemes?: {
    /**
     * @default "class"
     */
    attribute?: 'class' | `data-${string}` | ('class' | `data-${string}`)[]

    /**
     * @default "system"
     */
    defaultTheme?: string

    /**
     * @default true
     */
    disableTransitionOnChange?: boolean

    forcedTheme?: string

    /**
     * @default "theme"
     */
    storageKey?: string
  }

  /**
   * 页面映射列表。`getPageMap(route = '/')` 调用的结果。
   */
  pageMap: import("nextra").PageMapItem[]

  /**
   * 渲染的 [`<Search>` 组件](/docs/built-ins/search)。例如 `<Search {...searchProps} />`
   * @default <Search />
   */
  search?: React.ReactNode

  /**
   * @default {
   *   "defaultMenuCollapseLevel": 2,
   *   "defaultOpen": true,
   *   "toggleButton": true
   * }
   */
  sidebar?: {
    /**
     * 如果为 `true`，则自动折叠 `defaultMenuCollapseLevel` 以上的非活动文件夹。
     */
    autoCollapse?: boolean

    /**
     * 指定左侧菜单默认折叠的文件夹级别。
     * @default 2
     */
    defaultMenuCollapseLevel?: number

    /**
     * 默认隐藏/显示侧边栏。
     * @default true
     */
    defaultOpen?: boolean

    /**
     * 隐藏/显示侧边栏切换按钮。
     * @default true
     */
    toggleButton?: boolean
  }

  /**
   * 主题切换中的选项翻译。
   * @default {
   *   "dark": "Dark",
   *   "light": "Light",
   *   "system": "System"
   * }
   */
  themeSwitch?: {
    /**
     * @default "Dark"
     */
    dark?: string

    /**
     * @default "Light"
     */
    light?: string

    /**
     * @default "System"
     */
    system?: string
  }

  /**
   * @default {
   *   "backToTop": "Scroll to top",
   *   "float": true,
   *   "title": "On This Page"
   * }
   */
  toc?: {
    /**
     * 返回顶部按钮的文本。
     * @default "Scroll to top"
     */
    backToTop?: React.ReactNode

    /**
     * 在 TOC 内容下方显示额外内容。
     */
    extraContent?: React.ReactNode

    /**
     * 将 TOC 浮动在内容旁边。
     * @default true
     */
    float?: boolean

    /**
     * TOC 侧边栏的标题。
     * @default "On This Page"
     */
    title?: React.ReactNode
  }
}