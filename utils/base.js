//基础方法/公共方法/复用方法


// 返回到上一页

function goReturn(){
	uni.navigateBack({
		delita:1
	})
}
// 跳转到新页面
function goUrl(url){
	uni.navigateTo({
		url:url
	})
}
// 跳转到tabbar页面
function goTabbarUrl(url){
	uni.switchTab({
		url:url
	})
}
// 信息提示框
function showInfo(message){
	uni.showToast({
		title:message,
		icon:'none',
	})
}
export{
	goUrl,
	goTabbarUrl,
	goReturn,
	showInfo,
}