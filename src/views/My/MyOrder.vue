<template>
  <div class="myOrders">
    <tab :line-width="2" custom-bar-width="75px" active-color="#FD6D1F" default-color="#333333" scroll-threshold="5">
      <tab-item :selected="orderListReq.type == 0" @on-item-click="getOrderList">全部</tab-item>
      <tab-item :selected="orderListReq.type == 1" @on-item-click="getOrderList">待付款</tab-item>
      <tab-item :selected="orderListReq.type == 2" @on-item-click="getOrderList">待发货</tab-item>
      <tab-item :selected="orderListReq.type == 3" @on-item-click="getOrderList">待收货</tab-item>
      <tab-item :selected="orderListReq.type == 4" @on-item-click="getOrderList">待评价</tab-item>

    </tab>
    <div v-for="item in list">
      <!--订单列表  -->
      <div style="background-color: #fff; padding-left: 15px;">
        <div style="display: flex; flex-direction: row; margin-top: 20px; height: 43px; align-items: center">
          <img src="../../assets/images/buyHome/icon-home-act.png" style="width: 15px;height: 15px;">
          <div style="margin: 0 3px 0 7px; color: #333333;font-size: 14px;">{{item.storeName}}</div>
          <img src="../../assets/images/share/come.png" style="width: 8px;height: 10px">
          <div style="flex-grow:1;"></div>
          <div style="margin-right: 16px;color: #FD6D1F;font-size: 14px;">{{item.statusName}}</div>
        </div>
        <div v-for="item2 in item.itemsList">
          <div class="vux-1px-t" style="display: flex;flex-direction:row; padding-top: 15px;">
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
        <!--价格栏-->
        <div class="vux-1px-t"
             style="display: flex;flex-direction:row;margin-top: 20px;padding: 10px 0;justify-content:flex-end">

          <div style="margin-right:10px;font-size: 12px;">共{{item.totNum}}件货品</div>
          <div style="font-size: 12px;">总计：</div>
          <div style="color: #FD6D1F;font-size: 13px;margin-right:10px;">￥{{item.totAmnt}}</div>
          <div v-show="item.freight > 0" style="margin-right:16px;font-size: 12px;">(含运费￥{{item.freight}})</div>
        </div>
        <!--底部按钮-->
        <div class="vux-1px-t" style="display: flex;flex-direction:row;justify-content:flex-end;align-items: center;">
          <button class="btn1" v-show="btnShow[0]" @click="btn1click">取消订单</button>
          <!--<button class="btn2" v-show="btnShow[1]" @click="btn2click">查看拼包凭证</button> &lt;!&ndash;86&ndash;&gt;-->
          <button class="btn3" v-show="btnShow[2]" @click="btn3click">付款</button>
          <button class="btn4" v-show="btnShow[3]" @click="btn4click">取消退款</button>
          <button class="btn5" v-show="btnShow[4]" @click="btn5click">删除订单</button>
          <!--<button class="btn6" v-show="btnShow[5]" @click="btn6click">申请发票</button>-->
          <!--<button class="btn7" v-show="btnShow[6]" @click="btn7click">查看物流</button>-->
          <button class="btn8" v-show="btnShow[7]" @click="btn8click">确认收货</button>
          <!--<button class="btn9" v-show="btnShow[8]" @click="btn9click">去评价</button>-->
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import {Tab, TabItem, XButton} from 'vux'
  import {getBuyerOrderList} from '@/api/share';
  //
  export default {
    name: 'myOrders',
    data() {
      return {
//        list: [
//          {
//            "storeType": 2,
//            "orderId": "15bac1446e1e4aaebd589cd7718e386a",
//            "storeId": "7342bc02fedc4e449be602caf3a59139",
//            "storeName": "迟工测试",
//            "orderSn": "D18031511150000003",
//            "orderStatus": 1,
//            "statusCode": 7,
//            "statusName": "待发货",
//            "orderDate": "2018-03-15 11:39:26",
//            "deliverStatus": 0,
//            "payStatus": 0,
//            "retStatus": 0,
//            "totNum": 2,
//            "totHnum": 2,
//            "totAmnt": 1376,
//            "freight": 0,
//            "itemsList": [
//              {
//                "itemsNo": 2,
//                "productId": "07218f1598814b50ba0001a577e18cd5",
//                "productName": "人人",
//                "productThumb": "http://productpictures.oss-cn-shanghai.aliyuncs.com/15197980292661519798030469.jpg",
//                "productThumbWidth": 780,
//                "productThumbHeight": 1052,
//                "colorName": "黑色",
//                "sizeNameJson": "[{\"sizeSno\":8,\"sizeName\":\"120CM\"}]",
//                "attrs": "[{\"attrSno\":\"400\",\"attrName\":\"亚麻\",\"subAttrs\":[{\"attrSno\":\"3\",\"attrName\":\"化纤\"}]},{\"attrSno\":\"401\",\"attrName\":\"主面料\",\"subAttrs\":[{\"attrSno\":\"2\",\"attrName\":\"彩棉\"}]},{\"attrSno\":\"402\",\"attrName\":\"填充物\",\"subAttrs\":[{\"attrSno\":\"3\",\"attrName\":\"手塞棉\"}]},{\"attrSno\":\"403\",\"attrName\":\"厚薄\",\"subAttrs\":[{\"attrSno\":\"3\",\"attrName\":\"适中\"}]},{\"attrSno\":\"404\",\"attrName\":\"季节\",\"subAttrs\":[{\"attrSno\":\"3\",\"attrName\":\"秋季\"}]},{\"attrSno\":\"405\",\"attrName\":\"安全等级\",\"subAttrs\":[{\"attrSno\":\"3\",\"attrName\":\"C类\"}]}]",
//                "num": 2,
//                "hnum": 2,
//                "price": 21,
//                "delPrice": 688,
//                "retStatus": 0,
//                "cStatus": "正常"
//              },
//              {
//                "itemsNo": 4,
//                "productId": "07218f1598814b50ba0001a577e18cd5",
//                "productName": "人人",
//                "productThumb": "http://productpictures.oss-cn-shanghai.aliyuncs.com/15197980292661519798030469.jpg",
//                "productThumbWidth": 780,
//                "productThumbHeight": 1052,
//                "colorName": "黑色",
//                "sizeNameJson": "[{\"sizeSno\":8,\"sizeName\":\"120CM\"}]",
//                "attrs": "[{\"attrSno\":\"400\",\"attrName\":\"亚麻\",\"subAttrs\":[{\"attrSno\":\"3\",\"attrName\":\"化纤\"}]},{\"attrSno\":\"401\",\"attrName\":\"主面料\",\"subAttrs\":[{\"attrSno\":\"2\",\"attrName\":\"彩棉\"}]},{\"attrSno\":\"402\",\"attrName\":\"填充物\",\"subAttrs\":[{\"attrSno\":\"3\",\"attrName\":\"手塞棉\"}]},{\"attrSno\":\"403\",\"attrName\":\"厚薄\",\"subAttrs\":[{\"attrSno\":\"3\",\"attrName\":\"适中\"}]},{\"attrSno\":\"404\",\"attrName\":\"季节\",\"subAttrs\":[{\"attrSno\":\"3\",\"attrName\":\"秋季\"}]},{\"attrSno\":\"405\",\"attrName\":\"安全等级\",\"subAttrs\":[{\"attrSno\":\"3\",\"attrName\":\"C类\"}]}]",
//                "num": 2,
//                "hnum": 2,
//                "price": 21,
//                "delPrice": 688,
//                "realAmnt": 42,
//                "retStatus": 0,
//                "cStatus": "正常"
//              },
//              {
//                "itemsNo": 5,
//                "productId": "07218f1598814b50ba0001a577e18cd5",
//                "productName": "人人",
//                "productThumb": "http://productpictures.oss-cn-shanghai.aliyuncs.com/15197980292661519798030469.jpg",
//                "productThumbWidth": 780,
//                "productThumbHeight": 1052,
//                "colorName": "黑色",
//                "sizeNameJson": "[{\"sizeSno\":8,\"sizeName\":\"120CM\"}]",
//                "attrs": "[{\"attrSno\":\"400\",\"attrName\":\"亚麻\",\"subAttrs\":[{\"attrSno\":\"3\",\"attrName\":\"化纤\"}]},{\"attrSno\":\"401\",\"attrName\":\"主面料\",\"subAttrs\":[{\"attrSno\":\"2\",\"attrName\":\"彩棉\"}]},{\"attrSno\":\"402\",\"attrName\":\"填充物\",\"subAttrs\":[{\"attrSno\":\"3\",\"attrName\":\"手塞棉\"}]},{\"attrSno\":\"403\",\"attrName\":\"厚薄\",\"subAttrs\":[{\"attrSno\":\"3\",\"attrName\":\"适中\"}]},{\"attrSno\":\"404\",\"attrName\":\"季节\",\"subAttrs\":[{\"attrSno\":\"3\",\"attrName\":\"秋季\"}]},{\"attrSno\":\"405\",\"attrName\":\"安全等级\",\"subAttrs\":[{\"attrSno\":\"3\",\"attrName\":\"C类\"}]}]",
//                "num": 2,
//                "hnum": 2,
//                "price": 21,
//                "delPrice": 688,
//                "realAmnt": 42,
//                "retStatus": 0,
//                "cStatus": "正常"
//              }
//            ]
//          },
//          {
//            "storeType": 2,
//            "orderId": "d153506c002f4ea3b56051f2fb2d07be",
//            "storeId": "79961da444f14eaf93404357356bd3de", "storeName": "南京市栖霞区群沃通信技术服务中心",
//            "orderSn": "D18031513150000003",
//            "orderStatus": 1,
//            "statusCode": 7,
//            "statusName": "待发货",
//            "orderDate": "2018-03-15 13:41:52",
//            "deliverStatus": 0,
//            "payStatus": 0,
//            "retStatus": 0,
//            "totNum": 39,
//            "totHnum": 39,
//            "totAmnt": 26832,
//            "freight": 0,
//            "realAmnt": 200,
//            "itemsList": [
//              {
//                "itemsNo": 1,
//                "productId": "07218f1598814b50ba0001a577e18cd5",
//                "productName": "人人",
//                "productThumb": "http://productpictures.oss-cn-shanghai.aliyuncs.com/15197980292661519798030469.jpg",
//                "productThumbWidth": 780,
//                "productThumbHeight": 1052,
//                "colorName": "黑色",
//                "sizeNameJson": [{
//                  "sizeSno": 8,
//                  "sizeName": "120CM"
//                }],
//                "attrs": [{
//                  "attrSno": "400",
//                  "attrName": "亚麻",
//                  "subAttrs": [{
//                    "attrSno": "3",
//                    "attrName": "化纤"
//                  }]
//                }, {
//                  "attrSno": "401",
//                  "attrName": "主面料",
//                  "subAttrs": [{
//                    "attrSno": "2",
//                    "attrName": "彩棉"
//                  }]
//                }],
//                "num": 39,
//                "hnum": 39,
//                "price": 688,
//                "delPrice": 688,
//                "realAmnt": 26832,
//                "retStatus": 0,
//                "cStatus": "正常"
//              }]
//          },
//          {
//            "storeType": 2,
//            "orderId": "7e46e45afde144feaead43743dbf54b2",
//            "storeId": "79961da444f14eaf93404357356bd3de",
//            "storeName": "南京市栖霞区群沃通信技术服务中心",
//            "orderSn": "D18031513150000001",
//            "orderStatus": 1,
//            "statusCode": 7,
//            "statusName": "待发货",
//            "orderDate": "2018-03-15 13:40:19",
//            "deliverStatus": 0,
//            "payStatus": 0,
//            "retStatus": 0,
//            "totNum": 39,
//            "totHnum": 39,
//            "totAmnt": 26832,
//            "freight": 0,
//            "itemsList": [{
//              "itemsNo": 1,
//              "productId": "07218f1598814b50ba0001a577e18cd5",
//              "productName": "人人",
//              "productThumb": "http://productpictures.oss-cn-shanghai.aliyuncs.com/15197980292661519798030469.jpg",
//              "productThumbWidth": 780,
//              "productThumbHeight": 1052,
//              "colorName": "黑色",
//              "sizeNameJson": "[{\"sizeSno\":8,\"sizeName\":\"120CM\"}]",
//              "attrs": "[{\"attrSno\":\"400\",\"attrName\":\"亚麻\",\"subAttrs\":[{\"attrSno\":\"3\",\"attrName\":\"化纤\"}]},{\"attrSno\":\"401\",\"attrName\":\"主面料\",\"subAttrs\":[{\"attrSno\":\"2\",\"attrName\":\"彩棉\"}]},{\"attrSno\":\"402\",\"attrName\":\"填充物\",\"subAttrs\":[{\"attrSno\":\"3\",\"attrName\":\"手塞棉\"}]},{\"attrSno\":\"403\",\"attrName\":\"厚薄\",\"subAttrs\":[{\"attrSno\":\"3\",\"attrName\":\"适中\"}]},{\"attrSno\":\"404\",\"attrName\":\"季节\",\"subAttrs\":[{\"attrSno\":\"3\",\"attrName\":\"秋季\"}]},{\"attrSno\":\"405\",\"attrName\":\"安全等级\",\"subAttrs\":[{\"attrSno\":\"3\",\"attrName\":\"C类\"}]}]",
//              "num": 39,
//              "hnum": 39,
//              "price": 688,
//              "delPrice": 688,
//              "realAmnt": 26832,
//              "retStatus": 0,
//              "cStatus": "正常"
//            }]
//          },
//
//        ],
        list:[],
        btnShow: [
          false,
          true,
          false,
          false,
          false,
          false,
          false,
          true,
          false,
          false,
        ],

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
          itemsNo:"",  //必选 订单子序号
        },
      }
    },
    components: {
      Tab,
      TabItem,
      XButton,
    },
    created() {
      this.getOrderList();
    },
    methods: {
      getOrderList(index){
        this.orderListReq.type = index;
        getBuyerOrderList(this.orderListReq
        ).then((res) => {
          console.log(res);
          if (res.status != 0) {
            this.$vux.toast.text(res.msg);
          }else {
            this.list = res.data;
          }

        });
      },
      //取消订单
      btn1click(){
        getBuyerOrderCancel().then((res) => {
          console.log(res);
          this.$vux.toast.text(res.msg);
        });
      },
      //付款
      btn3click(){
        getBuyerOrderPay().then((res) => {
          console.log(res);
          this.$vux.toast.text(res.msg);
        });
      },
      //取消退款
      btn4click(){
        getBuyerOrderRefundCancel().then((res) => {
          console.log(res);
          this.$vux.toast.text(res.msg);
        });
      },
      //删除订单
      btn5click(){
        getBuyerOrderDelete().then((res) => {
          console.log(res);
          this.$vux.toast.text(res.msg);
        });
      },
      //确认收货
      btn8click(){
        getBuyerOrderReceipt().then((res) => {
          console.log(res);
          this.$vux.toast.text(res.msg);
        });
      },


    },
    mounted()
    {

    }
    ,
    filters: {}
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
