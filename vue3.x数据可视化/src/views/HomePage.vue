<template>
  <div class="">
    <header>
      <h1>大数据可视化</h1>
    </header>
    <section class="container">
      <!-- 左容器 -->
      <section class="itemLeft">
        <ItemPage>
          <ItemOne></ItemOne>
        </ItemPage>
        <ItemPage>
          <ItemTwo></ItemTwo>
        </ItemPage>
      </section>
      <!-- 中容器 -->
      <section class="itemMid">
        <MapPage></MapPage>
      </section>
      <!-- 右容器 -->
      <section class="itemRight">
        <ItemPage>
          <ItemThree></ItemThree>
        </ItemPage>
        <ItemPage>
          <ItemFour></ItemFour>
        </ItemPage>        
      </section>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import ItemPage from '@/components/ItemPage.vue'
import ItemOne from '@/components/ItemOne.vue'
import ItemTwo from '@/components/ItemTwo.vue'
import ItemThree from '@/components/ItemThree.vue'
import ItemFour from '@/components/ItemFour.vue'
import MapPage from '@/components/MapPage.vue'

export default defineComponent({
  name: 'Home',
  components: {
    ItemPage, ItemOne, ItemTwo, ItemThree, ItemFour, MapPage
  }, 
  setup() {
    let $echart = inject('echarts')
    let $http = inject('axios')
    console.log($echart);
    console.log($http);
    
    
  }
});
</script>

<style lang="less">
header {
  height: 0.75rem;
  width: 100%;
  background-color: transparent;
  h1 {
    font-size: 0.375rem;
    color: #fff;
    text-align: center;
    line-height: 0.75rem;
  }
}
.container {
  min-width: 1200px;
  max-width: 2048px;
  margin: 0 auto;
  padding: 0.125rem;
  height: 800px;
  background-color: transparent;
  display: flex;
  .itemLeft, .itemRight {
    flex: 3;
  }
  .itemMid {
    flex: 5;
    height: 10.5rem;
    border: 1px solid rgb(6, 6, 105);
    padding: .625rem;
    margin: .25rem;
  }
}
</style>