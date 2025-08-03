'use client'

/**
 * 本文件中的代码灵感来源于 https://github.com/reach/reach-ui/blob/43f450db7bcb25a743121fe31355f2294065a049/packages/skip-nav/src/reach-skip-nav.tsx，这是 @reach/skip-nav 库的一部分。
 *
 * @reach/skip-nav 的许可如下：
 * MIT 许可证 (MIT)
 *
 * 版权所有 (c) 2018-2023, React Training LLC
 *
 * 特此免费授予任何获得本软件及相关文档文件（"软件"）副本的人，无限制地处理
 * 本软件，包括但不限于使用、复制、修改、合并、发布、分发、再许可和/或销售
 * 软件的副本，并允许向其提供软件的人这样做，但须符合以下条件：
 *
 * 上述版权声明和本许可声明应包含在所有
 * 软件的副本或主要部分中。
 *
 * 本软件按"原样"提供，不提供任何形式的明示或暗示保证，包括但不限于对适销性、适用性
 * 和非侵权的保证。在任何情况下，作者或版权持有人均不对任何索赔、损害或其他责任负责，
 * 无论是在合同、侵权或其他行为中产生的，还是与本软件或使用或其他交易有关。
 *
 * 来源：https://github.com/reach/reach-ui/blob/43f450db7bcb25a743121fe31355f2294065a049/LICENSE
 */
import { Button } from '@headlessui/react'
import type { ButtonProps } from '@headlessui/react'
import cn from 'clsx'
import type { FC } from 'react'

const DEFAULT_ID = 'nextra-skip-nav'
const DEFAULT_LABEL = 'Skip to Content'

export const SkipNavLink: FC = ({
  // Give the option to the user to pass a falsy other than undefined to remove the default styles
  className,
  id = DEFAULT_ID,
  children = DEFAULT_LABEL
}: Pick<ButtonProps, 'className' | 'id' | 'children'>) => {
  return (
    <Button
      as="a"
      href={`#${id}`}
      className={({ focus }) =>
        cn(
          'nextra-skip-nav',
          focus
            ? 'x:nextra-focus x:fixed x:z-50 x:my-3 x:mx-4 x:rounded-lg x:px-3 x:py-2 x:text-sm x:font-bold x:bg-nextra-bg x:border x:border-current'
            : 'x:sr-only',
          className
        )
      }
    >
      {children}
    </Button>
  )
}
