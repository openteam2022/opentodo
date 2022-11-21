import http from '@/utils/request.js'

// 添加待办
export function addTodo(data){
    return http.post('todo/add',data);
}


// 获取待办
export function getTodoList(data){
    return http.post('todo/get',data);
}

// 完成待办
export function finishTodo(data){
    return http.post('todo/finish',data);
}

// 软删除待办
export function removeTodo(data){
    return http.post('todo/remove',data);
}
