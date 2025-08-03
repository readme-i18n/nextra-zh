'use no memo'

import type { ComponentProps } from 'react'
import { File } from './file.js'
import { Folder } from './folder.js'
import { Tree } from './tree.js'

// Workaround to fix
// Error: Cannot access File.propTypes on the server. You cannot dot into a client
// module from a server component. You can only pass the imported name through.
/**
 * 一个内置组件，用于可视化展示文件树结构。
 *
 * @example
 * 点击文件夹测试文件树的动态功能。
 *
 * <FileTree>
 *   <FileTree.Folder name="content" defaultOpen>
 *     <FileTree.File name="_meta.js" />
 *     <FileTree.File name="contact.md" />
 *     <FileTree.File name="index.mdx" />
 *     <FileTree.Folder name="about">
 *       <FileTree.File name="_meta.js" />
 *       <FileTree.File name="legal.md" />
 *       <FileTree.File name="index.mdx" />
 *     </FileTree.Folder>
 *   </FileTree.Folder>
 * </FileTree>
 *
 * @usage
 * 通过在 `<FileTree>` 中嵌套 `<FileTree.Folder>` 和 `<FileTree.File>` 组件来创建文件树结构。
 * 使用 `name` 属性为每个文件或文件夹命名。使用 `defaultOpen` 设置文件夹在加载时是否展开。
 *
 * ```mdx filename="MDX"
 * import { FileTree } from 'nextra/components'
 *
 * <FileTree>
 *   <FileTree.Folder name="content" defaultOpen>
 *     <FileTree.File name="_meta.js" />
 *     <FileTree.File name="contact.md" />
 *     <FileTree.File name="index.mdx" />
 *     <FileTree.Folder name="about">
 *       <FileTree.File name="_meta.js" />
 *       <FileTree.File name="legal.md" />
 *       <FileTree.File name="index.mdx" />
 *     </FileTree.Folder>
 *   </FileTree.Folder>
 * </FileTree>
 * ```
 */
export const FileTree = Object.assign(
  (props: ComponentProps<typeof Tree>) => <Tree {...props} />,
  { Folder, File }
)
