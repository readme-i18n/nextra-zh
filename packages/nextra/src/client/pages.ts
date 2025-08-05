'use no memo'

import { notFound } from 'next/navigation'
import { getRouteToFilepath } from '../server/page-map/get.js'
import { logger } from '../server/utils.js'
import type { EvaluateResult } from '../types.js'

/**
 * 用于从 `content` 目录导入 MDX/Markdown 页面的函数。
 *
 * 此函数对于 Nextra 从全捕获路由动态加载页面至关重要。
 *
 * @returns
 * 一个解析为包含以下内容的对象的 Promise：
 *  - `default`: 要渲染的 MDX 组件
 *  - `toc`: 目录列表
 *  - `metadata`: 页面的 front matter 或包含 `title`、`description` 等的 `metadata` 对象。
 *
 * @example
 * ### 在动态 Next.js 路由中的基本用法
 *
 * ```ts
 * const { default: MDXContent, toc, metadata } = await importPage(['docs', 'getting-started'])
 * ```
 *
 * ### 与 i18n 一起使用
 *
 * ```ts
 * const { default: MDXContent } = await importPage(['docs', 'getting-started'], 'en')
 * ```
 *
 * ### 在 `generateMetadata` 函数中导入页面的 front matter
 *
 * ```ts
 * // app/[[...mdxPath]]/page.tsx
 * import { importPage } from 'nextra/pages'
 *
 * export async function generateMetadata(props) {
 *   const params = await props.params
 *   const { metadata } = await importPage(params.mdxPath)
 *   return metadata
 * }
 * ```
 *
 * ### 在全捕获路由中导入页面
 *
 * ```tsx
 * // app/[[...mdxPath]]/page.tsx
 * import { generateStaticParamsFor, importPage } from 'nextra/pages'
 * import { useMDXComponents as getMDXComponents } from 'path/to/your/mdx-components'
 *
 * export const generateStaticParams = generateStaticParamsFor('mdxPath')
 *
 * const Wrapper = getMDXComponents().wrapper
 *
 * export default async function Page(props) {
 *   const params = await props.params
 *   const result = await importPage(params.mdxPath)
 *   const { default: MDXContent, toc, metadata } = result
 *   return (
 *     <Wrapper toc={toc} metadata={metadata}>
 *       <MDXContent {...props} params={params} />
 *     </Wrapper>
 *   )
 * }
 * ```
 *
 * @see
 * - [内容目录文档](https://nextra.site/docs/file-conventions/content-directory)
 * - [Next.js 动态路由](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes)
 * - [Next.js Metadata API](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
 */
export async function importPage(
  /**
   * 表示页面路由的路径段数组。
   *
   * 例如，对于路由 `/docs/getting-started/installation`，传递 `['docs', 'getting-started', 'installation']`。
   * @default []
   */
  pathSegments: string[] = [],
  /**
   * 使用 i18n 时的语言段。
   * @default ''
   */
  lang = ''
): Promise<EvaluateResult> {
  const RouteToFilepath = await getRouteToFilepath(lang)

  const pathname = pathSegments.join('/')
  // handle non-"\w" characters,`decodeURIComponent` decodes `%26` (`&`) character
  const decodedPath = decodeURIComponent(pathname)

  const pagePath = RouteToFilepath[decodedPath]
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports, unicorn/prefer-module -- Require statement enables Fast Refresh
    return require(`private-next-content-dir/${lang && `${lang}/`}${pagePath}`)
  } catch (error) {
    logger.error('Error while loading', { pathSegments }, error)
    notFound()
  }
}

/**
 * 根据您的 `content` 目录结构生成静态参数。
 *
 * 此辅助函数设计用于与 Next.js 的 `generateStaticParams` 函数一起工作，为所有 MDX/Markdown 页面创建静态路径。
 *
 * @returns 一个生成用于静态页面生成的参数数组的函数。
 *
 * @example
 * ### 与全捕获路由的基本用法
 *
 * ```ts
 * // app/[[...slug]]/page.tsx
 * export const generateStaticParams = generateStaticParamsFor('slug')
 * ```
 *
 * ### 支持 i18n 的用法
 *
 * ```ts
 * // app/[locale]/[[...mdxPath]]/page.tsx
 * export const generateStaticParams = generateStaticParamsFor('mdxPath', 'locale')
 * ```
 *
 * @see
 * - [Next.js `generateStaticParams` 函数](https://nextjs.org/docs/app/api-reference/functions/generate-static-params)
 * - [内容目录结构](https://nextra.site/docs/file-conventions/content-directory)
 */
export function generateStaticParamsFor(
  /** 您的全捕获路由段的名称（例如，`'slug'`、`'mdxPath'`）。 */
  segmentKey: string,
  /**
   * 当您有 i18n 时的语言段名称。
   * @default "lang"
   */
  localeSegmentKey = 'lang'
) {
  return async () => {
    const locales = JSON.parse(process.env.NEXTRA_LOCALES!) as string[]
    const result = []

    for (const locale of locales) {
      const RouteToFilepath = await getRouteToFilepath(locale)
      const routes = Object.keys(RouteToFilepath)

      result.push(
        ...routes.map(route => ({
          ...(locale && { [localeSegmentKey]: locale }),
          [segmentKey]: route.split('/')
        }))
      )
    }
    return result
  }
}
