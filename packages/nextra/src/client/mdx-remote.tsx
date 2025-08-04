import { useMDXComponents } from 'next-mdx-import-source-file'
import type { FC } from 'react'
import { evaluate } from './evaluate.js'
import type { Scope } from './evaluate.js'
import type { MDXComponents } from './mdx-components.js'

export type MDXRemoteProps = Readonly<{
  /**
   * 将名称映射到 React 组件的对象。
   * 使用的键名将是 MDX 中可访问的名称。
   *
   * @example
   * `{ ComponentName: Component }` 在 MDX 中将作为 `<ComponentName>` 可访问。
   */
  components?: MDXComponents
  /**
   * 用于 MDX 内容中的透传变量。
   * 这些变量将在 MDX 作用域中可用。
   */
  scope?: Scope
  /**
   * Nextra 的 [`compileMdx` 函数](https://nextra.site/api/compilemdx) 编译的原始 JavaScript MDX 源代码。
   */
  compiledSource: string
}>

/**
 * 一个渲染编译后 MDX 内容的 React 组件。
 *
 * @returns 渲染 MDX 内容的 React 元素。
 * @example
 * ```mdx filename="example.mdx"
 * import { compileMdx } from 'nextra/compile'
 * import { MDXRemote } from 'nextra/mdx-remote'
 *
 * <MDXRemote
 *   compiledSource={await compileMdx('# Hello {myVariable} <MyComponent />')}
 *   components={{ MyComponent: () => <div>My Component</div> }}
 *   scope={{ myVariable: 'World' }}
 * />
 * ```
 */
export const MDXRemote: FC<MDXRemoteProps> = ({
  scope,
  components,
  compiledSource
}) => {
  const MDXContent = evaluate(
    compiledSource,
    useMDXComponents(components),
    scope
  ).default

  return <MDXContent />
}
