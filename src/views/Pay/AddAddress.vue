<template>
  <div class="addAddress">
    <group >
      <x-input style="font-size: 16px;" title="收件人"  placeholder="请输入您的姓名" v-model="name" required text-align="left" label-width="80px"></x-input>
      <x-input style="font-size: 16px;" title="手机号" name="mobile" placeholder="请输入您的手机号" v-model="mobile" keyboard="number" is-type="china-mobile" required text-align="left" label-width="80px"></x-input>
    </group>
    <group>
      <x-address style="font-size: 16px;" title="地址选择" v-model="addressValue" raw-value :list="addressData" value-text-align="left"></x-address>
      <x-textarea style="font-size: 16px;" title="详细信息" placeholder="请填写详细信息" :show-counter="false" :rows="3"></x-textarea>
    </group>
    <!--<check-icon style="font-size: 16px;"class="is-default" :value.sync="isDefault" @click.native="handleCheckedItem">默认地址</check-icon>-->
    <group>
      <x-switch style="font-size: 16px;" title="设为默认地址" ></x-switch>
    </group>

    <x-button style="background: #FD6D1F" type="primary" class="add-btn" @click.native="handleAddAddress">确认添加</x-button>
  </div>
</template>

<script>
  import { XInput, Group, XButton, XAddress, ChinaAddressV4Data, CheckIcon,XSwitch,XTextarea } from 'vux'
  export default {
    name: 'addAddress',
    data() {
      return {
        addressData: ChinaAddressV4Data,
        name:'',//收件人
        mobile:'',//手机号
        province:'',//省，
        city:'',//市
        country:'',//区
        region:[],//地区
        address:'',//详细地址
        isDefault:false,
      }
    },
    methods:{
      handleCheckedItem(){

      },
      handleAddAddress(){
        this.$router.push({
          path:'addresslist'
        })
      }
    },
    components: {
      XInput,
      XButton,
      Group,
      XAddress,
      CheckIcon,
      XSwitch,
      XTextarea
    },
  }
</script>

<style scoped lang="less">

  /*.is-default{*/
    /*margin-left: 10px;*/
    /*margin-top: 10px;*/
  /*}*/
  .add-btn{
    position: fixed;
    bottom: 0px;
    left: 0px;
    font-size: 14px;
    height: 50px;
  }
</style>
