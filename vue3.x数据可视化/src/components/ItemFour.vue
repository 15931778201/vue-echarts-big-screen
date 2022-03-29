<!-- 产品类别 -->
<template>
  <header>
    <h2>
        产品类别
    </h2>
    <div class="chart" id="fourChart">
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
    let fourData = reactive({});
    async function getState() {
      fourData = await $http({url: "/four"});
      console.log(fourData);
    }

    // 处理数据
    onMounted(() => {
      // init初始化echarts图表
      let myChart = $echarts.init(document.getElementById("fourChart"));
      getState().then(() => {
        myChart.setOption({
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow"
            }           
          },   
          legend: {
          },      
          // 设置图表距离
          grid: {
            left: "1%",
            right: "4%",
            bottom: "3%",
            containLabel: true
          },
          xAxis: {
            type: "category",
            data: fourData.data.day,
            axisLine: {
              lineStyle: {
                color: "#fff"
              }
            }            
          },
          yAxis: {
            type: "value",
            axisLine: {
              lineStyle: {
                color: "#fff"
              }
            }            
          }, 
          series: [
            {
              name: "服饰",
              type: "bar",
              data: fourData.data.num.Clothes,
              // 使数据堆叠
              stack: "Total",
              label: {
                show: true
              },
              // 选中区域高亮
              emphasis: {
                focus: "series"
              },
              // 填充区域样式
              areaStyle: {
                opacity: 0.8,
                // 配置渐变颜色
                color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                  offset: 0,
                  color: "rgb(128, 255, 165)"
                  },
                  {
                    offset: 1,
                    color: "rgb(1, 191, 236)"
                  }
                ])
              }
            },
            {
              name: "数码",
              type: "bar",
              data: fourData.data.num.digit,
              stack: "Total",
              label: {
                show: true
              },
              emphasis: {
                focus: "series"
              }
            },
            {
              name: "家电",
              type: "bar",
              data: fourData.data.num.Electrical,
              // 使数据堆叠
              stack: "Total",
              label: {
                show: true
              },
              emphasis: {
                focus: "series"
              }
            },
            {
              name: "家居",
              type: "bar",
              data: fourData.data.num.gear,
               // 使数据堆叠
              stack: "Total",
              label: {
                show: true
              },
              emphasis: {
                focus: "series"
              }
            },
            {
              name: "日化",
              type: "bar",
              data: fourData.data.num.Chemicals,
              // 使数据堆叠
              stack: "Total",
              label: {
                show: true
              },
              emphasis: {
                focus: "series"
              }
            },
          ]                                 
        })       
      })
    })

    return {
      fourData,
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

