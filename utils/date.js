class Dates {
	constructor(){
		this.date = new Date();
		this.getYear();
		this.getMonth();
		this.getDay();
		this.getHour();
		this.getMinute();
		this.getSecond();
	}
	// 获取周几
	getWeek(){
		let week = new Date(this.getTime());
		let day = week.getDay() == 0 ? 7 : week.getDay();
		return day;
	}
	//获取年份
	getYear(){
		this.year = this.date.getFullYear();
		return this.year;
	}
	//获取月份
	getMonth(){
		this.month = this.date.getMonth() + 1;
		return this.month;
	}
	//获取几号
	getDay(){
		let day = this.date.getDate();
		this.day  = day < 10 ? `0${day}`: day;
		return this.day;
	}
	// 小时
	getHour(){
		this.hour = this.date.getHours();
		return this.hour;
	}
	// 分钟
	getMinute(){
		let minute = this.date.getMinutes();
		this.minute =  minute < 10 ? `0${minute}`: minute;
		return this.minute;
	}
	//秒
	getSecond(){
		let second = this.date.getSeconds();
		this.second = second < 10 ? `0${second}`: second;
		return this.second;
	}
	//获取日期
	getDate(){
		let date = `${this.year}-${this.month}-${this.day}`;
		return date;
	}
	//获取时间
	getTime(){
		let time = `${this.getDate()} ${this.hour}:${this.minute}:${this.second}`;
		return time;
	}
	
	// 时间差天数
	differDay(startDate,endDate){
		let now = new Date(startDate).valueOf();
		let end = new Date(endDate).valueOf();
		let DifferDay = Math.ceil((end - now) / 86400000)
		if(DifferDay < 0){
			return 0
		}else{
			return DifferDay
		}
	}
}

const date = new Dates();
export default date;