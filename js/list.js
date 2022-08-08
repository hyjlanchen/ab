
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

//赛程预告移动,整改时改成jqe,产生动画效果
var sche_ul=document.getElementById('schedule-list')
var span_right=document.getElementById('ctrl-right')
var span_leftt=document.getElementById('ctrl-left')

console.log(sche_ul)
console.log(span_right)
console.log(span_leftt)

span_right.onclick=function(){
    sche_ul.style.left='-886px'
    span_right.style.display='none'
    span_leftt.style.display='block'
}

span_leftt.onclick=function(){
    sche_ul.style.left='10px'
    span_right.style.display='block'
    span_leftt.style.display='none'
}


//相关游戏点击下拉
var  classify=document.getElementsByClassName('classify')[0]
var classify_ph_top1=document.getElementsByClassName('classify_ph_top1')[0]
var more_game_txt=document.getElementsByClassName('more_game_txt')[0]

more_game_txt.onclick=function(){
    classify.style.height='359px'
    classify_ph_top1.style.height='359px'
    more_game_txt.style.display='none'
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

