<template>
	<view class="plan">
		<ul class="plan-list">
			<li class="plan-list-item" v-for="(item,index) in plan" :style="{borderLeft: `8rpx ${color[item.type]} solid`}">
				<uni-swipe-action v-if="item.status == 0">
					<uni-swipe-action-item style="border-radius: 0 8rpx 8rpx 0;" :right-options="options"  @click="changeDefault($event,item.id,index)">
						<div class="plan-list-item-wrapper" :style="{background:state.theme.appboxcolor}">
							<div class="plic-content" @click="goPlan(index)">
								<div class="plic-content-title" :style="{color:state.theme.fontcolordeep,textDecoration: item.status == 1 ?'line-through':''}">{{item.name}}</div>
								<div class="plic-content-date">
									<span :style="{color: state.theme.fontcolorshallow,textDecoration: item.status == 1 ?'line-through':''}">{{item.create_time.substring(0,10)}} 至 {{item.end_time.substring(0,10)}}</span>
									<span v-if="item.status == 0">剩下{{item.differDate}}天</span>
								</div>
							</div>
							
							<div class="plic-check">
								<Progress type :color="state.theme.fontcolordeep" :value="item.progress"></Progress>
							</div>
						</div>
					</uni-swipe-action-item>
				</uni-swipe-action>	
				<uni-swipe-action v-else>
					<uni-swipe-action-item style="border-radius: 0 8rpx 8rpx 0;" :right-options="optionStatus"  @click="changeSuccess($event,item.id,index)">
						<div class="plan-list-item-wrapper" :style="{background:state.theme.appboxcolor}">
							<div class="plic-content" @click="goPlan(index)">
								<div class="plic-content-title" :style="{color:item.status == 0 ? state.theme.fontcolordeep : state.theme.fontcolorshallow,textDecoration: item.status == 1 ?'line-through':''}">{{item.name}}</div>
								<div class="plic-content-date">
									<span :style="{color: item.status == 0 ? state.theme.fontcolordeep : state.theme.fontcolorshallow,textDecoration: item.status == 1 ?'line-through':''}">{{item.create_time.substring(0,10)}} 至 {{item.end_time.substring(0,10)}}</span>
									<span v-if="item.status == 0">剩下{{item.differDate}}天</span>
								</div>
							</div>
							
							<div class="plic-check">
								<Progress type :color="state.theme.fontcolordeep" :value="item.progress" v-if="item.status == 0"></Progress>
								<uni-icons type="checkbox-filled" size="30" :color="state.theme.fontcolorshallow" v-else></uni-icons>
							</div>
						</div>
					</uni-swipe-action-item>
				</uni-swipe-action>	
			</li>
		</ul>
	</view>
</template>

<script setup lang="ts">
	import UniSwipeAction from '../../../uni_modules/uni-swipe-action/components/uni-swipe-action/uni-swipe-action.vue'
	import UniSwipeActionItem from '../../../uni_modules/uni-swipe-action/components/uni-swipe-action-item/uni-swipe-action-item.vue'
	import Progress from '../../common/progress/progress.vue'
	import { useStore } from 'vuex'
	import { reactive,ref,watch,onMounted } from 'vue'
	import type{ Ref } from 'vue'
	import {color} from '@/config/type.js'
	import date from '@/utils/date.js'
	console.log(color[0])
	const options:any[] = [
		{
		    text: '完成',
		    style: {
		        backgroundColor: '#67C23A'
		    }
		},
         {
            text: '删除',
            style: {
                backgroundColor: '#fc5531'
            }
        }
      ]
	  const optionStatus:any[] = [
	       {
	          text: '删除',
	          style: {
	              backgroundColor: '#fc5531'
	          }
	      }
	    ]
	
	interface planType {
		data?: []
	}
	const props = defineProps<planType>();
	
	const plan:Ref<[]> = ref(props.data || [])
	
	onMounted(()=>{
		plan.value.forEach(item=>{
			item.progress = progress(item)
			item.differDate = date.differDay(date.getTime(),item.end_time)
		})
		console.log(plan.value)
	})
	
	watch(props,(n,o)=>{
		plan.value = n.data
	})
	
	const { state } = useStore()
	
	const emit = defineEmits<{
		(e: 'changePlan', data:any): void
		(e: 'removePlan', data:any): void
	}>()
	const changeDefault = (e:any,id:number,index:number)=>{
	      let data = {
			  id: id,
			  index: index
		  }
		  if(e.index == 0){
			  emit('changePlan',data)
		  }else{
			  emit('removePlan',data)
		  }
	}
	const changeSuccess = (e:any,id:number,index:number)=>{
	      let data = {
			  id: id,
			  index: index
		  }
		emit('removePlan',data)
	}
		
	const goPlan = (index:number)=>{
		uni.navigateTo({
			url:'/pages/plan/plan?index='+index
		})
	}
	
	const progress = (item) =>{
		let items:number = item.child.length;
		let successMark:number = 0;
		let progress:number = 0
		if(items> 0){
			item.child.forEach(item=>{
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
			if(plan.value.status == 1){
				progress = 100;
			}else{
				progress = 0
			}
		}
		return progress
	}
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
				justify-content: space-between;
				align-items: center;
				padding: 24rpx 30rpx;
				.plic-content{
					width: 520rpx;
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
