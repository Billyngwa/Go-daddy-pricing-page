alert = 'hello world';
var hamburger = document.getElementById('hamburger_btn');
var navigation = document.getElementById('nav_panel');
hamburger.addEventListener('click', function(){
    if(navigation.style.display=='none'){
        navigation.style.display = 'block';
    }else{
        navigation.style.display ='none';
    }
})