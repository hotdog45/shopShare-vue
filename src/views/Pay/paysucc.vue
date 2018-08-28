<template>
  <div class="paysucc">
    <div style="padding:  64px; ">
      <!--<img src="../../assets/images/shares/wx.png" style="height:83px; width:83px;"/>-->
      <x-icon type="ios-checkmark-outline" size="83" style="fill: #FD6D1F;"></x-icon>
    </div>
    <div style="margin-bottom: 34px ;font-size: 15px">
      <x-button style="border-radius:1px;background-color:#FD6D1F;
    color:#fff;width:180px;text-align: center;" @click.native="orderDesc">查看订单详情
      </x-button>
    </div >
  </div>

</template>

<script type="text/ecmascript-6">
  import { XButton} from 'vux'
  export default {
    name: 'my',
    data() {
      return {
        name: '张三',
        mobile: '13265464762'
      }
    },
    methods:{
      orderDesc(){

      },

    },
    components: {
      XButton
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  .paysucc {
    background-color: #fff;
    width: 100%;
    height: 100%;
    flex-direction: column;
    text-align: center;
  }
</style>
