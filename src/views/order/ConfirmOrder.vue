<template>
  <div class="orderDetails" style="height: 100%">
    <div class="receipt-info" @click="toChooseAddress" style="height: 87px">
      <span v-show="!receiptAddress.show">+添加收货信息</span>
      <div v-show="receiptAddress.show">
        <p>{{receiptAddress.receipter}}&nbsp;&nbsp;{{receiptAddress.mobile}}</p>
        <p>{{receiptAddress.address}}</p>
        <x-icon class="icon-right" type="ios-arrow-forward" size="18"></x-icon>
      </div>
    </div>
    <div style="background-color: #fff">
      <div style="display: flex; flex-direction: row; height: 43px; align-items: center">
        <div style="height: 43px;font-size: 14px;padding: 15px">萝莉童装</div>
        <img src="../../assets/images/share/come.png" style="width: 8px;height: 10px;margin-top: 8px">
      </div>
      <cell-box v-for="item in goodsList" key="item.id">
        <div class="goods-item">
          <div class="goods-img">
            <img/>
          </div>
          <div class="goods-info">
            <p style="margin-top:0px">{{item.name}}</p>
            <div style="font-size: 12px">￥{{item.price}}<span>x{{item.count}}</span></div>
          </div>
        </div>
      </cell-box>

    </div>

    <div style="margin-bottom: 50px;margin-top: 15px;background-color: #fff" >
      <!--<x-number style="height: 49px;font-size: 14px" title="购买数量" :min="0"  width="34px" @on-change="change"></x-number>-->
      <cell style="height: 49px;font-size: 14px" title="优惠券" value="满200减200" is-link v-show="!storeInfo.show"></cell>
      <cell style="height: 49px;font-size: 14px" title="配送方送" value="快递 免邮" is-link ></cell>
      <cell style="height: 49px;font-size: 14px" title="备注"></cell>
      <cell >
        <div class="total">
          共50件商品 &nbsp;合计&nbsp;&nbsp;<span style="color:#FD6D1F;font-size: 14px;padding-right: 30px">￥247100.00</span>
        </div>
      </cell>
    </div >
    <x-button style="background: #FD6D1F;position: fixed;bottom: 0" type="primary" class="sub-btn" @click.native="submitOrder">提交订单</x-button>

    <!--<div>-->
      <!--<x-button  type="primary" style="border-radius:1px;background-color:#FD6D1F;font-size: 15px;-->
    <!--color:#fff;width: 320px; text-align: center" @click.native="submitOrder">提交订单</x-button>-->
    <!--</div>-->
  </div>
</template>

<script>
  import { Group, Cell, CellBox, Datetime, CheckIcon,XNumber,XButton } from 'vux'
//  import CalcNumber from '../../components/CalcNumber.vue'
  import {getAddressList} from '@/api/share';

  export default {
    name: 'orderDetails',
    data() {
      return {
        receiptAddress:{//收货地址信息
          show:false,
          receipter:'张三',
          mobile:'18321976666',
          address:'上海上海市浦东新区东靖路558号'
        },
        storeInfo:{//发货门店信息
          show:false,
          name:'上海欧冰蓝贸易有限公司',
          mobile:'021-12374125',
          address:'上海市宝山区昌邑路15号简配路B馆'
        },
        receiptTime:'',//收货时间
        orderNumber:'1928735913467242',//订单编号
        goodsList:[{
          id:'132412352',
          name:'媛媛公主童装女童夏季背心裙儿童夏装长裙中大童碎花',
          price:2351,
          count:1,
          serviceChecked:false,
          servicePrice:'20.00',
          serviceCount:1
        }]
      }
    },
    created(){
      this.confirmOder()
    },
    methods:{
      //提交订单详情
      confirmOder(){


      },



      change (value) {
        console.log('change', value)
      },
      handleCheckedItem(){

      },
      toChooseAddress(){
        this.$router.push({
          path:'/addresslist'
        })
      },
      submitOrder(){
        this.$router.push({
          path:'/pay'
        })
      }
    },
    components: {
      Group,
      Cell,
      CellBox,
      Datetime,
      CheckIcon,
      XNumber,
      XButton
//      CalcNumber
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @white: #FFFFFF;
  @black:#393a3e;

  .receipt-info {
    width: 100%;
    height: 43px;
    background-color: @white;
    margin-top: 0;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  >span{
     font-size: 15px;
     display: block;
     text-align: center;
   }
  >div{
     text-indent: 15px;
     position: relative;
     line-height: 30px;
  p:first-of-type{
    font-size: 16px;
    color: #000000;
  }
  p:last-of-type{
    font-size: 13px;
    color: #626262;
  }
    .total{
      color: #000000;
    }
  .icon-right{
    position: absolute;
    right: 10px;
    top: 50%;
    margin-top: -9px;
  }
  }
  }
  .goods-item{
    width: 100%;
    overflow: hidden;
    font-size: 14px;
  .goods-img{
    width: 80px;
    height: 80px;
    margin-right: 15px;
    margin-bottom: 3px;
    overflow: hidden;
    background-color: #eaeeef;
    float: left;
  img{
    width: 100%;
    height: 100%;
  }
  }
  .goods-info{
    height: 80px;
    font-size: 14px;
    float: left;
    width: calc(~"100% - 100px");
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  >p{
     line-height: 20px;
     -webkit-line-clamp: 2;
     display: -webkit-box;
     -webkit-box-orient: vertical;
     overflow: hidden;
   }
  >div span:last-of-type{
     float: right;
   }
  }
  }
  .store{
  >p{
     width: 100%;
  span{
    color: #666666;
  }
  }
  >p:first-of-type{
     color: @black;
   }
  }
  .pay-box{
    width: 100%;
    height: 50px;
    line-height: 50px;
    background-color: @white;
    position: fixed;
    bottom: 0px;
    left: 0px;
    font-size: 13px;
  button{
    float: right;
    width: 7.5em;
    height: 100%;
    background-color: @black;
    color: @white;
    border:none;

  }
  >span{
     float: right;
     margin-right: 25px;
  strong{
    font-size: 18px;
  }
  }
  }
  .add-btn{
    position: fixed;
    bottom: 0px;
    left: 0px;
    font-size: 14px;
    height: 50px;
  }
</style>
