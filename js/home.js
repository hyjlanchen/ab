//导航栏下拉框
var list_fl=document.getElementById("nav_box").children
for(var i=0;i<list_fl.length;i++){
    list_fl[i].onmouseenter=function(){
        if(this.children.length!=0){
            this.children[1].style.display='inline-block'
        }
    }

    list_fl[i].onmouseleave=function(){
        if(this.children.length!=0){
            this.children[1].style.display='none'
        }
    }
}

// 导航栏右侧的下拉框
var list_fl_right=document.getElementById("yyyy").children
for(var i=0;i<list_fl_right.length;i++){
    list_fl_right[i].onmouseenter=function(){
        if(this.children.length!=0){
            this.children[1].style.display='inline-block'
        }
    }
    list_fl_right[i].onmouseleave=function(){
        if(this.children.length!=0){
            this.children[1].style.display='none'
        }
    }
}


// 展示选择项卡
var list_show=document.getElementById('sow').children     //div
var boxs_show1=document.getElementById('ppph').children   //li

for(var i=0;i<list_show.length;i++){
    boxs_show1[i].setAttribute('index',i)

    boxs_show1[i].onclick=function(){
        var t_show=this.getAttribute('index')
        for(var t=0;t<boxs_show1.length;t++){
            boxs_show1[t].removeAttribute('class')
            list_show[t].removeAttribute('class')
        }
        list_show[t_show].setAttribute('class','curee')
        this.setAttribute('class','curee')
    }
}

// 播放链接详情页
var bafang=document.getElementsByClassName('bafang')

for(var ba=0;ba<bafang.length;ba++){
    bafang[ba].onclick=function(){
        location.href='detail.html'
    }
}

//登录页面的登录按钮
var login=document.getElementsByClassName('login_left_button')[0]
login.onclick=function(){
    location.href='index.html'
}


//轮播图
var boxs_lun=document.getElementsByClassName('math_lunbo_box')[0]
var list_lun=document.getElementsByClassName('math_lunbo_list')[0].children
var boxs_main=document.getElementsByClassName('math_luanbo')[0]
var lun_left=document.getElementById('left')
var lun_right=document.getElementById('right')
console.log(boxs_lun)
console.log(list_lun)
console.log(boxs_main)
var num_lun=0;
var trim_lun;

playtiim()
function playtiim(){

trim_lun=setInterval(function(){
    num_lun++
    if(num_lun==6){
        num_lun=0
    }
    boxs_lun.style.transform='translateX('+-num_lun*443+'px)';

    for(var t=0;t<list_lun.length;t++){
        list_lun[t].removeAttribute ('class')
    }
    list_lun[num_lun].setAttribute('class','curll')
},1000)
}

boxs_main.onmouseenter=function(){
    clearInterval(trim_lun)
}

boxs_main.onmouseleave=function(){
    playtiim()
}

for(var i=0;i<list_lun.length;i++){
    list_lun[i].setAttribute('index',i)

    list_lun[i].onclick=function(){
        var lun=this.getAttribute('index')
        for(var t=0;t<list_lun.length;t++){
            list_lun[t].removeAttribute('class')
        }
        boxs_lun.style.transform='translateX('+-lun*443+'px)';
        list_lun[lun].setAttribute('class','curll')
    }
}


lun_left.onclick=function(){
    num_lun--
    if(num_lun==-1){
        num_lun=5
    }
    boxs_lun.style.transform='translateX('+-num_lun*443+'px)';

    for(var t=0;t<list_lun.length;t++){
        list_lun[t].removeAttribute ('class')
    }
    list_lun[num_lun].setAttribute('class','curll')
}

lun_right.onclick=function(){
    num_lun++
    if(num_lun==6){
        num_lun=0
    }
    boxs_lun.style.transform='translateX('+-num_lun*443+'px)';

    for(var t=0;t<list_lun.length;t++){
        list_lun[t].removeAttribute ('class')
    }
    list_lun[num_lun].setAttribute('class','curll')
}



//鼠标移入图片显示
var list_monitor=document.getElementById("math_monitor").children

for(var i=0;i<list_monitor.length;i++){
    list_monitor[i].onmouseenter=function(){
        for(var t=0;t<list_monitor.length;t++){
            list_monitor[t].children[2].style.display='none'
        }
        if(this.children.length!=0){
            this.children[2].style.display='inline-block'          
        }
    }

}

//登录取消弹窗
var login_back=document.getElementsByClassName('login_fiex_back')[0] //整个屏幕背景
var close_btn=document.getElementsByClassName('close-layer')[0]  //打叉小图标
var open_layer=document.getElementsByClassName('open_layer')[0]  //导航栏上的登录按键

close_btn.onclick=function(){
    login_back.style.display='none'
}

open_layer.onclick=function(){
    login_back.style.display='block'
}


// 回到顶部jquery
$(window).scroll(function(){
    // 每滚动一次，执行一次
    console.log($(window).scrollTop())
    // $(window).scrollTop()滚动距离
    // if($(window).scrollTop()>200){
    //     $('header').addClass('one')
    // }else{
    //     $('header').removeClass('one')
    // }
})
$('.fixed_button').click(function(){
    // 设置滚动坐标
    // $(window).scrollTop(500)
    // 滚动带有动画 特殊修改方式
    $('html,body').animate({'scrollTop':$('.header').offset().top})
    // 检测标签距离顶部的坐标值
    // console.log($('.first').offset().top)
})

// 固定定位头部logo消失

