import cn from 'clsx'
import NextLink from 'next/link'
import type { FC, HTMLAttributes, ReactElement, ReactNode } from 'react'

const Card: FC<{
  title: string
  icon?: ReactElement
  arrow?: boolean
  href: string
  children?: ReactNode
  /** CSS 类名。 */
  className?: string
}> = ({ children, title, icon, arrow, href, className, ...props }) => {
  return (
    <NextLink
      href={href}
      className={cn(
        'x:group',
        'x:focus-visible:nextra-focus nextra-card x:flex x:flex-col x:justify-start x:overflow-hidden x:rounded-lg x:border x:border-gray-200',
        'x:text-current x:no-underline x:dark:shadow-none',
        'x:hover:shadow-gray-100 x:dark:hover:shadow-none x:shadow-gray-100',
        'x:active:shadow-sm x:active:shadow-gray-200',
        'x:transition-all x:duration-200 x:hover:border-gray-300',
        children
          ? 'x:bg-gray-100 x:shadow x:dark:border-neutral-700 x:dark:bg-neutral-800 x:dark:text-gray-50 x:hover:shadow-lg x:dark:hover:border-neutral-500 x:dark:hover:bg-neutral-700'
          : 'x:bg-transparent x:shadow-sm x:dark:border-neutral-800 x:hover:bg-slate-50 x:hover:shadow-md x:dark:hover:border-neutral-700 x:dark:hover:bg-neutral-900',
        className
      )}
      {...props}
    >
      {children}
      <span
        className={cn(
          'x:flex x:font-semibold x:items-center x:gap-2 x:p-4 x:text-gray-700 x:hover:text-gray-900',
          arrow && [
            'x:after:content-["→"] x:after:transition-transform x:after:duration-75',
            'x:group-hover:after:translate-x-0.5',
            'x:group-focus:after:translate-x-0.5'
          ],
          children
            ? 'x:dark:text-gray-300 x:dark:hover:text-gray-100'
            : 'x:dark:text-neutral-200 x:dark:hover:text-neutral-50'
        )}
        title={typeof title === 'string' ? title : undefined}
      >
        {icon}
        <span className="_truncate">{title}</span>
      </span>
    </NextLink>
  )
}

const _Cards: FC<
  {
    /**
     * 列数。
     * @default 3
     */
    num?: number
  } & HTMLAttributes<HTMLDivElement>
> = ({ children, num = 3, className, style, ...props }) => {
  return (
    <div
      className={cn(
        'nextra-cards x:mt-4 x:gap-4 x:grid',
        'not-prose', // for nextra-theme-blog
        className
      )}
      {...props}
      style={{
        ...style,
        ['--rows' as string]: num
      }}
    >
      {children}
    </div>
  )
}

/**
 * 一个内置组件，允许你以视觉上吸引人的卡片格式显示内容。它包括添加图标、标题、链接和相关内容图像的选项。
 *
 * @example
 * ### 分组卡片
 *
 * <Cards>
 *   <Cards.Card
 *     icon={<WarningIcon />}
 *     title="Callout"
 *     href="/docs/built-ins/callout"
 *   />
 *   <Cards.Card
 *     icon={<CardsIcon />}
 *     title="Tabs"
 *     href="/docs/built-ins/tabs"
 *   />
 *   <Cards.Card
 *     icon={<OneIcon />}
 *     title="Steps"
 *     href="/docs/built-ins/steps"
 *   />
 * </Cards>
 *
 * ### 单张卡片
 *
 * <br />
 * <Cards.Card
 *   icon={<BoxIcon />}
 *   title="About Nextra"
 *   href="/about"
 *   arrow
 * />
 *
 * @usage
 * ### 分组卡片
 *
 * 将 `<Cards>` 组件导入到你的页面，该组件包括 `<Card>` 组件。
 *
 * 然后，可选地导入你想要使用的图标。要创建一组卡片，请按照下面的示例操作，其中 `<Cards.Card>` 组件用于创建卡片，而 `<Cards>` 组件用于将多张卡片分组在一起。
 *
 * ```mdx filename="MDX"
 * import { Cards } from 'nextra/components'
 * import { CardsIcon, OneIcon, WarningIcon } from '../path/with/your/icons'
 *
 * <Cards>
 *   <Cards.Card
 *     icon={<WarningIcon />}
 *     title="Callout"
 *     href="/docs/built-ins/callout"
 *   />
 *   <Cards.Card
 *     icon={<CardsIcon />}
 *     title="Tabs"
 *     href="/docs/built-ins/tabs"
 *   />
 *   <Cards.Card
 *     icon={<OneIcon />}
 *     title="Steps"
 *     href="/docs/built-ins/steps"
 *   />
 * </Cards>
 * ```
 *
 * ### 单张卡片
 *
 * 未包裹在 `<Cards>` 组件中的 `<Card>` 不会与其他卡片分组。如果你想要以不同于页面上其他卡片的格式显示单张卡片，这可能很有用。
 *
 * ```mdx filename="MDX"
 * <Cards.Card
 *   icon={<BoxIcon />}
 *   title="About Nextra"
 *   href="/about"
 *   arrow
 * />
 * ```
 */
export const Cards = Object.assign(_Cards, { displayName: 'Cards', Card })
