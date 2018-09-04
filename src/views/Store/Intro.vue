<template>
  <div>
    <div class="seller">
      <img src="@/assets/images/logo.png" alt="" style="width: 49px;height: 49px">
      <div style="display: flex;flex-direction: column;margin-left: 10px;">
        <span>艾艾艾小北的店</span>
        <span style="margin-top: 10px;color: #333">2</span>
      </div>
    </div>

    <div class="site-wrapper">
      <div class="site-detail">
        <span>好评率</span>
        <span class="intro-detail">99%</span>
      </div>
      <div class="site-detail">
        <span>所在地</span>
        <span class="intro-detail">浙江杭州</span>
      </div>
    </div>

    <div class="des-wrapper">
      <div class="des-detail">
        <span>描述相符</span>
        <span class="intro-detail">4.9高于同行40%</span>
      </div>
      <div class="des-detail">
        <span>服务态度</span>
        <span class="intro-detail">4.9高于同行40%</span>
      </div>
      <div class="des-detail">
        <span>物流服务</span>
        <span class="intro-detail">4.9高于同行40%</span>
      </div>
    </div>

    <div class="contact">
      <span style="color:#333">掌柜名:</span>
      <span style="flex-grow:1;margin-left: 45px;font-size: 15px">大风车商城</span>
      <img src="@/assets/images/share/come.png" style="width: 8px;height: 10px;margin-right: 12px">
    </div>

    <div class="contact">
      <span style="color:#333">联系电话:</span>
      <span style="flex-grow:1;margin-left: 28px;font-size: 15px">029-456789</span>
      <img src="@/assets/images/share/come.png" style="width: 8px;height: 10px;margin-right: 12px">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
//  import {getStoreDetail} from '@/api/share';

  export default {
    name: "StoreInfo",
    data(){
      return {
        storeInfo:{
          storeId:""
      }
      }
    },
    created(){
//      this.storeIntro()
    },
     methods:{
      //获取店铺信息
//       storeIntro(){
//         this.storeInfo.storeId = this.$route.query.storeId;
//         getStoreDetail(this.storeInfo).then((res)=>{
//           console.log(res)
//           if (res.status != 0) {
//             this.$vux.toast.text(res.msg);
//           } else {
//             this.storeInfo = res.data;
//           }
//         })
//       }
     },
    components: {}
  }
</script>

<style scoped lang="less">
  .seller {
    display: flex;
    flex-direction: row;
    height: 79px;
    background-color: #fff;
    padding: 15px;
  }

  .site-wrapper {
    height: 74px;
    margin-top: 14px;
    padding: 15px;
    background: #fff;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    .site-detail {
      color: #333;
      width: 100%;
      height: 50%;
      .intro-detail {
        margin-left: 44px
      }
    }
  }

  .des-wrapper {
    height: 109px;
    background-color: #fff;
    margin-top: 14px;
    padding: 15px;
    .des-detail {
      color: #333;
      height: 33%;
      .intro-detail {
        margin-left: 28px;
        color: #FD6D1F;
      }
    }
  }

  .contact {
    display: flex;
    padding: 15px;
    flex-direction: row;
    align-items: center;
    margin: 14px 0;
    background: #fff;
    height: 44px;
    font-size: 14px
  }
</style>
