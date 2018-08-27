<template>
  <div class="header">
    支付订单
    <router-link to="/">
      <div class="iconfont header-back">&#xe67c;</div>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name:"PayHeader"
  }
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
.header {
  position: relative
  overflow: hidden;
  height: 64pt;
  line-height: 64pt;
  text-align: center;
  color: #FFFFFF;
  background: #FD6D1F;
  font-size: 18pt;
}
  .header-back {
    position: absolute
    top: 0;
    left: 0;
    width: 10pt;
    font-size: 18pt;
    text-align: center;
    color: #fff;
  }

</style>
