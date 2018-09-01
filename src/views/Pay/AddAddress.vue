<template>
  <div class="addAddress">
    <group>
      <x-input title="收件人" placeholder="请输入您的姓名" v-model="addressData.consignee" label-width="100px"></x-input>
      <x-input title="联系电话" placeholder="请输入您的手机号" v-model="addressData.mobile" label-width="100px"></x-input>
    </group>
    <group>
      <x-address title="所在地区" v-model="value" raw-value :list="addressDatas" value-text-align="left"
                 label-width="100px"></x-address>
      <x-textarea title="详细地址" v-model="addressData.address" placeholder="请填写详细信息" :show-counter="false" :rows="3"
                  label-width="100px"></x-textarea>
    </group>
    <!--<check-icon style="font-size: 16px;"class="is-default" :value.sync="isDefault" @click.native="handleCheckedItem">默认地址</check-icon>-->
    <group>
      <x-switch title="设为默认地址" v-model="addressData.isDefault" @click.native="handleCheckedItem"></x-switch>
    </group>

    <x-button style="background: #FD6D1F" type="primary" class="add-btn" @click.native="handleAddAddress">确认添加
    </x-button>
  </div>
</template>

<script>
  import {
    XInput,
    Group,
    XButton,
    XAddress,
    ChinaAddressV4Data,
    Value2nameFilter,
    CheckIcon,
    XSwitch,
    XTextarea
  } from 'vux'
  import {getAddAddress} from '@/api/share';
  export default {
    name: 'addAddress',
    data() {
      return {
        value: [],
        address: [],
        addressDatas: ChinaAddressV4Data,
        addressData: {
          consignee: '',  //姓名
          mobile: '',
          province: '',//省  代码不是 名字
          city: '',//市 代码不是 名字 330100
          district: '',//区 代码不是 名字
          address:"",
          addressId: '',//id 新增不用传
          email: '',
          country: 1,
          zip: '',//邮编
          phone: '',//座机
          addressName: '',//详细地址
          signBuilding: '',//
          bestTime: '',//上班时间
          isDefault: 1,//是否默认
        }

      }
    },
    created(){
      if (this.$route.query.addressData){
        this.addressData = this.$route.query.addressData
        this.value[0] = this.$route.query.addressData.province;
        this.value[1] = this.$route.query.addressData.city;
        this.value[2] = this.$route.query.addressData.district;
        console.log(this.$route.query.addressData)
      }
    },
    methods: {
      //确认添加地址
      handleAddAddress(){
        this.addressData.province = this.value[0]
        this.addressData.city = this.value[1]
        this.addressData.district = this.value[2]
//        console.log(this.value)
        console.log(this.addressData)
        getAddAddress(this.addressData).then((res)=> {
          this.$vux.toast.text(res.msg);
          console.log(res)
          if (res.status == 0) {
            this.$router.push({
              path: 'addresslist',
            })
          }

        })

      },
      handleCheckedItem(){
//        this.addressData.isDefault =

      },

      onShadowChange (ids, names) {
        console.log(ids, names)
      },
      getName (value) {
        return Value2nameFilter(value, ChinaAddressV4Data)
      },


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

<style scoped lang="less" rel="stylesheet/less">

  /*.is-default{*/
  /*margin-left: 10px;*/
  /*margin-top: 10px;*/
  /*}*/
  .add-btn {
    position: fixed;
    bottom: 0px;
    left: 0px;
    font-size: 14px;
    height: 50px;
  }
</style>
