<template>
	<view class="header" :style="{background: bg,color: fc}">
		<div class="header-title" v-if="type == 'title'">
			<span class="header-title-icon" @click="goBack">
				<uni-icons :color="fc" type="left" size="23"></uni-icons>
			</span>
			<text class="header-title-text">{{title}}</text>
		</div>
		<div class="header-tabs" v-if="type == 'tabs'">
			<span class="header-tabs-icon" @click="goBack" v-if="back">
				<uni-icons :color="fc" type="left" size="23"></uni-icons>
			</span>
			<text :class="['header-tabs-item',current == index ? 'active-tabs':'']" v-for="(item,index) in tabs" @click="changeTabs(index)">{{item}}</text>
		</div>
	</view>
</template>

<script setup lang="ts">
	import { ref,reactive,watch } from 'vue'
	import type { Ref } from 'vue'
	
	interface itemProps{
		fontColor?:string,
		bgColor?: string,
		type?: string,
		title?: string,
		back?: boolean
	}
	const props = defineProps<itemProps>()
	
	const bg:string = ref(props.bgColor || '#FFF') ;
	const fc:string = ref(props.fontColor || '#333') ;
	const type:string = ref(props.type || 'tabs') ;
	const title:string = ref(props.title || '标题');
	const back:boolean = ref(props.back || false);
	
	watch(props,(n,o)=>{
		bg.value = n.bgColor
		fc.value = n.fontColor
	})
	
	const tabs:string[] = ['待办','计划']; 
	
	const current:Ref<number> = ref(0)
	
	const emit = defineEmits<{
	  (e: 'changeTabs', index: number): void
	}>()
	
	const changeTabs = (index:number):void=>{
		current.value = index;
		emit('changeTabs',index)
	}
	const goBack = ()=>{
		uni.navigateBack()
	}
</script>

<style lang="scss" scoped>
	.header{
		width: 100%;
		height: 88rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		.header-tabs{
			// position: relative;
			.header-tabs-icon{
				position: absolute;
				left: 20rpx;
			}
			.header-tabs-item{
				padding: 0 30rpx;
				margin: 0 30rpx;
				font-size: 32rpx;
			}
		}
		.header-title{
			.header-title-icon{
				position: absolute;
				left: 20rpx;
			}
			.header-title-title{
				padding: 0 30rpx;
				margin: 0 30rpx;
				font-size: 32rpx;
			}
		}
	}
	.active-tabs{
		color: #fc5531!important;
	}
</style>
