<template>
  <div id="app">
    <div class="main" v-show="userInfo.userId">
      <div class="head">
        <div class="test">{{ head }}</div>
        <button class="logout" @click="logout">退出</button>
      </div>
      <div class="meun">
        <div class="title">菜单</div>
        <div class="list"><router-link to="/index/List">列表1</router-link></div>
        <div class="list"><router-link to="/index/List2">列表2</router-link></div>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
    <Login></Login>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';
  import {localStore} from '@/common/storage';
  import Login from '@/views/Login'

  export default {
    name: 'app',
    data () {
      return {
        head: '头部'
      }
    },
    components: {
      Login
    },
    beforeMount() {
      let secret = localStore.get('secret')
      if (secret){
        this.getAuths({ secret : secret})
      }else {
        this.$store.commit('showLogin');
      }
    },
    computed: {
      ...mapGetters({
        userInfo : 'getUserInfo'
      })
    },
    methods: {
      ...mapActions([
        'getAuths',
        'userLogout'
      ]),
      logout() {
        this.$confirm('是否确认退出登陆？', '提示', {
//          confirmButtonText: '确定',
//          cancelButtonText: '取消',
//          type: 'warning'
        }).then(() => {
          this.userLogout()
        }).catch(() => {});
      }
    }
  }
</script>

<style>
  *{
    padding: 0;
    margin: 0;
  }
  #app {
    font-family: '微软雅黑','Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  a{
    cursor: pointer;
  }
</style>

<style scoped>
  .main{
    position: relative;
    z-index: 10;
    background: #fff;
  }
  .meun{
    width: 200px;
    position: fixed;
    background: #000;
    top: 0;
    left: 0;
    bottom: 0;
    color: #fff;
    padding-top: 30px;
  }
  .meun a{
    color: #fff;
  }
  .meun .title{
    margin-bottom: 15px;
  }
  .meun .list{
    margin-bottom: 15px;
  }
  .head{
    position: fixed;
    top: 0;
    right: 0;
    left: 200px;
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid #ccc;
    background: #f5f5f5;
  }
  .head .logout{
    position: absolute;
    right: 20px;
    top: 15px;
    height: 25px;
    line-height: 25px;
    cursor: pointer;
  }
  .content{
    position: fixed;
    top: 60px;
    right: 0;
    left: 200px;
    bottom: 0;
    background: #fff;
  }
</style>
