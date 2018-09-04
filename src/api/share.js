import request from './request';

export function getShareList(params) {
  return request.post('product/ProductDetail', params);
}
// 红包
export function getShareCoupon(params) {
  return request.post('coupon/listCanCoupon', params);
}
// 手机验证码
export function getPhoneCode(params) {
  return request.post('user/GetVerSmsCode', params);
}
// 分享商品保存
export function getShareSave(params) {
  return request.post('buyer/share/save', params);
}
// 查看分享QQ 手机 密码
export function getShareSecret(params) {
  return request.post('buyer/share/detail', params);
}
// 注册
export function getRegister(params) {
  return request.post('user/UserRegister', params);
}

// 我的订单
export function getBuyerOrderList(params) {
  return request.post('order/BuyerOrderList', params);
}

// 订单详情
export function getOrderDetail(params) {
  return request.post('order/BuyerOrderDetail', params);
}

// 买家订单付款
export function getBuyerOrderPay(params) {
  return request.post('order/BuyerOrderDetail', params);
}

//  删除订单
export function getBuyerOrderDelete(params) {
  return request.post('order/BuyerOrderDel', params);
}
// 订单确认收货
export function getBuyerOrderReceipt(params) {
  return request.post('order/BuyerOrderReceipt', params);
}
// 订单退款取消
export function getBuyerOrderRefundCancel(params) {
  return request.post('order/BuyerOrderRefundCancel', params);
}
// 买家取消订单
export function getBuyerOrderCancel(params) {
  return request.post('order/BuyerOrderCancel', params);
}

// 添加收藏商品
export function getAddFollowProduct(params) {
  return request.post('follow/AddFollowProduct', params);
}

//取消收藏商品
export function getDelFollowProduct(params) {
  return request.post('follow/DelFollowProduct', params);
}

//添加购物车
export function getCartAdd(params) {
  return request.post('cart/CartAdd', params);
}


// 登录
export function getLogin(params) {
  return request.post('user/UserLogin', params);
}
// 地址列表
export function getAddressList(params) {
  return request.post('user/AddressList', params);
}
// 增加地址
export function getAddAddress(params) {
  return request.post('user/AddressAdd', params);
}

//更新地址
export function getAddressMod(params) {
  return request.post('user/AddressMod', params);
}

//更新地址
export function getAddressDel(params) {
  return request.post('user/AddressDel', params);
}
//添加订单
export function getBuyerOrderAdd(params) {
  return request.post('user/BuyerOrderAdd', params);
}

//收货人更新默认地址
export function getAddressDefault(params) {
  return request.post('user/AddressDefault', params);
}

//获取店铺信息
export function getStoreIntro(params) {
  return request.post('user/AddressDefault', params);
}
