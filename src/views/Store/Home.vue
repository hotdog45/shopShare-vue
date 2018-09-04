<template>
  <div>
    <div class="header-wrapper">
      <div class="header">
        <div class="icon-back" @click="backDetail">
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

    <van-tabs v-model="active" sticky >
      <van-tab :title="'店铺首页'" >
        <first-page></first-page>
      </van-tab>
      <van-tab :title="'全部宝贝'" >
        <all-page></all-page>
      </van-tab>
      <van-tab :title="'新品上新'">
        <new-page></new-page>
      </van-tab>
      <van-tab :title="'视频直播'">
        <div>视频直播</div>
      </van-tab>
    </van-tabs>



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
  import FirstPage from './components/First';
  import AllPage from './components/All';
  import NewPage from './components/New';
  import VideoPage from './components/Video';

//  import {getStoreIntro} from '@/api/share'

  export default {

    name: "StoreHome",
    data(){
      return {
        storeData:null,
        showPage:0,
        value: '',
        active: 0,
        storeInfo:{
          storeId:""
        }

      }
    },
    created(){
//      this.storeInfo(0)
    },
    methods: {
      backDetail(){
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
//      storeInfo(index,title){
//        this.storeInfo.storeId = this.$route.query.storeId;
//        getStoreIntro(this.storeInfo).then((res)=>{
//          console.log(res);
//          if (res.status != 0) {
//            this.$vux.toast.test(res.msg)
//          } else {
//            this.storeData = res.data
//          }
//        })
//      },


    },
    components: {
      FirstPage,
      AllPage,
      NewPage,
      VideoPage,
    },
  }
</script>

<style lang="less" scoped>
  .header-wrapper{
    height: 122px;
    background-color: pink;
    background-image: url();
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


  .footer{
    font-size: 14px;
    height: 50px;
  }
</style>
