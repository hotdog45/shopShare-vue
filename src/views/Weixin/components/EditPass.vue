<template>
  <div class="pass-page">
    <group>
      <x-input title="密码"  name="password" is-type="number" type="number" placeholder="请输入至少4位数字" v-model="password" :min="4"  @on-change="keyDown" ref="refpassword" required></x-input>
    </group>
    <div class="attention">注意：分享后点击”我是店长”输入管理密码可快速查看拿货价。</div>
    <x-button class="btn" @click.native="handleBack()" :disabled="disabled">确定</x-button>
  </div>
</template>
<script>

import { Group, XButton, XInput } from 'vux';

export default {
  name: 'Pass',
  props: {
    pass: String | Number,
    default() {
      return '';
    },
  },
  components: {
    XButton,
    Group,
    XInput,
  },
  data() {
    const val = this.pass;
    return {
      password: val,
      disabled: true,
    };
  },
  methods: {
    keyDown() {
      this.disabled = true;
      if (this.$refs.refpassword.valid === true && this.password !== '') {
        this.disabled = false;
      }
    },
    handleBack() {
      this.password = this.$refs.refpassword.value;
      this.$emit('back', this.password);
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
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .pass-page{
    .attention{
      color: #ddd;
      font-size: 14px;
      margin: 10px 10px 30px;
    }
    .btn{
      color: #fff;
      background: #FD6D1F;
      height: 50px;
      width: 90vw;
      margin: 0px auto;
    }
  }
</style>
