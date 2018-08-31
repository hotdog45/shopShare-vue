import Vue from 'vue';
import Router from 'vue-router';
// import Tab from '@views/My/Tab';

const asyncImport = file => () => import(`@/views/${file}`);

Vue.use(Router);
export const constantRouterMap = [{
  path: '/',
  name: 'Tab',
  component: asyncImport('My/Tab') ,
  redirect:'/my',//从定向到首页
  children: [
    { path: '', component: asyncImport('Home') },
    { path: '/myorder',component: asyncImport('My/MyOrder') },
    { path: '/my', component: asyncImport('My/My') },
    { path: '/my', component: asyncImport('My/My') },
    { path: '/my', component: asyncImport('My/My') },
  ]},
  { path: '/shares', component: asyncImport('Shares') },
  { path: '/weixin', component: asyncImport('Weixin') },
  { path: '/linkshares', component: asyncImport('LinkShares') },
  { path: '/pay', component: asyncImport('Pay/pay') },
  { path: '/paysucc', component: asyncImport('Pay/paysucc') },
  { path: '/noadress', component: asyncImport('Pay/NoAdress') },
  { path: '/addadress', component: asyncImport('Pay/AddAddress') },
  { path: '/addresslist', component: asyncImport('Pay/AddressList') },
  { path: '/login', component: asyncImport('user/Login') },
  { path: '/confirmorder', component: asyncImport('order/ConfirmOrder') },
  { path: '/orderdetail', component: asyncImport('order/OrderDetail') },
  { path: '/register', component: asyncImport('user/register') },
  { path: '/myorder', component: asyncImport('My/MyOrder') },

];
export default new Router({
  // mode: 'history', // require service suppor
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap,
});

export const asyncRouterMap = [
];
