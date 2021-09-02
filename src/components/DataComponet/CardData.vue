<!--
 * @Author: Akarichan
 * @LastEditors: Akarichan
-->
<template>
    <div>
        <el-table
            :data="cards"
            max-height="800"
            border
            style="width:95%;"
            stripe>
            
            <el-table-column
            fixed
            label="属性"
            width="65"
            :filters="[{ text: 'スビート', value: 1 }, { text: 'スタミナ', value: 2 }, { text: 'パワー', value: 3 }, { text: '根性', value: 4 }, { text: '賢さ', value: 5 }, { text: '友人', value: 6 }]"
            :filter-method="filterAtb"
            >
            <template slot-scope="scope" >
                <img :src="require(`../../assets/img/type_${scope.row.spc_attribute}.webp`)" alt="" style="width:35px;vertical-align: middle;">
            </template>
            </el-table-column>

            <el-table-column
            fixed
            label="名称"
            width="300"
            :filters="[{ text: '4凸', value: 50 }, { text: '3凸', value: 45 }, { text: '2凸', value: 40 }, { text: '1凸', value: 35 }, { text: '0凸', value: 30 }]"
            :filter-method="filterLevel"
            >
            <template slot-scope="scope">
                <img :src="scope.row.imgurl" style="width:32px;vertical-align: middle;" alt="">
                <span style="margin-left: 10px;vertical-align: middle;">{{ scope.row.spc_name.replace(/【(.+)?-　/,'') }}</span>
            </template>
            </el-table-column>
            <el-table-column
            prop="spc_lv"
            label="等级"
            sortable
            width="130">
            </el-table-column>
            <el-table-column
            prop="spc_youujo"
            label="友情ボーナス"
            sortable
            width="130">
            </el-table-column>
            <el-table-column
            prop="spc_tokuitu"
            label="得意率"
            sortable
            width="130">
            </el-table-column>
            <el-table-column
            prop="spc_yaruki"
            label="やる気効果"
            sortable
            width="130">
            </el-table-column>
            <el-table-column
            prop="spc_tore"
            label="トレーニング効果"
            sortable
            width="130">
            </el-table-column>
            <el-table-column
            prop="spc_hit_lv"
            label="ヒントLv"
            sortable
            width="130">
            </el-table-column>
            <el-table-column
            prop="spc_hit_ritu"
            label="ヒント発生率"
            sortable
            width="130">
            </el-table-column>
            <el-table-column
            prop="spc_kizuna"
            label="初期絆ゲージ"
            sortable
            width="130">
            </el-table-column>
            <el-table-column
            prop="spc_race"
            label="レースボーナス"
            sortable
            width="130">
            </el-table-column>
            <el-table-column
            prop="spc_reduce_suta"
            label="体力消費ダウン"
            sortable
            width="130">
            </el-table-column>
            <el-table-column
            prop="spc_reduce_shipai"
            label="失敗率ダウン"
            sortable
            width="130">
            </el-table-column>
            <el-table-column
            prop="spc_jiken_up"
            label="イベント効果"
            sortable
            width="130">
            </el-table-column>
            <el-table-column
            prop="spc_jiken_kaifuku_up"
            label="イベント回復量"
            sortable
            width="130">
            </el-table-column>
            <el-table-column
            prop="spc_kashi_kaifuku"
            label="賢さ友情回復量"
            sortable
            width="130">
            </el-table-column>
            <el-table-column
            prop="spc_yaruki"
            label="やる気効果"
            sortable
            width="130">
            </el-table-column>
            <el-table-column
            prop="spc_yaruki"
            label="やる気効果"
            sortable
            width="130">
            </el-table-column>
            <el-table-column
            prop="spc_yaruki"
            label="やる気効果"
            sortable
            width="130">
            </el-table-column>
            <el-table-column
            prop="spc_yaruki"
            label="やる気効果"
            sortable
            width="130">
            </el-table-column>
        </el-table>
    </div>
</template>


<script>
export default {
    data(){
        return {
            cards:[]
        }
    },
    methods:{
        getColor(atb){
            switch(atb){
                case 1:return '#0070df'
                case 2:return '#ff80c0'
                case 3:return '#ff8040'
                case 4:return '#ff80ff'
                case 5:return '#00ff00'
                case 6:return '#ffff00'
            }
        },
        
        filterAtb(value, row){
            return value === row.spc_attribute
        },
        filterLevel(value, row){
            if(row.spc_rare===3){
                return value===row.spc_lv
            }else if(row.spc_rare===2){
                return value===row.spc_lv+5
            }
        }
    },
    mounted(){
        console.log(this.$store.state.myCardDb)
        let cards = this.$store.state.myCardDb// .filter(card => (card.spc_lv == 50 && card.spc_rare == 3)||(card.spc_lv == 45 && card.spc_rare == 2))
        cards.forEach(card =>{
            switch(card.spc_attribute){
                case 1:
                    card.atb = 'スビート'
                    break
                case 2:
                    card.atb = 'スタミナ'
                    break
                case 3:
                    card.atb = 'パワー'
                    break
                case 4:
                    card.atb = '根性'
                    break
                case 5:
                    card.atb = '賢さ'
                    break
                case 6:
                    card.atb = '友人'
                    break
            }
        })
    console.log(cards)
    this.cards = cards
    }
}
</script>