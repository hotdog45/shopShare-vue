<template>
  <div class="my">
    <div class="user-info">
      <div class="user-img">
        <img src="" />
      </div>
      <div class="name-mobile">
        <p>{{name}}</p>
      </div>
    </div>

    <flexbox :gutter="0" style="direction: column;orient:vertica;background:#ffffff;font-size: 13px">
      <flexbox-item :span="1/4" class="order-type-box">
        <div>
          <span>20</span>
          <span>收藏宝贝</span>
        </div>
      </flexbox-item>
      <flexbox-item class="order-type-box">
        <div>
          <span>30</span>
          <span>关注厂家</span>
        </div>
      </flexbox-item>

      <flexbox-item class="order-type-box" :span="1/4">
        <div>
          <span>20</span>
          <span>足迹</span>
        </div>
      </flexbox-item>

    </flexbox>
    <group style="margin-bottom: 10px;" gutter="15px">
      <cell style="font-size: 14px;height: 33px;padding: 10px 15px" title="我的订单" value="查看全部订单" is-link :link="{path:'/MyOrder',query:{selected:'All'}}"></cell>

      <cell-box>
        <!--<div class="order-type-box">-->

          <!--<div class="type-item" @click="toWaitGet">-->
            <!--&lt;!&ndash;<img src="../../assets/icon-type-get.png"/>&ndash;&gt;-->
            <!--<span>待发货</span>-->
          <!--</div>-->
          <!--<div class="type-item" @click="toWaitAccess">-->
            <!--&lt;!&ndash;<img src="../../assets/icon-type-assess.png"/>&ndash;&gt;-->
            <!--<span>待收获</span>-->
          <!--</div>-->
          <!--<div class="type-item" @click="toService">-->
            <!--&lt;!&ndash;<img src="../../assets/icon-type-service.png"/>&ndash;&gt;-->
            <!--<span>待评价</span>-->
          <!--</div>-->
          <!--<div class="type-item" @click="toService">-->
            <!--&lt;!&ndash;<img src="../../assets/icon-type-service.png"/>&ndash;&gt;-->
            <!--<span>退款中</span>-->
          <!--</div>-->
        <!--</div>-->

        <flexbox style="background: #ffffff">
          <flexbox-item class="order-type-box">
            <div class="type-item" @click="toWaitPay">
              <img src="../../assets/images/share/dfk.png"/>
              <span>待付款</span>
            </div>
          </flexbox-item>
          <flexbox-item class="order-type-box">
            <div class="type-item" @click="toWaitDeliver">
              <img src="../../assets/images/share/mywindmill_shipmentpending.png"/>
              <span>待发货</span>
            </div>
          </flexbox-item>
          <flexbox-item class="order-type-box">
            <div class="type-item" @click="toWaitPay">
              <img src="../../assets/images/share/mywindmill_goodsreceipt.png"/>
              <span>待收货</span>
            </div>
          </flexbox-item>
          <flexbox-item class="order-type-box">
            <div class="type-item" @click="toWaitPay">
              <img src="../../assets/images/share/mywindmill_pendingevaluation.png"/>
              <span>待评价</span>
            </div>
          </flexbox-item>
          <flexbox-item class="order-type-box">
            <div class="type-item" @click="refunding">
              <img src="../../assets/images/share/mywindmill_refund.png"/>
              <span>退款中</span>
            </div>
          </flexbox-item>
        </flexbox>

      </cell-box>
    </group>

    <group gutter="15px">
      <cell class="mylist" title="快速补货" is-link :link="{path:'/MyCollection'}"></cell>
      <cell class="mylist" title="诚信赊" is-link :link="{path:'/MyAddress'}"></cell>
      <cell class="mylist" title="合同管理" is-link></cell>
    </group>
    <group gutter="15px">
      <cell class="mylist" title="我要开分店" is-link :link="{path:'/MyCollection'}"></cell>
    </group>
    <group gutter="15px">
      <cell class="mylist" title="我的分享" is-link :link="{path:'/MyCollection'}"></cell>
      <cell class="mylist" title="我的问答" is-link :link="{path:'/MyAddress'}"></cell>
      <cell class="mylist" title="我的评价" is-link></cell>
    </group>
    <group gutter="15px">
      <cell class="mylist" title="设置" is-link></cell>
    </group>
  </div>
</template>

<script>
  import { Group, Cell, CellBox, Flexbox, FlexboxItem } from 'vux'
  export default {
    name: 'my',
    data() {
      return {
        name: '艾艾艾小北的店',
      }
    },
    methods:{
      toWaitPay(){
        this.$router.push({
          path:'/MyOrders',
          query:{
            selected:'waitPay'
          }
        })
      },
      toWaitDeliver(){
        this.$router.push({
          path:'/MyOrders',
          query:{
            selected:'waitDeliver'
          }
        })
      },
      toWaitGet(){
        this.$router.push({
          path:'/MyOrders',
          query:{
            selected:'waitGet'
          }
        })
      },
      toWaitAccess(){
        this.$router.push({
          path:'/MyOrders',
          query:{
            selected:'waitAccess'
          }
        })
      },
      refunding(){

      }
    },
    components: {
      Group,
      Cell,
      CellBox,
      Flexbox,
      FlexboxItem,
    }
  }
</script>

<style scoped lang="less">
  .user-info {
    padding-top: 45px;
    width: 100%;
    height: 164px;
    display: flex;
    flex-direction:column;
    align-items: center;
    background: #FD6D1F;
  @width77: 60px;
  >div {
     height: @width77;
   }
  .user-img {
    width: @width77;
    border-radius: 50%;
    overflow: hidden;
    background-color: #b0b6c4;
  img {
    width: 100%;
    height: 100%;
  }
  }
  .name-mobile {
    padding: 5px 10px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  }
  .order-type-box{
    width: 100%;
    display: flex;
  >div{
     flex: 1;
     height: 55px;
     font-size: 12px;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
  img{
    width: 24px;
    height: 24px;
    margin-bottom: 5px;
  }
  span{
    font-size: 14px;
  }
  }
  }
  .mylist {
    height: 49px;
    font-size: 16px;
    color: #333;

  }
</style>
