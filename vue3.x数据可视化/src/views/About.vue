<template>
  <div ref="mychart" class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  mounted() {
    let myChart = echarts.init(this.$refs.mychart)
    myChart.setOption({
      title: {
        text: 'Hello World',
        sublink: 'https://www.bilibili.com/video/BV14u411D7qK?p=5',
        subtarget: 'self',
        // backgroundColor: 'pink',
        // borderColor: 'red',
        // borderWidth: 5,
        x: 'center',
        subtext: 'Hello Echart' 
      },
      tooltip: {
        trigger: 'item',
        axisPointer: {
          type: 'cross'
        },
        formatter(params) {
          console.log(params);
          
        }
      },
      legend: {
        show: true,
        top: '10%',

      },
      xAxis: {
        data: ['RMB', 'FNB']
      }, 
      yAxis: {

      },
      series: {
        name: 'lol',
        type: 'bar',
        data: [6300, 4800],
        // barWidth: 20,
        color: 'red',
      markPoint: {
        data: [
          {
            type: 'max',
            name: '最大值'
          }
        ]
      },
      markLine: {
        data: [
          {
            type: 'average',
            name: '平均值'
          }
        ]
      }        
      },
    })
  }
}
</script>



<style scoped>
.about{
  width: 500px;
  height: 500px;
  border: 1px solid red;
}
</style>