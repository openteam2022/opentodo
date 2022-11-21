import http from '@/utils/request.js'

//登录
export function login(data){
  return http.post('login/login',data)
}

//注册
export function register(data){
  return http.post('login/register',data)
}