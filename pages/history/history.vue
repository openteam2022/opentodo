<template>
	<view class="index" :style="{background:state.theme.appbgcolor}">
		<div class="index-header">
			<StatusBar :bgColor="state.theme.appbgcolor"></StatusBar>
			<Header  back type="tabs" :bgColor="state.theme.appbgcolor" :fontColor="state.theme.fontcolordeep" @changeTabs="changeTabs"></Header>
		</div>
		<div class="index-content">
			<div v-if="current == 0">
				<Todo :data="todo" ></Todo>
			</div>
			<div v-if="current == 1">
				<Plan :data="plan"></Plan>
			</div>
		</div>
	</view>
</template>

<script setup lang="ts">
	import { ref,reactive,onMounted} from 'vue'
	import type { Ref } from 'vue'
	import StatusBar from '../../components/common/statusBar/statusBar.vue'
	import Header from '../../components/common/header/header.vue'
	import Todo from '../../components/history/todo/todo.vue'
	import Plan from '../../components/history/plan/plan.vue'
	import { useStore } from 'vuex'
	import { onShow } from '@dcloudio/uni-app'
	import { getTodoHistory } from '@/api/todo.js'
	import { getPlanHistory} from '@/api/plan.js'
	import { showInfo } from '@/utils/base.js'
	
	const current:Ref<number> = ref(0)
	
	const { state } = useStore();
	
	const todo:any = ref([])
	const plan:any = ref([])
	
	const changeTabs = (index:number)=>{
		current.value = index;
	}

	onMounted(()=>{
		getTodoHistory({
			uid:state.userInfo.id,
		}).then(res=>{
			if(res){
				todo.value = res;
			}
		})
		getPlanHistory({
			uid:state.userInfo.id,
		}).then(res=>{
			if(res){
				plan.value = res;
			}
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
