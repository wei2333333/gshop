/**
 * Created by Administrator on 2020/3/16 0016.
 */
import axios from 'axios'
export default function ajax(url = '', data = {}, type = 'GET') {
  return new Promise(function (resolve, reject) {
    let promise
    if (type === 'GET') {
// 准备 url ，将url最终拼接成http://localhost:8080?username='sss'&pwd=1234的形式
      let dataStr = '' // 数据拼接字符串
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))//去除最后一个&符号
        url = url + '?' + dataStr
      }
// 发送 get 请求
      promise = axios.get(url)
    } else {
// 发送 post 请求
      promise = axios.post(url, data)
    }
    promise.then(response => {
      resolve(response.data)
    })
      .catch(error => {
        reject(error)
      })
  })
}
