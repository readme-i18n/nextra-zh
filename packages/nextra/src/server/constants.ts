/*
 * 使用 server/constants 的好处 - 不在客户端包中包含不必要的 `path` polyfill，
 * 同时能在客户端文件中导入常量
 */
import type { Property } from 'estree'

export const MARKDOWN_EXTENSION_RE = /\.mdx?$/

export const CWD = process.cwd()

export const MARKDOWN_URL_EXTENSION_RE = /\.mdx?(?:(?=[#?])|$)/

export const IS_PRODUCTION = process.env.NODE_ENV === 'production'

export const EXTERNAL_URL_RE = /^https?:\/\//

export const DEFAULT_PROPERTY_PROPS = {
  type: 'Property',
  kind: 'init',
  method: false,
  shorthand: false,
  computed: false
} satisfies Omit<Property, 'key' | 'value'>

export const METADATA_ONLY_RQ = '?metadata'
