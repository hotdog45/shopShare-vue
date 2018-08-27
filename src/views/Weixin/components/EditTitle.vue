<template>
  <div class="title-page" v-if="title">
    <group>
      <x-textarea :max="60" :value="val" v-model="val" placeholder="请输入至少1位字符"></x-textarea>
    </group>
    <div class="attention">注意：请您填写符合产品规格的标题文字，不得超过60个字符，注意违禁词汇的泗洪</div>
    <x-button class="btn" @click.native="handleBack()">确定</x-button>
  </div>
</template>
<script>

import { Group, XButton, XTextarea } from 'vux';

export default {
  name: 'Title',
  props: {
    title: String,
    default() {
      return '';
    },
  },
  components: {
    XButton,
    Group,
    XTextarea,
  },
  data() {
    const val = this.title;
    return {
      val: val,
    };
  },
  methods: {
    handleBack() {
      if (this.val !== '') {
        this.$emit('back', this.val);
      }
    },
  },
};
</script>
<style lang="scss">
  .title-page{
    .weui-icon-warn:before{
      content: "\EA0B" !important;
    }
    .weui-cells{
      margin-top: 0;
    }
  }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .title-page{
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
