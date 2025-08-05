'use client'

import { useEffect, useState } from 'react'
import type { FC, ReactElement } from 'react'
import { evaluate } from '../evaluate.js'
import type { MDXRemoteProps } from '../mdx-remote.js'
import { Callout } from './callout.js'

type PlaygroundProps = {
  /**
   * 包含源 MDX 的字符串。
   * @example '# hello world <br /> nice to see you'
   */
  source: string
  /**
   * 加载时的回退组件。
   * @default null
   */
  fallback?: ReactElement | null
} & Pick<MDXRemoteProps, 'components' | 'scope'>

/**
 * 一个内置组件，允许你编写仅在客户端渲染的 Nextra 兼容 MDX。
 * @example
 * <PlaygroundDemo />
 *
 * @usage
 * ```mdx filename="Basic Usage"
 * import { Playground } from 'nextra/components'
 *
 * # Playground
 *
 * 下面是一个 playground 组件。它与你的 MDX 完美融合。
 *
 * <Playground
 *   source="## Hello world"
 *   components={{ h2: props => <h2 {...props} className="myClass" /> }}
 * />
 * ```
 *
 * 你也可以像这样指定一个回退组件：
 *
 * ```mdx filename="Usage with Fallback"
 * import { Playground } from 'nextra/components'
 *
 * <Playground
 *   source="## Hello world"
 *   components={{ h2: props => <h2 {...props} className="myClass" /> }}
 *   fallback={<div>Loading playground...</div>}
 * />
 * ```
 *
 * ### 避免无样式输出
 *
 * 为了防止无样式的元素，从你的 `mdx-components` 文件中导入 `useMDXComponents`。
 * 调用此函数并将返回的组件传递给 `components` 属性。你也可以将你的自定义组件作为第一个参数包含进去：
 *
 * ```mdx {1,6-8}
 * import { Playground } from 'nextra/components'
 * import { useMDXComponents } from '../path/to/my/mdx-components'
 *
 * <Playground
 *   source="## Hello world"
 *   components={useMDXComponents({
 *     h2: props => <h2 {...props} className="myClass" />
 *   })}
 *   fallback={<div>Loading playground...</div>}
 * />
 * ```
 */
export const Playground: FC<PlaygroundProps> = ({
  source,
  fallback = null,
  components,
  scope
}) => {
  const [compiledSource, setCompiledSource] = useState('')
  const [error, setError] = useState<unknown>()

  useEffect(() => {
    async function doCompile() {
      // Importing in useEffect to not increase global bundle size
      const { compileMdx } = await importCompile()
      try {
        const rawJs = await compileMdx(source)
        setCompiledSource(rawJs)
        setError(null)
      } catch (error) {
        setError(error)
      }
    }

    doCompile()
  }, [source])

  if (error) {
    return (
      <Callout type="error">
        <b>Could not compile code</b>
        <br />
        {error instanceof Error
          ? `${error.name}: ${error.message}`
          : String(error)}
      </Callout>
    )
  }

  if (compiledSource) {
    // `<MDXRemote>` cannot be used here because `useMDXComponents` may include components that
    // are only available on the server.
    const MDXContent = evaluate(compiledSource, components, scope).default
    return <MDXContent />
  }

  return fallback
}

// Otherwise react-compiler fails
function importCompile() {
  return import('../../server/compile.js')
}
