var submit=document.querySelector('.submit')
var done=document.querySelector('.sucess')
var upload=document.querySelector('.upload')
var BtnAud=document.querySelector('audio')
var DoneAud=document.querySelectorAll('audio')[1]
var Ip=document.querySelector('input')
submit.addEventListener('webkitAnimationStart',function(){  
    BtnAud.play();
    Ip.disabled=true;
})
submit.addEventListener('webkitAnimationEnd',function(){   
    submit.hidden=true; 
    upload.style.display='flex';
    upload.children[0].style.display='inline';
})
upload.addEventListener('webkitAnimationEnd',function(){  
    upload.style.display='none'
    done.style.display='flex';
    DoneAud.play()
})
done.addEventListener('webkitAnimationEnd',function(){  
    done.style.background
   

})


