function $(selector,element){
	element = element || document;
	//获取传入参数的第一个字符
	var first = selector.charAt();
	//假如传入的第一个参数是#
	if(first == '#'){
		//获取的时 ID
		return document.getElementById(selector.slice(1));
	}else if(first == '.'){
		//如果获取的第一个参数是.
		return element.getElementsByClassName(selector.slice(1));
	}else{
		//如果第一个参数不是#也不是.
		return element.getElementsByTagName(selector);
	}
}