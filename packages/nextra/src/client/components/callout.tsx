import cn from 'clsx'
import type { CSSProperties, FC, HTMLAttributes, ReactNode } from 'react'
import {
  GitHubCautionIcon,
  GitHubImportantIcon,
  GitHubNoteIcon,
  GitHubTipIcon,
  GitHubWarningIcon
} from '../icons/index.js'

const TypeToEmoji = {
  default: <GitHubTipIcon height=".8em" className="x:mt-[.3em]" />,
  error: <GitHubCautionIcon height=".8em" className="x:mt-[.3em]" />,
  info: <GitHubNoteIcon height=".8em" className="x:mt-[.3em]" />,
  warning: <GitHubWarningIcon height=".8em" className="x:mt-[.3em]" />,
  important: <GitHubImportantIcon height=".8em" className="x:mt-[.3em]" />
}

type CalloutType = keyof typeof TypeToEmoji

const classes: Record<CalloutType, string> = {
  default: cn(
    'x:bg-green-100 x:dark:bg-green-900/30',
    'x:text-green-700 x:dark:text-green-500',
    'x:border-green-700 x:dark:border-green-800'
  ),
  error: cn(
    'x:bg-red-100 x:dark:bg-red-900/30',
    'x:text-red-700 x:dark:text-red-500',
    'x:border-red-700 x:dark:border-red-600'
  ),
  info: cn(
    'x:bg-blue-100 x:dark:bg-blue-900/30',
    'x:text-blue-700 x:dark:text-blue-400',
    'x:border-blue-700 x:dark:border-blue-600'
  ),
  warning: cn(
    'x:bg-yellow-50 x:dark:bg-yellow-700/30',
    'x:text-yellow-700 x:dark:text-yellow-500',
    'x:border-yellow-700'
  ),
  important: cn(
    'x:bg-purple-100 x:dark:bg-purple-900/30',
    'x:text-purple-600 x:dark:text-purple-400',
    'x:border-purple-600'
  )
}

type CalloutProps = HTMLAttributes<HTMLDivElement> & {
  /**
   * 定义提示框的样式，并在未提供 `emoji` 时决定默认图标。
   *
   * 如果设置为 `null`，则不会应用边框、背景或文本样式。
   * @default 'default'
   */
  type?: CalloutType | null
  /**
   * 提示框中显示的图标。可以是字符串形式的emoji或自定义React元素。
   *
   * 基于 `type` 的默认值：
   * - `<GitHubTipIcon />` 对应 `type: 'default'`
   * - `<GitHubCautionIcon />` 对应 `type: 'error'`
   * - `<GitHubNoteIcon />` 对应 `type: 'info'`
   * - `<GitHubWarningIcon />` 对应 `type: 'warning'`
   * - `<GitHubImportantIcon />` 对应 `type: 'important'`
   * @default 由 `type` 决定
   */
  emoji?: ReactNode
}

/**
 * 一个内置组件，用于向读者展示重要信息。
 *
 * @example
 * <Callout>
 *   **提示框**是一段旨在吸引注意力的简短文本。
 * </Callout>
 *
 * <Callout type="info">
 *   **提示框**是一段旨在吸引注意力的简短文本。
 * </Callout>
 *
 * <Callout type="warning">
 *   **提示框**是一段旨在吸引注意力的简短文本。
 * </Callout>
 *
 * <Callout type="error">
 *   **提示框**是一段旨在吸引注意力的简短文本。
 * </Callout>
 *
 * <Callout type="important">
 *   **提示框**是一段旨在吸引注意力的简短文本。
 * </Callout>
 *
 * @usage
 * ### 默认
 *
 * <Callout>帮助您更好或更轻松地完成事情的实用建议。</Callout>
 *
 * ```mdx
 * import { Callout } from 'nextra/components'
 *
 * <Callout>帮助您更好或更轻松地完成事情的实用建议。</Callout>
 * ```
 *
 * ### 信息
 *
 * <Callout type="info">
 *   即使用户快速浏览内容，也应了解的有用信息。
 * </Callout>
 *
 * ```mdx
 * import { Callout } from 'nextra/components'
 *
 * <Callout type="info">
 *   即使用户快速浏览内容，也应了解的有用信息。
 * </Callout>
 * ```
 *
 * ### 警告
 *
 * <Callout type="warning">
 *   需要用户立即关注的紧急信息，以避免问题。
 * </Callout>
 *
 * ```mdx
 * import { Callout } from 'nextra/components'
 *
 * <Callout type="warning">
 *   需要用户立即关注的紧急信息，以避免问题。
 * </Callout>
 * ```
 *
 * ### 错误
 *
 * <Callout type="error">
 *   关于某些行动的风险或负面结果的建议。
 * </Callout>
 *
 * ```mdx
 * import { Callout } from 'nextra/components'
 *
 * <Callout type="error">
 *   关于某些行动的风险或负面结果的建议。
 * </Callout>
 * ```
 *
 * ### 重要
 *
 * <Callout type="important">
 *   用户需要了解的关键信息，以实现他们的目标。
 * </Callout>
 *
 * ```mdx
 * import { Callout } from 'nextra/components'
 *
 * <Callout type="important">
 *   用户需要了解的关键信息，以实现他们的目标。
 * </Callout>
 * ```
 *
 * ### 自定义图标
 *
 * <Callout type="info" emoji="⭐">Nextra在GitHub上有13k星！</Callout>
 *
 * ```mdx
 * import { Callout } from 'nextra/components'
 *
 * <Callout type="info" emoji="⭐">Nextra在GitHub上有13k星！</Callout>
 * ```
 */
export const Callout: FC<CalloutProps> = ({
  className,
  type = 'default',
  emoji = type && TypeToEmoji[type],
  ...props
}) => {
  return (
    <div
      className={cn(
        'nextra-callout x:overflow-x-auto x:not-first:mt-[1.25em] x:flex x:rounded-lg x:border x:py-[.5em] x:pe-[1em]',
        'x:contrast-more:border-current!',
        type && classes[type]
      )}
    >
      <div
        className="x:select-none x:text-[1.25em] x:ps-[.6em] x:pe-[.4em]"
        style={style}
        data-pagefind-ignore="all"
      >
        {emoji}
      </div>
      <div className={cn('x:w-full x:min-w-0', className)} {...props} />
    </div>
  )
}

const style: CSSProperties = {
  fontFamily: '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
}
