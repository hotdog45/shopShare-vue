<template>
  <div class="link-share" v-if="datas">
    <div class="share-detail" v-if="currentComponent === 'index'">
      <div class="share-head">
        <div v-if="datas.images.length<2" >
        <img slot="icon" :src="datas.images[0].imgUrl">
        </div>
        <div v-else class="share-swiper">
          <swiper auto>
            <swiper-item class="black" v-for="(item, key) in datas.images" :key="key"><img :src="item.imgUrl"></swiper-item>
          </swiper>
        </div>

        <div class="share-title">
          <div class="sname">{{datas.productName}}</div>
          <div class="flex-sb">
            <div class="flex-row price"><span>￥</span><span>{{datas.price}}</span></div>
            <div class="flex-row"><x-button class="shopowner">我是店长</x-button></div>
          </div>
          <flexbox class="share-shao">
            <flexbox-item><div>物流：到付</div></flexbox-item>
            <flexbox-item><div>{{` 月销${datas.orderCount}笔`}}</div></flexbox-item>
            <flexbox-item><div>浙江杭州</div></flexbox-item>
          </flexbox>
        </div>
      </div>

      <div class="share-head">
        <div class="share-table">
          <x-table :full-bordered="false" :content-bordered="false" :cell-bordered="false">
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
          <cell-box is-link @click.native="CSShow =! CSShow"  :arrow-direction="CSShow ? 'up' : 'down'">
            <div class="guige-img">
              <img src="@/assets/images/share/guige.png"/>
               <div>规格选择</div>
            </div>
            <div class="gui-size">
               <div>尺寸：<span v-for="(item, index) in datas.skuSize" :key="index">{{item.sizeName}}</span></div>
               <div>颜色：<span v-for="(item, index) in datas.skuColor" :key="index">{{item.colorName}}</span></div>
            </div>
          </cell-box>
          <template v-if="CSShow">
            <div class="ccs-item-info">
              <div class="flex-sb">
                <div class="WD30">尺寸：</div><div class="WD70"><span v-for="(item, index) in  datas.skuSize" :key="index">{{item.sizeName}}</span></div>
              </div>
              <div class="flex-sb">
                <div class="WD30">颜色：</div><div class="WD70"><span v-for="(item, index) in  datas.skuColor" :key="index">{{item.colorName}}</span></div>
              </div>
            </div>
          </template>
        </group>
      </div>

      <div class="share-head">
        <group class="paramet">
          <cell :title="('产品参数')" is-link :border-intent="false" @click.native="parShow = true"></cell>
          <popup v-model="parShow"  @click.native ="parShow = false">
            <parameter :datas = "datas" ></parameter>
          </popup>
        </group>
      </div>

      <div class="show-text">
        <divider>详情页展示</divider>
      </div>
      <div class="share-head-last">
        <div class="show-img">
          <img v-for="(item, index) in datas.detail.images" :key="index" :src="item.imgUrl"/>
        </div>
      </div>
    </div>

    <div class="share-footer" >
      <tabbar slot="bottom" v-if="PassInfo.mobile">
        <tabbar-item :href="'tel:'+PassInfo.mobile">
          <img slot="icon" class="iphone-icon" src="@/assets/images/shares/iphone.png">
          <span slot="label">拨打电话</span>
        </tabbar-item>
        <x-button class="retail-price"><span class="min-z">零售价 ￥</span><span class="min-n">{{datas.price}}</span> </x-button>
      </tabbar>
      <tabbar slot="bottom" v-else>
        <x-button class="retail-price-nocall"><span class="min-z">零售价 ￥</span><span class="min-n">{{datas.price}}</span> </x-button>
      </tabbar>
    </div>
  </div>
</template>

<script>
import { Tabbar, XButton, TabbarItem, Flexbox, FlexboxItem, Group, Cell, CellBox, Divider, XTable, Swiper, SwiperItem, Popup } from 'vux';
import { getShareList, getShareSecret } from '@/api/share';
import Parameter from './Parameter';

export default {
  components: {
    Tabbar,
    XButton,
    TabbarItem,
    Flexbox,
    FlexboxItem,
    Cell,
    Group,
    CellBox,
    Divider,
    XTable,
    Swiper,
    SwiperItem,
    Popup,
    Parameter,
  },
  name: 'LinkShare',
  props: {
    pid: Object,
  },
  data() {
    return {
      datas: null,
      PassInfo: null,
      parShow: false,
      CSShow: false,
    };
  },
  created() {
    this.getInfo();
  },
  methods: {
    getInfo() {
      // const { query: { orderId } } = this.$route;
      getShareList(this.pid).then((res) => {
        this.datas = res.data;
      });
      getShareSecret(this.pid).then((res) => {
        this.PassInfo = res.data;
      });
    },
  },
};
</script>
<style lang="scss">
  .link-share{
        p{
      margin: 0;
      padding: 0;
    }
    .share-head{
      .share-swiper{
        height: 375px;
        .vux-swiper{
          height: 375px !important;
          img{
            height: 375px;
            width: 375px;
            object-fit: cover;
          }
        }
      }
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
      background: #fff;
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
    .paramet{
    .vux-popup-dialog{
      z-index: 3000;
      height: 464px !important;
      overflow-y: scroll;
    }
    }
    .weui-cells{
      margin-top: 0;
    }
    .weui-tabbar {
      height: 50px !important;
    }

  }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .link-share{
    .share-detail{
      padding-bottom: 50px;
      .share-head{
        background: #fff;
        margin-bottom: 15px;
        img{
          height: 375px;
          width: 375px;
          object-fit: cover;
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
          .shopowner{
            width: 95px;
            height: 34px;
            background: #FD6D1F;
            color: #fff;
            font-size: 16px;
            line-height: 34px;
            border: 0;
            border-radius: 0;
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
        .ccs-item-info{
          padding: 0 15px;
          font-size: 14px;
          line-height: 28px;
          .WD70{
            width: 240px;
            text-align: left;
            white-space: pre-wrap;
            word-wrap: break-word;
          }
          .WD30{
            width: 90px;
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
          padding-bottom: 10px;
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
        .iphone-icon{
          width: 20px;
          height: 20px;
          object-fit: contain;
          vertical-align:bottom;
        }
        .retail-price-nocall{
          width: 375px;
        }
        .retail-price{
           width: 280px;
        }
      .retail-price, .retail-price-nocall{
        height: 50px;
        background: #FD6D1F;
        color: #fff;
        text-align: center;
        border: 0;
        border-radius: 0;
        .min-z{
          font-size: 13px;
        }
        .min-n{
          font-size: 18px;
        }
      }
    }
  }
</style>
