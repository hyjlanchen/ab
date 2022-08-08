var input_name=document.getElementById('name')
var input_password=document.getElementById('password')
var span_name=document.getElementById('span_name')
var span_passwd=document.getElementById('span_passwd')

//焦点移出
input_name.onblur=function(){
    // input_name.style.outline='orange'
    if(input_name.value==""){
        span_name.style.display='inline-block'
    }
}

input_password.onblur=function(){
    if(input_password.value==""){
        span_passwd.style.display='inline-block'
    }
}


var login=document.getElementsByClassName('W_btn_a')[0]
login.onclick=function(){
    location.href='index.html'
}