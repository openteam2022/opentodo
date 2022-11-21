<template>
	<view class="progress">
		<view v-if="type">
			 <div class="circle">
				<div class="shadow">
				</div>
				<div class="text" :style="{color: color}" >
					<span>完成</span>
					<span>{{value}}%</span>
				</div>
			</div>
		</view>
		<view class="progress-line" v-else>
			<view class="progress-line-wrapper">
				<view class="progress-line-wrapper-bar" :style="{background:bgcolor,width:`${value}%`}"></view>
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
	import {ref,watch,onMounted} from 'vue'
	import type{Ref} from 'vue'
	interface itemProps{
		type?: boolean,
		bgColor?: string,
		color?: string,
		value?: string,
	}
	const props = defineProps<itemProps>()
	
	const type:Ref<boolean> = ref(props.type) ;
	const bgcolor:Ref<string> = ref(props.bgColor || '#1abc8d') ;
	const color:Ref<string> = ref(props.color || '#333') ;
	const value:Ref<number> = ref(props.value || 0) ;
	const progress:Ref<string> = ref(value.value+'%')
	
	watch(props,(n,o)=>{
		value.value = n.value;
		progress.value = value.value + '%'
		color.value = n.color || '#333'
	})
	
	const circleLeft: Ref<HTMLElement | null | any> = ref(null);
	const circleRight: Ref<HTMLElement | null | any> = ref(null);
	let timer = 0;
	
</script>

<style lang="scss" scoped>
	
	.progress{
		.circle {
			position: relative;
			width: 100rpx;
			height: 100rpx;
			.shadow {
				width: 100rpx;
				height: 100rpx;
				box-sizing: border-box;
				position: relative;
				border-radius: 50%;
				background: #eee;
				background: conic-gradient(from 180deg,#1abc8d 0%, #1abc8d v-bind('progress'), #1abc8d v-bind('progress'), #eee v-bind('progress'), #eee 100%);
				mask: radial-gradient(transparent 44rpx, #eee 44rpx);
				-webkit-mask: radial-gradient(transparent 44rpx, #eee 44rpx);
				transition: all 0.5s;
			}
			.text{
				position: absolute;
				top: 50%;
				left: 50%;
				z-index: 9;
				font-size: 20rpx;
				font-weight: bold;
				transform: translate(-50%,-50%);
				color: #333;
				display: flex;
				flex-direction: column;
				span{
					text-align: center;
				}
			}
		}
		.progress-line{
			width: 100%;
			box-sizing: border-box;
			padding: 10rpx 0;
			.progress-line-wrapper{
				position: relative;
				width: 100%;
				height: 12rpx;
				border-radius: 6rpx;
				background: #f4f4f4;
				.progress-line-wrapper-bar{
					position: absolute;
					top: 0;
					left: 0;
					z-index: 2;
					height: 100%;
					border-radius: 6rpx;
					transition: all 0.5s;
				}
			}
		}
	}
	
	
</style>

 
 