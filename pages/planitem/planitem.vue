<template>
	<view class="add" :style="{background:state.theme.appbgcolor}">
		<div>
			<StatusBar :bgColor="state.theme.appbgcolor"></StatusBar>
			<Header type="title" title="添加子任务" :bgColor="state.theme.appbgcolor" :fontColor="state.theme.fontcolordeep" @changeTabs="changeTabs"></Header>
		</div>
		<div class="add-box" :style="{background:state.theme.appboxcolor}">
			<div class="add-box-input">
				<div class="input">
					<!-- <span>待办：</span> -->
					<input type="text" v-model="planItem.name" placeholder="输入子任务" :style="{color:state.theme.fontcolordeep}">
				</div>
				<div class="input">
					<!-- <span>待办：</span> -->
					<input type="text" v-model="planItem.other" placeholder="备注" :style="{color:state.theme.fontcolordeep}">
				</div>
			</div>
		</div>
		<div class="add-btn" :style="{background: state.theme.appbgcolor}">
			<text @click="save">提交</text>
		</div>
	</view>
</template>

<script setup lang="ts">
	import Todo from '@/components/add/todo/todo.vue'
	import Plan from '@/components/add/plan/plan.vue'
	import StatusBar from '../../components/common/statusBar/statusBar.vue'
	import Header from '../../components/common/header/header.vue'
	import { useStore } from 'vuex'
	import { ref,reactive } from 'vue'
	import type { Ref } from 'vue'
	import { addTask } from '@/api/plan.js'
	import { onShow,onLoad } from '@dcloudio/uni-app'
	import { goReturn, showInfo } from '@/utils/base.js'
	import Dates from '@/utils/date.js'
	const date = new Dates()
	
	interface inputType {
		name: string,
		other?: string,
	}
	
	const { state,commit } = useStore()
	
	const planId:Ref<number> = ref(0)
	const planIndex:Ref<number> = ref(0)
	const planData:Ref<any> = ref({})
	
	const planItem:inputType = reactive({name:'',other:''})
	
	
	const save = ()=>{
		let data = {...planItem,item_id: planId.value,uid:state.userInfo.id,create_time:date.getTime()};
		addTask(data).then((res)=>{
			showInfo('添加成功')
			let plan = state.plan
			plan[planIndex.value].child.unshift({...data,id:res.id,status: 0})
			commit('setPlan',plan)
			uni.navigateBack()
		})
	}
	
	onLoad((option)=>{
		planIndex.value = option.index
		planData.value = state.plan[option.index]
		planId.value = planData.value.id
	})
</script>

<style lang="scss" scoped>
	.add{
		min-height: 100vh;
		.add-box{
			margin: 0 20rpx;
			border-radius: 8rpx;
			background: #fff;
			box-sizing: border-box;
			padding: 30rpx;
			.add-box-input{
				margin-bottom: 50rpx;
				.input{
					display: flex;
					align-items: center;
					height: 120rpx;
					border-bottom: 1rpx #ededed solid;
					width: 100%;
					span{
						color: #333;
						width: 100rpx;
					}
					input{
						height: 100%;
						flex: 1;
					}
				}
				.no-line{
					border-bottom: none;
				}
			}
			.add-box-color{
				.add-box-color-title{
					font-size: 30rpx;
					line-height: 80rpx;
				}
				.add-box-color-list{
					.abcl-item-container{
						display: flex;
						justify-content: space-between;
						line-height: 80rpx;
						.abcl-item-container-content{
							display: flex;
							align-items: center;
							.aicc-color{
								width: 40rpx;
								height: 40rpx;
								border-radius: 20rpx;
								margin-right: 10rpx;
							}
							.aicc-text{
								font-size: 30rpx;
								color: #333;
							}
						}
					}
				}
			}
			
		}
		
		.add-btn{
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
		.uni-list {
				flex: 1;
			}
		
			.uni-list-item {
				/* #ifndef APP-NVUE */
				display: flex;
				/* #endif */
				flex: 1;
				flex-direction: row;
				background-color: #FFFFFF;
			}
		
		
			.uni-list-item__container {
				padding: 12px 15px;
				width: 100%;
				flex: 1;
				position: relative;
				/* #ifndef APP-NVUE */
				display: flex;
				box-sizing: border-box;
				/* #endif */
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
			}
		
			.uni-list-item__content-title {
				font-size: 14px;
			}
	}
</style>
