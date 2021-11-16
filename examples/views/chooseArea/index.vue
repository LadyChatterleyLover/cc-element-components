<template>
  <m-choose-area @change="changeArea"></m-choose-area>
</template>

<script lang='ts' setup>
let changeArea = (val: any) => {
  console.log(val)
}
</script>

<style lang='scss' scoped>
</style>