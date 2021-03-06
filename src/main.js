// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import { TransferDom } from 'vux';
import FastClick from 'fastclick';
// import VConsole from 'vconsole';

import './styles/index.scss';

import App from './App';
import router from './router';


// no need store for mobile for now.
// import store from './store';
import * as filters from './filters'; // global filters
import { install } from './components/index'; // all global components
import Icon from './components/Icon';

import './utils/bridge';
import './permission'; // permission control
import { Stepper } from 'vant';
import { Popup } from 'vant';
import {Tab, Tabs} from 'vant';
import { Row, Col } from 'vant';
import { Toast } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
Vue.use(Toast);
Vue.use(Tabbar).use(TabbarItem);
Vue.use(Row).use(Col);
Vue.use(Tab).use(Tabs);

Vue.use(Popup);
Vue.use(Stepper);

Vue.config.productionTip = false;

Vue.directive('transfer-dom', TransferDom);

// register components
install(Vue);
// svg icon
Icon.install();

// register global utility filters.
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});

// vsconsole
// const DEBUG = false;
// false 绿色的按钮消失
/* if (DEBUG) {
 const vconsole = new VConsole();
 } */

FastClick.attach(document.body);

if (!window.bridge) {
  // 混合页面初始化对象(主要是安卓)
  window.bridge = {};
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  components: { App },
  template: '<App/>',
});
