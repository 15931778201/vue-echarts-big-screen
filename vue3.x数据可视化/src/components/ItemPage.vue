<template>
  <div class="item">
    <!-- 设置插槽 -->
    <slot></slot>
    <!-- 容器 -->
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent ({

})
</script>

<style lang="less">
.item {
  height: 5.125rem;
  border: 1px solid rgb(6, 6, 105);
  margin: .25rem;
  background-color: transparent;
}
</style>

<style>

</style>