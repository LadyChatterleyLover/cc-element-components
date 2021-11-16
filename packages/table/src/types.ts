export interface TableOptions {
  // 字段名称
  prop?: string,
  // 表头
  label: string,
  // 对应列的宽度
  width?: string | number,
  // 对齐方式
  align?: 'left' | 'center' | 'right',
  // 自定义列模板的插槽名
  slot?: string,
  // 是否是操作项
  action?: boolean,
  // 是否可以编辑
  editable?: boolean
}
