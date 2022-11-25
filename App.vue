<script>
import { showInfo } from './utils/base';
	export default {
		onLaunch: function() {
			uni.onTabBarMidButtonTap(()=>{
				uni.navigateTo({
					url:'/pages/add/add',
					animationType:'slide-in-bottom'
				})
			})
			const that = this;
			uni.getStorage({
				key: 'opentodo',
				success: function (res) {
					if(res.data.id){
						that.$store.commit('setUserInfo',res.data);
						uni.navigateTo({
							url:'/pages/index/index'
						})
					}else{
						uni.navigateTo({
							url:'/pages/login/login'
						})
					}
				},
				fail: (res) => {
					uni.navigateTo({
						url:'/pages/login/login'
					})
				}
				
			});
			uni.onNetworkStatusChange(function (res) {
				if(res.networkType == 'none'){
					showInfo('网络不给力~')
				}
			});
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	#app{
		background: v-bind(theme);
		min-height: 100vh;
	}
</style>
