<template>
  <div class="edit-price">
    <group>
      <x-input title="价钱"  name="price" is-type="number" type="number" placeholder="请输入至少1位数字" v-model="newPrice" :min="1"  @on-change="keyDown" ref="refPrice" required></x-input>
    </group>
    <div class="attention"></div>
    <x-button class="btn" @click.native="handleBack()" :disabled="disabled">确定</x-button>
  </div>
</template>
<script>

import { Group, XButton, XInput } from 'vux';

export default {
  name: 'EditPrice',
  props: {
    price: String | Number,
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
    const val = this.price;
    return {
      newPrice: val,
      disabled: true,
    };
  },
  methods: {
    keyDown() {
      this.disabled = true;
      if (this.$refs.refPrice.valid === true && this.newPrice !== '') {
        this.disabled = false;
      }
    },
    handleBack() {
      this.$emit('back', this.newPrice);
    },
  },
};
</script>
<style lang="scss">
  .edit-price{
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
  .edit-price{
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
