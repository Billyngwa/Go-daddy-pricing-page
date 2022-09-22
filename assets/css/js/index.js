alert = 'hello world';
var hamburger = document.getElementById('hamburger_btn');
var navigation = document.getElementById('nav_panel');
var sectionFour = document.getElementsById('section-four-relative');
var sectionFourAbsolute = document.getElementsById('scetion-four-absolute');
hamburger.addEventListener('click', function(){
    if(navigation.style.display=='none'){
        navigation.style.display = 'block';
    }else{
        navigation.style.display ='none';
    }
})

sectionFour.addEventListener('click', function(){
    if(sectionFourAbsolute.style.display=='block'){
        sectionFourAbsolute.style.display = 'none';
    }else{
        sectionFourAbsolute.style.display = 'block';
    }
})