import http from '@/utils/request.js'



// 获取数据
export function getData(data){
    return http.post('data/get',data);
}

// 更新天数
export function updateDay(data){
    return http.post('data/updateDay',data);
}

// 更新完成记录
export function updateFinish(data){
    return http.post('data/updateFinish',data);
}

// 更新添加记录
export function updateTotal(data){
    return http.post('data/updateTotal',data);
}

// 更新最新记录时间
export function updateTime(data){
    return http.post('data/updateTime',data);
}
