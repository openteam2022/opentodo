<template>
	<view class="container">
		<!-- 状态栏 -->
		<StatusBar></StatusBar>
		<!-- 登录内容框 -->
		<view class="login-box">
			<view class="login-img">
				<image src="../../static/logo.png" mode=""></image>
			</view>
			<view class="login-input">
				<view class="login-user">
					<view class="login-text">
						账号
					</view>
					<view class="login-username">
						<input type="text" v-model="name" maxlength="12" placeholder="中文或字母或中文+字母"/>
					</view>
				</view>
				<view class="login-password">
					<view class="login-text">
						密码
					</view>
					<view class="login-username">
						<input type="password" v-model="password" placeholder="8-16位字母+数字+特殊符号!@#$%"/>
					</view>
				</view>
			</view>
			<view class="login-btn" >
				<text @click="goLogin()">立即登录</text>
			</view>
			<view class="login-more">
				<text></text><text @click="goRegister">注册</text>
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
	import StatusBar from '@/components/common/statusBar/statusBar.vue'
	import {checkNull,checkStrEng,checkSymbol,checkPassword} from '@/utils/shield.js'
	import {showInfo,goTabbarUrl,goUrl} from '@/utils/base.js'
	import { login } from '@/api/login.js'
	import {ref} from 'vue'
	import type {Ref} from 'vue'
	import { useStore } from 'vuex'
	
	interface dataType {
		name: string,
		password: string
	}
	
	const { state,commit } = useStore()
	
	const name:Ref<string> = ref('')
	const password:Ref<string> = ref('')
	
	const goRegister = ()=>{
		goUrl('/pages/login/register')
	}
	
	const goLogin = ()=>{
		// 检查账号是否为空
		if(!checkNull(name.value,'账号不能为空')){return;}
		// 检查账号格式是否正确
		if(!checkStrEng(name.value,"账号格式不正确")){return;}
		// 检查账号不能包含特殊符号
		if(!checkSymbol(name.value,"账号格式不正确，包含非法字符")){return;}
		// 检查密码是否为空
		if(!checkNull(password.value,'密码不能为空')){return;}
		// 检查密码格式是否正确
		if(!checkPassword(password.value,'密码格式不正确')){return;}
		
		let data:dataType= {
			name:name.value,
			password:password.value,
		};

		login(data).then((res:any)=>{
			if(res){
				showInfo("登录成功");
				commit('setUserInfo',res)
				//保存用户信息到本地
				uni.setStorage({
					key:"opentodo",
					data:res,
					success: () => {
						console.log('success')
					}
				})
				//跳转到首页
				setTimeout(()=>{
					goTabbarUrl("../index/index");
				},1500)
			}
		})
	}
	
	
</script>

<style>
	page{
		background: #ffffff;
		height: 100vh;
		width: 100vw;
		overflow: hidden;
	}
	.custom{
		width:100vw;
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
		overflow: hidden;
	}
	.back{
		height: 88rpx;
		width: 690rpx;
		padding: 0 30rpx;
		position: fixed;
		text-align: right;
	}
	.back image{
		width: 50rpx;
		height: 50rpx;
		margin-top: 20rpx;
	}
	.login-box{
		width: 100vw;
		height:75vh;
		box-sizing: border-box;
		padding: 0 70rpx;
	}
	.login-img{
		width: 610rpx;
		height: 170rpx;
		text-align: center;
	}
	.login-img image{
		width: 140rpx;
		height: 140rpx;
		border-radius: 15rpx;
		/* box-shadow: 0rpx 1rpx 15rpx -2rpx #bbbbbb; */
	}
	.login-input{
		padding: 70rpx 0;
	}
	.login-user,.login-password{
		padding: 20rpx 10rpx;
		border-bottom: 1rpx #dddddd solid;
		margin-bottom: 10rpx;
	}
	.login-text{
		font-size: 28rpx;
		color: #888888;
		height: 40rpx;
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
		background: #fc5531;
		border-radius: 10rpx;
		text-align: center;
		color: #ffffff;
		font-size: 30rpx;
		box-shadow: 0rpx 1rpx 15rpx -2rpx #bbbbbb;
	}
	.login-btn text:active{
		opacity: 0.8;
		box-shadow: none;
	}
	.login-mobile{
		font-size: 26rpx;
		color: #555555;
		text-align: right;
	}
	.login-more{
		height: 120rpx;
		padding: 0 10rpx;
		line-height: 120rpx;
		font-size: 26rpx;
		color: #555555;
		display: flex;
		justify-content: space-between;
	}
</style>
