<template>
  <div>
    <van-tabs v-model="active" line-width=0 scroll="isFixed">
      <van-tab :title="'综合'">

      </van-tab>
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
        active: 1,
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
            price: 83,
            buyer: 16
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

<style lang="less" rel="stylesheet/less">
  .all-list {
    margin: 6px;

    >
    ul {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-left: 2%;
      margin-right: 2%;
      >
      li {
        width: 48.5%;
        background-color: #fff;
        margin-top: 6px;

        >
        .img-wrapper {
          width: 160px;
          height: 179px;

          background-color: #fff;
          text-align: center;
        }
        .info-wrapper {
          padding: 5px;
          >
          .baby-info {
            font-size: 12px;
          }
        }

      }
    }
  }
</style>
