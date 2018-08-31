<template>
  <div class="order-details">
    <div class="state" style="height: 63px;font-size: 15px;padding-left:57px;display: flex;flex-direction: column;">

      <!--<div style="height: 15px">-->
        <!--<span>{{orderData.statusName}}</span>-->
      <!--</div>-->
      <!--<div style="top:10px">-->
        <!--<span>{{orderData.orderDate}}</span>-->
      <!--</div>-->
      <div class="order-state">
        <p class="state-detail" style="line-height: 10px;font-size: 15px;">{{orderData.statusName}}</p>
        <p style="color:#888;line-height: 10px;font-size: 12px">{{orderData.orderDate}}</p>
        <img src="../../assets/images/share/blackcome.png" style="width: 7px;height: 10px;">
      </div>
    </div>
    <div class="receipt-info" style="height: 87px">
      <!--<div v-show="receiptAddress.show">-->

      <!--<img src="../../assets/images/share/address_icon.png"-->
      <!--style="width: 20px;height: 20px;"-->
      <!--&gt;</img>-->
      <div v-show="true">
        <div>
          <p style="height: 0;padding-left: 38px;font-size: 15px">收货人:{{orderData.consignee}}&nbsp;&nbsp;&nbsp;{{orderData.mobile}}</p>
          <div style="display: flex; flex-direction: row;">
            <img src="../../assets/images/share/address_icon.png"
                 style="width: 20px;height: 20px;margin-left: 15px;margin-top:20px">
            <p style="margin-left: 3px;font-size: 14px;">收货地址:{{orderData.address}}</p>
          </div>
        </div>
      </div>
    </div>

    <div style="background-color: #fff">
      <div style="display: flex; flex-direction: row; height: 43px; align-items: center">
        <div style="height: 43px;font-size: 14px;padding: 15px">{{orderData.storeName}}</div>
        <img src="../../assets/images/share/come.png" style="width: 8px;height: 10px;margin-top: 8px">
      </div>
      <cell-box v-for="item in orderData.itemsList" key="item.id">
        <div class="goods-item">
          <div class="goods-img">
            <img :src="item.productThumb" style="width: 90px;height: 80px;">
          </div>
          <div class="goods-info">
            <p>{{item.productName}}</p>
            <div style="font-size: 12px">￥{{item.realAmnt}}<span>x{{item.num}}</span></div>
          </div>
        </div>
      </cell-box>

    </div>

    <div class="order-price">
      <div class="price-detail" style="color:#888">
        <span>商品总价</span>
        <span style="float: right">¥{{orderData.totAmnt}}</span>
      </div>
      <div class="price-detail"  style="color:#888">
        <span>优惠券</span>
        <span style="float: right">-¥40.00</span>
      </div>
      <div class="price-detail">
        <span>订单总价</span>
        <span style="float: right">¥98.00</span>
      </div>
    </div>

    <div class="contact"
         style="display: flex; flex-direction: row;align-items: center;margin: 15px 0;background: #fff;height:43px;font-size: 14px">
      <span style="padding: 0 17px;color:#888">联系卖家:</span>
      <span style="flex-grow:1;">{{orderData.storeName}}</span>
      <img src="../../assets/images/share/come.png" style="width: 8px;height: 10px;margin-right: 12px">
    </div>

    <div class="order-msg">
      <div>
        <span>订单编号: {{orderData.orderSn}}</span>
      </div>
      <div>
        <span>创建时间: {{orderData.orderDate}}</span>
      </div>
      <div>
        <span>交易号: {{orderData.transSn}}</span>
      </div>
    </div>
    <!--//占位,防止覆盖-->
    <div style="height: 49px;width: 100%">

    </div>

    <div class="cacel-order">
      <!--<button @click="cancelOrder" v-model="show">取消订单</button>-->
    <div style="display: flex;flex-direction:row;justify-content:flex-end;align-items: center;">
      <button class="btn1" v-show="orderData.statusCode == 1 " @click="btn1click(index)" v-model="show" style="color:#666">取消订单</button>
      <!--<button class="btn2" v-show="item.statusCode > 5" @click="btn2click">查看拼包凭证</button> &lt;!&ndash;86&ndash;&gt;-->
      <button class="btn3" v-show="orderData.statusCode < 2" @click="btn3click(index)" style="background: #FD6D1F;border: none;color:#fff">付款</button>
      <!--<button class="btn4" v-show="item.statusCode ==1" @click="btn4click(index)">取消退款</button>-->
      <button class="btn5" v-show="orderData.statusCode == 4" @click="btn5click(index)">删除订单</button>
      <!--<button class="btn6" v-show="item.statusCode > 13" @click="btn6click">申请发票</button>-->
      <!--<button class="btn7" v-show="item.statusCode > 7 && item.deliverStatus < 11" @click="btn7click">查看物流</button>-->
      <button class="btn8" v-show="orderData.statusCode > 7 && orderData.deliverStatus < 11" @click="btn8click(index)">确认收货</button>
      <!--<button class="btn9" v-show="item.statusCode ==12 || item.deliverStatus ==13" @click="btn9click">去评价</button>-->
    </div>

    <actionsheet v-model="show" :menus="menus" @on-click-menu="click" show-cancel></actionsheet>

    </div>
  </div>
</template>

<script>
  import {Group, Cell, CellBox, Datetime, CheckIcon, XNumber, XButton, Actionsheet} from 'vux'
  //  import CalcNumber from '../../components/CalcNumber.vue'
  import {getOrderDetail} from '@/api/share';
  export default {
    name: 'orderDetails',
    data() {
      return {
        orderData: null,
        show: false,
        menus: {
          menu1: "七天无理由退换货",
          menu2: "信息填写错误"
        },
        orderDetail: {
          orderId: ""  //必选 订单号
        }
      }
    },
    created() {
      this.showOrderDetail();
    },
    methods: {

      /**
       * 请求订单详情
       * @param orderid
       */
      showOrderDetail(){
        this.orderDetail.orderId = this.$route.query.orderId;
        getOrderDetail(this.orderDetail).then((res) => {
          console.log(res);
          if (res.status != 0) {
            this.$vux.toast.test(res.msg)
          } else {
            this.orderData = res.data
          }
        });
      },

      handleCheckedItem()
      {

      },

      toChooseAddress()
      {
        this.$router.push({
          path: '/MyAddress'
        })
      },

      cancelOrder()
      {
        this.show = true;

      },

      console(msg)
      {
        console.log(msg)
      },
      //弹出框,打印
      click(key)
      {
        console.log(key)
      },

      //取消订单(OK)
      btn1click(index){
        this.show = true;
        this.indexItem = index;
      },
      //付款
      btn3click(index){
        this.$router.push({
          path:'pay'
        })
        getBuyerOrderPay().then((res) => {
          console.log(res);
          this.$vux.toast.text(res.msg);
        });
      },
      //取消退款
      btn4click(index){
        this.orderRefundCancel.orderId = this.list[index].orderId;
        for (var i=0; i< this.list[index].itemsList.length;i++){
          let itemsNo=  this.list[index].itemsList[i].itemsNo;
          console.log("itemsNo::::::"+itemsNo);
          this.orderRefundCancel.itemsNo.push(itemsNo)
        }
        getBuyerOrderRefundCancel(this.orderRefundCancel).then((res) => {
          console.log(res);
          this.$vux.toast.text(res.msg);
        });
      },
      //删除订单(OK)
      btn5click(index){
        this.orderDelete.orderId = this.list[index].orderId;
        getBuyerOrderDelete(this.orderDelete).then((res) => {
          console.log(res);
          this.$vux.toast.text(res.msg);
        });
      },
      //确认收货(OK)
      btn8click(index){
        console.log("test"+index);
        this.orderReceipt.orderId = this.list[index].orderId;
        for (var i=0; i< this.list[index].itemsList.length;i++){
          let itemsNo=  this.list[index].itemsList[i].itemsNo;
          console.log("itemsNo::::::"+itemsNo);
          this.orderReceipt.itemsNo.push(itemsNo)
        }
        console.log("this.orderReceipt::::::"+this.orderReceipt);
        getBuyerOrderReceipt(this.orderReceipt).then((res) => {
          console.log(res);
          this.$vux.toast.text(res.msg);
        });
      },

    },
    components: {
      Group,
      Cell,
      CellBox,
      Datetime,
      CheckIcon,
      XNumber,
      XButton,
      Actionsheet,
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @white: #FFFFFF;
  @black: #393a3e;
  .state {
    height: 63px;
    top: 0;
    margin-bottom: 15px;
    line-height: 63px;
    background: @white;
  }

  .order-details {
    display: flex;
    flex-direction: column;
  }

  .state-detail {
    margin-left: 0px;
    color: #359A2B;
  }

  .receipt-info {
    width: 100%;
    height: 87px;
    background-color: @white;
    margin-top: 0px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;

    >
    span {
      font-size: 15px;
      display: block;
      text-align: center;
    }

    >
    div {
      text-indent: 15px;
      position: relative;
      line-height: 30px;

      p:first-of-type {
        font-size: 16px;
        color: #000000;
      }

      p:last-of-type {
        font-size: 13px;
        color: #626262;
      }

      .icon-right {
        position: absolute;
        right: 10px;
        top: 50%;
        margin-top: -9px;
      }

    }
  }

  .goods-item {
    width: 100%;
    overflow: hidden;
    font-size: 14px;

    .goods-img {
      width: 80px;
      height: 80px;
      margin-right: 15px;
      margin-bottom: 3px;
      overflow: hidden;
      background-color: #eaeeef;
      float: left;

      img {
        width: 100%;
        height: 100%;
      }

    }
    .goods-info {
      height: 80px;
      font-size: 14px;
      float: left;
      width: calc(~ "100% - 100px");
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      >
      p {
        line-height: 20px;
        -webkit-line-clamp: 2;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      >
      div span:last-of-type {
        float: right;
      }

    }
  }

  .store {

    >
    p {
      width: 100%;

      span {
        color: #666666;
      }

    }
    >
    p:first-of-type {
      color: @black;
    }

  }

  .pay-box {
    width: 100%;
    height: 50px;
    line-height: 50px;
    background-color: @white;
    position: fixed;
    bottom: 0px;
    left: 0px;
    font-size: 13px;

    button {
      float: right;
      width: 7.5em;
      height: 100%;
      background-color: @black;
      color: @white;
      border: none;

    }

    >
    span {
      float: right;
      margin-right: 25px;

      strong {
        font-size: 18px;
      }

    }
  }

  .order-price {
    height: 93px;
    margin-top: 14px;
    padding: 15px;
    background: @white;
    display: flex;
    flex-direction: column;
    font-size: 12px;
  }

  .price-detail {
    width: 100%;
    height: 31px;
  }

  .order-msg {
    background: @white;
    color:#888;
    padding: 15px;
    font-size: 12px;

    >
    span {
      display: block;
      height: 27px;
    }

  }

  .cacel-order {
    height: 49px;
    line-height: 49px;
    width: 100%;
    background: @white;
    margin-bottom: 0;
    position: fixed;
    bottom: 0;

    button {
      position: absolute;
      right: 21px;
      top: 10px;
      bottom: 10px;
      width: 79px;
      height: 29px;
      font-size: 14px;
      border-style: solid;
      border-width: 1px;
      background-color: @white;
    }

  }
</style>
