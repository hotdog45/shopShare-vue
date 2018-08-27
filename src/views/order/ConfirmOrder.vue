<template>
  <div class="orderDetails">
    <div class="receipt-info" @click="toChooseAddress" style="height: 87px">
      <span v-show="!receiptAddress.show">+添加收货信息</span>
      <div v-show="receiptAddress.show">
        <p>{{receiptAddress.receipter}}&nbsp;&nbsp;{{receiptAddress.mobile}}</p>
        <p>{{receiptAddress.address}}</p>
        <x-icon class="icon-right" type="ios-arrow-forward" size="18"></x-icon>
      </div>
    </div>
    <group gutter="15px">
      <cell title="萝莉童装" style="height: 43px;font-size: 14px"></cell>
      <cell-box v-for="item in goodsList" key="item.id">
        <div class="goods-item">
          <div class="goods-img">
            <img />
          </div>
          <div class="goods-info">
            <p>{{item.name}}</p>
            <div style="font-size: 12px">￥{{item.price}}<span>x{{item.count}}</span></div>
          </div>
          <div class="goods-service">
            <span v-show="item.serviceChecked == true">服务费:￥{{item.servicePrice}}</span>
            <div v-show="item.serviceChecked == true">
              数量
              <!--<CalcNumber :count.sync="item.serviceCount"></CalcNumber>-->
            </div>
          </div>
        </div>
      </cell-box>

    </group>
    <group style="margin-bottom: 50px;" gutter="15px" >
      <x-number style="height: 49px;font-size: 14px" title="购买数量" :min="0" @on-change="change"></x-number>
      <cell style="height: 49px;font-size: 14px" title="优惠券" value="满200减200" is-link v-show="!storeInfo.show"></cell>
      <cell style="height: 49px;font-size: 14px" title="配送方送" value="快递 免邮" is-link ></cell>
      <cell style="height: 49px;font-size: 14px" title="备注"></cell>
      <cell style="padding-left: 152px;height: 49px;font-size: 14px" title="共50件商品 合计: ¥2900"></cell>
    </group >
      <x-button  type="primary" style="border-radius:1px;background-color:#FD6D1F;font-size: 15px;
    color:#fff;width: 320px; text-align: center;" @click.native="submitOrder">提交订单</x-button>


  </div>
</template>

<script>
  import { Group, Cell, CellBox, Datetime, CheckIcon,XNumber,XButton } from 'vux'
//  import CalcNumber from '../../components/CalcNumber.vue'
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
    methods:{
      change (value) {
        console.log('change', value)
      },
      handleCheckedItem(){

      },
      toChooseAddress(){
        this.$router.push({
          path:'/NoAdress'
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

<style scoped lang="less">
  @white: #FFFFFF;
  @black:#393a3e;
  .vux-x-icon {
    fill: #AAAAAA;
  }
  .receipt-info {
    width: 100%;
    height: 80px;
    background-color: @white;
    margin-top: 0px;
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
  .goods-service{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;

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
</style>
