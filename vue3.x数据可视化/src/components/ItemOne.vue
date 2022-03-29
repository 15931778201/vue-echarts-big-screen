<!-- 销售总量 -->
<template>
  <header>
    <h2>
        销售总量
    </h2>
    <div class="chart" id="oneChart">
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
    // 创建两个数组变量
    let oneData = reactive({});
    let xData = reactive([]);
    let yData = reactive([]);

    async function getState() {
      oneData = await $http({url: "/one"});
      console.log(oneData);
    }

    // 处理数据
    function setData() {
      xData = oneData.data.map(v=>v.title);
      yData = oneData.data.map(v=>v.num);
    }

    onMounted(() => {
      // init初始化echarts图表
      let myChart = $echarts.init(document.getElementById("oneChart"));
      getState().then(() => {
        setData()
        myChart.setOption({
          // title: {
          //   text: '销售总量',
          //   x: 'center',
          // },  
          grid: {
            top: "3%",
            left: "1%",
            right: "6%",
            bottom: "3%",
            // 以上设置的位置，对坐标轴也起作用
            containLabel: true
          },              
          xAxis: {
            type: "value",
            axisLine: {
              lineStyle: {
                color: "#fff"
              }
            }            
          },
          yAxis: {
            type: "category",
            data: xData,
            axisLine: {
              lineStyle: {
                color: "#fff"
              }
            }            
          },
          series: [
            {
              type: "bar",
              data: yData,
              itemStyle: {
                normal: {
                  // 柱状图圆角
                  barBorderRadius: [0, 20, 20, 0],
                  // 配置渐变颜色
                  color: new $echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    {
                      offset: 0,
                      color: "#005eaa"
                    },
                    {
                      offset: 0.5,
                      color: "#339ca8"
                    },
                    {
                      offset: 1,
                      color: "#cda819"
                    }
                  ])
                }
              }              
            }
          ]
        })       
      })
    })

    return {
      oneData,
      xData,
      yData,
      getState,
      setData
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

