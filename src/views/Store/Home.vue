<template>
  <div>
    <div class="header-wrapper">
      <div class="header">
        <div class="icon-back">
          <img src="@/assets/images/store/xlph.png">
        </div>
        <input class="header-search" placeholder="搜索店内宝贝">
          <!--<img src="@/assets/images/store/xlph.png">-->
        </input>
        <div class="share">
          <img src="@/assets/images/store/xlph.png">
        </div>
      </div>
      <div class="seller" @click="sellerInfo">
        <img src="@/assets/images/logo.png" alt="" style="width: 49px;height: 49px">
        <div style="display: flex;flex-direction: column;margin-left: 10px;flex: 1">
          <span>艾艾艾小北的店</span>
          <span style="margin-top: 10px;color: #333">2</span>
        </div>
      </div>
      <div class="fans">5.8万粉丝</div>
      <div class="focus">关注中</div>
    </div>

    <van-tabs v-model="active" sticky @click="onClick">
      <van-tab :title="'店铺首页'" ></van-tab>
      <van-tab :title="'全部宝贝'" ></van-tab>
      <van-tab :title="'新品上新'"></van-tab>
      <van-tab :title="'视频直播'"></van-tab>
    </van-tabs>

    <div v-if="false">
      <div class="content-wrapper">
        <div class="home-banner">我是banner</div>
        <div class="list-wrapper">
          <div>
            <div class="list-img">
              <img src="" alt="">
            </div>
            <div class="list-info">连衣裙</div>
          </div>
          <div>
            <div class="list-img">
              <img src="" alt="">
            </div>
            <div class="list-info">套装</div>
          </div>
          <div>
            <div class="list-img">
              <img src="" alt="">
            </div>
            <div class="list-info">上装</div>
          </div>
          <div>
            <div class="list-img">
              <img src="" alt="">
            </div>
            <div class="list-info">下装</div>
          </div>
        </div>
        <div class="home-banner">我是banner</div>
      </div>
      <div class="new">
        <div class="new-header">新品推荐</div>
        <ul>
          <li v-for="item in goodsList">
            <div class="img-wrapper">
              <img src="" alt="">
            </div>
            <div class="new-info">惊喜价<span>{{item.price}}</span></div>
          </li>
        </ul>
      </div>
      <div class="new">
        <div class="new-header">销量排行</div>
        <ul>
          <li v-for="item in goodsList" @click="goodsInfo">
            <div class="img-wrapper">
              <img src="" alt="">
            </div>
            <div class="new-info">惊喜价<span>¥{{item.price}}</span></div>
          </li>
        </ul>
      </div>
    </div>
    <div v-if="showPage == 0">这是店铺首页</div>
    <div v-if="showPage == 1">这是全部宝贝</div>
    <div v-if="showPage == 2">这是新品上新</div>
    <div v-if="showPage == 3">这是视频直播</div>

    <!--<div class="footer">-->
      <!--<van-tabbar v-model="active">-->
        <!--<van-tabbar-item>宝贝分类</van-tabbar-item>-->
        <!--<van-tabbar-item>联系客服</van-tabbar-item>-->
        <!--<van-tabbar-item>店铺简介</van-tabbar-item>-->
      <!--</van-tabbar>-->
    <!--</div>-->
  </div>
</template>

<script type="text/ecmascript-6">

  import VideoPage from './Video';
  import AllPage from './All';
  import NewPage from './New';

  export default {
    components: {
      VideoPage,
      AllPage,
      NewPage,
    },
    name: "StoreHome",
    data(){
      return {
        showPage:0,
        value: '',
        active: 0,
        goodsList: [
          {
            price: "198"
          },
          {
            price: "78"
          },
          {
            price: "126"
          },
          {
            price: "198"
          },
          {
            price: "126"
          }
        ],
      }
    },
    created(){
      this.storeInfo(0)
    },
    methods: {
      onClick(index, title) {
        this.$toast(title);
        this.showPage = index;
      },
      goodsInfo(){
        this.$router.push({
          path: '/shares',
        })
      },

      sellerInfo(){
        this.$router.push({
          path: '/storeintro',
        })
      },

//      获取店铺首页信息
      storeInfo(index,title){
//        this.$toast(title);
      },
//      全部宝贝
      allBaby(){
        this.$router.push({
          path: 'allbaby',
        })

      }
    }
  }
</script>

<style lang="less" scoped>
  .header-wrapper{
    height: 122px;
    background-color: pink;
    position:relative;
  }
  .header {
    height: 29px;
    display: flex;
    flex-direction: row;
    line-height: 29px;
    padding-top:5px;
  .icon-back {
    float: left;
    width: 10px;
    height: 17px;
    margin: 0 20px;

  >
  img {
    margin-top: 7px;
  }

  }
  .header-search {
    height: 30px;
    background-color: #fff;
    border-radius: 15px;
    flex: 1;
    /*margin: 0 10px;*/
    padding: 1px 20px;
    border: 1px solid #fff;
    font-size: 14px;
    color: #888;

  /*>*/
  /*img {*/
    /*!*float: right;*!*/
    /*margin-top: 5px*/
  /*}*/

  }
  .share {
    float: right;
    margin: 0 20px;

  >
  img {
    margin-top: 7px;
  }

  }
  }
  .seller {
    position: absolute;
    display: flex;
    flex-direction: row;
    height: 49px;
    left: 10px;
    bottom: 7px;

  }
  .fans{
    height: 28px;
    width: 43px;
    position: absolute;
    bottom: 20px;
    right: 85px;
  }
  .focus{
    width: 60px;
    height: 24px;
    background-color: #fff;
    color:#FD6D1F;
    font-size: 14px;
    text-align: center;
    position: absolute;
    bottom: 15px;
    right: 15px;
  }
  .search {
    position: relative;
    height: 30px;

  >
  img {
    position: absolute;
    top: 16px;
    left: 20px;
  }

  }
  .content-wrapper {
    padding: 5px;
    padding-top: 0;
    margin-top: 0;
  }

  .home-banner {
    height: 150px;
    margin-top: 6px;
    background-color: #fff;
  }

  .list-wrapper {
    height: 155px;
    background-color: #fff;
    margin-top: 6px;
    padding: 5px;
    display: flex;
    flex-direction: row;

  .list-img {
    height: 120px;
    width: 89px;
  }

  .list-info {
    padding-left: 28px;
    font-size: 12px;
  }

  }
  .new {
    /*height: 900px;*/
    background-color: #D2ECFF;

  .new-header {
    font-size: 16px;
    height: 60px;
    line-height: 60px;
    padding: 0 155px;
  }

  >
  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;

  >
  li {

  /*width: 50%;*/

  >
  .img-wrapper {
    width: 165px;
    height: 214px;
    margin-left: 10px;
    background-color: #fff;
    text-align: center;
  }

  .new-info {
    padding-left: 54px;
    margin-top: 15px;
    margin-bottom: 15px;
    font-size: 12px;

  >
  span {
    font-size: 13px;
    margin-left: 8px;
  }

  }
  }
  }

  }
  .footer{
    font-size: 14px;
    height: 50px;
  }
</style>
