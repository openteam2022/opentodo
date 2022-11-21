import http from '../utils/request.js'

// 添加任务
export function addPlan(data){
    return http.post('item/add',data);
}
// 添加子任务
export function addTask(data){
    return http.post('task/add',data);
}

// 获取任务
export function getPlan(data){
    return http.post('item/get',data);
}

// 完成任务
export function finishPlan(data){
    return http.post('item/finish',data);
}

// 软删除任务
export function removePlan(data){
    return http.post('item/remove',data);
}


// 完成子任务
export function finishPlanItem(data){
    return http.post('task/finish',data);
}

// 软删除子任务
export function removePlanItem(data){
    return http.post('task/remove',data);
}

