import type { ComponentPropsWithoutRef, FC, JSX } from 'react'
import type { MDXWrapper } from '../types.js'
import { ImageZoom } from './components/image-zoom.js'
import { Anchor } from './mdx-components/anchor.js'

/**
 * 一个有效的 JSX 字符串组件。
 */
type StringComponent = Exclude<keyof JSX.IntrinsicElements, 'img' | 'a'>

/**
 * 任何允许的 JSX 组件。
 */
type Component<Props> = FC<Props> | StringComponent

export interface NestedMDXComponents {
  [key: string]: NestedMDXComponents | Component<any>
}

/**
 * MDX 组件可以作为 `components` 传递。
 *
 * 键是要覆盖的元素名称，值是要渲染的替代组件。
 */
export type MDXComponents = NestedMDXComponents & {
  [Key in StringComponent]?: FC<ComponentPropsWithoutRef<Key>>
} & {
  /**
   * 如果定义了包装组件，MDX 内容将被包装在其中。
   */
  wrapper?: MDXWrapper
} & DefaultMdxComponents

type DefaultMdxComponents = {
  /**
   * Nextra 的 `<ImageZoom />` 组件，具有缩放功能。
   * 对静态图像使用 `<NextImage>`，对其他情况回退到标准的 `<img>` 元素。
   */
  img?: typeof ImageZoom
  /**
   * Nextra 的 `<Anchor />` 组件，用于渲染链接。
   * 对内部导航使用 `<NextLink>`，对外部链接回退到常规的 `<a>` 元素。
   */
  a?: typeof Anchor
}

const DEFAULT_COMPONENTS = {
  img: ImageZoom,
  a: Anchor
} satisfies DefaultMdxComponents

/**
 * 获取当前的 MDX 组件。
 * @returns 当前的 MDX 组件集合。
 */
export type UseMDXComponents<
  /**
   * 默认的 MDX 组件
   */
  DefaultMDXComponents extends MDXComponents
> = {
  <components extends MDXComponents>(
    /**
     * 一个对象，其中：
     * - 键是要覆盖的 HTML 元素名称。
     * - 值是要渲染的替代组件。
     * @remarks `MDXComponents`
     */
    components: components
  ): DefaultMDXComponents & components
  (): DefaultMDXComponents
}

export const useMDXComponents: UseMDXComponents<typeof DEFAULT_COMPONENTS> = <
  T
>(
  components?: T
) => {
  return {
    ...DEFAULT_COMPONENTS,
    ...components
  }
}
