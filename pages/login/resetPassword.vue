<template>
	<view class="container">
		<!-- 状态栏 -->
		<view class="custom" :style="{height:statusBarHeight+'px'}"></view>
		<view class="back" :style="{position:'absolute',top:statusBarHeight+'px',left:0}">
			<image src="../../static/imgs/back.png" mode="" @click="goBack()"></image>
		</view>
		<!-- 登录内容框 -->
		<view class="login-box">
			<view class="login-img">
				<image src="../../static/imgs/logo.png" mode=""></image>
				<view class="login-appname">
					<text>海贝记账重置密码</text>
					<text class="small-text">请填写信息重置密码</text>
				</view>
			</view>
			<view class="login-input">
				<view class="login-user">
					<view class="login-text">
						手机号
					</view>
					<view class="login-username">
						<input type="text" v-model="mobile" placeholder="请输入手机号"/>
					</view>
				</view>
				<view class="login-password">
					<view class="">
						<view class="login-text">
							验证码
						</view>
						<view class="login-username">
							<input type="number" v-model="code" placeholder="请输入验证码"/>
						</view>
					</view>
					<view class="login-code">
						<button :disabled="disabled" @click="getCode()">{{codeText}}</button>
					</view>
				</view>
				<view class="login-user">
					<view class="login-text">
						新密码
					</view>
					<view class="login-username">
						<input type="password" v-model="password"  placeholder="请设置登录密码"/>
					</view>
				</view>
				<view class="login-user">
					<view class="login-text">
						确认新密码
					</view>
					<view class="login-username">
						<input type="password" v-model="testPassword"  placeholder="请设置登录密码"/>
					</view>
				</view>
			</view>
			<view class="login-btn" @click="resetPassword">
				<text>立即提交</text>
			</view>
		</view>
	</view>
</template>

<script>
	var statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
	var app = getApp();
	import {getCode,checkMobile,checkNull,checkPassword,checkInt} from "../../components/shield.js";
	import {goUrl,goTabbarUrl,showInfo,goReturn} from '../../components/base.js';
	export default {
		data() {   
			return {
				statusBarHeight:statusBarHeight,
				mobile:'',//手机号
				code:'',//验证码
				password:'',//密码
				testPassword:'',//确认密码
				code:'',
				codeText:'验证码',
				codeNumber:'',
				seconds:120,
				disabled:false
			}
		},
		methods: {
			// 返回上一页
			goBack(){
				goReturn();
			},
			// 注册
			resetPassword(){
				const mobile = this.mobile;
				const code = this.code;
				const codeNumber = this.codeNumber;
				const password = this.password;
				const testPassword = this.testPassword;
				// 检验手机号是否为空
				if(!checkNull(mobile,'手机号不能为空')){return;}
				// 检验手机号格式是否正确
				if(!checkMobile(mobile,'手机号格式不正确')){return;}
				// 检验验证码是否为空
				// if(!checkNull(code,'验证码不能为空')){return;}
				// 检验验证码格式是否正确
				// if(!checkInt(code,'验证码格式不正确')){return;}
				// 检验密码是否为空
				if(!checkNull(password,"密码不能为空")){return;}
				// 检验密码格式是否正确
				if(!checkPassword(password,"密码格式不正确")){return;}
				// 检验确认密码是否为空
				if(!checkNull(testPassword,"确认密码不能为空")){return;}
				// 检验验证码是否正确
				// if(code != codeNumber){showInfo("验证码错误");return;}
				// 判断两次密码是否一样
				if(password != testPassword){
					showInfo("两次密码不一致");
				}else{
					uni.request({
						url:app.globalData.http+"bill/login/resetPassword",
						data:{
							phone:mobile,
							password:password,
							h:'heli'
						},
						method:"POST",
						success(res) {
							const message = res.data.message;
							switch(res.data.status){
								case 0:
									showInfo(message);
									break;
								case 1:
									showInfo(message);
									// 跳转到首页
									setTimeout(()=>{
										goUrl('../login/login');
									},1500)
									break;
							}
						},
						fail(res){
							console.log(res)
						}
					})
				}
			},
			// 获取验证码
			getCode(){
				var that = this;
				// 检验手机号是否为空
				if(!checkNull(that.mobile,"手机号不能为空")){return;}
				// 检验手机号格式是否正确
				if(!checkMobile(that.mobile,"手机号格式不正确")){return;}
				uni.request({
					url:app.globalData.http+'bill/login/checkphone',
					data:{
						h:'heli',
						phone:that.mobile
					},
					method:'POST',
					success(res) {
						const message = res.data.message;
						switch(res.data.status){
							case 0:
								showInfo(message);
								break;
							case 1:
								showInfo(message);
								// 获取验证码
								if(!getCode(that)){
									return false;
								}
								break;
						}
					}
				})
			}
		}
	}
</script>

<style>
	page{
		background: #ffffff;
	}
	.custom{
		width: 750rpx;
		background: #ffffff;
		position: absolute;
		top: 0;
		left: 0;
		position: fixed;
		z-index: 9;
	}
	.container{
		width: 100vw;
		height: 100vh;
		display: flex;
		align-items: center;
	}
	.back{
		height: 88rpx;
		width: 690rpx;
		padding: 0 30rpx;
		position: fixed;
	}
	.back image{
		width: 50rpx;
		height: 50rpx;
		margin-top: 20rpx;
	}
	.login-box{
		width: 610rpx;
		height:75vh;
		padding: 0 70rpx;
	}
	.login-img{
		width: 590rpx;
		padding: 0 10rpx;
		height: 150rpx;
		text-align: center;
		display: flex;
		justify-content: flex-start;
	}
	.login-img image{
		width: 110rpx;
		height: 110rpx;
		border-radius: 15rpx;
		/* box-shadow: 0rpx 1rpx 15rpx -2rpx #bbbbbb; */
	}
	.login-appname{
		padding-left: 15rpx;
		font-weight: bold;
		font-size: 40rpx;
		color: #333333;
	}
	.login-appname text{
		display: block;
		text-align: left;
	}
	.login-input{
		padding: 70rpx 0;
	}
	.login-user,.login-password{
		padding: 20rpx 10rpx;
		border-bottom: 1rpx #dddddd solid;
		margin-bottom: 10rpx;
	}
	.login-password{
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
	}
	.login-text{
		font-size: 26rpx;
		color: #888888;
		height: 40rpx;
	}
	.small-text{
		font-size: 30rpx;
		color: #888888;
		line-height: 50rpx;
	}
	input{
		font-size: 30rpx;
		color: #000000;
		margin-top: 10rpx;
	}
	.login-btn text{
		display: block;
		width: 610rpx;
		height: 75rpx;
		line-height: 75rpx;
		background: #56c395;
		/* background: #1a76fd; */
		border-radius: 10rpx;
		text-align: center;
		color: #ffffff;
		font-size: 30rpx;
		box-shadow: 0rpx 1rpx 15rpx -2rpx #bbbbbb;
	}
	.login-btn text:active{
		background: #4daf84;
		box-shadow: none;
	}
	.login-code{
		font-size: 26rpx;
		color: #ffffff;
		text-align: center;
		background: #56c395;
		width: 150rpx;
		line-height: 50rpx;
		height: 50rpx;
		border-radius: 30rpx;
	}
	.login-code button{
		font-size: 26rpx;
		color: #ffffff;
		text-align: center;
		background: #56c395;
		width: 150rpx;
		line-height: 50rpx;
		height: 50rpx;
		border-radius: 30rpx;
	}
	
</style>
