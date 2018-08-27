<template>
  <div class="receiptAddress">
    <div class="addres-item" v-for="item in addressList" @click="handleSelect" style="margin: 15px">
      <p>{{item.name}}&nbsp;&nbsp;{{item.mobile}}</p>
      <p style="font-size: 13px">{{item.address}}</p>
      <div>
        <check-icon :value.sync="item.isDefault" @click.native.stop="handleCheckedItem(item)">默认地址</check-icon>
        <router-link @click.native.stop to="/addadress">编辑</router-link>
        <router-link @click.native.stop to="/AddAddress">删除</router-link>

      </div>
    </div>
  </div>
</template>

<script>
  import { CheckIcon, XButton } from 'vux'
  export default {
    name: 'receiptAddress',
    data() {
      return {
        checked:true,
        addressList:[{
          name:'张三',
          mobile:'18366667777',
          address:'上海上海市浦东新区超神一条街111号',
          isDefault:true
        },{
          name:'李四',
          mobile:'18366667777',
          address:'上海上海市浦东新区超神一条街111号',
          isDefault:false
        }]
      }
    },
    methods:{
      handleCheckedItem(item){
        this.addressList.forEach((item) => {
          item.isDefault = false;
        })
        item.isDefault = true;
      },
      handleAddAddress(){
        this.$router.push({
          path:'/AddAddress'
        })
      },
      handleSelect(){
        this.$router.push({
          path:'/PerfectOrder'
        })
      }
    },
    components: {
      CheckIcon,
      XButton
    },
  }
</script>

<style scoped lang="less" >
  .receiptAddress{
    padding-bottom: 50px;
  }
  .addres-item{
    height: 155px;
    padding: 15px;
    background-color: #FFFFFF;
    font-size: 13px;
    margin-bottom: 10px;
  p:first-of-type{
    font-size: 14px;
    color: #333;
    margin-bottom: 5px;
  }
  p:last-of-type{
    height: 40px;
    line-height: 20px;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  >div{
    font-size: 13px;
     height: 30px;
     line-height: 30px;
  a{
    float: right;
    display: inline-block;
    width: 60px;
    height: 100%;
    text-align: center;
  }
  }
  }
  .add-btn{
    position: fixed;
    bottom: 0px;
    left: 0px;
    font-size: 14px;
    height: 50px;
  }
</style>
