<template>
	<view class="set" :style="{background:state.theme.appbgcolor}">
		<view class="set-header">
			<StatusBar :bgColor="state.theme.appbgcolor"></StatusBar>
			<Header type="title" title="设置" :bgColor="state.theme.appbgcolor" :fontColor="state.theme.fontcolordeep"></Header>
		</view>
		<view class="out-login" @click="outLogin">
			退出登录
		</view>
	</view>
</template>

<script setup lang="ts">
	import StatusBar from '@/components/common/statusBar/statusBar.vue'
	import Header from '@/components/common/header/header.vue'
	import { useStore } from 'vuex'
	import { goUrl, showInfo } from '../../utils/base';
	const { state,commit } = useStore()
	const outLogin = ()=>{
		uni.removeStorage({
			key: 'opentodo',
			success: function (res) {
				console.log('success');
			}
		});
		commit('setUserInfo',{});
		showInfo('退出成功')
		goUrl('/pages/login/login')
	}
</script>

<style lang="scss" scoped>
	.set{
		min-height: 100vh;
		.out-login{
			position: absolute;
			left: 75rpx;
			bottom: 100rpx;
			width: 600rpx;
			height: 70rpx;
			line-height: 70rpx;
			text-align: center;
			background: #fc5531;
			color: #fff;
			border-radius: 35rpx;
			font-size: 28rpx;
			box-shadow: 0px 2px 5px #999;
		}
	}
</style>
