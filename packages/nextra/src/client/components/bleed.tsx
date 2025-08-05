import cn from 'clsx'
import type { FC, HTMLAttributes } from 'react'

/**
 * 一个内置组件，用于将内容略微扩展超出容器宽度，`<Bleed>` 允许内容在两侧溢出。
 *
 * 它非常适合增强图形元素的呈现，提供更具沉浸感和视觉吸引力的阅读体验。
 *
 * @example
 *
 * 你可以在其中放入文本、图片、视频或任何组件。
 *
 * ### 文本
 *
 * <Bleed className="bg-white dark:bg-neutral-800 px-16 py-10 text-center border">
 *   _写作没有什么秘诀。你只需要坐在打字机前，然后 **倾注心血**。_
 *
 *   — 欧内斯特·海明威
 * </Bleed>
 *
 * ### 视频
 *
 * <Bleed>
 *   <iframe
 *     className="aspect-video w-full"
 *     src="https://youtube.com/embed/3hccXiXI0u8"
 *     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
 *     allowFullScreen
 *   />
 * </Bleed>
 *
 * ### 全出血
 *
 * 你甚至可以通过使用 `<Bleed full>` 使其 full-bleed：
 *
 * <Bleed full>![Nextra](/opengraph-image.jpeg)</Bleed>
 *
 * @usage
 *
 * ```mdx filename="MDX"
 * import { Bleed } from 'nextra/components'
 *
 * <Bleed>嘿，我可以在这里使用 **Markdown** 语法。</Bleed>
 *
 * <Bleed full>![Nextra](https://nextra.site/og.jpeg)</Bleed>
 *
 * <Bleed full>
 *   <iframe
 *     src="https://codesandbox.io/embed/swr-states-4une7"
 *     width="100%"
 *     height="500px"
 *     title="SWR-States"
 *   />
 * </Bleed>
 * ```
 */
export const Bleed: FC<
  {
    /** 将内容扩展到其容器的边缘。 */
    full: boolean
  } & HTMLAttributes<HTMLDivElement>
> = ({ full, className, ...props }) => {
  return (
    <div
      className={cn(
        'nextra-bleed x:relative x:-mx-4 x:mt-[1.25em] x:md:-mx-8 x:2xl:-mx-24',
        'x:z-1', // for firefox https://github.com/shuding/nextra/issues/2824
        full && [
          // 'md:mx:[calc(-50vw+50%+8rem)',
          'x:xl:me-[calc(50%-50vw)] x:xl:ms-[calc(50%-50vw+16rem)]'
        ],
        className
      )}
      {...props}
    />
  )
}
