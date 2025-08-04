import type { Folder, PageMapItem } from '../../types.js'

function importPageMap(lang = ''): Promise<{
  pageMap: PageMapItem[]
  RouteToFilepath: Record<string, string>
}> {
  return import(`./placeholder.js?lang=${lang}`)
}

const defaultLocale = process.env.NEXTRA_DEFAULT_LOCALE

/**
 * 获取给定路由的页面映射结构，处理嵌套路由。
 *
 * 页面映射结构表示文档或内容的层级组织，
 * 其中每个项目可以是页面或包含更多页面的文件夹。
 *
 * @returns 一个解析为`PageMapItem`对象数组的Promise，表示页面结构
 * 如`MdxFile`、`Folder`和`MetaJsonFile`。
 *
 * @example
 * ```ts
 * import { getPageMap } from 'nextra/page-map'
 *
 * // 获取根页面映射
 * const rootPageMap = await getPageMap()
 *
 * // 获取特定路由的页面映射
 * const blogPageMap = await getPageMap('/blog')
 *
 * // 使用i18n时获取特定语言的页面映射
 * const enPageMap = await getPageMap('/en')
 * ```
 *
 * @throws {Error} 当在页面映射中找不到指定的路由段时。
 *
 * @see [页面映射结构文档](https://nextra.site/docs/file-conventions/meta-file#pagemap-structure)。
 */
export async function getPageMap(
  /**
   * 要获取页面映射的路由路径。
   * @default "/"
   */
  route = '/'
) {
  const segments = route.split('/')
  // Remove 1 or 2 items from the beginning of the array
  const lang = segments.splice(0, defaultLocale ? 2 : 1).at(-1)!
  let { pageMap } = await importPageMap(lang)

  let segment: string | undefined
  while ((segment = segments.shift())) {
    const folder = pageMap.find(
      (item): item is Folder => 'name' in item && item.name === segment
    )
    if (!folder) {
      throw new Error(`Can't find pageMap for "${segment}" in route "${route}"`)
    }
    pageMap = folder.children
  }

  return pageMap
}

export async function getRouteToFilepath(
  lang?: string
): Promise<Record<string, string>> {
  const { RouteToFilepath } = await importPageMap(lang)
  return RouteToFilepath
}
