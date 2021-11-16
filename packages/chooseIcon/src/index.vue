<template>
  <el-button @click="handleClick" type="primary">
    <slot></slot>
  </el-button>
  <div class="m-choose-icon-dialog-body-height">
    <el-dialog :title="title" v-model="dialogVisible">
      <div class="container">
        <div
          class="item"
          v-for="(item, index) in Object.keys(ElIcons)"
          :key="index"
          @click="clickItem(item)"
        >
          <div class="text">
            <component :is="`el-icon-${toLine(item)}`"></component>
          </div>
          <div class="icon">{{ item }}</div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script lang='ts' setup>
import * as ElIcons from '@element-plus/icons'
import { watch, ref } from 'vue'
import { toLine } from '../../../utils'
import { useCopy } from '../../../hooks/useCopy'

let props = defineProps<{
  // 弹出框的标题
  title: string,
  // 控制弹出框的显示与隐藏
  visible: boolean
}>()
let emits = defineEmits(['update:visible'])
// 拷贝一份父组件传递过来的visible
let dialogVisible = ref<boolean>(props.visible)


// 点击按钮显示弹出框
let handleClick = () => {
  // 需要修改父组件的数据
  emits('update:visible', !props.visible)
}

// 点击图标
let clickItem = (item: string) => {
  let text = `<el-icon-${toLine(item)} />`
  // 复制文本
  useCopy(text)
  // 关闭弹框
  dialogVisible.value = false
}

// 监听visible的变化 只能监听第一次的变化
watch(() => props.visible, val => {
  dialogVisible.value = val
})
// 监听组件内部的dialogVisible变化
watch(() => dialogVisible.value, val => {
  emits('update:visible', val)
})
</script>

<style lang='scss' scoped>
.container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.item {
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  cursor: pointer;
  height: 70px;
}
.text {
  font-size: 14px;
}
.icon {
  flex: 1;
}
svg {
  width: 2em;
  height: 2em;
}
</style>