<template>
  <div class="map" id="map"></div>
</template>

<script>
import { defineComponent, inject, onMounted, reactive } from 'vue';

export default defineComponent ({
  setup() {
    let $echarts = inject("echarts");
    let $http = inject("axios");
    // 创建一个对象变量
      let mapData = reactive({});

    async function getState() {
      mapData = await $http({url: "/map"});
      console.log(mapData);
    } 
    
    onMounted(() => {
      getState().then(() => {
        // 设置地图
        // 第一个参数给地图起名字
        $echarts.registerMap("china", mapData.data)
        // init初始化echarts图表
        let myChart = $echarts.init(document.getElementById("map"));
        myChart.setOption({
          geo: {
            map: "china",
            itemStyle: {
              areaColor: "#0099ff",
              borderColor: "#00ffff",
              // 添加阴影
              shadowColor: "rgba(230, 130, 70, 0.5)",
              shadowBlur: 30,
              // 聚焦省份高亮效果
              emphasis: {
                  focus: "self"
              }
            }             
          },
          tooltip: {
            trigger: 'item'
          },
          title: {
              text: "城市销量",
              left: "45%",
              textStyle: {
                  color: "#fff",
                  fontSize: 20,
                  textShadowBlur: 10,
                  textShadowColor: "#33ffff"
              }
          },  
          // 视觉映射效果
          visualMap: {
            type: "continuous",
            min: 100,
            max: 5000,
            // 开启滑动效果
            calculable: true,
            inRange: {
                color: ["#50a3ba", "#eac736", "#d94e5d"]
            },
            textStyle: {
                color: "#fff"
            }
          }, 
          series: [
            {
              // 地图上设置散点图标记点
              type: "scatter",
              itemStyle: {
                  color: "red"
              },
              // 指定使用的是地理坐标
              coordinateSystem: "geo", 
              data: [
                {
                  name: "北京",
                  value: [116.46, 39.92, 4367]
                },
                {
                    name: "上海",
                    value: [121.48, 31.22, 8675]
                },
                {
                    name: "深圳",
                    value: [114.07, 22.62, 2461]
                },
                {
                    name: "广州",
                    value: [113.23, 23.16, 187]
                },
                {
                    name: "西安",
                    value: [108.45, 34, 3421]
                }
              ]
            } 
          ]                                            
        })     
      })
    })
    return {
      getState,
      mapData
    }
  }
})
</script>

<style lang='less' scoped>
.map {
    width: 100%;
    height: 100%;
}
</style>