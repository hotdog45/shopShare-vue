<template>
  <div class="pass-page">
    <div v-if="currentComponent === 'pass'">
      <group>
      <x-input title="密码"  name="password"  placeholder="请输入密码" v-model="pass" :min="passWord.length" :max="passWord.length" ref="refpassword" required ></x-input>
    </group>
    <div class="attention">输入管理密码可快速查看拿货价。</div>
    <div class="flex-sb btn-sb">
    <x-button class="btn" @click.native="CancelBack()" >取消</x-button>
     <!-- :disabled="disabled" -->
    <x-button class="btn" @click.native="handleBack()">登陆</x-button>
    </div>
    </div>
    <!-- Shopowner -->
    <div v-if="currentComponent !== 'pass' && currentComponent ==='shopowner'">
      <component :is="currentComponent"  @backS="handleBackPass" :qq="qq" :iphone="iphone"></component>
    </div>
  </div>
</template>
<script>
import { Group, XButton, XInput } from 'vux';
import Shopowner from './Shopowner';

export default {
  props: {
    passWord: String,
    iphone: String,
    qq: String,

  },
  name: 'Pass',
  components: {
    XButton,
    Group,
    XInput,
    Shopowner,
  },
  data() {
    const val = this.passWord;
    return {
      pass: '',
      disabled: true,
      val: val,
      currentComponent: 'pass',
    };
  },
  methods: {
    CancelBack() {
      this.$emit('back');
    },
    handleBack() {
      if (this.pass === this.val) {
        this.currentComponent = 'shopowner';
      }
    },
    handleBackPass() {
      this.$emit('back');
      this.currentComponent = 'index';
    },
  },
};
</script>
<style lang="scss">
  .pass-page{
    .weui-icon-warn:before{
      content: "\EA0B" !important;
    }
    .weui-cells{
      margin-top: 0;
    }
    .weui-input{
      width: 100vw;
      height: 24px;
      line-height: 24px;
    }
  }
</style>
<style lang="scss">

</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .pass-page{
    .attention{
      color: #ddd;
      text-align: center;
      font-size: 14px;
      margin: 10px 10px 30px;
    }
    .btn-sb{
      margin: 0 10px;
    .btn{
      border: 0;
      // border-radius: 0;
      color: #fff;
      background: #FD6D1F;
      height: 50px;
      width: 50vw;
      margin: 0px 4px;
    }
    }

  }
</style>
