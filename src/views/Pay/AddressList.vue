<template>
  <div class="receiptAddress">
    <div class="addres-item" v-for="(item ,index) in addressList" style="margin: 15px">
      <p>{{item.consignee}}&nbsp;&nbsp;{{item.mobile}}</p>
      <p style="font-size: 13px">{{item.provinceName + item.cityName + item.districtName + item.addressName}}</p>
      <div class="btn_del" style="display: flex;flex-direction: row; ">
        <check-icon :value.sync="item.isDefault == 1" @click.native="handleCheckedItem(index)">默认地址</check-icon>
        <div style="flex-grow: 2;"></div>
        <button @click="addressEdit(item)">编辑</button>
        <button @click="goDelAddress(index)" >删除</button>

      </div>
    </div>
    <x-button style="background: #FD6D1F" type="primary" class="add-btn" @click.native="handleAddAddress">添加地址</x-button>
  </div>
</template>

<script>
  import { CheckIcon, XButton } from 'vux'
  import {getAddressList,getAddressDel,
    getAddressMod,
    getAddressDefault
  } from '@/api/share'
  export default {
    name: 'receiptAddress',
    data() {
      return {
        checked:true,
        addressList: [],

        addressDel:{
          addressId:""  //订单id
        },
        //设置默认
        addressDefault:{
          addressId:"",  //订单id
          isDefault:1
        }
      }
    },

    created() {
      this.addressNewList();
    },
    methods:{
  //获取地址列表
      addressNewList(item){
        getAddressList(this.addressList).then((res)=>{
          console.log(res);
          if(res.status != 0){
            this.$vux.toast.text(res.msg);
          }else{
            this.addressList = res.data

          }


        })
        },
      handleCheckedItem(index){ //设置默认
        console.log('isDefault修改之前:'+this.addressList[index].isDefault);
        this.addressDefault.isDefault = this.addressList[index].isDefault==0?1:0; //三目运算符
        this.addressDefault.addressId = this.addressList[index].addressId
        console.log('this.addressDefault:'+this.addressDefault);
        getAddressDefault(this.addressDefault).then((res)=>{
          console.log(res);
          this.$vux.toast.text(res.msg);
          if(res.status == 0){ //成功之后重新请求,刷新数据
            this.addressNewList();
          }
        })
      },

      //删除地址
      goDelAddress(index){
        console.log("index:"+index);
        this.addressDel.addressId = this.addressList[index].addressId;
        console.log("addressId:"+this.addressList[index])
        getAddressDel(this.addressDel).then((res)=>{
          console.log(res);
          this.$vux.toast.text(res.msg);
          if(res.status == 0){ //成功之后重新请求,刷新数据
            this.addressNewList();
          }

        })
      },
      addressEdit(item) {
          this.$router.push({
            path:'addadress',
            query:{
              addressData:item
            }
          })
      },
      handleAddAddress(){
        this.$router.push({
          path:'addadress'
        })
      }
    },
    components: {
      CheckIcon,
      XButton
    },
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
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
