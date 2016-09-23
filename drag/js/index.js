var box = document.getElementById('box');
	var img = document.getElementById('img');
	img.onmousedown = function(e) {
		//img点击的时候，根据下边的函数，来决定是拖拽还是拉伸
		fn(img,e);
		return false;
	}
	box.onmousedown = function(e) {
		//box点击的时候，根据下边的函数，来决定是拖拽还是拉伸
		fn(box,e);
}
//啦宽高的函数
function fn(obj,e) {
	//分别获取left,top,width,height
	var boxL = obj.offsetLeft;
	var boxT = obj.offsetTop;
	var boxW = obj.offsetWidth;
	var boxH = obj.offsetHeight;
	//设定L为点击下去时的X坐标
	var L = e.clientX;
	//设定T为点击下去时的Y坐标
	var T = e.clientY;
	//console.log(boxL,boxT,boxW,boxH);
	//设置一个存储变量的值
	var flog = '';
	if(e.clientX < boxL +10){
		//如果点击下去的值是在距离左边框以内的10PX内，变量为left
		flog = 'left';
		//e.cancelBubble = true;
	}
	if(e.clientX > boxL+boxW -10){
		//如果点击下去的值是在距离右边框以内的10PX内，变量为right
		flog = 'right';
		//e.cancelBubble = true;
	}
	if(e.clientY > boxT + boxH -10){
		//如果点击下去的值是在距离下边框以内的10PX内，变量为bottom
		flog = 'bottom';
		//e.cancelBubble = true;
	}
	if(e.clientY < boxT +10){
		//如果点击下去的值是在距离上边框以内的10PX内，变量为top
		flog = 'top';
		//e.cancelBubble = true;
	}
	//console.log(flog);
	switch(flog){
		//switch函数
		//如果为right
		case 'right':
		//执行move函数，增加宽度为box的宽度加上（移动的X坐标减去点击时的坐标）
			document.onmousemove = function(e) {
				obj.style.width = boxW + (e.clientX - L) +'px';
			}
			break;
		case 'left':
		//执行move函数，增加宽度为box的宽度加上（点击时的坐标减去移动的X坐标）
		//同时设置left的值为原来的left值加上（移动的坐标减去点击的坐标的值）
			//console.log('fdafdas');
			document.onmousemove = function(e) {
				obj.style.width = boxW + (L - e.clientX) +'px';	
				obj.style.left = boxL + (e.clientX - L) +'px';
			}
			break;
		case 'bottom':
		//执行move函数，增加高度为box的高度加上（点击时Y的坐标减去移动的Y坐标）
			document.onmousemove = function(e) {
				//console.log(boxH,L,e.clientY)
				obj.style.height = boxH + (e.clientY - T) +'px';
			}
			break;
		case 'top':
		//执行move函数，增加高度为box的高度加上（点击时的Y坐标减去移动的Y坐标）
		//同时设置top的值为原来的top值加上（移动的Y坐标减去点击的Y坐标的值）
			document.onmousemove = function(e){
				obj.style.height = boxH + ( T - e.clientY) +'px';
				obj.style.top = boxT + (e.clientY -T) +'px';
			}
			break;
		case '':
		//如果flog为空，就证明不是点击的四边，这时候不改变宽高，改为
		//执行拖拽函数	
			move(obj,e);
			break;
		}	
		//鼠标抬起时，清楚move的函数
		document.onmouseup = function() {
			document.onmousemove = null;
		}
		//阻止默认事件
		return false;
}
//移动的函数
function move(obj,e){
	//获取两个值，分别为X坐标减去obj的left值
	//Y坐标减去obj的top值
	var boxW = e.clientX - obj.offsetLeft;
	var boxH = e.clientY - obj.offsetTop;
	//移动函数
	document.onmousemove = function(a) {
		//L为当前移动的X坐标减去boxW
		//T为当前移动的Y坐标减去boxH
		var L = a.clientX - boxW;
		var T = a.clientY - boxH;
		//console.log(L,T)
		//判断L和T，来让box移动不出界限
		if(L < 0 ){
			L = 0;
		}
		if( L > window.innerWidth - obj.offsetWidth){
			L = window.innerWidth - obj.offsetWidth
		}
		if(T < 0 ){
			T = 0;
		}
		if( T > window.innerHeight - obj.offsetHeight){
			T = window.innerHeight - obj.offsetHeight;
		}
		//给obj赋值L和T；
		obj.style.left = L+'px';
		obj.style.top = T +'px';
		//执行碰撞检测函数
		fnnn();
	}
}
//检测碰撞的函数
function fnnn() {
	//分别获取box的left,top,width,height
	//还有img的left,top,width,height
	var L1 = box.offsetLeft;
	var L2 = img.offsetLeft;
	var T1 = box.offsetTop;
	var T2 = img.offsetTop;
	var W1 = box.offsetWidth;
	var W2 = img.offsetWidth;
	var H1 = box.offsetHeight;
	var H2 = img.offsetHeight;
	//console.log(L1,L2,T1,T2,W1,W2,H1,H2);
	//判断有没有碰撞，如果有，img变为2，如果没有，变为1
	if(L1 + W1 > L2 && L1 < L2 + W2 && T1 + H1 > T2 && T1 < T2 + H2){
		//console.log(2);
		img.src = 'img/2.jpg';
	}else{
		//console.log(1);
		img.src = 'img/1.jpg';
	}
}