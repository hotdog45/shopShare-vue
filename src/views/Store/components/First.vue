<template>
  <div>
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
</template>

<script type="text/ecmascript-6">
  export default{
    name: "firstPage",
    data(){
      return {
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
    methods: {
      goodsInfo(){
        this.$router.push({
          path: '/shares',
        })
      },
    }
  }
</script>

<style lang="less" scoped rel="stylesheet/less">
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
      /*justify-content: space-between;*/
      flex-wrap: wrap;

      >
      li {
        width: 48%;

        >
        .img-wrapper {
          width: 165px;
          height: 214px;
          margin-left: 8%;
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
</style>
