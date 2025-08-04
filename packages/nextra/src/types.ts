import type { Heading as MDASTHeading } from 'mdast'
import type { Metadata } from 'next'
import type { FC, ReactElement, ReactNode } from 'react'
import type { z } from 'zod'
import type {
  MathJaxOptionsSchema,
  menuSchema,
  metaSchema,
  NextraConfigSchema,
  separatorItemSchema
} from './server/schemas.js'

export type { NextraConfig } from './types.generated.js'

type NextraConfigFromZod = z.infer<typeof NextraConfigSchema>

export interface LoaderOptions extends NextraConfigFromZod {
  isPageImport?: boolean
  locales: string[]
  contentDir?: string
  shouldAddLocaleToLinks?: boolean
}

type TPageItem = { name: string; route: string; __pagePath: string }
type TMetaItem = { __metaPath: string }

interface TFolder<T = TItem> {
  name: string
  route: string
  children: T[]
}

export type TItem = TPageItem | TMetaItem | TFolder

export interface Folder<FileType = PageMapItem> {
  name: string
  route: string
  children: FileType[]
}

export type Import = {
  importName: string
  filePath: string
}

export type MetaJsonFile = {
  data: {
    [fileName: string]: Meta
  }
}

export type DynamicFolder = {
  items: DynamicMeta
  title?: string
}

export type DynamicMetaItem = Meta | DynamicFolder

export type DynamicMeta = Record<string, DynamicMetaItem>

export type FrontMatter = Record<string, any>
export type Meta = string | Record<string, any>

export type MdxFile<FrontMatterType = FrontMatter> = {
  name: string
  route: string
  frontMatter?: FrontMatterType
}

export type PageMapItem = Folder | MdxFile | MetaJsonFile

// PageMapItem without MetaJsonFile and with its meta from _meta.json
export type Page = (MdxFile | Folder<Page>) & {
  meta?: Exclude<Meta, string>
}

export type Heading = {
  depth: Exclude<MDASTHeading['depth'], 1>
  value: string | ReactElement
  id: string
}

export type $NextraMetadata = Omit<Metadata, 'title'> & {
  title: string
  filePath: string
  timestamp?: number
  readingTime?: ReadingTime
}

export type ReadingTime = {
  text: string
  minutes: number
  time: number
  words: number
}

export type MathJaxOptions = z.infer<typeof MathJaxOptionsSchema>

export type MDXWrapper = FC<{
  toc: Heading[]
  children: ReactNode
  metadata: $NextraMetadata
  bottomContent?: ReactNode
}>

export type MetaRecord = Record<string, z.infer<typeof metaSchema>>

export type SeparatorItem = z.infer<typeof separatorItemSchema>
export type MenuItem = z.infer<typeof menuSchema>

/**
 * 可传递给 `pagefind.search()` 的选项。
 * @remarks 复制自 https://github.com/CloudCannon/pagefind/blob/2a0aa90cfb78bb8551645ac9127a1cd49cf54add/pagefind_web_js/types/index.d.ts#L72-L82
 */
export type PagefindSearchOptions = {
  /**
   * 如果设置，此调用将加载所有资源但在搜索前返回。建议改用 `pagefind.preload()`。
   */
  preload?: boolean
  /**
   * 为此搜索查询添加更详细的控制台日志。
   */
  verbose?: boolean
  /**
   * 与此搜索一起执行的过滤器集。输入类型非常灵活，详情请参阅过滤文档。
   */
  filters?: object
  /**
   * 用于此搜索的排序集，而非相关性排序。
   */
  sort?: object
}

export type NextraMetadata = Metadata & {
  asIndexPage?: boolean
  sidebarTitle?: string
}

export type EvaluateResult = {
  /** 要渲染的 MDX 组件。 */
  default: FC<any>
  /** 目录列表。 */
  toc: Heading[]
  /** 页面的 front matter 或包含 `title`、`description` 等的 `metadata` 对象。 */
  metadata: $NextraMetadata
}
