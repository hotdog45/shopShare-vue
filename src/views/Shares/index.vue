<template>
  <div class="share" style="height:100%;" v-if="datas" >
    <div class="share-detail">
      <div class="share-head">
        <img slot="icon" :src="datas.productThembUrl">
        <div class="share-title">
          <div class="sname">{{datas.productName}}</div>
          <div class="price"><span>￥</span><span>{{datas.price}}</span></div>
          <flexbox class="share-shao">
            <flexbox-item><div>物流：到付</div></flexbox-item>
            <flexbox-item><div>{{` 月销${datas.orderCount}笔`}}</div></flexbox-item>
            <flexbox-item><div>浙江杭州</div></flexbox-item>
          </flexbox>
        </div>
      </div>
      <div class="share-head">
        <div class="share-table">
          <x-table
          :full-bordered="false"
          :content-bordered="false"
          :cell-bordered="false">
            <tr>
              <td><div><span class="point"></span>48小时发货</div></td>
              <td><div><span class="point"></span>七天无理由退换货</div></td>
              <td><div><span class="point"></span>买家保障</div></td>
            </tr>
            <tr>
              <td><div><span class="point"></span>支付宝支付</div></td>
              <td><div><span class="point"></span>诚信赊</div></td>
              <td><div></div></td>
            </tr>
          </x-table>
        </div>
      </div>
      <div class="share-head">
        <group class="guige">
          <cell-box>
            <div class="guige-img">
              <img src="@/assets/images/share/guige.png"/>
               <div>规格选择</div>
            </div>
            <div class="gui-size">
               <div>尺寸：<span v-for="(item, index) in datas.skuSize" :key="index">{{item.sizeName}}</span></div>
               <div>颜色：<span v-for="(item, index) in datas.skuColor" :key="index">{{item.colorName}}</span></div>
            </div>
          </cell-box>
        </group>
      </div>
      <div class="share-head">
        <group>
          <cell :title="('产品参数')" is-link :border-intent="false" @click.native="parShow = true"></cell>
        </group>
      </div>
      <!-- <div class="share-head">
        <group>
          <cell :title="('商品评价（1456）')" is-link :border-intent="false"></cell>
          <cell :title="('问大家（20）')" is-link :border-intent="false"></cell>
        </group>
      </div> -->
      <div class="share-head">
        <group class="shop">
          <cell-box is-link>
            <div class="shop-img">
              <img src="@/assets/images/share/shop-logo.png"/>
            </div>
            <div class="shop-sname">
               <div>{{datas.storeInfo.storeName}}</div>
               <div>
                 <img v-for="(item, index) in datas.storeInfo.storeStar" :key="index" src="@/assets/images/share/collection-show.png"/>
               </div>
            </div>
          </cell-box>
        </group>
      </div>
      <div class="share-head">
        <div class="show-text">
          <divider>详情页展示</divider>
        </div>
      </div>
      <div class="share-head-last">
        <div class="show-img">
          <img v-for="(item, index) in datas.detail.images" :key="index" :src="item.imgUrl"/>
        </div>
      </div>
    </div>
    <div class="share-footer" v-if="!skuShow">

      <div class="btnStyle">
        <img src="@/assets/images/share/comment.png">
        <div @click="goChat">聊天</div>
      </div>
      <div class="btnStyle">
        <img src="@/assets/images/share/comment.png" >
        <div @click="goShoppingCar" >购物车</div>
      </div>
      <div @click="collectionShop" class="btnStyle">
        <img src="@/assets/images/share/stars.png" v-show="true">
        <img src="@/assets/images/share/stars_unselected.png" v-show="false" >
        <div >收藏</div>
      </div>
      <div @click="addShoppingCar" style="flex-grow:3;background: #FD6D1F;color: #fff;font-size: 14px;">加入购物车</div>
      <div @click="goShopping" style="flex-grow:3;background-color: #FB3232;color: #fff;font-size: 14px;">立即购买</div>
    </div>
     <popup v-model="parShow"  @click.native ="parShow = false">
       <parameter :datas = "datas" ></parameter>
     </popup>

    <div v-transfer-dom>
      <!--<popup v-model="skuShow"  >-->
        <!--<skuList  :datas = "datas" :showBtn1="true":showBtn2="true"></skuList>-->
      <!--</popup>-->
      <van-popup v-model="skuShow" position="bottom">
        <skuList  :datas = "datas" :showBtn1="true":showBtn2="true"></skuList>

      </van-popup>
    </div>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, Flexbox, FlexboxItem, Group,Cell, CellBox, Divider, XTable, Popup } from 'vux';
import { getShareList } from '@/api/share';
import Parameter from './components/Parameter';
import SkuList from './components/SkuList';
import TabItem from './components/TabItem';
import {getAddFollowProduct,getCartAdd} from '@/api/share';

export default {
  components: {
    Tabbar,
    TabbarItem,
    Flexbox,
    FlexboxItem,
    Cell,
    Group,
//    CellBox,
    Divider,
    XTable,
    Popup,
    Parameter,
    TabItem,
    CellBox,
    SkuList,
  },
  //productId: '66ca3b6fd2e244a9962bb91f66a7c968',
  data() {
    return {
      product: {

        productId: "55db7b5dec744310ac701083a3bf8d17",
        // productId: '902e97a5d65d11e79ad500163e0e500c',
      },
      datas: null,
      coupon: null,
      buy: false,
      parShow: false,
      skuShow: true,

      addCarData :{
        productId:"",
        skuSize:[{
          sizeSno: "",
          isSel: 0,
        },],
        skuColor:[{
          colorSno: "",
          num: 0,
          hnum: 0,
          price: 0,
        },],
        parentId:"",
        enrollId:"",
        isGift:0,
      }

    };
  },
  created() {
    this.getInfo();
  },
  methods: {
    getInfo() {
      getShareList(this.product).then((res) => {
        console.log(res);
        this.datas = res.data;
      });
    },
    //去聊天
    goChat(){

    },
    //收藏或取消收藏
    collectionShop(){
      getAddFollowProduct(this.product).then((res) => {
        console.log(res);
        this.$vux.toast.test(res.msg)
      });
    },
    //去购物车
    goShoppingCar(){

    },
    //立即购买
    goShopping(){
      this.skuShow = true
//      this.$router.push({
//        path:'/addresslist'
//      })

    },
    //加购物车 { "productId":"商品ID",//必选 商品ID "skuSize": [{//商品尺寸 SKU "sizeSno": "1",//必选 尺寸Sku sno
    // "isSel": "1"//必选 默认1 }, { "sizeSno": "2",//必选 尺寸Sku sno "isSel": "0"//必选 默认1
    // 尺寸Sku sno 如为0 该整个对象可以不传 }], "skuColor": [{ "colorSno": "1", //必选 颜色Sku sno
    // "num": "100",//必选 加入购物车件数量。 "hnum": "20",//必选 加入购物车手数量。 "price": "3.5"//可选 加入购物车数量 },
    // { "colorSno": "2", //必选 颜色Sku sno "num": "100",//必选 加入购物车件数量。 "hnum": "20",//必选 加入购物车手数量。
    // "price": "3.5"//可选 加入购物车数量 }], "parentId":"",//可选 默认空 主产品ID "enrollId":"0",//必选 默认0 活动类型
    // "isGift":"0"//可选 默认0 是否赠品 }
    addShoppingCar(){
      this.skuShow = true
      return;
      getCartAdd(this.addCarData).then((res) => {
        console.log(res);
        this.$vux.toast.test(res.msg)
      });
    },
  },
};
</script>
<style lang="scss" rel="stylesheet/scss">
  .share{
    p{
      margin: 0;
      padding: 0;
    }
    .share-head{
      .share-table{
      .vux-table{
        margin-top: 15px;
        tr{
          td{
            text-align: left;
          }
        }
      }
      }
    }
    .vux-label{
      font-size: 14px;
    }
    .show-text{
      height: 43px;
      .vux-divider{
        line-height: 43px;
      }
    }
    .weui-dialog{
      background: none;
      .imgs{
        width: 100%;
        height: 500px;
        object-fit: cover;
      }
    }
    .vux-popup-dialog{
      z-index: 3000;
      height: 464px !important;
      overflow-y: scroll;
    }
    .weui-cells{
      margin-top: 0;
    }
  }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped rel="stylesheet/scss">
  .share{
    .share-detail{
      padding-bottom: 50px;
      .share-head{
        background: #fff;
        margin-bottom: 15px;
        img{
          height: 375px;
        }
        .share-title{
          margin: 0 16px;
          padding-top: 10px;
          .sname{
            font-size: 16px;
            color: #333;
            width: 295px;
          }
          .price{
            margin-top: 14px;
            color:#FD6D1F;
            :first-child{
              font-size:12px;
            }
            :first-child+span{
              font-size: 18px;
            }
          }
        }
        .share-table{
          .point{
            margin-right: 5px;
            margin-left:15px;
            display: inline-block;
            height: 6px;
            width: 6px;
            border-radius: 50%;
            background: #fd6d1f;
            vertical-align: middle;
          }
        }
        .guige{
          .guige-img{
            padding-right: 15px;
            border-right: 1px solid #999;
            font-size: 14px;
            img{
              width: 24px;
              height: 19px;
              margin-left: 17px;
            }
          }
        .gui-size{
          padding-left: 15px;
          font-size: 14px;
          div{
            width: 216px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          }
        }
        .shop{
          .shop-img{
            padding-right: 15px;
            font-size: 14px;
            img{
              width: 50px;
              height: 50px;
            }
          }
          .shop-sname{
            font-size: 14px;
            div{
              margin: 6px 0 10px 0;
              img{
                width: 14px;
                height: 14px;
              }
            }
          }
        }
      }
      .share-head-last{
        background: #fff;
        .show-img{
          padding-top: 10px;
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .share-shao{
      padding-top: 15px;
      .vux-flexbox-item{
        text-align: center;
        color: #999;
        font-size: 13px;
        padding-bottom:15px;
      }
    }
    .share-footer{
      background:#fff;
      position: fixed;
      display: flex;
      flex-direction: row;
      right: 0;
      left: 0;
      z-index: 1030;
      bottom: 0;
      margin-bottom: 0;
      border-width: 1px 0 0;
      /*align-items: center;*/
      >div{
        height: 50px;
        text-align: center;
        line-height: 50px;
        font-size: 11px;
      }
    }
  }
  .btnStyle{
    width:50px;
    color: #333333;
    opacity: 0.6;
    border-right: 1px solid #999;
    display: flex;
    flex-direction: column;
    align-items: center;
    >img{
      width:15px ;
      height:15px;
      margin-top: 5px;
    }
    >div{
      margin-top: -8px;
      font-size: 10px;
    }
  }
</style>
