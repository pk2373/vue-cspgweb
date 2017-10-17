<template>
  <div class="content" v-show="isShowLogin">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0" class="" @keyup.enter.native="submitForm('ruleForm')">

      <el-form-item label="" prop="system">
        <el-select v-model="ruleForm.system" placeholder="请选择系统" style="display: block;" @change="sysChange">
          <el-option v-for="item in sys" :label="item.text" :value="item.id" :key="item.id" ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="" prop="org" v-if="showOrg">
        <el-select v-model="ruleForm.org" placeholder="请选择机构" style="display: block;" @change="orgChange">
          <el-option v-for="item in org" :label="item.text" :value="item.id" :key="item.id" ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="" prop="branch" v-if="showBranch" >
        <el-select v-model="ruleForm.branch" placeholder="请选择网点" style="display: block;" filterable>
          <el-option v-for="item in branch" :label="item.text" :value="item.id" :key="item.id" ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="" prop="username">
        <el-input v-model="ruleForm.username" placeholder="请输入用户名" v-focus="true"></el-input>
      </el-form-item>

      <el-form-item label="" prop="password">
        <el-input v-model="ruleForm.password" type="password" placeholder="请输入密码"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"  style="display: block;margin: 0 auto;">登陆</el-button>
        <!--<el-button @click="resetForm('ruleForm')">重置</el-button>-->
      </el-form-item>

    </el-form>
    <div v-loading.fullscreen.lock="loading" element-loading-text="拼命加载中..."></div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';
  export default {
    data () {
      return {
        loading: false,
        showOrg: false,
        showBranch: false,
        ruleForm: {
          system: '',
          org: '',
          branch: '',
          username: '',
          password: ''
        },
        rules: {
          system: [
            { required: true, message: '请选择系统', trigger: 'blur' }
          ],
          org: [
            { required: true, message: '请选择机构', trigger: 'blur' }
          ],
          branch: [
            { required: true, message: '请选择网点', trigger: 'blur' }
          ],
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        }
      }
    },
    beforeMount(){
      this.getSystem()
    },
    computed: {
      ...mapGetters({
        sys : 'getStoreSys',
        org : 'getStoreOrg',
        branch : 'getStoreBranch',
        userInfo : 'getUserInfo',
        isShowLogin : 'getIsShowLogin'
      })
    },
    methods: {
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.loading = true
            let ruleForm = this.ruleForm
            let params = {
              organizationId: ruleForm.org,
              password: ruleForm.password,
              servicebranchId: ruleForm.branch,
              username: ruleForm.username,
              systemId: ruleForm.system
            }
            this.login(params)
          }
        })
      },
      resetForm (formName) {
        this.$refs[formName].resetFields()
      },
      ...mapActions([
        'getSystem',
        'getOrg',
        'getBranch',
        'login'
      ]),
      sysChange (id) {
        if (id === '6f9d1b4c3d9d4dc39117031740fcaa05'){
          this.showBranch = true
          this.showOrg = true
          if(!this.org.length){
            this.getOrg()
          }
        }else {
          this.showBranch = false
          this.showOrg = false
        }
      },
      orgChange (id) {
        if(!this.branch.length){
          this.getBranch({
            orgId:id
          })
        }
      }
    }
  }
</script>

<style>
  body{
    background: #f5f5f5;
  }
</style>

<style scoped>
  .content{
    width: 300px;
    height: 390px;
    border: 1px solid #ccc;
    position: fixed!important;
    padding: 30px 20px;
    padding-bottom: 10px;
    box-sizing: border-box;
    top: 50%;
    margin-top: -195px;
    left: 50%;
    margin-left: -150px;
    border-radius: 10px;
    background: #fff;
  }
</style>
