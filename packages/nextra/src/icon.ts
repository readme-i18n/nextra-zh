/*
 * 该文件用于在 tsup 补丁中为 SVG 文件生成类型。
 **/
import type { FC, SVGProps } from 'react'

declare const ReactComponent: FC<SVGProps<SVGElement>>

export { ReactComponent }
