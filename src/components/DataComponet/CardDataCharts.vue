<!--
 * @Author: Akarichan
 * @LastEditors: Akarichan
 * @title: 支援卡数值组成的三维散点图
-->



<template>
    <div class="DataAns">
      <el-header>
        <el-select v-model="myOption[0]" clearable placeholder="x轴数据">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>

        <el-select v-model="myOption[1]" clearable placeholder="y轴数据">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>

        <el-select v-model="myOption[2]" clearable placeholder="z轴数据">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>


        <el-button @click="generateChart" type="success">生成表格</el-button>
      </el-header>
      <el-main><div id="Chart" class="echarts" style="width: 80em; height: 60em;"></div></el-main>
    </div>
</template>


<script>
  import {
    initChartsOption_scatter
  } from '../../jsfile/util/initChartsOption.js'
  import 'echarts-gl'

  export default {
    data(){
      return{
        charts:{},
        fliter:[],
        cardData:[],
        options: [
          {label:'等级',value:'spc_lv'},
          {label:'得意率',value:'spc_tokuitu'},
          {label:'友情ボーナス',value:'spc_youujo'},
          {label:'やる気効果',value:'spc_yaruki'},
          {label:'トレーニング効果',value:'spc_tore'},
          {label:'ヒントLv',value:'spc_hit_lv'},
          {label:'ヒント発生率',value:'spc_hit_ritu'},
          {label:'初期絆ゲージ',value:'spc_kizuna'},
          {label:'レースボーナス',value:'spc_race'}
        ],
        myOption:['','','']
      }
    },
    methods: {
      generateChart(){
        for(let item of this.myOption){
          if(item===''){
            this.$message.error("需要选择三个轴")
            return
          }
        }



        let row = this.cardData 
        // TODO:filter
        let data = row.map(item=>{
          return [item[this.myOption[0]], item[this.myOption[1]], item[this.myOption[2]], item.spc_attribute, item.spc_name]
        })
        let type = [this.options.find({value:this.myOption[0]}).label, this.options.find({value:this.myOption[1]}).label, this.options.find({value:this.myOption[2]}).label]
        this.drawLine(data, type)
      },


      drawLine(data=[[1, 1, 3, 'name1'],[50, 50, 2, 'name2']], type=['得意率','友情','等级']) {
        this.charts.setOption(initChartsOption_scatter(data, type))
      }
    },
    mounted() {
      this.cardData = this.$store.state.myCardDb
      let dataArr = this.cardData.map((card)=>{
        return [card.spc_tokuitu, card.spc_youujo, card.spc_lv, card.spc_attribute, card.spc_name]
      })
      this.charts = this.$echarts.init(document.getElementById('Chart'))
      this.drawLine(dataArr);
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


  .el-select, .el-button {
    margin: 20px;
  }
</style>