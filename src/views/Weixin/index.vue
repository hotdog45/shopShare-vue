<template>
  <div class="w-edit" v-if="datas">
    <div class="edit-detail"  v-if="currentComponent === 'index'">
      <div class="edit-head">
        <group class="over-t">
          <cell :title="('*标题')" is-link :value="sharePro.productName" @click.native="titlePage(sharePro.productName)"></cell>
          <cell :title="('*销售价格')" is-link :value="`${sharePro.price}元`" @click.native="titlePrice(sharePro.price)"></cell>
          <cell :title="('品牌名称')" :value="`${datas.brandName}`"></cell>
        </group>
      </div>
      <div class="edit-head">
        <group class="over-t">
          <cell-box  class="flex-sb">
            <div class="flex-row">颜色</div>
            <div class="flex-row"><span v-for="(item, index) in datas.skuColor" :key="index">{{item.colorName}}</span></div>
          </cell-box>
          <cell-box  class="flex-sb">
            <div class="flex-row">尺寸</div>
            <div class="flex-row over-h"><span v-for="(item, index) in datas.skuSize" :key="index">{{item.sizeName}}</span></div>
          </cell-box>
        </group>
      </div>
      <div class="edit-head">
        <group class="iphone">
          <cell-box class="flex-sb">
            <div class="flex-row WD20">手机号码</div>
            <div class="flex-row">
              <x-input name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile" v-model="sharePro.mobile" @on-change="keyDown" ref="refmobile" required></x-input>
              </div>
          </cell-box>
          <cell-box class="flex-sb">
            <div class="flex-row WD20">QQ</div>
            <div class="flex-row"><x-input name="mobile" placeholder="请输入QQ号码" keyboard="number" :min="5" :max="14" v-model="sharePro.qq"  ref="refqq" required></x-input></div>
          </cell-box>
       </group>
      </div>
      <div class="edit-head">
        <group>
          <cell :title="('管理密码')" is-link :value="setPass" @click.native="passPage(sharePro.passWord)"></cell>
        </group>
      </div>
      <div class="edit-img">
        <div class="edit-title">
          *选择图片 (最多可选10张产品图片, 当前已选
          <span v-if="sharePro.images">{{sharePro.images.length}}</span>
          <span v-else>0</span>张
        </div>
        <checker v-model="sharePro.images" type="checkbox" default-item-class="demo5-item" selected-item-class="demo5-item-selected" :limit="1">
          <checker-item v-for="(item,key) in datas.detail.images" :key="key" :value="item" :title="item.imgId"><img :src="item.imgUrl"></checker-item>
       </checker>
      </div>
      <div class="h50"></div>
      <tabbar class="vux-demo-tabbar" icon-class="vux-center" slot="bottom">
        <x-button class="btn" @click.native = "handleSaveWx">确定</x-button>
      </tabbar>
    </div>
    <!-- title -->
    <div v-if="currentComponent !== 'index' && currentComponent ==='edit-title'">
      <component :is="currentComponent" @back="handleBackPage" :title="sharePro.productName"></component>
    </div>
    <!-- price -->
    <div v-if="currentComponent !== 'index' && currentComponent ==='edit-price'">
      <component :is="currentComponent" @back="handleBackPrice" :price="sharePro.price"></component>
    </div>
    <!-- pass -->
    <div v-if="currentComponent !== 'index' && currentComponent ==='edit-pass'">
      <component :is="currentComponent" @back="handleBackPass" :pass="sharePro.passWord"></component>
    </div>
    <!-- link -->
    <div v-if="currentComponent !== 'index' && currentComponent ==='link-share'">
      <component :is="currentComponent" :pid="pid"></component>
    </div>
    <!-- Alert -->
    <div >
      <alert v-model="showAlert" :title="('操作提示')" :content="('星号为必选项')"></alert>
    </div>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, Flexbox, FlexboxItem, Group, Cell, CellBox, Divider, XTable, Checker, CheckerItem, XButton, XInput, Alert } from 'vux';
import { getShareList, getShareSave } from '@/api/share';
import EditTitle from './components/EditTitle';
import EditPass from './components/EditPass';
import EditPrice from './components/EditPrice';
import LinkShare from './components/LinkShare';

export default {
  components: {
    Tabbar,
    XInput,
    TabbarItem,
    Flexbox,
    FlexboxItem,
    Cell,
    Group,
    CellBox,
    Divider,
    XTable,
    Checker,
    CheckerItem,
    XButton,
    Alert,
    EditTitle,
    EditPass,
    EditPrice,
    LinkShare,

  },
  data() {
    return {
      product: {
        productId: '66ca3b6fd2e244a9962bb91f66a7c968',
      },
      setPass: '设置',
      pid: '',
      sharePro: {
        productId: '66ca3b6fd2e244a9962bb91f66a7c968',
        images: null,
        productName: '',
        brandName: '',
        passWord: '',
        price: 0,
        mobile: '',
        qq: '',
      },
      datas: null,
      showAlert: false,
      disabled: true,
      currentComponent: 'index',
    };
  },
  created() {
    this.getInfo();
  },
  methods: {
    getInfo() {
      getShareList(this.product).then((res) => {
        this.datas = res.data;
        this.sharePro.productName = res.data.productName;
        this.sharePro.price = res.data.price;
        this.sharePro.brandName = res.data.brandName;
      });
    },
    // 编辑title
    titlePage(title) {
      this.sharePro.productName = title;
      this.currentComponent = 'edit-title';
    },
    // 编辑Price
    titlePrice(price) {
      this.sharePro.price = price;
      this.currentComponent = 'edit-price';
    },
    // 编辑密码
    passPage(pass) {
      this.sharePro.passWord = pass;
      this.currentComponent = 'edit-pass';
    },
    // 转主页
    handleBackPage(val) {
      this.sharePro.productName = val;
      this.currentComponent = 'index';
      // this.getInfo();
    },
    handleBackPass(val) {
      this.sharePro.passWord = val;
      this.setPass = '已设置';
      this.currentComponent = 'index';
    },
    handleBackPrice(val) {
      // this.datas.price = val;
      this.sharePro.price = val;
      this.currentComponent = 'index';
    },
    keyDown() {
      this.disabled = true;
      if (this.$refs.refmobile.valid === true) {
        this.disabled = false;
      }
      if (this.$refs.refqq.valid === true) {
        this.disabled = false;
      }
    },
    handleSaveWx() {
      if (this.sharePro.mobile === '') {
        this.disabled = false;
      }
      if (this.disabled === false) {
        if (this.sharePro.images !== '' && this.sharePro.images !== null && this.sharePro.productName !== '' && this.sharePro.price !== '') {
          getShareSave(this.sharePro).then((res) => {
            this.pid = res.data;
            this.currentComponent = 'link-share';
          });
        } else {
          this.showAlert = true;
        }
      }
    },
  },
};
</script>
<style lang="scss">
  .w-edit{
    p{
      margin: 0;
      padding: 0;
    }
    .weui-cells{
      margin-top: 0;
      padding: 0  ;
    }
    .vux-input-icon, .weui-icon-success:before, .vux-input-icon, .weui-icon-warn:before,
    .vux-x-input, .vux-input-icon{
      content: '\EA0B' !important;
    }
    .over-t{
      .weui-cell__ft{
      width: 264px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      }
    }
    .over-h{
      width: 264px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .vux-label{
      width: 76px;
    }
    .weui-tabbar{
      position: fixed;
    }
    .iphone{
    .weui-input, .vux-x-input{
      width: 70vw;
      height: 24px;
      line-height: 24px;
    }
    }
  }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .w-edit{
    .WD20{
      width: 20vw;
    }
    .edit-detail{
      .edit-head{
        margin-bottom: 15px;
      }
      .edit-head, .edit-img{
        background: #fff;
        padding:0 6px;
        .edit-title{
          text-align: center;
          color: #ddd;
          padding: 15px 0;
        }
      .demo5-item {
        width: 82px;
        height: 82px;
        border-radius: 3px;
        border: 1px solid #ccc;
        margin: 4px;
        img{
          width: 80px;
          height: 80px;
          object-fit: cover;
        }
      }
      .demo5-item-selected {
        // background: #ffffff url(../../assets/images/active.png) no-repeat right bottom;
        border-color: #FD6D1F;
      }
      }
      .h50{
        height: 50px;
        background: #fff;
      }
    }
    .btn{
      color: #fff;
      background: #FD6D1F;
      height: 50px;
    }
  }
</style>
