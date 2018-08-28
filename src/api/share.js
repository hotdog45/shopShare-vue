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
// 登录
export function getLogin(params) {
  return request.post('user/UserLogin', params);
}
