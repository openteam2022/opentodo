<template>
	<view class="add" :style="{background:state.theme.appbgcolor}">
		<div>
			<StatusBar :bgColor="state.theme.appbgcolor"></StatusBar>
			<Header back :bgColor="state.theme.appbgcolor" :fontColor="state.theme.fontcolordeep" @changeTabs="changeTabs"></Header>
		</div>
		<div class="add-box" :style="{background:state.theme.appboxcolor}" v-show="current == 0">
			<div class="add-box-input">
				<div class="input">
					<!-- <span>待办：</span> -->
					<input type="text" v-model="todo.content" placeholder="中文或字母或数字" :style="{color:state.theme.fontcolordeep}">
				</div>
			</div>
			
			<div class="add-box-color">
				<div class="add-box-color-title" :style="{color:state.theme.fontcolordeep}">类型</div>
				<radio-group class="add-box-color-list" @change="todoColorChange">
					<view v-for="(item, index) in colors" :key="index" class="abcl-item">
						<view class="abcl-item-container">
							<view class="abcl-item-container-content">
								<view :style="{ background: item.color }" class="aicc-color" />
								<view class="aicc-text" :style="{color:state.theme.fontcolorshallow}">{{item.text}}</view>
							</view>
							<view class="abcl-item-container-check">
								<radio :value="item" :checked="index === todoColorIndex" />
							</view>
						</view>
					</view>
				</radio-group>
			</div>
		</div>
		<div class="add-box" :style="{background:state.theme.appboxcolor}" v-show="current == 1">
			<div class="add-box-input">
				<div class="input">
					<span :style="{color:state.theme.fontcolordeep}">名字：</span>
					<input type="text" v-model="plan.name" placeholder="中文或字母或数字" :style="{color:state.theme.fontcolordeep}">
				</div>
				<div class="input">
					<span :style="{color:state.theme.fontcolordeep}">备注：</span>
					<input type="text" v-model="plan.other" placeholder="中文或字母或数字" :style="{color:state.theme.fontcolordeep}">
				</div>
				<div class="input">
					<span :style="{color:state.theme.fontcolordeep}">日期：</span>
					<picker mode="date" fields="day" :value="time" :start="startDate" :end="endDate" @change="bindDateChange">
						<view class="uni-input" :style="{color:state.theme.fontcolorshallow}">{{time}}</view>
					</picker>
				</div>
			</div>
			
			<div class="add-box-color">
				<div class="add-box-color-title" :style="{color:state.theme.fontcolordeep}">类型：</div>
				<radio-group class="add-box-color-list" @change="planColorChange">
					<view v-for="(item,index) in colors" :key="index" class="abcl-item">
						<view class="abcl-item-container">
							<view class="abcl-item-container-content">
								<view :style="{background:item.color}" class="aicc-color" />
								<view class="aicc-text" :style="{color:state.theme.fontcolorshallow}">{{item.text}}</view>
							</view>
							<view class="abcl-item-container-check">
								<radio :value="item" :checked="index === planColorIndex" />
							</view>
						</view>
					</view>
				</radio-group>
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
	import { color,type } from '@/config/type.js'
	import Dates from '@/utils/date.js'
	import { addTodo } from '@/api/todo.js'
	import { addPlan } from '../../api/plan'
	import { updateDay,updateTotal,updateTime } from '@/api/data.js'
	import { checkNull,checkStrEngInt,checkText } from '@/utils/shield.js'
	import { showInfo } from '../../utils/base'
	import { getData } from '@/api/data.js'
	const date = new Dates();
	interface inputType {
		content?:string,
		name?: string,
		other?: string,
	}
	const { state,commit } = useStore()
	const current:Ref<number> = ref(0)
	
	const startDate:string = date.getDate();
	const endDate:string = '2099-12-31'
	const time:Ref<string> = ref('选择截止日期')
	
	const todo:inputType = reactive({content: ''})
	const todoColorIndex:Ref<number> = ref(0) 
	
	const plan:inputType = reactive({name:'',other:''})
	const planColorIndex:Ref<number> = ref(0) 

	const colors:any[] = type
	
	const changeTabs = (index:number)=>{
		current.value = index
	}
	
	const todoColorChange = (res)=>{
		todoColorIndex.value = res.detail.value.id
	}
	
	const planColorChange = (res)=>{
		planColorIndex.value = res.detail.value.id
	}
	
	const bindDateChange = (date)=>{
		time.value = date.detail.value
	}
	
	const save = ()=>{
		if(current.value == 0){
			// 保存todo
			if(!checkNull(todo.content,'待办不能为空'))return false;
			if(!checkStrEngInt(todo.content,'待办格式不正确'))return false
			let data = {...todo,type: todoColorIndex.value,uid:state.userInfo.id,create_time:date.getTime()};
			addTodo(data).then((res)=>{
				let todoList = state.todo
				todoList.unshift({...data,id:res.id,status:0})
				commit('setTodo',todoList)
				showInfo('添加成功')
				todo.content = ''
			})
		}else{
			if(time.value == '选择截止日期'){
				showInfo('日期未选择')
				return false;
			}
			if(!checkNull(plan.name,'计划名不能为空'))return false;
			if(!checkStrEngInt(plan.name,'计划名格式不正确'))return false;
			if(!checkText(plan.other,'备注格式不正确'))return false;
			// 保存计划
			let data = {...plan,type: planColorIndex.value,uid:state.userInfo.id,create_time:date.getTime(),end_time:`${time.value} 23:59:59`};
			addPlan(data).then(res=>{
				let planList = state.plan
				planList.unshift({...data,id:res.id,status:0,child:[]})
				commit('setPlan',planList)
				showInfo('添加成功')
				plan.name = '';
				plan.other = '';
				time.value = '选择截止日期'
			})
		}
		updateTotal({
			uid: state.userInfo.id
		}).then((res:any)=>{
			console.log("添加数据成功")
		})
		const now = new Date(date.getDate()).valueOf();
		let old = new Date(state.data.last_time.substring(0,10)).valueOf();
		if(!old){
			// 获取记录数据
			getData({
				uid:state.userInfo.id,
			}).then((result:any)=>{
				old = result.last_time
			})
		}
		// 增加天数
		if(now == old){
			updateDay({
				uid: state.userInfo.id
			}).then((res:any)=>{
				console.log("添加数据成功")
			})
			let data = state.data;
			data.total_number = data.total_number + 1;
			commit('setData',data)
		}else{
			updateDay({
				uid: state.userInfo.id
			}).then((res:any)=>{
				console.log("添加数据成功")
			})
			updateTime({
				uid: state.userInfo.id,
				last_time: date.getTime()
			}).then((res:any)=>{
				console.log("添加更新成功")
			})
			let data = state.data;
			data.total_number = data.total_number + 1;
			data.add_day = data.add_day + 1;
			data.last_time = date.getTime();
			commit('setData',data)
		}
	}
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
				box-shadow: 0px 2px 5px #999;
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
