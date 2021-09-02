<!--
 * @Author: Akarichan
 * @LastEditors: Akarichan
-->
<template>
  <div class="DataAns">

    <div id="charts">
      <!-- <el-tabs type="border-card" @tab-click="tabClick">
        <el-tab-pane v-for="item in routerPath" :label="item.name" :name="item.path">
          <div class="tab_content">
            <router-view class="router-view"></router-view>
          </div>
        </el-tab-pane>
      </el-tabs> -->
    <el-container>
      <el-aside width="200px">


        <el-menu
          default-active="1"
          router
          :default-active="`/DataAnalysis/`"
          >

          <el-menu-item v-for="item in routerPath" :index="`/DataAnalysis/${item.path}`">
            <i class="el-icon-menu"></i>
            <span slot="title">{{item.name}}</span>
          </el-menu-item>
        </el-menu>




      </el-aside>
      <el-container>
        <router-view class="router-view"></router-view>
      </el-container>
    </el-container>



      
    </div>
 </div>
</template>

<script>
  import {
    initChartsOption_Pie
  } from '../jsfile/util/initChartsOption.js'

  export default {
    name: 'DataAnalysis',
    data(){
      return{
        routerPath :[]
      }
    },
    methods: {
      drawLine() {
        let atbCountChart = this.$echarts.init(document.getElementById('AtbCountChart'))
        console.log(this.$store.state.cardsAtbCount)
        atbCountChart.setOption(initChartsOption_Pie(this.$store.state.cardsAtbCount))
      },
      tabClick(tab) {
        console.log(tab.name)
        this.$router.push(`/DataAnalysis/${tab.name}`);
      }
    },
    mounted() {
      this.routerPath = this.$router.options.routes.find({name: "DataAnalysis"}).children
      console.log(this.routerPath[0].path)
    }
  }
</script>


<style lang="scss" scoped>
  .echarts {
    display: inline-block;
    padding: 20px;
    margin: 10px;
    /* background-color: rgba(209, 209, 233,0.5); */
    box-shadow: 3px 3px 6px -3px black;
    border-radius: 25px;
  }
  .router-view{
    width: 100%;
  }
</style>