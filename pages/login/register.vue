<template>
	<view class="container">
		<!-- 状态栏 -->
		<StatusBar></StatusBar>
		<view class="back" >
			<uni-icons class="icon" type="left" size="23" @click="goBack()"></uni-icons>
		</view>
		<!-- 登录内容框 -->
		<view class="login-box">
			<view class="login-img">
				<image src="../../static/logo.png" mode=""></image>
				<view class="login-appname">
					<text>opentodo欢迎您</text>
					<text class="small-text">珍惜每一次相遇</text>
				</view>
			</view>
			<view class="login-input">
				<view class="login-user">
					<view class="login-text">
						账号
					</view>
					<view class="login-username">
						<input type="text" v-model="name" placeholder="中文或字母或中文+字母"/>
					</view>
				</view>
				<view class="login-user">
					<view class="login-text">
						密码
					</view>
					<view class="login-username">
						<input type="password" v-model="password"  placeholder="8-16位字母+数字+特殊符号!@#$%"/>
					</view>
				</view>
			</view>
			<view class="login-btn" @click="goRegister()">
				<text>立即注册</text>
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
	import StatusBar from '@/components/common/statusBar/statusBar.vue'
	// var statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
	import {checkNull,checkPassword,checkStrEngInt,checkString} from "@/utils/shield.js";
	import {goUrl,goTabbarUrl,showInfo,goReturn} from '@/utils/base.js';
	import { ref } from 'vue'
	import type { Ref } from 'vue'
	import { register } from '@/api/login.js'
	
	const name:Ref<string> = ref('')
	const password:Ref<string> = ref('')
	
	// 注册
	const goRegister = ()=>{
		// 检验账号是否为空
		if(!checkNull(name.value,'账号不能为空')){return;}
		// 检验手机号是否为空
		if(!checkStrEngInt(name.value,'账号格式不正确')){return;}
		// 检验密码不能为空
		if(!checkNull(password.value,'密码不能为空')){return;}
		// 检验密码格式是否正确
		if(!checkPassword(password.value,"密码格式不正确")){return;}
		
		let data = {
			name: name.value,
			password: password.value
		}
		
		register(data).then((res:any)=>{
			console.log(res)
		})
	}
	
	const goBack = ()=>{
		goReturn()
	}
	
</script>

<style lang="scss" scoped>
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
		position: absolute;
		top: var(--status-bar-height);
		line-height: 88rpx;
		width: 690rpx;
		padding: 0 30rpx;
		position: fixed;
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
		background: #fc5531;
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
