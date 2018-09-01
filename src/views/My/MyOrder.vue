<template>
  <div class="myOrders">
    <!--//顶部-->
    <tab :line-width=2 custom-bar-width="75px" active-color="#FD6D1F" default-color="#333333" scroll-threshold = 5>
      <tab-item selected @on-item-click="getOrderList">全部</tab-item>
      <tab-item @on-item-click="getOrderList">待付款</tab-item>
      <tab-item @on-item-click="getOrderList">待发货</tab-item>
      <tab-item @on-item-click="getOrderList">待收货</tab-item>
      <tab-item @on-item-click="getOrderList">待评价</tab-item>
    </tab>
    <div v-for="(item,index) in list">
      <!--订单列表  -->
      <div style="background-color: #fff; padding-left: 15px;" >
        <!--顶部-->
        <div style="display: flex; flex-direction: row; margin-top: 15px; height: 43px; align-items: center">
          <img src="../../assets/images/buyHome/icon-home-act.png" style="width: 15px;height: 15px;">
          <div style="margin: 0 3px 0 7px; color: #333333;font-size: 14px;">{{item.storeName}}</div>
          <img src="../../assets/images/share/come.png" style="width: 8px;height: 10px">
          <div style="flex-grow:1;"></div>
          <div style="margin-right: 16px;color: #FD6D1F;font-size: 14px;">{{item.statusName}}</div>
        </div>
        <!--商品-->
        <div v-for="item2 in item.itemsList" @click="itemDetail(index)">
          <div class="vux-1px-t"  style="display: flex;flex-direction:row; padding-top: 15px;">
            <img :src="item2.productThumb" style="width: 90px;height: 80px;">
            <!--商品列表-->
            <div style="margin-left: 12px; width: 60%; ">
              <div>{{item2.productName}}</div>
              <!--<div style="font-size: 12px;color: #FFAE00;">退款中</div>-->
              <div style="display: flex;flex-direction:row; margin-top: 3px;align-items: center;">
                <!--<div v-for="size in item2.sizeNameJson" v-show="item2.sizeNameJson.length>0" style="margin-left: 0;">-->
                <div style="color: #333333;font-size: 12px;opacity: 0.6; margin-left: 0;">{{item2.colorName}}</div>
                <!--</div>-->
                <!--<button class="specifications">欠款</button>-->
                <!--<button class="specifications">拼包</button>-->
              </div>

            </div>
            <div class="priceDiv">
              <div style="margin-top: 17px">￥{{item2.price}}</div>
              <s>￥{{item2.delPrice}}</s>
              <div>x {{item2.num}}</div>
            </div>

          </div>
        </div>
        <!--总价-->
        <div class="vux-1px-t"
             style="display: flex;flex-direction:row;margin-top: 20px;padding: 10px 0;justify-content:flex-end">

          <div style="margin-right:10px;font-size: 12px;">共{{item.totNum}}件货品</div>
          <div style="font-size: 12px;">总计：</div>
          <div style="color: #FD6D1F;font-size: 13px;margin-right:10px;">￥{{item.totAmnt}}</div>
          <div v-show="item.freight > 0" style="margin-right:16px;font-size: 12px;">(含运费￥{{item.freight}})</div>
        </div>
        <!--底部按钮-->
        <!--//1/2 待付款 无效订单，3 商家取消 4订单已取消 5 超时未付款，订单已关闭 6/7待发货 8/9/10/11 待收货 12/13 待评价 14/15 交易已完成-->
        <div class="vux-1px-t" style="display: flex;flex-direction:row;justify-content:flex-end;align-items: center;">
          <button class="btn1" v-show="item.statusCode < 2 " @click="btn1click(index)" v-model="show">取消订单</button>
          <!--<button class="btn2" v-show="item.statusCode > 5" @click="btn2click">查看拼包凭证</button> &lt;!&ndash;86&ndash;&gt;-->
          <button class="btn3" v-show="item.statusCode < 2" @click="btn3click(index)">付款</button>
          <!--<button class="btn4" v-show="item.statusCode ==1" @click="btn4click(index)">取消退款</button>-->
          <button class="btn5" v-show="item.statusCode == 4" @click="btn5click(index)">删除订单</button>
          <!--<button class="btn6" v-show="item.statusCode > 13" @click="btn6click">申请发票</button>-->
          <!--<button class="btn7" v-show="item.statusCode > 7 && item.deliverStatus < 11" @click="btn7click">查看物流</button>-->
          <button class="btn8" v-show="item.statusCode > 7 && item.deliverStatus < 11" @click="btn8click(index)">确认收货</button>
          <!--<button class="btn9" v-show="item.statusCode ==12 || item.deliverStatus ==13" @click="btn9click">去评价</button>-->
        </div>
        <!--<check-icon :value.sync="demo1" type="plain">  demo2 </check-icon>-->
        <!--<check-icon :value.sync="demo2" type="plain">  demo2 </check-icon>-->

      </div>
    </div>
    <actionsheet v-model="show" :menus="menus" @on-click-menu="click" show-cancel></actionsheet>
  </div>
</template>

<script>
  import {Tab, TabItem, XButton,Actionsheet} from 'vux'
  import { CheckIcon } from 'vux'
  import {getBuyerOrderList,
    getBuyerOrderPay,
    getBuyerOrderDelete,
    getBuyerOrderReceipt,
    getBuyerOrderRefundCancel,
    getBuyerOrderCancel,
  } from '@/api/share';

  export default {
    name: 'myOrders',
    data() {
      return {
        demo1:'0',
        demo2:"1",
        list:[],
        indexItem:0,
        show: false,
        menus: {
          menu1: "我不想买了",
          menu2: "信息填写错误，重新拍"
        },

        orderListReq: {
          type: 0,
          pageIndex: 0,
          pageSize: 50,
        },

        orderPayReq:{
          payId:"",
          payName:"orderPay",
          payAmnt:"",
          payMode:"aliPay",
          payProductName:"",
          payProductDesc:"",
        },
        orderCancelReq:{
          orderId:"",//必选 订单号
          reasonId:"", //必选
          reasonDesc:"",//可选 取消原因
        },
        orderRefundCancel:{
          orderId:"",//必选 订单号
          itemsNo:"",  //必选 订单子序号
          refundSno:"",  //必选 退款序号
        },
        orderDelete:{
          orderId:"",//必选 订单号
        },
        orderReceipt:{
          orderId:"",//必选 订单号
          itemsNo:[],  //必选 订单子序号
        },
      }
    },
    components: {
      Tab,
      TabItem,
      XButton,
      Actionsheet,
      CheckIcon,
    },
    created() {
      this.getOrderList(0)
    },
    methods: {
      //获取列表
      getOrderList(index){
        this.orderListReq.type = index;
        getBuyerOrderList(this.orderListReq
        ).then((res) => {
          console.log(res);
          if (res.status != 0) {
            this.$vux.toast.text(res.msg);
          } else {
            this.list = res.data;
          }

        });
      },

      //弹出框,打印
      click(key)
      {
        console.log(key)
        if (key=="menu2"){
          this.orderCancelReq.reasonDesc = "七天无理由退换货"
        }else {
          this.orderCancelReq.reasonDesc = "信息填写错误"
        }
        this.orderCancelReq.orderId = this.list[this.indexItem].orderId;
        getBuyerOrderCancel(this.orderCancelReq).then((res) => {
          console.log(res);
          this.$vux.toast.text(res.msg);
        });
      },

      //取消订单(OK)
      btn1click(index){
        this.show = true;
        this.indexItem = index;
      },
      //付款
      btn3click(index){
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
          if(res.status == 0){      //成功之后重新请求,刷新数据
            this.getOrderList();
            console.log(res);
          }
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

      itemDetail(index){
        this.$router.push({
          path: 'OrderDetail',
          query: { orderId:this.list[index].orderId }
        })
      },
    },


    filters: {},
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @white: #FFFFFF;
  @black: #393a3e;
  .order-all {
    margin-bottom: 15px;
    > div {
      padding-left: 15px;
      background-color: @white;
      font-size: 12px;
      margin-top: 15px;
      overflow-x: scroll;
      color: #666666;
      > div:first-of-type, > div:last-of-type {
        height: 45px;
        line-height: 45px;
        padding-right: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      > div:last-of-type {
        > span span {
          color: @black;
        }

        button {
          width: 70px;
          height: 27px;
          border: none;
          background-color: @black;
          color: @white;
          font-size: 0.85em;
        }
      }
      .img-box {
        padding: 10px 15px 10px 0px;
        > div {
          overflow: scroll;
          width: auto;
          white-space: nowrap;
          img {
            width: 60px;
            height: 60px;
            margin-right: 10px;
          }

        }
      }
    }
  }

  .vux-1px-t {
    > button {
      border-radius: 1px;
      width: 84px;
      height: 24px;
      font-size: 11px;
      background-color: #FD6D1F;
      color: #fff;
      border: none;
      margin: 10px 0px;
      margin-right: 15px;
    }
    /*position: absolute;*/
    /*right: 0px;*/
    /*margin-top: -45px;*/
  }

  .specifications {
    margin-left: 4px;
    font-size: 10px;
    color: #FD6D1F;
    width: 45px;
    height: 23px;
    border: 1px solid #FD6D1F;
    text-align: center;
    background: #fff;
    border-radius:2px;

  }

  .priceDiv{
    display: flex;
    flex-direction:column;
    width: 30px;
    margin-left: 10px;
    margin-right: 15px;
    align-items: flex-end;
  }

</style>
