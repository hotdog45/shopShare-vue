<template>
  <div class="bg">
    <div class="countdown" style="font-size: 15px">支付剩余时间 23:21:20</div>

    <div class="balance" style="font-size: 16px">
      <div class="balancetext" >剩余支付金额</div>
      <div class="balancenum">¥4000</div>
    </div>


    <group class="payway">

      <CellBox class="wechat" title="微信" style="height:50px; font-size: 16px;">
        <img src="../../assets/images/shares/wx.png" style="height:25px; width:31px;"/>
        <div style="margin-left: 34px; flex-grow: 1;">  微信</div>
        <x-icon type="ios-checkmark" size="20" style="fill: #FD6D1F;"></x-icon>
      </CellBox>
    </group>

    <x-button  type="primary" style="border-radius:1px;background-color:#FD6D1F;
    color:#fff;width: 320px; text-align: center;" @click.native="gopay">支付</x-button>


  </div>
</template>

<script type="text/ecmascript-6">
  import { Group,CellBox, Cell,XButton} from 'vux'
  export default {
    name: 'my',
    data() {
      return {
        name: '张三',
        mobile: '13265464762'
      }
    },
    methods:{
      gopay(){

      },

    },
    components: {
      Group,
      CellBox,
      XButton,
      Cell
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  .bg {

    background-color: #F8F8F8;
  }

  .countdown {
    text-align: center;
    font-size: 15pt;
    line-height: 54px;

  }

  .balance {
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    line-height: 50px;
    padding-right :29px;
    padding-left :22px;
  }
  .payway {
    position :static
    margin-top :20px;
    background-color :#ffffff;
    padding-left :8px;

    margin-bottom :152px;

  }

  .wechat{
    flex-direction: row;
    justify-content: space-between;

  }

  .vux-x-icon {

  }

</style>
