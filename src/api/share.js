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
// 买家订单付款
export function getBuyerOrderPay(params) {
  return request.post('order/BuyerOrderPay', params);
}

//  永久性删除订单
export function getBuyerOrderDelete(params) {
  return request.post('order/BuyerOrderDelete', params);
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



// 登录
export function getLogin(params) {
  return request.post('user/UserLogin', params);
}


