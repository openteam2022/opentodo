<template>
	<view class="me" :style="{background: state.theme.appbgcolor}">
		<StatusBar :bgColor="state.theme.appbgcolor"></StatusBar>
		<view class="header">
			<view class="header-logo" >
				<view class="logo" >
					<image :src="http+ userInfo.img" mode="" v-if="userInfo.img"></image>
					<image src="@/static/logo.png" mode="" v-else></image>
					<text :style="{color:state.theme.fontcolordeep}">{{userInfo.name}}</text>
				</view>
			</view>
		</view>
		<view class="view" :style="{background: state.theme.appboxcolor}">
			<view class="view-item" >
				<view class="view-item-title" :style="{color:state.theme.fontcolordeep}">
					{{state.data.add_day}}
				</view>
				<view class="view-item-tip">
					累计(天)
				</view>
			</view>
			<view class="view-item">
				<view class="view-item-title" :style="{color:state.theme.fontcolordeep}">
					{{state.data.total_number}}
				</view>
				<view class="view-item-tip">
					记录(次)
				</view>
			</view>
			<view class="view-item">
				<view class="view-item-title" :style="{color:state.theme.fontcolordeep}">
					{{state.data.finish_number}}
				</view>
				<view class="view-item-tip">
					已完成
				</view>
			</view>
		</view>
		<view class="list" :style="{background: state.theme.appboxcolor}">
			<view class="list-item" @click="goHistory()">
				<view class="item-left">
					<text :style="{color:state.theme.fontcolordeep}">历史记录</text>
				</view>
				<view class="item-right">
					<uni-icons color="#ccc" type="right" size="18"></uni-icons>
				</view>
			</view>
		</view>
		<view class="list" :style="{background: state.theme.appboxcolor}">
			<view class="list-item" @click="onChangeTheme()">
				<view class="item-left">
					<text :style="{color:state.theme.fontcolordeep}">主题</text>
				</view>
				<view class="item-right">
					<uni-icons color="#ccc" type="right" size="18"></uni-icons>
				</view>
			</view>
		</view>
		<view class="list" :style="{background: state.theme.appboxcolor}">
			<view class="list-item" @click="goSet()">
				<view class="item-left">
					<text :style="{color:state.theme.fontcolordeep}">设置</text>
				</view>
				<view class="item-right">
					<uni-icons color="#ccc" type="right" size="18"></uni-icons>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
	import { reactive, ref } from 'vue'
	import {useStore} from 'vuex'
	import StatusBar from '@/components/common/statusBar/statusBar.vue'
	
	interface userType {
		name: string,
		id: number,
		img?:string
	}
	const name = ref('')
	const img = ref('')
	const http = ref('')
	const totalData = reactive({})
	
	const { state,commit } = useStore()
	
	const userInfo:userType = state.userInfo;
	
	const onChangeTheme = ()=>{
		commit('changeTheme');
		uni.$emit('changeTheme')
	}
	const goHistory = ()=>{
		uni.navigateTo({
			url: '/pages/history/history'
		})
	}
	
	const goSet = ()=>{
		uni.navigateTo({
			url: '/pages/set/set'
		})
	}
	
	
	// export default {
		
	// 	data() {
	// 		return {
	// 			name:'',
	// 			img:'',
	// 			http:'',
	// 			totalData: this.$store.state.totalData,
	// 		}
	// 	},
	// 	computed:{
	// 		listenTotalData(){
	// 			return this.$store.state.totalData
	// 		}
	// 	},
	// 	watch: {
	// 		listenTotalData(n,o){
	// 			this.totalData = n
	// 		}
	// 	},
	// 	mounted() {
	// 		var that = this;
	// 		that.getData();
	// 		uni.$on('loadMe',function(){
	// 			that.name = app.globalData.userInfo.name;
	// 			that.img = app.globalData.userInfo.user_img;
	// 		})
	// 		uni.$on('removeMe',function(){
	// 			that.name = '';
	// 			that.img = '';
	// 		})
	// 	},
	// 	methods: {
	// 		async getData(){
	// 			await getNotes().then((res)=>{
	// 				this.$store.state.totalData.notes = res.length;
	// 			})
	// 			await getTotalData().then((res)=>{
	// 				this.$store.state.totalData.total_day = res[0].total_day;
	// 				this.$store.state.totalData.total_number = res[0].total_number;
	// 				this.$store.state.totalData.last_time = res[0].last_time;
	// 			})
	// 		},
	// 		goNewUser(){
	// 			goUrl('./module/newUser');
	// 		},
	// 		goNeeds(){
	// 			if(!checkNull(app.globalData.userInfo.id,'请先登录')){
	// 				setTimeout(()=>{
	// 					goUrl('../login/login');
	// 				},1500)
	// 			}else{
	// 				goUrl('./module/needs');
	// 			}
	// 		},
	// 		goFeedback(){
	// 			if(!checkNull(app.globalData.userInfo.id,'请先登录')){
	// 				setTimeout(()=>{
	// 					goUrl('../login/login');
	// 				},1500)
	// 			}else{
	// 				goUrl('./module/feedback');
	// 			}
	// 		},
	// 		goAbout(){
	// 			goUrl('./module/about');
	// 		},
	// 		goSet(){
	// 			if(!checkNull(app.globalData.userInfo.id,'请先登录')){
	// 				setTimeout(()=>{
	// 					goUrl('../login/login');
	// 				},1500)
	// 			}else{
	// 				goUrl('./module/set');
	// 			}
	// 		},
	// 		goLogin(){
	// 			goUrl('../login/login');
	// 		}
	// 	},
	// }
</script>

<style lang="scss" scoped>
	.me{
		min-height: 100vh;
		.header{
			width: 100vw;
			box-sizing: border-box;
			padding:100rpx 40rpx 40rpx 40rpx;
			.header-logo{
				display: flex;
				justify-content: space-between;
				align-items: center;
				.logo{
					height: 120rpx;
					line-height: 120rpx;
					width: 500rpx;
					display: flex;
					/* align-items: center; */
					image{
						height: 120rpx;
						width: 120rpx;
						background: #eee;
						border-radius: 60rpx;
						border: 1rpx #ffffff solid;
					}
					text{
						font-size: 34rpx;
						margin-left: 20rpx;
					}
				}
			}
		}
		.view{
			box-sizing: border-box;
			margin: 0 20rpx;
			background: white;
			border-radius: 10rpx;
			display: flex;
			justify-content: space-between;
			padding: 50rpx 20px;
			.view-item{
				text-align: center;
				font-size: 28rpx;
				color: #333333;
				.view-item-title{
					font-size: 38rpx;
				}
				.view-item-tip{
					font-size: 24rpx;
					color: #999;
					margin-top: 20rpx;
				}
			}
		}
		.list{
			width: 710rpx;
			margin: 20rpx 20rpx 0 20rpx;
			box-sizing: border-box;
			background: white;
			border-radius: 10rpx;
			padding: 0 25rpx ;
			.list-item{
				padding: 30rpx 0;
				display: flex;
				justify-content: space-between;
				align-items: center;
				border-bottom: 1rpx #eee solid;
				.list-item image{
					width: 35rpx;
					height: 35rpx;
					position: relative;
					top: 7rpx;
					left: 6rpx;
				}
				.list-item text{
					width: 45rpx;
					height: 45rpx;
					margin-left:10rpx ;
					font-size: 34rpx;
				}
			}
			.list-item:last-child{
				border-bottom: none;
			}
		}
	}
</style>
