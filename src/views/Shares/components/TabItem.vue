<template>
  <div class="tab-item">
    <tabbar class="vux-demo-tabbar" icon-class="vux-center" slot="bottom">
      <tabbar-item>
        <img slot="icon" class="taobao-icon" src="@/assets/images/shares/taobao.png">
        <span slot="label">传淘宝</span>
      </tabbar-item>
      <tabbar-item>
        <img slot="icon" class="ali-icon" src="@/assets/images/shares/ali.png" >
        <span slot="label">传阿里</span>
      </tabbar-item>
      <tabbar-item>
        <img slot="icon" src="@/assets/images/shares/wshop.png">
        <span slot="label">传微店</span>
      </tabbar-item>
      <tabbar-item>
        <img slot="icon" class="taobao-icon" src="@/assets/images/shares/wx.png">
        <span slot="label">传微信</span>
      </tabbar-item>
      <tabbar-item>
        <img slot="icon" src="@/assets/images/shares/pyq.png">
        <span slot="label">发朋友圈</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>
<script>
import { Tabbar, TabbarItem } from 'vux';

export default {
  components: {
    Tabbar,
    TabbarItem,
  },
  name: 'TabItem',
  data() {
    return {
    };
  },
};
</script>
<style lang="scss">
  .tab-item{
    .vux-demo-tabbar{
      .weui-tabbar__icon{
        width: 20px;
        height: 20px;
        margin-bottom: 6px;
      }
    }
  }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .tab-item{
    .vux-demo-tabbar{
      height: 50px;
      .weui-tabbar__item{
        margin: 7px 0;
        padding: 0;
        .ali-icon{
          width: 34px;
          height: 20px;
          object-fit: contain;
        }
        .taobao-icon{
          width: 20px;
          height: 25px;
          object-fit: contain;
        }
      }
    }
  }
</style>
