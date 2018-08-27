<template>
  <div class="link-share" v-if="datas">
    <div class="share-detail"  v-if="currentComponent === 'shopowner'">
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
            <div class="flex-row">
              <x-button class="shopowner"  @click.native="handleBack()">退出</x-button>
              </div>
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
          <cell-box >
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

      <div class="share-head-end">
        <group class="guige">
          <cell :title="datas.brandName"></cell>
          <cell-box >
            <div class="ccs-item-info">
              <div class="flex-sb">
                <div class="WD30">联系电话：</div><div class="WD70">{{iphone ? iphone : '无'}}</div>
              </div>
              <div class="flex-sb">
                <div class="WD30">客服QQ：</div><div class="WD70">{{qq ? qq: '无'}}</div>
              </div>
              <!-- <div class="flex-sb">
                <div class="WD30">地址：</div><div class="WD70">无</div>
              </div> -->
            </div>
          </cell-box>
        </group>
          <div class="item-btn">
            <a><img class="item-btn-qq" src="@/assets/images/shares/QQ2.png">QQ咨询</a><a  :href="'tel:'+iphone"><img class="item-btn-qq" src="@/assets/images/shares/iphone2.png">拨打电话</a>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { XButton, Flexbox, FlexboxItem, Group, Cell, CellBox, XTable, Swiper, SwiperItem } from 'vux';
import { getShareList } from '@/api/share';


export default {
  components: {
    XButton,
    Flexbox,
    FlexboxItem,
    Cell,
    Group,
    CellBox,
    XTable,
    Swiper,
    SwiperItem,
  },
  name: 'Shopowner',
  props: {
    iphone: String,
    qq: String,

  },
  data() {
    return {
      pid: {
        productId: '',
      },
      datas: null,
      PassInfo: null,
      parShow: false,
      CSShow: false,
      currentComponent: 'shopowner',
    };
  },
  created() {
    this.getInfo();
  },
  methods: {
    getInfo() {
      const { query: { productId } } = this.$route;
      this.pid.productId = productId;
      getShareList(this.pid).then((res) => {
        this.datas = res.data;
      });
    },
    handleBack() {
      this.$emit('backS');
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
    .weui-cells{
      margin-top: 0;
    }
  }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .link-share{
    .share-detail{
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
    .share-head-end{
      background: #fff;
        .ccs-item-info{
          padding: 0 15px;
          line-height: 28px;
          .WD70{
            width: 240px;
            font-size: 14px;
            text-align: left;
            white-space: pre-wrap;
            word-wrap: break-word;

          }
          .WD30{
            width: 90px;
            font-size: 14px;
          }
        }
    }
   .item-btn{
     padding: 10px auto;
     margin-top: 10px;
     height: 54px;
     text-align: center;
     background: #fff;
     a{
       display: inline-block;
       width: 115px;
       height: 34px;
       margin: 0 4px;
       border: 1px solid #FD6D1F;
       color: #FD6D1F;
       background: #fff;
       text-align: center;
       line-height: 34px;
       .item-btn-qq{
         width: 16px;
         height: 20px;
         object-fit: contain;
         margin-right: 6px;
         margin-bottom: 6px;
         vertical-align: middle;
       }
     }
   }
  }
</style>
