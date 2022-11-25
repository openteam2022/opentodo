<template>
	<view class="plan">
		<ul class="plan-list">
			<li class="plan-list-item" v-for="(item,index) in plan">
				<div class="plan-list-item-wrapper" :style="{background:state.theme.appboxcolor}">
					<div class="plic-content">
						<div class="plic-content-title" :style="{color:state.theme.fontcolordeep}">{{item.name}}</div>
						<div class="plic-content-date">
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
	import { useStore } from 'vuex'
	import { reactive,ref,watch,onMounted } from 'vue'
	import type{ Ref } from 'vue'
	import {color} from '@/config/type.js'
	import date from '@/utils/date.js'
	
	interface planType {
		data?: []
	}
	const props = defineProps<planType>();
	
	const plan:Ref<[]> = ref(props.data || [])
	
	const { state } = useStore()
	
</script>

<style lang="scss">
	.plan{
		width: 100%;
		padding-bottom: 30rpx;
		.plan-list{
			list-style: none;
			padding: 0;
			margin: 0;
			box-sizing: border-box;
		}
		.plan-list-item{
			list-style: none;
			box-sizing: border-box;
			padding: 0 ;
			margin: 0;
			background: #fff;
			border-radius: 8rpx;
			margin-bottom: 20rpx;
			.plan-list-item-wrapper{
				display: flex;
				flex-direction: column;
				align-items: center;
				padding: 24rpx 30rpx;
				.plic-content{
					width: 100%;
					.plic-content-title{
						font-size: 32rpx;
						color: #333;
					}
					.plic-content-date{
						display: flex;
						justify-content: space-between;
						font-size: 24rpx;
						margin-top: 20rpx;
						color: #aaa;
						span:nth-child(2){
							color: #fc5531;
						}
						
					}
				}
				.plic-check{
					width: 100rpx;
					text-align: right;
				}
			}
		}
	}

</style>
