<template>
	<view class="index" :style="{background:state.theme.appbgcolor}">
		<div class="index-header">
			<StatusBar :bgColor="state.theme.appbgcolor"></StatusBar>
			<Header type="tabs" :bgColor="state.theme.appbgcolor" :fontColor="state.theme.fontcolordeep" @changeTabs="changeTabs"></Header>
		</div>
		<div class="index-content">
			<div v-if="current == 0">
				<Todo :data="todo" @changeTodo="changeTodo" @removeTodo="deleteTodo"></Todo>
			</div>
			<div v-if="current == 1">
				<Plan :data="plan" @changePlan="changePlan" @removePlan="deletePlan"></Plan>
			</div>
		</div>
	</view>
</template>

<script setup lang="ts">
	import { ref,reactive,onMounted} from 'vue'
	import type { Ref } from 'vue'
	import StatusBar from '../../components/common/statusBar/statusBar.vue'
	import Header from '../../components/common/header/header.vue'
	import Todo from '../../components/home/todo/todo.vue'
	import Plan from '../../components/home/plan/plan.vue'
	import { useStore } from 'vuex'
	import { onShow } from '@dcloudio/uni-app'
	import { getTodoList,finishTodo,removeTodo } from '@/api/todo.js'
	import { getPlan,finishPlan,removePlan } from '@/api/plan.js'
	import { updateFinish } from '@/api/data.js'
	import { showInfo } from '@/utils/base.js'
	import { getData } from '@/api/data.js'
	const current:Ref<number> = ref(0)
	
	const { state,commit } = useStore();
	
	const todo:any = ref([])
	const plan:any = ref([])
	
	const changeTabs = (index:number)=>{
		current.value = index
	}
	
	const changeTodo = (data)=>{
		finishTodo({
			uid: state.userInfo.id,
			id: data.id
		}).then((res:any)=>{
			if(res){
				updateFinish({
					uid: state.userInfo.id
				}).then((res:any)=>{
					console.log('更新成功')
				})
				let todo = state.todo;
				todo[data.index].status = 1;
				showInfo('已完成')
				commit('setTodo',todo)
				let datas = state.data;
				datas.finish_number = datas.finish_number + 1; 
				commit('setData',datas)
			}else{
				showInfo('网络错误')
			}
		})
	}
	const deleteTodo = (data)=>{
		let todo = state.todo;
		removeTodo({
			uid: state.userInfo.id,
			id: data.id,
			status: todo[data.index].status
		}).then((res:any)=>{
			if(res){
				todo.splice(data.index,1)
				showInfo('删除成功')
				commit('setTodo',todo)
			}else{
				showInfo('网络错误')
			}
		})
	}
	
	const changePlan = (res:any):void=>{
		finishPlan({
			uid: state.userInfo.id,
			id: res.id,
		}).then((data:any)=>{
			if(data){
				updateFinish({
					uid: state.userInfo.id
				}).then((res:any)=>{
					console.log('更新成功')
				})
				let plan = state.plan;
				plan[res.index].status = 1
				plan[res.index].progress = 100
				plan[res.index].child.forEach(item=>{
					item.status = 1
				})
				commit('setPlan',plan)
				showInfo('已完成')
				let datas = state.data;
				datas.finish_number = datas.finish_number + 1; 
				commit('setData',datas)
			}else{
				showInfo('网络错误')
			}
		
		})
		
	}
	const deletePlan = (res)=>{
		let plan = state.plan;
		removePlan({
			uid: state.userInfo.id,
			id: res.id,
			status: plan[res.index].status
		}).then((result:any)=>{
			if(result){
				plan.splice(res.index,1)
				showInfo('删除成功')
				commit('setPlan',plan)
			}else{
				showInfo('网络错误')
			}
		})
		
	}
	
	onMounted(()=>{
		if(state.todo.length == 0){
			getTodoList({
				uid:state.userInfo.id,
			}).then(res=>{
				if(res){
					const result = res;
					commit('setTodo',result)
					todo.value = state.todo
				}
			})
		}
		todo.value = state.todo
		
		if(state.plan.length == 0){
			getPlan({
				uid:state.userInfo.id,
			}).then(res=>{
				if(res){
					const result = res;
					result.forEach(item=>{
						item.progress = 0
						item.differDate = 0
					})
					commit('setPlan',result)
					plan.value = state.plan;
				}
			})
		}
		plan.value = state.plan;
		// 获取记录数据
		getData({
			uid:state.userInfo.id,
		}).then((result:any)=>{
			commit('setData',result)
		})
	})
	
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
</script>

<style lang="scss">
	.index{
		width: 100%;
		min-height:100vh;
		.index-header{
			position: sticky;
			top: 0;
			left: 0;
			z-index: 99;
		}
		.index-content{
			width: 100%;
			box-sizing: border-box;
			padding: 0 20rpx;
		}
	}
</style>
