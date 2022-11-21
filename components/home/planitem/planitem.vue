<template>
	<view class="planitem">
		<ul class="planitem-list">
			<li class="planitem-list-item" :style="{background: state.theme.appboxcolor,'border-left': `8rpx ${color[item.type]} solid`}" v-for="(item,index) in planitem" v-if="planSuccess == 0">
				<uni-swipe-action>
					<uni-swipe-action-item style="border-radius: 8rpx;" :right-options="options"  @click="removePlanItem(item.id, index)">
						<div class="planitem-list-item-wrapper">
							<div class="tlic-content">
								<div class="tlic-content-title" :style="{color: item.status == 0 ? state.theme.fontcolordeep : state.theme.fontcolorshallow, textDecoration: item.status == 1 ?'line-through':''}">{{item.name}}</div>
								<div class="tlic-content-other" :style="{color: item.status == 0 ? state.theme.fontcolorshallow : state.theme.fontcolorshallow, textDecoration: item.status == 1 ?'line-through':''}" v-if="item.other">{{item.other}}</div>
								<div class="tlic-content-date" :style="{color: state.theme.fontcolorshallow, textDecoration: item.status == 1 ?'line-through':''}">
									<span>{{item.create_time}}</span>
								</div>
							</div>
							<div class="tlic-check">
								<span class="tlic-check-defalut" v-if="item.status == 0" @click="changeSuccess(index,item.id)"></span>
								<span class="tlic-check-success" v-else>
									<uni-icons :color="state.theme.fontcolorshallow" type="checkbox-filled" size="28"></uni-icons>
								</span>
							</div>
						</div>
					</uni-swipe-action-item>
				</uni-swipe-action>	
			</li>
			<li class="planitem-list-item" :style="{background: state.theme.appboxcolor,'border-left': `8rpx ${color[item.type]} solid`}" v-for="(item,index) in planitem" v-else>
				<uni-swipe-action>
					<uni-swipe-action-item style="border-radius: 8rpx;" @click="removePlanItem(item.id, index)">
						<div class="planitem-list-item-wrapper">
							<div class="tlic-content">
								<div class="tlic-content-title" :style="{color: item.status == 0 ? state.theme.fontcolordeep : state.theme.fontcolorshallow, textDecoration: item.status == 1 ?'line-through':''}">{{item.name}}</div>
								<div class="tlic-content-other" :style="{color: item.status == 0 ? state.theme.fontcolorshallow : state.theme.fontcolorshallow, textDecoration: item.status == 1 ?'line-through':''}" v-if="item.other">{{item.other}}</div>
								<div class="tlic-content-date" :style="{color: state.theme.fontcolorshallow, textDecoration: item.status == 1 ?'line-through':''}">
									<span>{{item.create_time}}</span>
								</div>
							</div>
							<div class="tlic-check">
								<span class="tlic-check-defalut" v-if="item.status == 0" @click="changeSuccess(index,item.id)"></span>
								<span class="tlic-check-success" v-else>
									<uni-icons :color="state.theme.fontcolorshallow" type="checkbox-filled" size="28"></uni-icons>
								</span>
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
		data?:[],
		success:number
	}
	
	const { state } = useStore();
	
	const props = defineProps<propsType>()
	const data = ref(props.data)

	const planitem = ref(data || [])
	const planSuccess = ref(props.success || 0)
	
	watch(props,(n,o)=>{
		planitem.value = n.data
		planSuccess.value = n.success
	})
	
	const emit = defineEmits<{
	  (e: 'changePlanItem', data:any): void
	  (e: 'removePlanItem', data:any): void
	}>()
	
	const removePlanItem = (id:number,index:number)=>{
	      let data = {
	      	index: index,
	      	id: id
	      }
		  emit('removePlanItem',data)
	}

	const changeSuccess = (index:number,id:number)=>{
		let data = {
			index: index,
			id: id
		}
		emit('changePlanItem',data)
	}
</script>

<style lang="scss">
	.planitem{
		width: 100%;
		padding-bottom: 30rpx;
		.planitem-list{
			list-style: none;
			padding: 0;
			margin: 0;
			box-sizing: border-box;
		}
		.planitem-list-item{
			list-style: none;
			box-sizing: border-box;
			padding: 0 ;
			margin: 0;
			background: #fff;
			border-radius: 8rpx;
			margin-bottom: 20rpx;
			.planitem-list-item-wrapper{
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 24rpx 30rpx;
				.tlic-content{
					width: 570rpx;
					.tlic-content-title{
						font-size: 32rpx;
					}
					.tlic-content-other{
						font-size: 28rpx;
						margin-top: 20rpx;
					}
					.tlic-content-date{
						font-size: 24rpx;
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
