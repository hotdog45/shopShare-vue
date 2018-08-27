import Vue from 'vue';
import Router from 'vue-router';

const asyncImport = file => () => import(`@/views/${file}`);

Vue.use(Router);
export const constantRouterMap = [
  { path: '', component: asyncImport('Home') },
  { path: '/shares', component: asyncImport('Shares') },
  { path: '/weixin', component: asyncImport('Weixin') },
  { path: '/linkshares', component: asyncImport('LinkShares') },
  { path: '/pay', component: asyncImport('Pay/pay') },
  { path: '/paysucc', component: asyncImport('Pay/paysucc') },
  { path: '/myorder', component: asyncImport('Pay/MyOrder') },
  { path: '/noadress', component: asyncImport('Pay/NoAdress') },
  { path: '/addadress', component: asyncImport('Pay/AddAddress') },
  { path: '/addresslist', component: asyncImport('Pay/AddressList') },
  { path: '/my', component: asyncImport('My/My') },
  { path: '/login', component: asyncImport('user/Login') },
  { path: '/confirmorder', component: asyncImport('order/ConfirmOrder') },
  { path: '/orderdetail', component: asyncImport('order/OrderDetail') },
  { path: '/register', component: asyncImport('user/register') },
];
export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap,
});

export const asyncRouterMap = [
];
