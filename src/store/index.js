/*
 * @Author: Akarichan
 * @LastEditors: Akarichan
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    uma:[],
    cards:[], // 数据库中的卡(raw)
    myCardDb:[], // 数据库中主表的卡
    cardsAtbCount:[0, 0, 0, 0, 0, 0], // 支援卡数量统计
    user:{
      uuid:null,
      name:null,
      group:null
    }
  },
  mutations: {
    async dataInit(state){
      state.myCardDb = require('../assets/db/Card_state.json')
      state.cards = require('../assets/db/Card.json')
      let artCount = [0, 0, 0, 0, 0, 0]
      state.cards.forEach(ele=>{
        artCount[ele.atb-1]++
      })
      state.cardsAtbCount = artCount
    }
  },
  actions: {
  },
  modules: {
  }
})