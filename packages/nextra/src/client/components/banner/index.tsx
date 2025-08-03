import cn from 'clsx'
import type { FC, HTMLAttributes } from 'react'
import { XIcon } from '../../icons/index.js'
import { CloseBannerButton } from './close-banner-button.js'
import { ClientBanner } from './index.client'

const BANNER_CLASS_NAME = 'nextra-banner'

type BannerProps = HTMLAttributes<HTMLDivElement> & {
  /**
   * 是否可关闭横幅。
   * @default true
   */
  dismissible?: boolean
  /**
   * 用于保存横幅状态的存储键名。
   * @default 'nextra-banner'
   */
  storageKey?: string
}

/**
 * 一个内置组件，用于在网站顶部显示横幅。可用于显示警告或通知。
 *
 * @example
 * ### Banner key
 *
 * 横幅可以被关闭。默认情况下，它使用
 * [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
 * 在客户端保存横幅状态。
 *
 * 如果您更新了横幅文本，应更改键名以确保横幅再次显示。最佳实践是始终为当前文本使用描述性键名，例如：
 *
 * ![Banner](https://nextra.site/assets/docs/banner.png)
 *
 * ```jsx filename="app/layout.jsx" {7-11}
 * import { Layout } from 'my-nextra-theme'
 * import { Banner } from 'nextra/components'
 *
 * export default function MyLayout({ children, ...props }) {
 *   return (
 *     <Layout>
 *       <Banner storageKey="2.0-release">
 *         <a href="https://nextra.site" target="_blank">
 *           🎉 Nextra 2.0 is released. Read more →
 *         </a>
 *       </Banner>
 *       {children}
 *     </Layout>
 *   )
 * }
 * ```
 */
export const Banner: FC<BannerProps> = ({
  dismissible = true,
  storageKey = BANNER_CLASS_NAME,
  className,
  ...props
}) => {
  if (!props.children) {
    return null
  }
  const hideBannerScript = `try{document.querySelector('.${BANNER_CLASS_NAME}').classList.toggle('x:hidden',localStorage.getItem(${JSON.stringify(storageKey)}))}catch(e){}`

  return (
    <ClientBanner
      className={cn(
        BANNER_CLASS_NAME,
        'x:max-md:sticky x:top-0 x:z-30 x:flex x:items-center x:px-2',
        'x:text-slate-50 x:dark:text-white x:bg-neutral-900 x:dark:bg-[linear-gradient(1deg,#383838,#212121)]',
        'x:print:[display:none]' // to not match `x:[.nextra-banner:not([class$=hidden])~&]` class
      )}
      // Because we update class in `<script>`
      suppressHydrationWarning
    >
      <div
        className={cn(
          'x:w-full x:text-center x:font-medium x:text-sm x:py-2.5',
          className
        )}
        {...props}
      />
      {dismissible && (
        <CloseBannerButton storageKey={storageKey}>
          <script dangerouslySetInnerHTML={{ __html: hideBannerScript }} />
          <XIcon height="1em" />
        </CloseBannerButton>
      )}
    </ClientBanner>
  )
}
