import { ArrowRightIcon } from '@components/icons'
import type { Metadata } from 'next'
import Image from 'next/image'
import { Link } from 'nextra-theme-docs'
import { MdxIcon } from 'nextra/icons'
import docsCardDark from 'public/assets/card-1.dark.png'
import docsCard from 'public/assets/card-1.png'
import { Feature, Features } from './_components/features'
import { MotionDiv, MotionH3 } from './_components/framer-motion'
import { I18n } from './_components/i18n-demo'
import styles from './page.module.css'
import './page.css'
import type { FC } from 'react'

// ...导入保持不变...

export const metadata: Metadata = {
  description:
    '使用 Nextra 快速构建可自定义且内容丰富的网站。基于 Next.js，支持无缝的 Markdown、可自定义的主题、文件约定和与 MDX 的轻松集成，是构建文档、博客和静态网站的理想选择。'
}

const IndexPage: FC = () => {
  return (
    <div className="home-content">
      <div className="content-container">
        <h1 className="headline">
          使用 Next.js 和 MDX <br className="max-sm:hidden" />
          构建精美网站
        </h1>
        <p className="subtitle">
          简单、强大、灵活的网站生成框架
          <br className="max-md:hidden" />
          拥有你喜爱的{' '}
          <Link href="https://nextjs.org" className="text-current">
            Next.js
          </Link>{' '}
          所有特性。
        </p>
        <p className="subtitle">
          <Link className={styles.cta} href="/docs">
            开始使用 <span>→</span>
          </Link>
        </p>
      </div>
      <div className="features-container x:border-b nextra-border">
        <div className="content-container">
          <Features>
            <Feature
              index={0}
              large
              centered
              id="docs-card"
              href="/docs/docs-theme/start"
            >
              <Image src={docsCard} alt="背景图" loading="eager" />
              <Image
                src={docsCardDark}
                alt="背景图（深色模式）"
                loading="eager"
              />
              <h3>
                几分钟内构建 <br className="show-on-mobile" />
                强大的文档站点
              </h3>
            </Feature>
            <Feature index={1} centered href="/docs/guide/image">
              <h3>
                链接和图片始终 <br className="show-on-mobile" />
                <span className="font-light">自动优化</span>
              </h3>
              <p className="mb-8 text-start">
                Nextra 会自动将 Markdown 中的链接与图片转换为{' '}
                <Link href="https://nextjs.org/docs/routing/introduction#linking-between-pages">
                  Next.js Link
                </Link>{' '}
                与{' '}
                <Link href="https://nextjs.org/docs/app/getting-started/images#local-images">
                  Next.js Image
                </Link>
                ，避免页面跳转迟缓和布局抖动。
              </p>
              <div>
                <div className={styles.optimization}>
                  <div style={{ fontSize: '.9rem' }} className="leading-8">
                    <code>[了解更多](/more)</code>
                    <br />
                    <code>![Hero](/hero.png)</code>
                  </div>
                </div>
                <ArrowRightIcon
                  width="1.2em"
                  className="mx-auto my-6 rotate-90 text-neutral-600 dark:text-neutral-400"
                />
                <div className={styles.optimization}>
                  <div style={{ fontSize: '.9rem' }} className="leading-8">
                    <code>{'<Link .../>'}</code>
                    <br />
                    <code>{'<Image .../>'}</code>
                  </div>
                </div>
              </div>
            </Feature>
            <Feature
              index={2}
              id="highlighting-card"
              href="/docs/guide/syntax-highlighting"
            >
              <h3>
                高级语法高亮 <br className="show-on-mobile" />
                解决方案
              </h3>
              <p>
                构建时高效可靠的语法高亮，使用{' '}
                <Link href="https://shiki.style">Shiki</Link> 驱动。
              </p>
            </Feature>
            <Feature index={3} href="/docs/guide/i18n">
              <h3>
                国际化（i18n） <br className="show-on-mobile" />
                简单至极
              </h3>
              <p className="mb-4">
                只需将页面放入不同语言的文件夹中，Nextra 和 Next.js 将自动处理其余部分。
              </p>
              <I18n />
            </Feature>
            <Feature
              index={4}
              centered
              className="flex flex-col items-center justify-center bg-[url(/assets/gradient-bg.jpeg)] bg-cover bg-center text-white"
              href="/docs/guide/markdown"
            >
              <MdxIcon className="w-4/6 [filter:drop-shadow(0_2px_10px_rgba(0,0,0,.1))]" />
              <p style={{ textShadow: '0 2px 4px rgb(0 0 0 / 20%)' }}>
                <Link
                  href="https://mdxjs.com/blog/v3"
                  className="!text-current"
                >
                  MDX 3
                </Link>{' '}
                让你在 Markdown 中使用组件，
                <br className="hide-medium" />
                性能比 v1 提升巨大。
              </p>
            </Feature>
            <Feature
              index={5}
              centered
              className="feat-darkmode flex items-center justify-center"
            >
              <MotionDiv
                animate={{
                  backgroundPosition: [
                    '0% 0%',
                    '50% 40%',
                    '50% 40%',
                    '100% 100%'
                  ],
                  backgroundImage: [
                    'radial-gradient(farthest-corner, #e2e5ea, #e2e5ea)',
                    'radial-gradient(farthest-corner, #06080a, #e2e5ea)',
                    'radial-gradient(farthest-corner, #06080a, #e2e5ea)',
                    'radial-gradient(farthest-corner, #e2e5ea, #e2e5ea)'
                  ]
                }}
                transition={{
                  backgroundPosition: {
                    times: [0, 0.5, 0.5, 1],
                    repeat: Infinity,
                    duration: 10,
                    delay: 1
                  },
                  backgroundImage: {
                    times: [0, 0.2, 0.8, 1],
                    repeat: Infinity,
                    duration: 10,
                    delay: 1
                  }
                }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundImage:
                    'radial-gradient(farthest-corner, #06080a, #e2e5ea)',
                  backgroundSize: '400% 400%',
                  backgroundRepeat: 'no-repeat'
                }}
              />
              <MotionH3
                animate={{
                  color: ['#dae5ff', '#fff', '#fff', '#dae5ff']
                }}
                transition={{
                  color: {
                    times: [0.25, 0.35, 0.7, 0.8],
                    repeat: Infinity,
                    duration: 10,
                    delay: 1
                  }
                }}
                style={{
                  position: 'relative',
                  mixBlendMode: 'difference'
                }}
              >
                内置 <br />
                暗黑模式
              </MotionH3>
            </Feature>
            <Feature
              index={6}
              large
              id="search-card"
              href="/docs/docs-theme/theme-configuration#search"
            >
              <h3>
                全文搜索，<br />
                无需配置
              </h3>
              <p className="z-2">
                Nextra 会在构建时自动索引内容，并通过{' '}
                <Link href="https://github.com/cloudcannon/pagefind">
                  Pagefind
                </Link>{' '}
                提供超快速的全文搜索。
              </p>
              <div className="z-1 absolute inset-0 size-full bg-[linear-gradient(to_right,white_250px,_transparent)] max-sm:hidden dark:bg-[linear-gradient(to_right,#202020_250px,_transparent)]" />
              <video
                autoPlay
                loop
                muted
                playsInline
                className="x:focus-visible:nextra-focus block dark:hidden"
              >
                <source src="/assets/search.mp4" type="video/mp4" />
              </video>
              <video
                autoPlay
                loop
                muted
                playsInline
                className="x:focus-visible:nextra-focus hidden -translate-x-4 dark:block"
              >
                <source src="/assets/search-dark.mp4" type="video/mp4" />
              </video>
            </Feature>
            <Feature
              index={7}
              large
              id="fs-card"
              style={{
                color: 'white',
                backgroundImage:
                  'url(/assets/routing.png), url(/assets/gradient-bg.jpeg)',
                backgroundSize: '140%, 180%',
                backgroundPosition: '130px -8px, top',
                backgroundRepeat: 'no-repeat',
                textShadow: '0 1px 6px rgb(38 59 82 / 18%)',
                aspectRatio: '1.765'
              }}
              href="/docs/docs-theme/page-configuration"
            >
              <h3>
                文件即页面，<br />
                直观管理页面结构
              </h3>
            </Feature>
            <Feature
              index={8}
              id="a11y-card"
              style={{
                backgroundSize: 750,
                backgroundRepeat: 'no-repeat',
                minHeight: 288
              }}
            >
              <h3>无障碍支持是优先事项</h3>
              <p>
                Nextra 支持系统偏好设置，如 <b>提高对比度</b> 和{' '}
                <b>减少动画</b>。
              </p>
            </Feature>
            <Feature index={9} href="/docs/guide/ssg">
              <h3>
                下一代混合渲染
              </h3>
              <p className="mr-6">
                利用 Next.js 的混合渲染能力处理 Markdown 内容，包括{' '}
                <Link href="https://nextjs.org/docs/app/building-your-application/rendering/server-components">
                  Server Components
                </Link>、{' '}
                <Link href="https://nextjs.org/docs/app/building-your-application/rendering/client-components">
                  Client Components
                </Link> 与{' '}
                <Link href="https://nextjs.org/docs/app/building-your-application/data-fetching/incremental-static-regeneration">
                  ISR（增量静态生成）
                </Link>。
              </p>
            </Feature>
            <Feature index={10} large>
              <h3>更多功能...</h3>
              <p>
                SEO / RTL 布局 / 可插拔主题 / 内置组件 / Git 最后编辑时间 /
                多文档站点...
                <br />
                更多可能等待你来探索。
              </p>
              <p className="subtitle">
                <Link className="no-underline" href="/docs">
                  立即开始使用 Nextra →
                </Link>
              </p>
            </Feature>
          </Features>
        </div>
      </div>
    </div>
  )
}

export default IndexPage
