<!--
 * @Author: Akarichan
 * @LastEditors: Akarichan
-->
<template>
  <div id="app">
    <!-- <BackGround style="z-index:-100" /> -->
    <div id="nav">
      <el-menu class="el-menu-demo" mode="horizontal" router>
        <el-menu-item index="/">使用说明</el-menu-item>
        <el-menu-item index="/about">练习模拟</el-menu-item>
        <el-menu-item index="/SinlgeCardAnalysis">单卡分析</el-menu-item>
        <el-menu-item index="/DataAnalysis">游戏数据</el-menu-item>
        <div style="float: right; line-height: 60px; padding: 0 60px;">
          <el-button @click="uploadDialog=true">上传json文件</el-button>
        </div>
        <!-- <el-menu-item index="/ToreSimulation">练习模拟</el-menu-item>

        <el-menu-item index="/DataAnalysis">数据统计</el-menu-item>
        <el-menu-item index="/GetAllMyUma">查看🐎</el-menu-item>
        <el-menu-item index="/RegisterNewUma">更新🐎</el-menu-item>
        <el-menu-item index="/InsertCardData">插入/修改支援卡数据</el-menu-item>
        <el-menu-item index="/InsertSkill" v-if="this.$store.state.user.group=='admin'">插入技能</el-menu-item>
        <el-menu-item index="/InsertData2DB" v-if="this.$store.state.user.group=='admin'">更新数据库</el-menu-item>
        <el-menu-item index="/Test" v-if="this.$store.state.user.group=='admin'">测试用</el-menu-item> -->
      </el-menu>
    </div>
    <div class="router-view">
      <router-view />
    </div>
    <el-dialog :visible.sync="uploadDialog" width="70%" @opened="handleOpened">
      <el-input ref="field" type="textarea" :autosize="{ minRows: 5, maxRows: 8}" placeholder="导入json文件(TODO)" v-model="json">
      </el-input>
      <el-button @click="importjson" style="margin: 20px">导入json(TODO)</el-button>
    </el-dialog>
  </div>
</template>

<script>
  // import UserSignUp from "@/components/child/UserSignUp.vue"
  // import UserLogIn from "@/components/child/UserLogIn.vue"
  // import BackGround from '@/components/BackGround.vue'
  export default {
    // components:{
    //   BackGround,
    //   UserSignUp,
    //   UserLogIn
    // },
    data() {
      return {
        uploadDialog: false,
        json: '',
      }
    },
    methods: {
      handleOpened() {
        let ele = this.$refs.field.$el;
        ele.ondrop = e => {
          e.preventDefault();
          let df = e.dataTransfer;
          if (df.length === 0) {
            return;
          }
          let file = df.files[0];
          let fileReader = new FileReader();
          fileReader.onload = (readResult) => {
            this.json = readResult.target.result;
          };
          fileReader.readAsText(file);
        };
        // console.log(ele);
      },
      importjson() {
        // TODO
      }
    },
    computed: {
      user() {
        // return this.$store.state.user
      }
    },
    mounted() {
      this.$store.commit('dataInit')
    }
  }
</script>


<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding-bottom: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

  .router-view {
    padding: 0px 40px;
  }
</style>