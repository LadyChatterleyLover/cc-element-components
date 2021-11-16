<template>
  <div>
    <el-divider>正常趋势</el-divider>
    <div class="flex">
      <div>
        <m-trend text="营业额"></m-trend>
      </div>
      <div>
        <m-trend text="销售额" type="down"></m-trend>
      </div>
    </div>
        <br />
    <el-divider>颜色翻转</el-divider>
    <div class="flex">
    <div><m-trend text="销售额" reverseColor></m-trend></div>
    <div><m-trend text="营业额" type="down" reverseColor></m-trend></div>
    </div>
    <br />
    <el-divider>自定义图标颜色</el-divider>
    <div class="flex">
      <div>
        <m-trend text="营业额" upIconColor="blue"></m-trend>
      </div>
      <div>
        <m-trend text="销售额" type="down" downIconColor="#123456"></m-trend>
      </div>
    </div>

    <br />
    <el-divider>自定义文字颜色</el-divider>
    <div class="flex">
    <div><m-trend text="营业额" upTextColor="blue"></m-trend></div>
    <div><m-trend text="销售额" type="down" downTextColor="yellow"></m-trend></div>
    </div>
    <br />
    <el-divider>自定义图标</el-divider>
    <div class="flex">
    <div><m-trend upIcon="CaretTop">营业额</m-trend></div>
    <div><m-trend type="down" downIcon="CaretBottom">销售额</m-trend></div>
  </div>
   </div>
</template>

<script lang='ts' setup>
</script>

<style lang='scss' scoped>
.flex {
  display: flex;
  div {
    margin-right: 10px;
  }
}
</style>