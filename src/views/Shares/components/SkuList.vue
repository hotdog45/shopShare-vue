<template>
  <!-- 页面的内容 -->
  <div style="background: #fff;">
    <div style="display: flex;flex-direction: row;">
      <img style="width: 120px;height: 120px; margin-left: 20px;" :src="datas.productThembUrl">
      <div style="display: flex;flex-direction: column;padding: 20px">
        <div>{{datas.productName}}</div>
        <div style="display: flex;flex-direction: row; margin-top: 50px;">
          <div>¥{{datas.price}}</div>

        </div>
      </div>

    </div>
    <div style="border-bottom: 1px solid #eee;padding: 30px">尺码：
      <span v-for="(item, index) in datas.skuSize"
                                             :key="index">{{item.sizeName}}</span></div>

    <div v-for="(item, index) in datas.skuColor" :key="index"
         style="display: flex;flex-direction: row;border-bottom: 1px solid #eee; padding: 10px;text-align: center;">
      <div>{{item.colorName}}</div>
      <div style="margin-left: 40px;">库存:{{item.colorSno}}件</div>
      <div style="flex-grow: 1"></div>
      <van-stepper

        v-model="item.num == null ?0:item.num"
        integer
        :min="0"
        :max="item.colorSno"
        :step="item.isSel"

      />
    </div>
    <div style="display: flex;flex-direction: row;margin: 20px;height: 44px;margin-top: 50px; ">
      <div v-if="showBtn1" @click="addShoppingCar"
           style="flex-grow:1;background: #FD6D1F;color: #fff;font-size: 14px;text-align: center;
        line-height: 44px;">加入购物车
      </div>
      <div v-if="showBtn2" @click="goShopping"
           style="flex-grow:1;background-color: #FB3232;color: #fff;font-size: 14px;text-align: center;
        line-height: 44px; margin-left: 10px;">立即购买
      </div>

    </div>
    <div style="height:  20px;"></div>
  </div>
</template>
<script>
  /* 页面的js */
  import {Group, PopupHeader, CellBox, XNumber} from 'vux';
  export default {
    name: 'Parameter',
    props: {
      datas: Object,
      showBtn1: true,
      showBtn2: true,
      default() {
        return {
          "v": 0,
        };
      },
    },
    components: {
      Group,
      CellBox,
      PopupHeader,
      XNumber,
    },
    data() {
      return {};
    },
    methods: {},
  };
</script>

<style scoped lang="scss" rel="stylesheet/scss">

</style>
