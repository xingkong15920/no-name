//头部点击
window.onload = function() {
    // 获取头部
    var tHead  = document.getElementsByClassName('title_head')[0];
    var allA = tHead.getElementsByTagName('a');

    //获取小三角
    var tri = document.getElementById('tri');
    tri.style.left = allA[0].offsetWidth/2 - tri.offsetWidth/2 + 'px';
    // 初始化head
    allA[0].style.backgroundColor = '#2e8b57';
    for(var i = 0 ; i < allA.length ; i++){
        allA[i].index = i;
        allA[i].onclick = function(){
            for(var i = 0 ; i < allA.length ; i++ ){
                allA[i].style.backgroundColor = '';
            }
            // 点击设置背景和指示三角位置
            this.style.backgroundColor = '#2e8b57';
            tri.style.left = allA[0].offsetWidth/2 - tri.offsetWidth/2 + this.index*allA[0].offsetWidth + 'px';
            move(list,this.index);
        }
    }
    // 设置内容部分的高度
    var contBox = document.getElementById('cont_box');
    contBox.style.height = document.documentElement.clientHeight + 'px';

    // 内容部分颜色
    var colorArr = ['#22b573','#6699cc'];
    var list = document.getElementsByClassName('cont_list')[0];
    var listLi = list.getElementsByTagName('li');
    for(var i = 0 ; i < listLi.length;i++){
        listLi[i].style.height = document.documentElement.clientHeight + 'px';
        listLi[i].style.backgroundColor = colorArr[i%colorArr.length];
    }


}
