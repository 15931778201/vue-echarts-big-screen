<!-- 库存统计 -->
<template>
  <header>
    <h2>
        库存统计
    </h2>
    <div class="chart" id="threeChart">
        图表内容
    </div>
  </header>
</template>

<script>
import { defineComponent, inject, onMounted, reactive } from 'vue';

export default defineComponent ({
  setup() {
    let $echarts = inject("echarts");
    let $http = inject("axios");
    // 创建一个对象变量
    let threeData = reactive({});
    async function getState() {
      threeData = await $http({url: "/three"});
      console.log(threeData);
    }

    // 处理数据
    onMounted(() => {
      // init初始化echarts图表
      let myChart = $echarts.init(document.getElementById("threeChart"));
      getState().then(() => {
        myChart.setOption({
          // 设置图例
          legend: {
            top: "bottom"
          },
          tooltip: {
            show: true
          },      
          series: [
            {
              type: "pie",
              data: threeData.data,
              // 内外圆角
              radius: [10, 100],
              center: ['50%', '45%'],
              roseType: 'area',
              itemStyle: {
                borderRadius: 10
              }              
            }
          ]
        })       
      })
    })

    return {
      threeData,
      getState
    }    
  }
  
})
</script>
<style lang='less' scoped>
.chart {
  height: 4.5rem;
}
h2 {
  height: .3125rem;
  color: #fff;
  line-height: .3125rem;
  font-size: .25rem;
  text-align: center;
}

</style>

