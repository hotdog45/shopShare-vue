<template>
  <div>
    <div class="noaddress" style="height:100%;margin: auto;text-align: center;padding: 300px 118px" @click.native="handleAddAddress">
    暂时还没添加地址
    </div>
    <x-button  type="primary" style="border-radius:1px;background-color:#FD6D1F;
    color:#fff;" @click.native="handleAddAddress">+添加收货地址</x-button>
  </div>
</template>

<script type="text/ecmascript-6">
  import { XButton} from 'vux'

  export default {
    name:"handleAddAddress",
    data (){
      return{

      }
    },
    methods:{
      handleAddAddress(){
        this.$router.push({
          path:'addadress'
        })

      }
    },
    components: {
      XButton

    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.noaddress
  font-size 16px
  color #333333

.add-btn
  position: fixed;
  bottom: 0;
  left: 0;
  font-size: 14px;
  height: 50px;
  background :#FD6D1F;
  width: 320px;
  text-align: center;
  margin-top:50%
</style>
