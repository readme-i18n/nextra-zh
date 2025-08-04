/**
 * 我们特意没有将此文件放在 `rehype-twoslash-popup.ts` 中，以避免
 * 来自 `@typescript/vfs` 的警告 https://github.com/shuding/nextra/pull/3349
 */

import { rendererRich } from '@shikijs/twoslash'
import type { RendererRichOptions } from '@shikijs/twoslash'
import type { Element, ElementContent } from 'hast'
import type { Code } from 'mdast'
import { fromMarkdown } from 'mdast-util-from-markdown'
import { gfmFromMarkdown } from 'mdast-util-gfm'
import { defaultHandlers, toHast } from 'mdast-util-to-hast'
import type { ShikiTransformerContextCommon } from 'shiki'

function renderMarkdown(
  this: ShikiTransformerContextCommon,
  md: string
): ElementContent[] {
  const mdast = fromMarkdown(
    md.replaceAll(/{@link (?<link>[^}]*)}/g, '$1'), // replace jsdoc links
    { mdastExtensions: [gfmFromMarkdown()] }
  )

  return (
    toHast(mdast, {
      handlers: {
        code: (state, node: Code) => {
          if (node.lang) {
            return this.codeToHast(node.value, {
              ...this.options,
              transformers: [],
              meta: {
                __raw: node.meta ?? undefined
              },
              lang: node.lang
            }).children[0] as Element
          }

          return defaultHandlers.code(state, node)
        }
      }
    }) as Element
  ).children
}

function renderMarkdownInline(
  this: ShikiTransformerContextCommon,
  md: string,
  context?: string
): ElementContent[] {
  const text =
    context === 'tag:param' ? md.replace(/^(?<link>[\w$-]+)/, '`$1` ') : md

  const children = renderMarkdown.call(this, text)
  const [firstChild] = children
  if (
    children.length === 1 &&
    firstChild &&
    firstChild.type === 'element' &&
    firstChild.tagName === 'p'
  )
    return firstChild.children
  return children
}

export function twoslashRenderer(options?: RendererRichOptions) {
  return rendererRich({
    ...options,
    renderMarkdown,
    renderMarkdownInline,
    hast: {
      hoverToken: { tagName: 'Popup' },
      hoverPopup: { tagName: 'PopupPanel' },
      hoverCompose: ({ popup, token }) => [
        popup,
        {
          type: 'element',
          tagName: 'PopupButton',
          properties: {},
          children: [token]
        }
      ],
      ...options?.hast
    }
  })
}
