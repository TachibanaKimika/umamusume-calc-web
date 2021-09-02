<!--
 * @Author: Akarichan
 * @LastEditors: Akarichan
-->
<template>
    <div class="DataAns">
        <div id="AtbCountChart" class="echarts" style="width: 80em; height: 60em;"></div>
    </div>
</template>

<script>
  import {
    initChartsOption_Pie
  } from '../../jsfile/util/initChartsOption.js'

  export default {
    methods: {
      drawLine() {
        let atbCountChart = this.$echarts.init(document.getElementById('AtbCountChart'))
        atbCountChart.setOption(initChartsOption_Pie(this.$store.state.cardsAtbCount))
      }
    },
    mounted() {
      this.drawLine();
    }
  }
</script>

<style scoped>
  .echarts {
    display: inline-block;
    padding: 20px;
    margin: 10px;
    background-color: #fff;
    /* box-shadow: 3px 3px 6px -3px black; */
    /* border-radius: 25px; */
  }
</style>