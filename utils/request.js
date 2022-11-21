// 配置文件引入请求网址
import {HTTP_BASE_URL} from '@/config/app.js'
import { showInfo } from '@/utils/base.js'
/**
 * @param url     :String 请求路径
 * @param method  :String 请求方式
 * @param data    :Object 请求数据
 */
function request (url,method,data) {
  
  //这里根据自己的需要，做一些拦截，登录状态判断等
  
  // code{.......}
  
  // 发送请求
  return new Promise((resolve,reject)=>{
    uni.request({
      url: HTTP_BASE_URL + url,
      data: data || {},
      method: method || 'GET',
	  header: {token: 'openplan'},
      success: (res)=>{
        // 根据后端约定的返回状态码，进行对应业务处理
        let code = res.data.status;
        switch(code){
          case 0:
            showInfo('网络错误~');
			resolve(false)
            break;
          case 1:
            resolve(res.data.result);
            break;
        }
      },
      fail: (res) => {
        reject(false)
      }
    })
  })
}
// 这个是看crmeb的源码,把request方法进行二次封装，把不同的请求方式赋值给了http对象的属性，
 //后续就可以利用http.get或者http.post直接调用
const http = {};

['options', 'get', 'post', 'put', 'head', 'delete', 'trace', 'connect'].forEach((method) => {
  http[method] = (url, data) => request(url, method, data)
});

export default http;