export interface NextraConfig {
  /**
   * 默认启用所有代码块的复制按钮，无需在代码块元数据中设置 `copy=true` 属性。
   * > [!TIP]
   * >
   * > 仍可通过 `copy=false` 属性为特定代码块禁用该按钮。
   */
  defaultShowCopyCode?: boolean

  /**
   * 启用搜索功能的选项。启用后，会在 `<main>` 元素上设置 `data-pagefind-body` 属性。
   * > [!TIP]
   * >
   * > 当设置为 `codeblocks: false` 时，会为所有代码块（`<pre>` 元素）添加 `data-pagefind-ignore="all"` 属性。
   * @default {
   *   "codeblocks": false
   * }
   */
  search?: boolean | {
    /**
     * 是否索引代码块。
     */
    codeblocks: boolean
  }

  /**
   * 自动优化使用 Markdown 语法导入的静态图像的选项。
   * > [!TIP]
   * >
   * > 示例：`![Hello](/demo.png)`。
   * @default true
   */
  staticImage?: boolean

  /**
   * 使用 [readingTime](https://npmjs.com/package/reading-time) 包为 `.md` 和 `.mdx` 文件添加预计阅读时间。
   * > [!TIP]
   * >
   * > 阅读时间会添加到 front matter 中的 `readingTime` 键下。
   */
  readingTime?: boolean

  /**
   * 启用 LaTeX，可通过 [KaTeX](https://katex.org) 直接在 MDX 中预渲染 LaTeX 表达式，或通过 [MathJax](https://mathjax.org) 在浏览器中动态渲染数学公式。
   */
  latex?: boolean | {
    renderer: "mathjax"

    options?: {
      /**
       * MathJax 的 URL。
       * @default "https://cdnjs.cloudflare.com"
       */
      src?: string

      /**
       * MathJax 配置。参见 [configuring MathJax](https://docs.mathjax.org/en/latest/options/index.html)。
       */
      config?: import("better-react-mathjax").MathJax3Config
    }
  } | {
    renderer: "katex"

    /**
     * KaTeX 选项。参见 https://katex.org/docs/options.html。
     */
    options: import("rehype-katex").Options
  }

  /**
   * 启用或禁用语法高亮。
   * @default true
   */
  codeHighlight?: boolean

  /**
   * MDX 编译的特定选项。
   * @remarks `MdxOptions`
   * @default {
   *   "format": "detect",
   *   "rehypePrettyCodeOptions": {}
   * }
   */
  mdxOptions?: {
    /**
     * rehype 插件列表。
     */
    rehypePlugins?: import("@mdx-js/mdx").ProcessorOptions["rehypePlugins"]

    /**
     * remark 插件列表。
     */
    remarkPlugins?: import("@mdx-js/mdx").ProcessorOptions["remarkPlugins"]

    /**
     * recma 插件列表。这是一个新的生态系统，目前处于测试阶段，用于转换 esast 树（JavaScript）。
     */
    recmaPlugins?: import("@mdx-js/mdx").ProcessorOptions["recmaPlugins"]

    /**
     * 文件的格式。
     * - `'md'` 表示视为 markdown
     * - `'mdx'` 表示视为 MDX
     * - `'detect'` 表示尝试基于文件路径检测格式。
     * @default "detect"
     */
    format?: "detect" | "mdx" | "md"

    /**
     * [Rehype Pretty Code](https://github.com/rehype-pretty/rehype-pretty-code) 的配置选项。
     * @remarks `RehypePrettyCodeOptions`
     * @default {}
     */
    rehypePrettyCodeOptions?: import("rehype-pretty-code").Options
  }

  /**
   * 允许你将 HTML 元素白名单替换为 `mdx-components.js` 文件中定义的组件。
   * > [!TIP]
   * >
   * > 默认情况下，Nextra 仅替换 `<details>` 和 `<summary>` 元素。
   */
  whiteListTagsStyling?: string[]

  /**
   * 选项，用于从 `content` 目录以自定义路径而非根路径（`/`）提供 `.md` 和 `.mdx` 文件。
   * @default "/"
   */
  contentDirBasePath?: string

  /**
   * 在页面地图信息中为所有链接添加语言环境前缀。对于不想使用 Nextra 的 `middleware` 函数的 i18n 场景非常有用。
   * @default false
   */
  unstable_shouldAddLocaleToLinks?: boolean
}

export interface HeadProps {
  /**
   * @default {
   *   "hue": {
   *     "dark": 204,
   *     "light": 212
   *   },
   *   "saturation": {
   *     "dark": 100,
   *     "light": 100
   *   },
   *   "lightness": {
   *     "dark": 55,
   *     "light": 45
   *   }
   * }
   */
  color?: {
    /**
     * 主主题色调的色相。<br/>范围：`0 - 360`
     * @default {
     *   "dark": 204,
     *   "light": 212
     * }
     */
    hue?: number | {
      dark: number

      light: number
    }

    /**
     * 主主题色调的饱和度。<br/>范围：`0 - 100`
     * @default 100
     */
    saturation?: number | {
      dark: number

      light: number
    }

    //**
     * 主主题色调的亮度。<br/>范围：`0 - 100`
     * @default {
     *   "dark": 55,
     *   "light": 45
     * }
     */
    lightness?: number | {
      dark: number

      light: number
    }
  }

  /**
   * 用作 favicon 的符号。
   */
  faviconGlyph?: string

  /**
   * @default {
   *   "dark": "17,17,17",
   *   "light": "250,250,250"
   * }
   */
  backgroundColor?: {
    /**
     * 暗色主题的背景颜色。<br/>格式：`"rgb(RRR,GGG,BBB)" | "#RRGGBB"`
     * @default "rgb(17,17,17)"
     */
    dark?: string

    /**
     * 亮色主题的背景颜色。<br/>格式：`"rgb(RRR,GGG,BBB)" | "#RRGGBB"`
     * @default "rgb(250,250,250)"
     */
    light?: string
  }

  /**
   * `<head>` 的内容。
   */
  children?: React.ReactNode
}