<!-- 库存统计 -->
<template>
  <header>
    <h2>
        周销图
    </h2>
    <div class="chart" id="twoChart">
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
    let twoData = reactive({});
    async function getState() {
      twoData = await $http({url: "/two"});
      console.log(twoData);
    }

    // 处理数据
    onMounted(() => {
      // init初始化echarts图表
      let myChart = $echarts.init(document.getElementById("twoChart"));
      getState().then(() => {
        myChart.setOption({
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "cross",
              label: {
                backgroundColor: "#e6b600"
              }
            }           
          },   
          legend: {
            data: ["服饰", "数码", "家电", "家居", "日化"]
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
            data: twoData.data.day,
           // 使起点与Y轴无间隙
            boundaryGap: false,            
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
              type: "line",
              data: twoData.data.num.Clothes,
              // 使折线平滑
              smooth: true,
              // 隐藏折点
              showSymbol: false,
              // 使数据堆叠
              stack: "Total",
              // 隐藏区域最上方的线段
              lineStyle: {
                width: 0
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
              type: "line",
              data: twoData.data.num.digit,
              smooth: true,
              showSymbol: false,
              stack: "Total",
              lineStyle: {
                width: 0
              },
              emphasis: {
                focus: "series"
              },
              areaStyle: {
                opacity: 0.8,
                color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                  offset: 0,
                  color: "rgb(0, 221, 255)"
                  },
                  {
                    offset: 1,
                    color: "rgb(77, 119, 255)"
                  }
                ])
              }
            },
            {
              name: "家电",
              type: "line",
              data: twoData.data.num.Electrical,
              smooth: true,
              showSymbol: false,
              stack: "Total",
              lineStyle: {
                width: 0
              },
              emphasis: {
                focus: "series"
              },
              areaStyle: {
                opacity: 0.8,
                color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                  offset: 0,
                  color: "rgb(55, 162, 255)"
                  },
                  {
                    offset: 1,
                    color: "rgb(116, 21, 219)"
                  }
                ])
              }
            },
            {
              name: "家居",
              type: "line",
              data: twoData.data.num.gear,
              smooth: true,
              showSymbol: false,
              stack: "Total",
              lineStyle: {
                width: 0
              },
              emphasis: {
                focus: "series"
              },
              areaStyle: {
                opacity: 0.8,
                color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                  offset: 0,
                  color: "rgb(255, 0, 135)"
                  },
                  {
                    offset: 1,
                    color: "rgb(135, 0, 157)"
                  }
                ])
              }
            },
            {
              name: "日化",
              type: "line",
              data: twoData.data.num.Chemicals,
              smooth: true,
              showSymbol: false,
              stack: "Total",
              lineStyle: {
                width: 0
              },
              emphasis: {
                focus: "series"
              },
              areaStyle: {
                opacity: 0.8,
                color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                  offset: 0,
                  color: "rgb(255, 191, 0)"
                  },
                  {
                    offset: 1,
                    color: "rgb(224, 62, 76)"
                  }
                ])
              }
            },
          ]                                 
        })       
      })
    })

    return {
      twoData,
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

