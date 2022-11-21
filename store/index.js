import {createStore} from 'vuex'

const themes = {
	linght: {
		appcolor: '#FC5531',
		appbgcolor: '#EDEDED',
		appboxcolor: '#FFF',
		fontcolorbase: '#555',
		fontcolorshallow: '#aaa',
		fontcolordeep: '#333',
		fontsizesmall: '13px',
		fontsizebase: '15px',
		fontsizelg: '17px',
	},
	draw: {
		appcolor: '#FC5531',
		appbgcolor: '#111',
		appboxcolor: '#282828',
		fontcolorbase: '#555',
		fontcolorshallow: '#aaa',
		fontcolordeep: '#fff',
		fontsizesmall: '13px',
		fontsizebase: '15px',
		fontsizelg: '17px',
	}
};
const store = createStore({
	state: {
		themeIndex: 'linght',
		theme: themes.linght,
		userInfo: {
			id:1,
			name:'lkjlkj',
			img: ''
		},
		todo: [],
		plan: [],
		data: {
			add_day: 0,
			finish_number: 0,
			total_number: 0,
			last_time: ''
		}
	},
	mutations: {
		changeTheme(state){
			if(state.themeIndex == 'linght'){
				state.theme = themes.draw
				state.themeIndex = 'draw'
				uni.setNavigationBarColor({
				    frontColor: '#ffffff',
				})
				uni.setTabBarStyle({
				  backgroundColor: '#000000',
				  borderStyle: 'white'
				})
			}else{
				state.theme = themes.linght
				state.themeIndex = 'linght'
				uni.setNavigationBarColor({
				    frontColor: '#000000',
				})
				uni.setTabBarStyle({
				  backgroundColor: '#ffffff',
				  borderStyle: 'black'
				})
			}
		},
		setUserInfo(state,data){
			state.userInfo = data;
		},
		setTodo(state,data){
			state.todo = data;
		},
		setPlan(state,data){
			state.plan = data;
		},
		setData(state,data){
			state.data = data;
		}
	}
})

export default store;