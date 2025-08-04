export type GeneratedType = {
  /** 类型字段。 */
  entries: TypeField[]
}

export type Tags = Record<string, string>

export type ReturnField = {
  /** 函数返回类型。 */
  type: string
}

export type GeneratedDefinition = {
  /**
   * 类型定义在磁盘上的位置。
   */
  filePath?: string
  /**
   * 定义名称。
   */
  name: string
  /**
   * 定义描述。
   */
  description?: string
  /**
   * [TSDoc 标签](https://tsdoc.org/pages/spec/tag_kinds)。
   */
  tags?: Tags
}

export type GeneratedFunction = {
  signatures: {
    /** 函数参数。 */
    params: TypeField[]
    /** 函数返回值。 */
    returns: TypeField[] | ReturnField
  }[]
}

export type TypeField = {
  /** 字段名。 */
  name: string
  /** 字段类型。 */
  type: string
  /** 字段描述。 */
  description?: string
  /** 字段是否可选。 */
  optional?: boolean
  /** 字段标签。 */
  tags?: Tags
}

export type BaseArgs = {
  /** 待处理的 TypeScript 源代码。 */
  code: string
  /**
   * 导出声明的名称。
   * @default "default"
   */
  exportName?: string
  /**
   * 是否展平嵌套对象。
   * 例如：`{ foo: { bar: string } }` 将被表示为：`{ foo.bar: string }`
   * @default false
   */
  flattened?: boolean
}
