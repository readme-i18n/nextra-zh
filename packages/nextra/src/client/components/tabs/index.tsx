'use no memo'

import type { ComponentProps } from 'react'
import { Tabs as _Tabs, Tab } from './index.client.js'

// Workaround to fix
// Error: Cannot access Tab.propTypes on the server. You cannot dot into a client module from a
// server component. You can only pass the imported name through.
/**
 * 一个内置组件，用于创建带标签的内容，帮助以紧凑、交互式的布局组织相关信息。
 *
 * @example
 * <Tabs items={['pnpm', 'npm', 'yarn']}>
 *   <Tabs.Tab>**pnpm**: Fast, disk space efficient package manager.</Tabs.Tab>
 *   <Tabs.Tab>**npm** is a package manager for the JavaScript programming language.</Tabs.Tab>
 *   <Tabs.Tab>**Yarn** is a software packaging system.</Tabs.Tab>
 * </Tabs>
 *
 * @usage
 * ```mdx
 * import { Tabs } from 'nextra/components'
 *
 * <Tabs items={['pnpm', 'npm', 'yarn']}>
 *   <Tabs.Tab>**pnpm**: Fast, disk space efficient package manager.</Tabs.Tab>
 *   <Tabs.Tab>**npm** is a package manager for the JavaScript programming language.</Tabs.Tab>
 *   <Tabs.Tab>**Yarn** is a software packaging system.</Tabs.Tab>
 * </Tabs>
 * ```
 *
 * ### 默认选中索引
 *
 * 你可以使用 `defaultIndex` 属性来设置默认的标签页索引：
 *
 * ```mdx /defaultIndex="1"/
 * import { Tabs } from 'nextra/components'
 *
 * <Tabs items={['pnpm', 'npm', 'yarn']} defaultIndex="1">
 *   ...
 * </Tabs>
 * ```
 *
 * 这样 `npm` 就会作为默认选中的标签页：
 *
 * <Tabs items={['pnpm', 'npm', 'yarn']} defaultIndex="1">
 *   <Tabs.Tab>**pnpm**: Fast, disk space efficient package manager.</Tabs.Tab>
 *   <Tabs.Tab>**npm** is a package manager for the JavaScript programming language.</Tabs.Tab>
 *   <Tabs.Tab>**Yarn** is a software packaging system.</Tabs.Tab>
 * </Tabs>
 */
export const Tabs = Object.assign(
  (props: ComponentProps<typeof _Tabs>) => <_Tabs {...props} />,
  { Tab }
)
