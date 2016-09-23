window.onload = function() {
	//获取元素
	var btn1 = document.getElementById('btn1');
	var box = document.getElementById('box');
	var imgs = document.getElementById("img");
	var box1 = document.getElementById("box1");
	var box2 = document.getElementById("box2");
	//设置三个变量，分别为得分，失分，控制速度；
	var num = 0;
	var n = 0 ;
	var m = 11;
	//初始化分数
	box1.innerHTML = '得分:'+ num;
	box2.innerHTML = '失分:'+ n;
	//调用的函数
	function fn(){
		if(m <= 0){
			m = 1;
		}
		//获得随机数，分别是left值和图片的值
		var d = Math.ceil(Math.random()*500)||1;
		var t = Math.ceil(Math.random()*20)||1;
		//每次调用的时候，top值到最上面
		imgs.style.top = "-24px";
		//left值随机
		imgs.style.left = d +'px';
		//图片随机
		imgs.src = 'imgs/'+ t +'.gif';
		//图片运动
		mTween(imgs,"top",440,m*500,"linear",function (){
			console.log(box);
			//如果运动完，box上下抖动
			shake(box,'top',20,function(){
				//失分的值+1,并且加快移动速度；
				n++;
				m--;
				box2.innerHTML = '失分:'+ n;
				//递归继续执行函数
				fn();
				//如果失分为10
				if(n == 10){
					//弹出gameover
					alert('game over');
					//重置得分和各种值
					repeat();
				}
			});
		});	
	}
	//点击开始游戏的按钮
	btn1.onclick = function (){
		//把按钮变为不可点，value变为正在游戏
		this.disabled  = true;
		this.value = '正在游戏';
		fn();	
	};
	imgs.onmousedown = function (){
		//点击到时切换图片
		imgs.src = 'imgs/black.gif';
		//同时运动的速度加快
		m--;
		//得分的值加1
		num++;
		box1.innerHTML = '得分:'+ num;
		//停止定时器
		clearInterval(imgs.top);
		//图片抖动
		shake(imgs,'left',20,function(){
			//抖动万以后判断得分，如果为10，弹出恭喜，重新开始游戏
			if(num == 10){
				alert('恭喜通关');
				repeat();
				clearInterval(imgs.top);
				imgs.style.top = "-24px";
			}else{
				//如果不为10，继续执行函数
				fn();
			}
		});
	};
	//重复调用的函数
	function repeat(){
		m = 11;
		n = 0;
		num = 0;
		box1.innerHTML = '得分:'+ num;
		box2.innerHTML = '失分:'+ n;
		clearInterval(imgs.top);
		console.log(n);
		btn1.disabled  = false;
		btn1.value = '开始游戏';
	}
}
