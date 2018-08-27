<template>
  <div class="share" style="height:100%;" v-if="true" >
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
    <div class="share-footer">
      <tab-item></tab-item>
    </div>
     <popup v-model="parShow"  @click.native ="parShow = false">
       <parameter :datas = "datas" ></parameter>
     </popup>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, Flexbox, FlexboxItem, Group, Cell, CellBox, Divider, XTable, Popup } from 'vux';
import { getShareList } from '@/api/share';
import Parameter from './components/Parameter';
import TabItem from './components/TabItem';


export default {
  components: {
    Tabbar,
    TabbarItem,
    Flexbox,
    FlexboxItem,
    Cell,
    Group,
    CellBox,
    Divider,
    XTable,
    Popup,
    Parameter,
    TabItem,
  },
  data() {
    return {
      product: {
        productId: '66ca3b6fd2e244a9962bb91f66a7c968',
        // productId: '902e97a5d65d11e79ad500163e0e500c',
      },
      datas: null,
      coupon: null,
      buy: false,
      parShow: false,
    };
  },
  created() {
    this.getInfo();
  },
  methods: {
    getInfo() {
      getShareList(this.product).then((res) => {
        this.datas = res.data;
      });
    },
  },
};
</script>
<style lang="scss">
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
<style lang="scss" scoped>
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
      position: fixed;
      right: 0;
      left: 0;
      z-index: 1030;
      bottom: 0;
      margin-bottom: 0;
      border-width: 1px 0 0;
    }
  }
</style>
