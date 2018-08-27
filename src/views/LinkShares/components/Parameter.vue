<template>
  <div class="parameter" v-if="datas">
    <popup-header :title="('产品参数')" :show-bottom-border="false"></popup-header>
    <group>
      <cell-box>
        <div class="flex-row WD30">品牌</div>
        <div class="flex-row">{{datas.brandName ==''? '无' : datas.brandName}}</div>
      </cell-box>
      <cell-box>
        <div class="flex-row WD30">分类</div>
        <div class="flex-row">{{datas.cateName ==''? '无' : datas.cateName}}</div>
      </cell-box>
      <cell-box>
        <div class="WD30">亚麻</div>
        <div class="WD70"><span v-for="(d,r) in datas.attributes[0].attrList" :key="r" v-if="d.isSel === 1">{{d.attrName}}</span></div>
      </cell-box>
      <cell-box>
        <div class="WD30">主面料</div>
        <div class="WD70"><span v-for="(d,r) in datas.attributes[1].attrList" :key="r" v-if="d.isSel === 1">{{d.attrName}}</span></div>
      </cell-box>
      <cell-box>
        <div class="WD30">上市年份</div>
        <div class="WD70"><span v-for="(d,r) in datas.attributes[2].attrList" :key="r" v-if="d.isSel === 1">{{d.attrName}}</span></div>
      </cell-box>
      <cell-box>
        <div class="WD30">填充物</div>
        <div class="WD70"><span v-for="(d,r) in datas.attributes[3].attrList" :key="r" v-if="d.isSel === 1">{{d.attrName}}</span></div>
      </cell-box>
      <cell-box>
        <div class="WD30">厚薄</div>
        <div class="WD70"><span v-for="(d,r) in datas.attributes[4].attrList" :key="r" v-if="d.isSel === 1">{{d.attrName}}</span></div>
      </cell-box>
      <cell-box>
        <div class="WD30">季节</div>
        <div class="WD70"><span v-for="(d,r) in datas.attributes[5].attrList" :key="r" v-if="d.isSel === 1">{{d.attrName}}</span></div>
      </cell-box>
      <cell-box>
        <div class="WD30">安全等级</div>
        <div class="wd70"><span  v-for="(d,r) in datas.attributes[6].attrList" :key="r" v-if="d.isSel === 1">{{d.attrName}}</span></div>
      </cell-box>
      <cell-box>
        <div class="WD30">年龄段</div>
        <div class="wd70"><span>{{datas.ageGroupName}}</span></div>
      </cell-box>
      <cell-box>
        <div class="WD30">尺码</div>
        <div class="WD70"><span v-for="(d,r) in datas.skuSize" :key="r">{{`${d.sizeName}&nbsp;`}}</span></div>
      </cell-box>
      <cell-box>
        <div class="WD30">颜色</div>
        <div class="WD70"><span v-for="(d,r) in datas.skuColor" :key="r">{{`${d.colorName}&nbsp;`}}</span></div>
      </cell-box>
    </group>
  </div>
</template>

<script>
import { Group, PopupHeader, CellBox } from 'vux';

export default {
  name: 'Parameter',
  props: {
    datas: Object,
    default() {
      return {};
    },
  },
  components: {
    Group,
    CellBox,
    PopupHeader,
  },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style lang="scss">
  .parameter{
    .weui-cells{
      margin-top: 0;
    }
  }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .parameter{
    .WD30{
      width: 90px;
      margin-left: 10px;
    }
    .WD70{
      width: 240px;
      text-align: left;
      margin-right: 10px;
      white-space: pre-wrap;
      word-wrap: break-word;
    }
  }
</style>
