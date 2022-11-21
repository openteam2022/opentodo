<template>
	<view class="todo">
		<ul class="todo-list">
			<li class="todo-list-item" :style="{background: state.theme.appboxcolor}" v-for="(item,index) in todo">
				<div class="todo-list-item-wrapper">
					<div class="tlic-content">
						<div class="tlic-content-title" :style="{color: state.theme.fontcolordeep}">{{item.content}}</div>
						<div class="tlic-content-date" :style="{color: state.theme.fontcolorshallow}">
							<span>创建：{{item.create_time.substring(0,10)}}</span>
							<span :style="{color:item.status == 0? '#fc5531':'#95d475'}">类型：{{item.status == 0? '未完成':'已完成'}}</span>
							<span :style="{color:item.status > 1? '#fc5531':'#95d475'}">状态：{{item.status > 1?'已删除':'未删除'}}</span>
						</div>
					</div>
				</div>
			</li>
		</ul>
	</view>
</template>

<script setup lang="ts">
	import UniSwipeAction from '../../../uni_modules/uni-swipe-action/components/uni-swipe-action/uni-swipe-action.vue'
	import UniSwipeActionItem from '../../../uni_modules/uni-swipe-action/components/uni-swipe-action-item/uni-swipe-action-item.vue'
	
	import { useStore } from 'vuex'
	import { ref,watch,reactive,toRaw } from 'vue'
	import {color} from '@/config/type.js' 
	const options:any[] = [
         {
            text: '删除',
            style: {
                backgroundColor: '#fc5531'
            }
        }
    ]
	
	interface propsType {
		data?:[] 
	}
	
	const { state } = useStore();
	
	const props = defineProps<propsType>()
	const { data } = reactive(props)
	
	const todo = ref(data || [])
	
	watch(props,(n,o)=>{
		todo.value = n.data
	})
	
	const emit = defineEmits<{
	  (e: 'changeTodo', data:any): void
	  (e: 'removeTodo', data:any): void
	}>()
	
	const change = (id:number,index:number)=>{
	      let data = {
	      	index: index,
	      	id: id
	      }
		  emit('removeTodo',data)
	}

	const changeSuccess = (index:number,id:number)=>{
		let data = {
			index: index,
			id: id
		}
		emit('changeTodo',data)
	}
</script>

<style lang="scss">
	.todo{
		width: 100%;
		padding-bottom: 30rpx;
		.todo-list{
			list-style: none;
			padding: 0;
			margin: 0;
			box-sizing: border-box;
		}
		.todo-list-item{
			list-style: none;
			box-sizing: border-box;
			padding: 0 ;
			margin: 0;
			background: #fff;
			border-radius: 8rpx;
			margin-bottom: 20rpx;
			.todo-list-item-wrapper{
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 24rpx 30rpx;
				.tlic-content{
					width: 650rpx;
					.tlic-content-title{
						font-size: 32rpx;
						color: #333;
					}
					.tlic-content-date{
						display: flex;
						justify-content: space-between;
						font-size: 26rpx;
						color: #aaa;
						margin-top: 20rpx;
					}
				}
				.tlic-check{
					display: flex;
					align-items: center;
					justify-content: flex-end;
					width: 80rpx;
					.tlic-check-defalut{
						display: inline-block;
						width: 36rpx;
						height: 36rpx;
						border-radius: 50%;
						border: 2rpx #fc5531 solid;
					}
					.tlic-check-success{
						position: relative;
						left: 5rpx;
					}
				}
			}
		}
	}

</style>
