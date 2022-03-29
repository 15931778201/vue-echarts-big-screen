<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, provide } from 'vue'
import * as echarts from 'echarts'
import axios from 'axios'
export default defineComponent ({
  name: 'app',
  setup() {
    // 设置基准路径
    axios.defaults.baseURL = "http://localhost:3000";
    provide('echarts', echarts)
    provide('axios', axios)
  }  
})
</script>

<style lang="less">
body {
  background: url('~@/assets/pageBg.png');
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
