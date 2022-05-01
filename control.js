const btn1 = document.getElementById('myBtn1');
const btn2 = document.getElementById('myBtn2');
var img = document.getElementById("myImage");

btn1.addEventListener('click',function(){
    img.src='Asset/images/pic_bulbon.gif';
})

btn2.addEventListener('click',function(){
    img.src='Asset/images/pic_bulboff.gif';
})
