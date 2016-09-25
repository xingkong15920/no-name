
// 抖动函数
function shake(obj,attr,speed,callback){
	clearInterval(obj[attr]);
	speed = speed || 30; //给默认值为30
	var arr = [];
	//得到一堆正负数
	for( var i = speed; i > 0; i-=10 ){
		arr.push(i,-i);
	}
	arr.push(0);
	var m = 0;
	var b = parseFloat(getComputedStyle(obj)[attr]);
	obj[attr] = setInterval(function (){
		obj.style[attr] = b + arr[m] + "px";
		m++;
		//到m为length的时候，清除定时器
		if( m === arr.length ){
			clearInterval(obj[attr])
		};
	},30);
	if (typeof callback == 'function') {
		callback();
	}
}
//运动封装函数
function move(obj,num,callback){
    //起始位置
    var startT = parseFloat(getComputedStyle(obj).top);
    //起始时间
    var starTime = new Date().getTime();
    //需要移动的距离
    var count = -document.documentElement.clientHeight*num - startT;
    //花费总时间 ms
    var duration = 500;
    //每次点击都要停止定时器
    clearInterval(timer);
    // 定时器
    var timer = setInterval(function(){
        //计算时间差
        var time = new Date().getTime() - starTime;
        //当运行时间大于预定花费时间
        if(time > duration){
            //强行将当时间差(运行时间) = 花费总时间
            //并且停止定时器
            time = duration;
            clearInterval(timer);
        }
		if(time == duration){
			if(typeof callback == 'function'){
				callback();
			}
		}
        //公式 :起始位置  + (匀速度 = 总距离 / 花费总时间) * 时间差(每次运行时间)
        var sp = startT + count / duration * time;
        obj.style.top = sp + 'px';
    },30)
}
