<template>
  <div class="myOrders">
    <tab :line-width="2" custom-bar-width="75px" active-color="#FD6D1F" default-color="#333333" scroll-threshold="5">
      <tab-item :selected="selected == 'All'" @on-item-click="selected = 'All'">全部</tab-item>
      <tab-item :selected="selected == 'waitPay'" @on-item-click="selected = 'waitPay'">待付款</tab-item>
      <tab-item :selected="selected == 'waitDeliver'" @on-item-click="selected = 'waitDeliver'">待发货</tab-item>
      <tab-item :selected="selected == 'waitGet'" @on-item-click="selected = 'waitGet'">待收货</tab-item>
      <tab-item :selected="selected == 'waitAccess'" @on-item-click="selected = 'waitAccess'">待评价</tab-item>

    </tab>

    <div v-for="item in list">
      <!--订单列表  -->
      <div style="background-color: #fff; padding-left: 15px;">
        <div style="display: flex; flex-direction: row; margin-top: 20px; height: 43px; align-items: center">
          <img src="../../assets/images/buyHome/icon-home-act.png" style="width: 15px;height: 15px;">
          <div style="margin: 10px;color: #333333;font-size: 14px;">{{item.storeName}}</div>
          <img src="../../assets/images/buyHome/icon-home-act.png" style="width: 15px;height: 15px">
          <div style="flex-grow:1;"></div>
          <div style="margin-right: 16px;color: #FD6D1F;font-size: 14px;">{{item.statusName}}</div>
        </div>
        <div v-for="item2 in item.itemsList">
          <div class="vux-1px-t" style="display: flex;flex-direction:row; padding-top: 15px;">
            <img :src="item2.productThumb" style="width: 90px;height: 80px;">
            <!--商品列表-->
            <div style="margin-left: 12px; width: 60%; ">
              <div>{{item2.productName}}</div>
              <div style="font-size: 12px;color: #FFAE00;">退款中</div>
              <div class="specifications" style="display: flex;flex-direction:row; margin-top: 3px;">
                <div v-for="size in item2.sizeNameJson" v-show="item2.sizeNameJson.length>0" style="margin-left: 0;">
                  <div style="color: #333333;font-size: 12px;opacity: 0.6; margin-left: 0;">{{size.sizeName}}</div>
                </div>
                <div class="vux-1px">欠款</div>
                <div class="vux-1px">拼包</div>
              </div>

            </div>
            <div
              style="display: flex;flex-direction:column;width: 30px;margin-left: 10px;margin-right: 15px;align-items: flex-end;">
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
          <button class="btn2" v-show="btnShow[1]" @click="btn2click">查看拼包凭证</button> <!--86-->
          <button class="btn3" v-show="btnShow[2]" @click="btn3click">付款</button>
          <button class="btn4" v-show="btnShow[3]" @click="btn4click">取消退款</button>
          <button class="btn5" v-show="btnShow[4]" @click="btn5click">删除订单</button>
          <button class="btn6" v-show="btnShow[5]" @click="btn6click">申请发票</button>
          <button class="btn7" v-show="btnShow[6]" @click="btn7click">查看物流</button>
          <button class="btn8" v-show="btnShow[7]" @click="btn8click">确认收货</button>
          <button class="btn9" v-show="btnShow[8]" @click="btn9click">去评价</button>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
  import {Tab, TabItem, XButton} from 'vux'
  export default {
    name: 'myOrders',
    data() {
      return {
        list: [
          {
            "storeType": 2,
            "orderId": "15bac1446e1e4aaebd589cd7718e386a",
            "storeId": "7342bc02fedc4e449be602caf3a59139",
            "storeName": "迟工测试",
            "orderSn": "D18031511150000003",
            "orderStatus": 1,
            "statusCode": 7,
            "statusName": "待发货",
            "orderDate": "2018-03-15 11:39:26",
            "deliverStatus": 0,
            "payStatus": 0,
            "retStatus": 0,
            "totNum": 2,
            "totHnum": 2,
            "totAmnt": 1376,
            "freight": 0,
            "itemsList": [
              {
                "itemsNo": 2,
                "productId": "07218f1598814b50ba0001a577e18cd5",
                "productName": "人人",
                "productThumb": "http://productpictures.oss-cn-shanghai.aliyuncs.com/15197980292661519798030469.jpg",
                "productThumbWidth": 780,
                "productThumbHeight": 1052,
                "colorName": "黑色",
                "sizeNameJson": "[{\"sizeSno\":8,\"sizeName\":\"120CM\"}]",
                "attrs": "[{\"attrSno\":\"400\",\"attrName\":\"亚麻\",\"subAttrs\":[{\"attrSno\":\"3\",\"attrName\":\"化纤\"}]},{\"attrSno\":\"401\",\"attrName\":\"主面料\",\"subAttrs\":[{\"attrSno\":\"2\",\"attrName\":\"彩棉\"}]},{\"attrSno\":\"402\",\"attrName\":\"填充物\",\"subAttrs\":[{\"attrSno\":\"3\",\"attrName\":\"手塞棉\"}]},{\"attrSno\":\"403\",\"attrName\":\"厚薄\",\"subAttrs\":[{\"attrSno\":\"3\",\"attrName\":\"适中\"}]},{\"attrSno\":\"404\",\"attrName\":\"季节\",\"subAttrs\":[{\"attrSno\":\"3\",\"attrName\":\"秋季\"}]},{\"attrSno\":\"405\",\"attrName\":\"安全等级\",\"subAttrs\":[{\"attrSno\":\"3\",\"attrName\":\"C类\"}]}]",
                "num": 2,
                "hnum": 2,
                "price": 21,
                "delPrice": 688,
                "retStatus": 0,
                "cStatus": "正常"
              },
              {
                "itemsNo": 4,
                "productId": "07218f1598814b50ba0001a577e18cd5",
                "productName": "人人",
                "productThumb": "http://productpictures.oss-cn-shanghai.aliyuncs.com/15197980292661519798030469.jpg",
                "productThumbWidth": 780,
                "productThumbHeight": 1052,
                "colorName": "黑色",
                "sizeNameJson": "[{\"sizeSno\":8,\"sizeName\":\"120CM\"}]",
                "attrs": "[{\"attrSno\":\"400\",\"attrName\":\"亚麻\",\"subAttrs\":[{\"attrSno\":\"3\",\"attrName\":\"化纤\"}]},{\"attrSno\":\"401\",\"attrName\":\"主面料\",\"subAttrs\":[{\"attrSno\":\"2\",\"attrName\":\"彩棉\"}]},{\"attrSno\":\"402\",\"attrName\":\"填充物\",\"subAttrs\":[{\"attrSno\":\"3\",\"attrName\":\"手塞棉\"}]},{\"attrSno\":\"403\",\"attrName\":\"厚薄\",\"subAttrs\":[{\"attrSno\":\"3\",\"attrName\":\"适中\"}]},{\"attrSno\":\"404\",\"attrName\":\"季节\",\"subAttrs\":[{\"attrSno\":\"3\",\"attrName\":\"秋季\"}]},{\"attrSno\":\"405\",\"attrName\":\"安全等级\",\"subAttrs\":[{\"attrSno\":\"3\",\"attrName\":\"C类\"}]}]",
                "num": 2,
                "hnum": 2,
                "price": 21,
                "delPrice": 688,
                "realAmnt": 42,
                "retStatus": 0,
                "cStatus": "正常"
              },
              {
                "itemsNo": 5,
                "productId": "07218f1598814b50ba0001a577e18cd5",
                "productName": "人人",
                "productThumb": "http://productpictures.oss-cn-shanghai.aliyuncs.com/15197980292661519798030469.jpg",
                "productThumbWidth": 780,
                "productThumbHeight": 1052,
                "colorName": "黑色",
                "sizeNameJson": "[{\"sizeSno\":8,\"sizeName\":\"120CM\"}]",
                "attrs": "[{\"attrSno\":\"400\",\"attrName\":\"亚麻\",\"subAttrs\":[{\"attrSno\":\"3\",\"attrName\":\"化纤\"}]},{\"attrSno\":\"401\",\"attrName\":\"主面料\",\"subAttrs\":[{\"attrSno\":\"2\",\"attrName\":\"彩棉\"}]},{\"attrSno\":\"402\",\"attrName\":\"填充物\",\"subAttrs\":[{\"attrSno\":\"3\",\"attrName\":\"手塞棉\"}]},{\"attrSno\":\"403\",\"attrName\":\"厚薄\",\"subAttrs\":[{\"attrSno\":\"3\",\"attrName\":\"适中\"}]},{\"attrSno\":\"404\",\"attrName\":\"季节\",\"subAttrs\":[{\"attrSno\":\"3\",\"attrName\":\"秋季\"}]},{\"attrSno\":\"405\",\"attrName\":\"安全等级\",\"subAttrs\":[{\"attrSno\":\"3\",\"attrName\":\"C类\"}]}]",
                "num": 2,
                "hnum": 2,
                "price": 21,
                "delPrice": 688,
                "realAmnt": 42,
                "retStatus": 0,
                "cStatus": "正常"
              }
            ]
          },
          {
            "storeType": 2,
            "orderId": "d153506c002f4ea3b56051f2fb2d07be",
            "storeId": "79961da444f14eaf93404357356bd3de", "storeName": "南京市栖霞区群沃通信技术服务中心",
            "orderSn": "D18031513150000003",
            "orderStatus": 1,
            "statusCode": 7,
            "statusName": "待发货",
            "orderDate": "2018-03-15 13:41:52",
            "deliverStatus": 0,
            "payStatus": 0,
            "retStatus": 0,
            "totNum": 39,
            "totHnum": 39,
            "totAmnt": 26832,
            "freight": 0,
            "realAmnt": 200,
            "itemsList": [
              {
                "itemsNo": 1,
                "productId": "07218f1598814b50ba0001a577e18cd5",
                "productName": "人人",
                "productThumb": "http://productpictures.oss-cn-shanghai.aliyuncs.com/15197980292661519798030469.jpg",
                "productThumbWidth": 780,
                "productThumbHeight": 1052,
                "colorName": "黑色",
                "sizeNameJson": [{
                  "sizeSno": 8,
                  "sizeName": "120CM"
                }],
                "attrs": [{
                  "attrSno": "400",
                  "attrName": "亚麻",
                  "subAttrs": [{
                    "attrSno": "3",
                    "attrName": "化纤"
                  }]
                }, {
                  "attrSno": "401",
                  "attrName": "主面料",
                  "subAttrs": [{
                    "attrSno": "2",
                    "attrName": "彩棉"
                  }]
                }],
                "num": 39,
                "hnum": 39,
                "price": 688,
                "delPrice": 688,
                "realAmnt": 26832,
                "retStatus": 0,
                "cStatus": "正常"
              }]
          },
          {
            "storeType": 2,
            "orderId": "7e46e45afde144feaead43743dbf54b2",
            "storeId": "79961da444f14eaf93404357356bd3de",
            "storeName": "南京市栖霞区群沃通信技术服务中心",
            "orderSn": "D18031513150000001",
            "orderStatus": 1,
            "statusCode": 7,
            "statusName": "待发货",
            "orderDate": "2018-03-15 13:40:19",
            "deliverStatus": 0,
            "payStatus": 0,
            "retStatus": 0,
            "totNum": 39,
            "totHnum": 39,
            "totAmnt": 26832,
            "freight": 0,
            "itemsList": [{
              "itemsNo": 1,
              "productId": "07218f1598814b50ba0001a577e18cd5",
              "productName": "人人",
              "productThumb": "http://productpictures.oss-cn-shanghai.aliyuncs.com/15197980292661519798030469.jpg",
              "productThumbWidth": 780,
              "productThumbHeight": 1052,
              "colorName": "黑色",
              "sizeNameJson": "[{\"sizeSno\":8,\"sizeName\":\"120CM\"}]",
              "attrs": "[{\"attrSno\":\"400\",\"attrName\":\"亚麻\",\"subAttrs\":[{\"attrSno\":\"3\",\"attrName\":\"化纤\"}]},{\"attrSno\":\"401\",\"attrName\":\"主面料\",\"subAttrs\":[{\"attrSno\":\"2\",\"attrName\":\"彩棉\"}]},{\"attrSno\":\"402\",\"attrName\":\"填充物\",\"subAttrs\":[{\"attrSno\":\"3\",\"attrName\":\"手塞棉\"}]},{\"attrSno\":\"403\",\"attrName\":\"厚薄\",\"subAttrs\":[{\"attrSno\":\"3\",\"attrName\":\"适中\"}]},{\"attrSno\":\"404\",\"attrName\":\"季节\",\"subAttrs\":[{\"attrSno\":\"3\",\"attrName\":\"秋季\"}]},{\"attrSno\":\"405\",\"attrName\":\"安全等级\",\"subAttrs\":[{\"attrSno\":\"3\",\"attrName\":\"C类\"}]}]",
              "num": 39,
              "hnum": 39,
              "price": 688,
              "delPrice": 688,
              "realAmnt": 26832,
              "retStatus": 0,
              "cStatus": "正常"
            }]
          },

        ],
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


      }
    },
    components: {
      Tab,
      TabItem,
      XButton,
    },
    methods: {},
    mounted(){

    },
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
    > div {
      margin-left: 4px;
      font-size: 12px;
      color: #FFAE00;
      width: 35px;
      height: 16px;
      border-color: #FD6D1F;
      text-align: center;
    }

  }
</style>
