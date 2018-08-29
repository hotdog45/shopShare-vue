<template>
  <div class="order-details">
    <div class="state">
      <span></span>
      <div class="state-detail">等待卖家发货</div>
    </div>
    <div class="receipt-info" style="height: 87px">
      <!--<div v-show="receiptAddress.show">-->
      <div v-show="true">
        <!--<span v-show="!receiptAddress.show">+添加收货信息</span>-->
        <div>
          <p style="height: 0;padding-left: 38px;font-size: 15px">{{receiptAddress.receipter}}&nbsp;&nbsp;{{receiptAddress.mobile}}</p>
          <div style="display: flex; flex-direction: row;position: relative;">
            <img src="../../assets/images/share/address_icon.png" style="position:absolute;bottom:20px;width: 20px;height: 20px;left:15px">
            <p style="margin-left: 38px;font-size: 14px">{{receiptAddress.address}}</p>
          </div>
        </div>
      </div>
    </div>
    <group gutter="15px">
      <div style="display: flex; flex-direction: row; margin-top: 20px; height: 43px; align-items: center">
        <cell title="萝莉童装" style="height: 43px;font-size: 14px"></cell>
        <img src="../../assets/images/share/blackcome.png" style="width: 15px;height: 15px">
      </div>
      <cell-box v-for="item in goodsList" key="item.id">
        <div class="goods-item">
          <div class="goods-img">
            <img />
          </div>
          <div class="goods-info">
            <p>{{item.name}}</p>
            <div style="font-size: 12px">￥{{item.price}}<span>x{{item.count}}</span></div>
          </div>
        </div>
      </cell-box>

    </group>

    <div class="order-price">
      <div class="price-detail">
        <span>商品总价</span>
        <span style="float: right">¥138.00</span>
      </div>
      <div class="price-detail">
        <span>优惠券</span>
        <span style="float: right">-¥40.00</span>
      </div>
      <div class="price-detail">
        <span>订单总价</span>
        <span style="float: right">¥98.00</span>
      </div>
    </div>

    <div class="contact" style="display: flex; flex-direction: row;align-items: center;margin: 15px 0;background: #fff;height:43px;font-size: 14px">
      <span style="padding: 0 17px">联系卖家:</span>
      <span style="flex-grow:1;">萝莉童装</span>
      <img src="../../assets/images/share/blackcome.png" style="width: 15px;height: 15px;margin-right: 15px">
    </div>

    <div class="order-msg">
      <div>
        <span>订单编号: 55578899995</span>
      </div>
      <div>
        <span>创建时间: 2018-8-27 12:36:12</span>
      </div>
      <div>
        <span>交易号: 6788434098090</span>
      </div>
    </div>

    <div class="cacel-order">
      <button @click="cancelOrder" v-model="show1">取消订单</button>
      <actionsheet v-model="show1" :menus="menus1" :close-on-clicking-mask="false" show-cancel @on-click-mask="console('on click mask')"></actionsheet>

    </div>
  </div>
</template>

<script>
  import { Group, Cell, CellBox, Datetime, CheckIcon,XNumber,XButton,Actionsheet } from 'vux'
  //  import CalcNumber from '../../components/CalcNumber.vue'
  import {getOrderDetail} from '@/api/share';
  export default {
    name: 'orderDetails',
    data() {
      return {
            show1: false,
            menus1: {
              menu1: "七天无理由退换货",
              menu2: "信息填写错误"
            },
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
    methods:{
      change (value) {
        console.log('change', value)
      },
      handleCheckedItem(){

      },
      toChooseAddress(){
        this.$router.push({
          path:'/MyAddress'
        })
      },
      cancelOrder(){

      }
    },
    components: {
      Group,
      Cell,
      CellBox,
      Datetime,
      CheckIcon,
      XNumber,
      XButton,
      Actionsheet
//      CalcNumber
    }
  }
</script>

<style scoped lang="less">
  @white: #FFFFFF;
  @black:#393a3e;
  .state{
    height: 63px;
    top:0;
    margin-bottom: 15px;
    line-height: 63px;
    background: @white;
  }
  .state-detail{
    margin-left: 57px;
  }
  .receipt-info {
    width: 100%;
    height: 87px;
    background-color: @white;
    margin-top: 0px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
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
  .order-price{
    height: 93px;
    margin-top: 14px;
    padding: 15px;
    background: @white;
    display: flex;
    flex-direction:column;
    font-size: 12px;
  }
  .price-detail{
    width: 100%;
    height: 31px;
  }
  .order-msg{
    margin-top:15px;
    background:  @white;
    padding: 15px;
    height: 83px;
    font-size: 12px;
    >span{
    display: block;
    height: 27px;
     }

  }
  .cacel-order{
    height: 49px;
    line-height: 49px;
    width: 100%;
    background: @white;
    margin-bottom: 0;
    position: fixed;
    bottom: 0;
    button{
      position: absolute;
      right: 21px;
      top:10px;
      bottom: 10px;
      width: 79px;
      height: 29px;
      font-size:14px;
      border-style: solid;
      border-width: 1px;
      background-color: @white;
    }
  }
</style>
