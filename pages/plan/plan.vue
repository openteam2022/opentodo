<template>
	<view class="plan" :style="{background:state.theme.appbgcolor,paddingBottom: planData.status == 0 ? '130rpx':'30rpx'}">
		<div class="plan-header">
			<StatusBar :bgColor="state.theme.appbgcolor"></StatusBar>
			<Header type="title" title="计划详情" :bgColor="state.theme.appbgcolor" :fontColor="state.theme.fontcolordeep" @changeTabs="changeTabs"></Header>
		</div>
		<div class="plan-info" :style="{background:state.theme.appboxcolor}">
			<view class="plan-info-title" :style="{color:state.theme.fontcolordeep}">{{planData.name}}</view>
			<view class="plan-info-other" :style="{color:state.theme.fontcolorshallow}">
				<view>备注：</view>
				<view>{{planData.other}}</view>
			</view>
		</div>
		<div class="plan-progress" :style="{background:state.theme.appboxcolor}">
			<view class="plan-progress-title" :style="{color:state.theme.fontcolordeep}">
				进度
			</view>
			<view class="plan-progress-info" >
				<span :style="{color:state.theme.fontcolorshallow}">{{planData.progress == 100 ? '已完成':'待完成'}}</span>
				<span>已完成{{planData.progress}}%</span>
			</view>
			<Progress :value="planData.progress"></Progress>
		</div>
		<div class="plan-progress" :style="{background:state.theme.appboxcolor}">
			<view class="plan-progress-title" :style="{color:state.theme.fontcolordeep}">
				时间
			</view>
			<view class="plan-progress-info">
				<span :style="{color:state.theme.fontcolorshallow}">{{planData.create_time.substring(0,10)}}至{{planData.end_time.substring(0,10)}}</span>
				<span style="background: #eebe77;">剩余{{differDay}}天</span>
			</view>
			<Progress bgColor="#eebe77" :value="differProgress"></Progress>
		</div>
		<div class="plan-title">
			<uni-icons type="list" size="23" color="#fc5531"></uni-icons>
			<span :style="{color:state.theme.fontcolordeep}">子计划</span>
		</div>
		<div class="plan-content">
			<PlanItem :data="planData.child" @changePlanItem="changePlanItem" @removePlanItem="deletePlanItem" :success="planData.status"></PlanItem>
		</div>
		<div class="plan-btn" :style="{background: state.theme.appbgcolor}" v-if="planData.status == 0">
			<text @click="goPlanItem">添加子计划</text>
		</div>
	</view>
</template>

<script setup lang="ts">
	import { computed, reactive, ref,watch} from 'vue'
	import type { Ref } from 'vue'
	import StatusBar from '../../components/common/statusBar/statusBar.vue'
	import Header from '../../components/common/header/header.vue'
	import PlanItem from '../../components/home/planitem/planitem.vue'
	import Plan from '../../components/home/plan/plan.vue'
	import Progress from '../../components/common/progress/progress.vue'
	import { useStore } from 'vuex'
	import { onShow,onLoad } from '@dcloudio/uni-app'
	import { showInfo } from '@/utils/base.js'
	import date from '@/utils/date.js'
	import { finishPlanItem,removePlanItem } from '@/api/plan.js'
	
	const { state,commit } = useStore();
	
	const planData:Ref<any> = ref({})
	const planIndex:Ref<number> = ref(0)
	const differDay:Ref<number> = ref(0)
	const differProgress:Ref<number> = ref(0)
	
	const changePlanItem = (res:any)=>{
		let data:[] = state.plan
		finishPlanItem({
			uid: state.userInfo.id,
			id: res.id
		}).then((result:any)=>{
			if(result){
				data[planIndex.value].child[res.index].status = 1;
				
				let items:number = planData.value.child.length;
				let successMark:number = 0;
				let progress:number = 0
				
				if(items> 0){
					planData.value.child.forEach(item=>{
						if(item.status == 1){
							successMark += 1;
						}
					})
					if(successMark == 0){
						progress = 0
					}else{
						let number:number = Math.ceil((successMark / items) * 100) 
						progress = number 
					}
				}else{
					if(planData.status == 1){
						progress = 100;
					}else{
						progress = 0
					}
				}
				data[planIndex.value].progress = progress
				commit('setPlan',data)
				showInfo('已完成')
			}else{
				showInfo('网络错误')
			}
			
		})
		
	}
	
	const deletePlanItem = (res:any)=>{
		let data:any[] = state.plan
		removePlanItem({
			uid: state.userInfo.id,
			id: res.id,
			status: data[planIndex.value].child[res.index].status
		}).then((result:any)=>{
			if(result){
				data[planIndex.value].child.splice(res.index,1)
				let items:number = data[planIndex.value].child.length;
				let successMark:number = 0;
				let progress:number = 0
				if(items> 0){
					data[planIndex.value].child.forEach(item=>{
						if(item.status == 1){
							successMark += 1;
						}
					})
					if(successMark == 0){
						progress = 0
					}else{
						let number:number = Math.ceil((successMark / items) * 100) 
						console.log(successMark / items)
						progress = number 
					}
					
				}else{
					if(planData.status == 1){
						progress = 100;
					}else{
						progress = 0
					}
				}
				data[planIndex.value].progress = progress
				commit('setPlan',data)
				showInfo('已删除')
			}else{
				showInfo('网络错误')
			}
		})
		
	}
	
	onShow(()=>{
		if(state.themeIndex == 'linght'){
			uni.setNavigationBarColor({
				frontColor: '#000000',
			})
		}else{
			uni.setNavigationBarColor({
				frontColor: '#ffffff',
			})
		}
	})
	
	onLoad((option)=>{
		planIndex.value = option.index
		planData.value = state.plan[option.index]
		
		differDay.value = date.differDay(date.getTime(),planData.value.end_time)
		let differDate = date.differDay(planData.value.start_time,planData.value.end_time)
		if(differDay.value <= 0){
			differProgress.value = 100
		}else{
			differProgress.value = 100 - Math.ceil((differDay.value/differDate)*100)
		}
		
	})
	
	watch(state,(n,o)=>{
		let data:[] = state.plan
		let items:number = data[planIndex.value].child.length;
		let successMark:number = 0;
		let progress:number = 0
		if(items> 0){
			data[planIndex.value].child.forEach(item=>{
				if(item.status == 1){
					successMark += 1;
				}
			})
			if(successMark == 0){
				progress = 0
			}else{
				let number:number = Math.ceil((successMark / items) * 100) 
				console.log(successMark / items)
				progress = number 
			}
			
		}else{
			if(planData.status == 1){
				progress = 100;
			}else{
				progress = 0
			}
		}
		data[planIndex.value].progress = progress
		commit('setPlan',data)
	})
	
	const goPlanItem = ()=>{
		uni.navigateTo({
			url: '/pages/planitem/planitem?index='+planIndex.value
		})
	}
</script>

<style lang="scss" scoped>
	.plan{
		width: 100%;
		min-height: 100vh;
		box-sizing: border-box;
		.plan-header{
			position: sticky;
			top: 0;
			left: 0;
			z-index: 99;
		}
		.plan-info{
			margin: 0 20rpx 20rpx 20rpx;
			box-sizing: border-box;
			background: #fff;
			padding: 30rpx;
			border-radius: 8rpx;
			.plan-info-title{
				font-size: 32rpx;
				color: #333;
				padding-bottom: 20rpx;
				border-bottom: 1px #eee solid;
				margin-bottom: 20rpx;
			}
			.plan-info-other{
				display: flex;
				font-size: 28rpx;
				color: #666;
				padding-bottom: 10rpx;
				view:nth-child(1){
					width: 90rpx;
				}
				view:nth-child(2){
					width: 560rpx;
				}
			}
		}
		.plan-progress{
			margin: 0 20rpx 20rpx 20rpx;
			box-sizing: border-box;
			background: #fff;
			padding: 30rpx;
			border-radius: 8rpx;
			&-title{
				font-size: 32rpx;
				color: #333;
				padding-bottom: 15rpx;
			}
			&-info{
				display: flex;
				justify-content: space-between;
				align-items: flex-start;
				font-size: 26rpx;
				color: #888;
				margin-bottom: 20rpx;
				span:nth-child(2){
					display: inline-block;
					padding: 5rpx 10rpx;
					border-radius: 4rpx;
					font-size: 22rpx;
					background: #1abc8d;
					color: #fff;
				}
			}
		}
		.plan-title{
			width: 100%;
			box-sizing: border-box;
			padding: 20rpx 20rpx;
			padding-bottom: 40rpx;
			font-size: 30rpx;
			display: flex;
			align-items: center;
			span{
				margin-left: 10rpx;
			}
		}
		.plan-content{
			width: 100%;
			box-sizing: border-box;
			padding: 0 20rpx;
		}
		.plan-btn{
			position: fixed;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 150rpx;
			box-sizing: border-box;
			padding-top: 20rpx;
			background: #fff;
			display: flex;
			justify-content: center;
			text{
				display: inline-block;
				width: 600rpx;
				height: 75rpx;
				line-height: 75rpx;
				background: #fc5531;
				border-radius: 37.5rpx;
				color: #fff;
				text-align: center;
				box-shadow: 0px 2px 5px #ccc;
			}
		}
	}
</style>
