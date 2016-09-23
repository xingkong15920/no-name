//头部点击
window.onload = function() {
    // 获取头部
    var tHead  = document.getElementsByClassName('title_head')[0];
    var allA = tHead.getElementsByTagName('a');

    // 设置滚轮数字

    var flagNum = 0;

    // 设置滚轮时间
    var flogDate;

    //获取小三角
    var tri = document.getElementById('tri');
    tri.style.left = allA[0].offsetWidth/2 - tri.offsetWidth/2 + 'px';
    // 初始化head
    allA[0].style.backgroundColor = '#2e8b57';
    // 点击head网页内容运动
    for(var i = 0 ; i < allA.length ; i++){
        allA[i].index = i;
        allA[i].onclick = function(){
            for(var i = 0 ; i < allA.length ; i++ ){
                allA[i].style.backgroundColor = '';
            }
            flagNum = this.index;
            // 点击设置背景和指示三角位置
            this.style.backgroundColor = '#2e8b57';
            tri.style.left = allA[0].offsetWidth/2 - tri.offsetWidth/2 + this.index*allA[0].offsetWidth + 'px';
            move(list,this.index);
        }
    }

    // 滚轮控制页面
    document.onmousewheel = flogMove;
    document.addEventListener('DOMMouseScroll', flogMove);
    var isFlag = true;
    function flogMove(e){
        if (e.wheelDelta) {
            flag = e.wheelDelta > 0 ? true : false;
            var aFlogDate = new Date().getTime();
        } else {
            flag = e.detail < 0 ? true : false;
        }
        //console.log(isFlag);
        if(isFlag){
            isFlag = false;
            if (!flag){
                //console.log(isFlag);
                flagNum++;
                if(flagNum >= allA.length-1){
                    flagNum = allA.length-1;
                }
                fm();
            } else{
                flagNum--;
                if( flagNum <= 0 ){
                    flagNum = 0;
                }
                fm();
            }
        }
        e.preventDefault();

        return false;
    }

    // 滚轮事件封装函数

    function fm(){
        move(list,flagNum,function(){
            isFlag = true;
            //console.log(isFlag);
        });
        for(var i = 0 ; i < allA.length ; i++ ){
            allA[i].style.backgroundColor = '';
        }
        allA[flagNum].style.backgroundColor = '#2e8b57';
        tri.style.left = allA[0].offsetWidth/2 - tri.offsetWidth/2 + flagNum*allA[0].offsetWidth + 'px';
    }
    var contBox = document.getElementById('cont_box');
    contBox.style.height = document.documentElement.clientHeight + 'px';

    // 内容部分颜色
    var colorArr = ['#22b573','#2c3b4a','#22b573','#6699cc'];
    var list = document.getElementsByClassName('cont_list')[0];
    var listLi = list.getElementsByClassName('list_item');
    for(var i = 0 ; i < listLi.length;i++){
        listLi[i].style.height = document.documentElement.clientHeight + 'px';
        listLi[i].style.backgroundColor = colorArr[i];
    }


    // 作品展示
    var opus = document.getElementById('opus');
    var a = opus.getElementsByTagName('a');
    // console.dir(a[0]);
}
