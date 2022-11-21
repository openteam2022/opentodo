<template>
	<view class="status-bar" :style="{background: bg}">
		
	</view>
</template>

<script setup lang="ts">
import { ref,watch } from "vue";
	interface itemProps{
		fontColor?:string,
		bgColor?: string
	}
	const props = defineProps<itemProps>()
	
	const bg:string = ref(props.bgColor) || '#FFF';
	
	watch(props,(n,o)=>{
		bg.value = n.bgColor
	})
	
	
</script>

<style lang="scss" scoped>
	.status-bar{
		width: 100%;
		height: var(--status-bar-height);
	}
</style>
