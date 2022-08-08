
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


// 弹幕上方鼠标移入有下拉
var con_beten_txtfour=document.getElementsByClassName('con_beten_txtfour')[0]
var deta_txtseven=document.getElementsByClassName('con_beten_txtseven')[0]

con_beten_txtfour.onmouseenter=function(){
    deta_txtseven.style.height='32px'
    con_beten_txtfour.style.height='320px'
}

con_beten_txtfour.onmouseleave=function(){
    deta_txtseven.style.height='0px'
    con_beten_txtfour.style.height='97px'
}


// 弹幕滚动
var conten_tran=document.getElementsByClassName('con_content_box')[0]

var trim_content;
var num_conten=0;
trim_content=setInterval(function(){
    num_conten++
    // console.log(num_conten)
    if(num_conten==541){
        num_conten=0
    }
    conten_tran.style.transform='translateY('+-num_conten+'px)';
},50)


// 发弹幕
var sed_btn=document.getElementsByClassName('send_button')[0]
var sed_text=document.getElementsByTagName('textarea')[0]

var sed;

sed_btn.onclick=function(){
    sed=sed_text.value
    if(sed==''){
        alert('不能为空')
        return
    }

    var divcrea=document.createElement('div')
    divcrea.setAttribute('class','con_content')
    divcrea.innerHTML=` <img src="img/xq/core_between1.png" alt="">
    <p class="core_brand">
        <span class="core_brand_imgbox">
            <img src="img/xq/core_brand_img1.webp" alt="" class="core_brand_img1">
            <img src="img/xq/core_brand_img2.png" alt="" class="core_brand_img2">
            <img src="img/xq/core_brand_img3.webp" alt="" class="core_brand_img3">
            <img src="img/xq/core_brand_img4.png" alt="" class="core_brand_img3">
            <i class="core_brand_name">訫态</i>
        </span>
    </p>
    <span class="core_name">七月初五1997【925】</span>
    <p class="core_chenghao" title="称号">
        <img src="img/xq/core_chengh.png" alt="">
    </p>
    <span class="colon">:</span>
    <span class="core_msg">${sed}</span>`
    conten_tran.appendChild(divcrea)
    sed_text.value=""

}


//左侧分类的弹出
var ejsole=document.getElementsByClassName('collapse_arrow')[0]  //大的分类收回按钮
var big_eject=document.getElementsByClassName('eject_right')[0]   //大的分类主要内容框
var small_eject=document.getElementsByClassName('navigation')[0]   //小的分类主要内容框
var ejopen=document.getElementById('sidebar-show-btn')           //展开按钮
var mainshow_move=document.getElementsByClassName('mainshow_top')[0]   //直播主要荧屏
var coll=document.getElementsByClassName('eject_topbox_betton-uparrow')[0]  //赛事直播收起按钮
var math_txt_con=document.getElementsByClassName('eject_topbox_betton-main')[0]//赛事直播内容

ejsole.onclick=function(){
    big_eject.style.display='none'
    small_eject.style.display='block'
    mainshow_move.style.marginLeft='auto'
}

ejopen.onclick=function(){
    big_eject.style.display='block'
    small_eject.style.display='none'
    mainshow_move.style.marginLeft='276px'
}

var num_coll=0

coll.onclick=function(){
    coll.setAttribute('index',num_coll)
    if(coll.getAttribute('index')==1){
        math_txt_con.style.display='block'
        coll.style.transform='rotate(0deg)'
        num_coll=0
    }else{
        math_txt_con.style.display='none'
        coll.style.transform='rotate(180deg)'
        num_coll++
    }
    
}
