import request from './request';

export function getShopList(params) {
  return request.post('store/HomePage', params);
}
// 红包
export function getShareCoupon(params) {
  return request.post('coupon/listCanCoupon', params);
}



