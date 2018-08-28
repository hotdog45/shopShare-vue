<template>
  <div class="login" style="display: flex;flex-direction:column; background-color: #fff; height: 100% ;align-items:center;">
    <div style="text-align: center;">
      <img alt="" src="../../assets/images/logo.png" style="height:85px;width:85px;margin: 0 auto;margin-top: 100px" />
    </div>

    <group style="width: 70%; ">
      <x-input class="x-input" placeholder="手机号" v-model="mobile"  ></x-input>
      <x-input class="x-input" placeholder="密码" v-model="password"></x-input>
    </group>
    <box gap="40px" style="width: 264px;margin-left: 55px;margin-right: 55px">
      <x-button style="background: #FD6D1F;border-radius: 2px;font-size: 15px" type="primary" @click.native="handleLogin">登录</x-button>
    </box>

    <div class="message">
      <span @click="goRegister">立即注册</span>
    </div>
  </div>
</template>

<script>
  import {XInput, Box, Group, XButton} from 'vux'
  import {getLogin} from '@/api/share';

  export default {
    name: 'login',
    data() {
      return {
        mobile: '',//用户手机号
        password: '',//用户密码


        inputText:{
          data:{
            mobile:'',
            password: '',
            userType: "2 ",
            storeType: "2",
            longitude: "100.0001",
            latitude: "120.2000",
            tuiCid: ""
          },
          apikey:"03892de79f9611e8b36c00163e0e500c",
//          device:'1',
//          froms:'1',
//          timestamp:'1',
//          sign:'1',
//          version:"1",

        }


      }

    },

    components: {
      XInput,
      XButton,
      Group,
      Box
    },
    methods: {
      handleLogin(){
        if (this.mobile.length !=11){
          this.$vux.toast.text('请输入正确的手机号')
          return;
        }
        if (this.password.length <2){
          this.$vux.toast.text('请输入密码')
          return;
        }

        this.inputText.data.mobile = this.mobile;
        this.inputText.data.password = this.password;
        getLogin(this.inputText).then((res) => {
          console.log(res);
          this.$vux.toast.text(res.msg, );
          Cookies.set('token', res.data.token);
          this.$router.go(-1);
        });
      },
      goRegister(){
        this.$router.push({
            path:'/register'
          })
      }
    }
  }
</script>

<style scoped lang="less">

  @color666 :#666666;
  @color393a31 :#393a31;

  .input-box {
    background-color: #FFFFFF;
  }

  .x-input {
    height: 65px;
    font-size: 15px;
    color: #333;
  }
  .login {

  >
  p:first-of-type {
    padding: 20px 15px 40px;
    float: right;
    color: @color666;
    font-size: 14px;
  }

  >
  p:last-of-type {
    width: 100%;
    text-align: center;
    color: @color393a31;
    font-size: 14px;
    position: absolute;
    bottom: 25px;
  }

  }
  .icon-wx {
    width: 18px;
    height: 14px;
    margin-right: 6px;
  }
  .message{
    display: flex;
    flex-direction: row;
    margin: 0 65px;
    justify-content: space-between;
  }
</style>
