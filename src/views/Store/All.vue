<template>
  <div>
    <van-tabs v-model="active1" sticky>
      <van-tab :title="'店铺首页'"></van-tab>
      <van-tab :title="'全部宝贝'"></van-tab>
      <van-tab :title="'新品上新'"></van-tab>
      <van-tab :title="'视频直播'"></van-tab>
    </van-tabs>

    <van-tabs v-model="active" line-width=0 scroll="isFixed">
      <van-tab :title="'综合'"></van-tab>
      <van-tab :title="'销量'"></van-tab>
      <van-tab :title="'新品'"></van-tab>
      <van-tab :title="'价格'"></van-tab>
    </van-tabs>

    <div class="all-list">
      <ul>
        <li v-for="item in goodsList">
          <div class="img-wrapper">
            <img src="" alt="">
          </div>
          <div class="info-wrapper">
            <div class="baby-info">{{item.info}}</div>
            <div style="margin-top:6px">
              <span style="font-size: 12px">¥{{item.price}}</span>
              <span style="font-size: 11px;color: #888">{{item.buyer}}人已付款</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    name: "AllBaby",
    data(){
      return {
        active1: 1,
        goodsList: [
          {
            url: "",
            info: "媛媛公主童装女童夏装长裙中大童",
            price: 58,
            buyer: 23
          },
          {
            url: "",
            info: "媛媛公主童装女童夏装长裙中大童",
            price: 58,
            buyer: 23
          },
          {
            url: "",
            info: "媛媛公主童装女童夏装长裙中大童",
            price: 58,
            buyer: 23
          }
        ]
      }
    }
  }
</script>

<style lang="less">
  .all-list {
    margin: 6px;

  >
  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  >
  li {
    width: 48%;
    background-color: #fff;
    margin-top:6px;

  >
  .img-wrapper {
    width: 160px;
    height: 179px;
    margin-left: 5px;
    background-color: #fff;
    text-align: center;
  }
  .info-wrapper{
    padding:5px;
  >
  .baby-info {
    font-size: 12px;
  }
  }



  }
  }
  }
</style>
