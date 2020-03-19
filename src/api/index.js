/**
 * Created by Administrator on 2020/3/16 0016.
 */
/*
 与后台交互模块
 */
import ajax from './ajax'
const BASE_URL = '/api'
/**
 * 获取地址信息 ( 根据经纬度串 )
 */
export const reqAddress = geohash => ajax(BASE_URL+'/position/' + geohash)
/**
 * 获取 msite 页面食品分类列表
 */
export const reqCategorys = () => ajax(BASE_URL+'/index_category')
/**
 * 获取 msite 商铺列表 ( 根据经纬度 )
 */
export const reqShops = ({latitude, longitude}) => ajax(BASE_URL+'/shops', {latitude,
  longitude})
/**
 * 账号密码登录
 */

/**
 * 获取短信验证码
 */

/**
 * 手机号验证码登录
 */

/**
 * 获取用户信息 ( 根据会话 )
 */

/**
 * 请求登出
 */

