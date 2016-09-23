window.onload = function() {
	//获取元素
	var bigBox = $('#bigbox');
//	var chooseBox = $('#choosebox');
//	var brandBox = $('#brandbox');
//	var moneyBox = $('#moneybox');
//	var feaBox = $('#feabox');
//	var confiBox = $('#confibox');
	var aDiv = $('div',bigBox);
	//创建四个函数，分别对应adata的value值
	var aa = ['brand','money','fea','confi'];
	//console.log(aa[0]);
	//创建元素的函数
//	fn(brandBox,'brand');
//	fn(moneyBox,'brand');
//循环一下创建节点的函数
	for(var i = 1 ; i < aDiv.length;i++){
		fn(aDiv[i],aa[i-1],i);
	}
	//创建节点的函数，obj是对应的div，ico是对应的adata里的value，num是对应的data-id
	function fn(obj,ico,num){
		//创建一个p节点
		var p = document.createElement('p');
		//循环遍历adata下value对应的数组，创建a标签，并且设置a的样式
		for(var attr in aData[ico]){
			var a = document.createElement('a');
			a.innerHTML = aData[ico][attr];
			a.setAttribute('name-id',aData[ico][attr])
			a.href = 'javescript:;';
			a.style.cssText = 'padding:0 10px;display:inline-block;line-height:30px;';
			//把a标签插入p标签
			p.appendChild(a);
		}
		//console.log(aData.brand);
		//p标签的data-id的自定义值为对应的num，是上面的循环对应的i值
		p.setAttribute('data-id',num);
		//对应的div里插入p
		obj.appendChild(p);
	}
	//获取所有的啊标签
	var all = $('a',bigBox);
	//console.log(all);
	//for循环
	for(var i = 0 ; i < all.length;i++){
		//点击a标签时
		all[i].onclick = function() {
			//生成span标签和input标签
			var span = document.createElement('span');
			var input = document.createElement('input');
			//input标签的type和value
			input.type = 'button';
			input.value = 'x';
			//input点击时，删除span
			input.onclick = function(){
				aDiv[0].removeChild(this.parentNode);
			}
			//span的innerHTML等于a标签的name-id
			span.innerHTML = this.getAttribute('name-id');
			//把input插入span
			span.appendChild(input);
			//设置span的自定义data-id等于a标签的父级p标签的data-id
			span.setAttribute('data-id',this.parentNode.getAttribute('data-id'));
			//获取adiv[0]下的所有的span
			var aSpan = $('span',aDiv[0]);
			//在aspan不为undefined时
			if(aSpan != undefined){
				//循环判断
				for(var i = 0; i < aSpan.length;i++){
					//如果span的data-id有一样的，那么把这个span删除
					if(span.getAttribute('data-id') == aSpan[i].getAttribute('data-id')){
						aDiv[0].removeChild(aSpan[i])
					}
				}
			}
			//把新的span放入adiv里
			aDiv[0].appendChild(span);
//			排序函数
			move();
		}
	}
	//排序函数
	function move(){
		//获取所有的span
		var aSpan = $('span',aDiv[0]);
		//空数组
		var arr = [];
		//把aSpan放在arr里
		for(var i=0;i<aSpan.length;i++)
		{
			arr.push(aSpan[i]);
		}
		//在arr里根据data-id进行排序
		arr.sort(function(a,b){
			return a.getAttribute('data-id') - b.getAttribute('data-id')});
		//console.log(arr);
		//然后把排序后的arr从新放进adiv里
		for(var i=0;i<arr.length;i++)
		{
			aDiv[0].appendChild(arr[i]);
		}
	}
}
