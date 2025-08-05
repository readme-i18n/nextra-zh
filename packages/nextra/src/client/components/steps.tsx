import cn from 'clsx'
import type { FC, HTMLAttributes } from 'react'
import { useId } from 'react'

/**
 * 一个内置组件，用于将编号列表转换为步骤的视觉表示。
 *
 * @example
 * <Steps>
 *
 * ### 这是第一步
 *
 * 这是第一步的描述。
 *
 * ### 这是第二步
 *
 * 这是第二步的描述。
 *
 * ### 这是第三步
 *
 * 这是第三步的描述。
 *
 * </Steps>
 *
 * @usage
 * 用 `<Steps>` 组件包裹一组 Markdown 标题（从 `<h2>` 到 `<h6>`）以将它们显示为视觉步骤。您可以根据页面上的内容层次结构选择合适的标题级别。
 *
 * ```mdx filename="MDX" {7-15}
 * import { Steps } from 'nextra/components'
 *
 * ## 开始使用
 *
 * 这里是一些描述。
 *
 * <Steps>
 * ### 步骤 1
 *
 * 步骤 1 的内容。
 *
 * ### 步骤 2
 *
 * 步骤 2 的内容。
 * </Steps>
 * ```
 *
 * ### 从目录中排除标题
 *
 * 要从 `<Steps>` 组件（或任何其他标题）中排除标题出现在目录中，请将 Markdown 标题 `### ...` 替换为用花括号包裹的 `<h3>` HTML 元素。
 *
 * ```diff filename="MDX"
 * <Steps>
 * - ### 步骤 1
 * + {<h3>步骤 1</h3>}
 *
 * 步骤 1 的内容。
 * </Steps>
 * ```
 */
export const Steps: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  style,
  ...props
}) => {
  const id = useId().replaceAll(':', '')
  return (
    <div
      className={cn(
        'nextra-steps x:ms-4 x:mb-12 x:border-s x:border-gray-200 x:ps-6',
        'x:dark:border-neutral-800',
        className
      )}
      style={{
        ...style,
        // @ts-expect-error -- fixme
        '--counter-id': id
      }}
      {...props}
    >
      {children}
    </div>
  )
}
