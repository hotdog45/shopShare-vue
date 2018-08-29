<template>
  <!-- 页面的内容 -->
  <div style="display: flex;flex-direction:column; background-color: #fff; height: 100% ;align-items:center;">
    <img src="../../assets/images/download/logo.png"
         style="width: 100px;height: 100px;margin-top:50px; margin-bottom: 0px;">

    <div style="width: 70%; position: relative" >
      <x-input class="x-input" placeholder="手机号" v-model="mobile"></x-input>
      <x-input class="x-input" placeholder="验证码" v-model="code"></x-input>
      <button class="getCode" @click="getCode" >获取验证码</button>
      <x-input class="x-input" placeholder="密码" v-model="password" type="password"></x-input>
      <x-input class="x-input" placeholder="确认密码" v-model="password2" type="password"></x-input>
      <x-input disabled="false"></x-input>
    </div>

    <x-button style="border-radius:1px;width: 70%; height: 44px;background: #FD6D1F;color: #fff" @click.native="register">注册</x-button>
    <div style="margin-top: 61px;">注册即表示同意大风车商城规则</div>


  </div>


</template>

<script>
  /* 页面的js */
  import {Group,XInput, Tab, TabItem, XButton,Toast,ToastPlugin} from 'vux'

  import { getPhoneCode ,getRegister} from '@/api/share';
  import Cookies from 'js-cookie';


  export default {
    name: 'register',
    data() {
      return {
        mobile:'',//用户手机号
        code:"",
        password:'',//用户密码
        password2:'',//用户密码

        datas:{
          mobile:"",
        },
        registerData:{
          mobile:"",
          password:"",
          smsCode:"",
          userType:1,
          storeType:1,
        }
      }
    },
    methods: {
      getCode(){

        if (this.mobile.length !=11){
            this.$vux.toast.text('请输入正确的手机号')
          return;
        }
        this.datas.mobile = this.mobile;
        getPhoneCode(this.datas).then((res) => {
          this.$vux.toast.text(res.msg)
      });

      },
      register(){
//        this.$router.go(-1);
//
//        return;
        if (this.mobile.length !=11){
          this.$vux.toast.text('请输入正确的手机号')
          return;
        }
        if (this.password != this.password2){
          this.$vux.toast.text('两次密码不一致')
          return;
        }
        this.registerData.mobile = this.mobile;
        this.registerData.password = this.password;
        this.registerData.smsCode = this.code;
        getRegister(this.registerData).then((res) => {
          this.$vux.toast.text(res.msg, 'middle');
          Cookies.set('token', res.data.token);
          console.log(res);
          this.$router.go(-1);
//          this.$router.push({
//            path:'/myorder'
//          })
        });

//        this.$vux.toast.text(Cookies.get('token')+"token", 'middle')
      }

    },
    components: {
      Group,
      Tab,
      TabItem,
      XButton,
      XInput,
      Toast,
      ToastPlugin,
    },

  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .x-input {
    height: 65px;
    font-size: 15px;
    color: #333;
  }

  .getCode {
    border-radius: 1px;
    width: 84px;
    height: 24px;
    font-size: 11px;
    background-color: #FD6D1F;
    color: #fff;
    border: none;
    position: absolute;
    right: 0px;
    margin-top: -45px;
  }


</style>
