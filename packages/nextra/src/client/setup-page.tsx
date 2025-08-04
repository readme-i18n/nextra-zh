// should be used on server
'use no memo'

/*
 * ⚠️ 注意！
 * 此文件不应直接使用，仅在 loader.ts 中使用
 */
import { useMDXComponents as getMDXComponents } from 'next-mdx-import-source-file'
import type { ComponentProps, FC } from 'react'
import { createElement } from 'react'
import type { MDXWrapper } from '../types.js'

const Wrapper = getMDXComponents().wrapper

type WrapperProps = ComponentProps<MDXWrapper>

export function HOC_MDXWrapper(
  MDXContent: MDXWrapper,
  hocProps: Omit<WrapperProps, 'children'>
): FC<WrapperProps> {
  return function MDXWrapper(props) {
    const children = createElement(MDXContent, props)

    return Wrapper ? <Wrapper {...hocProps}>{children}</Wrapper> : children
  }
}
