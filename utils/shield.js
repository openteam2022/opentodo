// 安全检测类

// 判断用户或密码是否为空，为空则提示，并停止运行
// name 验证的值 message提示信息
// return 布尔值，使用时if判断返回值,决定是否中断return false;
function checkNull(name,message){
	if(name == '' || name == undefined || name == null || name == 0 ){
		uni.showToast({
			title:message,
			icon:'none'
		})
		return false;
	}else{
		return true;
	}
}
//检查字符串是否是中文
// value 检查值 message 提示信息
// return 布尔值，使用时if判断返回值,决定是否中断return false;
function checkStr(value,message){
	const checkVaule = /^[\u4e00-\u9fa5]*$/;
	if(!checkVaule.test(value)){
		uni.showToast({
			title:message,
			icon:'none'
		})
		return false;
	}else{
	    return true;
	}
}
//检查字符串是否是中文或英文或中文+英文,没有值则不判断
// value 检查值 message 提示信息
// return 布尔值，使用时if判断返回值,决定是否中断return false;
function checkStrEng(value,message){
	const checkVaule = /^[\u4e00-\u9fa5a-zA-Z]*$/;
	if(!checkVaule.test(value) && value !== ''){
		uni.showToast({
			title:message,
			icon:'none'
		})
		return false;
	}else{
	    return true;
	}
}
//检查字符串是否是中文或英文或中文+英文+数字，没有值则不判断
// value 检查值 message 提示信息
// return 布尔值，使用时if判断返回值,决定是否中断return false;
function checkStrEngInt(value,message){
	const checkVaule = /^[\u4e00-\u9fa5a-zA-Z0-9]*$/;
	if(!checkVaule.test(value) && value !== ''){
		uni.showToast({
			title:message,
			icon:'none'
		})
		return false;
	}else{
	    return true;
	}
}
//检查字符串是否是英文或数字，没有值则不判断
// value 检查值 message 提示信息
// return 布尔值，使用时if判断返回值,决定是否中断return false;
function checkEngAndInt(value,message){
	const checkVaule = /^[a-zA-Z0-9]*$/;
	if(!checkVaule.test(value) && value !== ''){
		uni.showToast({
			title:message,
			icon:'none'
		})
		return false;
	}else{
	    return true;
	}
}
//检查字符串是否是英文开头，数字，英文或数字+英文例如微信号,没有值则不判断
// value 检查值 message 提示信息
// return 布尔值，使用时if判断返回值,决定是否中断return false;
function checkEngInt(value,message){
	const checkVaule = /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/;//6至20位，以字母开头，字母，数字，减号，下划线
	if(!checkVaule.test(value) && value !== ''){
		uni.showToast({
			title:message,
			icon:'none'
		})
		return false;
	}else{
	    return true;
	}
}
//检查电话号码座机
// tel 电话号码 message 提示信息 没有值则不调用
// return 布尔值，使用时if判断返回值,决定是否中断return false;
function checkTelphone(tel,message){
	const checkTel = /^\d{3}-\d{8}|\d{4}-\d{7,8}/;
	if(!checkTel.test(tel) && tel !== ''){
		uni.showToast({
			title:message,
			icon:'none'
		})
		return false;
	}else{
	    return true;
	}
}
//检查字符串是否有特殊符号（是返回false，否返回true）
// value 检查值 message 提示信息
// return 布尔值，使用时if判断返回值,决定是否中断return false;
function checkSymbol(value,message){
	const checkVaule = /[`~!@#$^&*()《》=|{}':;',\\\[\]\.<>\/?~！@#￥……&*（）——|{}【】'；：""'。，、？\s]/g;
	if(checkVaule.test(value)){
		uni.showToast({
			title:message,
			icon:'none'
		})
		return false;
	}else{
	    return true;
	}
}
//检查密码是否格式正确(8-16位+字母+特殊符号+数字)
// password 密码 message 提示信息
// return 布尔值，使用时if判断返回值,决定是否中断return false;
function checkPassword(password,message){
	const checkPassword = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[~!@#$%^&*])[\da-zA-Z~!@#$%^&*]{8,16}$/;
	if(!checkPassword.test(password)){
		uni.showToast({
			title:message,
			icon:'none'
		})
		return false;
	}else{
	    return true;
	}
}
// 检测文本
function checkText(text,message){
	const checkText = /^[\u4e00-\u9fa5a-zA-Z0-9,.!?:，。？！]*$/;
	if(!checkText.test(text)){
		uni.showToast({
			title:message,
			icon:'none'
		})
		return false;
	}else{
	    return true;
	}
}
// 检查手机号格式（11位）没有值则不调用
// mobile 手机号
// return 布尔值，使用时if判断返回值,决定是否中断return false;
function checkMobile(mobile,message){
	const checkMobile = /^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$/;
	if(!checkMobile.test(mobile) && mobile !== ''){
		uni.showToast({
			title:message,
			icon:'none'
		})
		return false;
	}else{
		return true;
	}
}
// 检查邮箱格式（
// email 邮箱
// return 布尔值，使用时if判断返回值,决定是否中断return false;
function checkEmail(email){
	const checkEmail = /^\w+([  -+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/g;
	if(!checkEmail.test(email) && email !== ''){
		uni.showToast({
			title:"请输入正确邮箱",
			icon:'none'
		})
		return false;
	}else{
		return true;
	}
}
// 检查整数格式（
// number 整数值
// return 布尔值，使用时if判断返回值,决定是否中断return false;
function checkInt(number,message){
	const checkNumber = /^[0-9]*$/g;
	if(!checkNumber.test(number)){
		uni.showToast({
			title:message,
			icon:'none'
		})
		return false;
	}else{
		return true;
	}
}
// 自定义填写值，填写正则表达式，填写提示信息
// value 检查值，format 正则表达式,message提示信息
// return 布尔值，使用时if判断返回值,决定是否中断return false;
function checkFormat(value,format,message){
	const checkformat = format;
	if(!checkformat.test(value)){
		uni.showToast({
			title:message,
			icon:'none'
		})
		return false;
	}else{
	    return true;
	}
	
}

export{
	checkNull,
	checkPassword,
	checkMobile,
	checkFormat,
	checkStrEng,
	checkSymbol,
	checkTelphone,
	checkInt,
	checkEngInt,
	checkStrEngInt,
	checkEmail,
	checkEngAndInt,
	checkText
}