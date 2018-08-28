<template>
  <div class="login" style="display: flex;flex-direction:column; background-color: #fff; height: 100% ;align-items:center;">
    <div style="text-align: center;">
      <img alt="" src="../../assets/images/logo.png" style="height:85px;width:85px;margin: 10px auto;margin-top: 100px" />
    </div>

    <div style="width: 70%;">
      <!--<input class="x-input" placeholder="手机号" v-model="mobile"  style="width: 100%; margin-left: 20px;">-->
      <!--<x-input disabled="false" style="height: 1px"></x-input>-->
      <!--<input class="x-input" placeholder="密码" v-model="password" type="password" style="width: 100%;margin-left: 20px;margin-top: -10px;">-->
      <!--<x-input disabled="false" style="height: 1px"></x-input>-->
      <x-input class="x-input" placeholder="手机号" v-model="mobile"></x-input>
      <x-input class="x-input" placeholder="密码" v-model="password" type="password"></x-input>
      <x-input disabled="false"></x-input>
    </div>

    <box gap="40px" style="width: 65%;margin-left: 65px;margin-right: 50px;margin-top: 10px;">
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
  import Cookies from 'js-cookie';

  export default {
    name: 'login',
    data() {
      return {
        mobile: '',//用户手机号
        password: '',//用户密码

        loginData: {
          mobile: '',
          password: '',
          userType: "1",
          storeType: "1",
          longitude: "100.0001",
          latitude: "120.2000",
          tuiCid: ""
        },
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

        this.loginData.mobile = this.mobile;
        this.loginData.password = this.password;
        getLogin(this.loginData).then((res) => {
          console.log(res);
          this.$vux.toast.text(res.msg, );
          if (res.status == 0){
            Cookies.set('token', res.data.token);
//            this.$router.go(-1);
          }
        });
        this.$router.push({
          path:'/confirmorder'
        })
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

  .input-box {
    background-color: #FFFFFF;
  }

  .x-input {
    height: 65px;
    font-size: 15px;
    color: #333;
  }

</style>
