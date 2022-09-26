var hamburger = document.getElementById('hamburger_btn');
var navigation = document.getElementById('nav_panel');
hamburger.addEventListener('click', function(){
    if(navigation.style.display=='none'){
        navigation.style.display = 'block';
    }else{
        navigation.style.display ='none';
    }
})

// function drop_down(evt, panel) {
//     var drop_item = document.getElementById(panel);
//     console.log('hello world');
//     drop_item.className += ' active';
//     drop_item.style.maxHeight = drop_item.scrollHeight + 'px';


// }

var whatIs = document.getElementById('what_is');
var whatIsAbsolute = document.getElementById('what_is_absolute');
// console.log(whatIsAbsolute.style.display);

whatIs.addEventListener('click', function(){
    if(whatIsAbsolute.className.split(' ').includes('active')){
        console.log('true here');
        whatIsAbsolute.style.maxHeight = null;
        whatIsAbsolute.className = whatIsAbsolute.className.replace(' active', "");


        // whatIsAbsolute.style.transition = '30s';
        // whatIsAbsolute.style.display = 'block';
       
    }else{
        console.log('not true');
        whatIsAbsolute.className += ' active';
        whatIsAbsolute.style.maxHeight = whatIsAbsolute.scrollHeight + 'px';
        // whatIsAbsolute.style.display ='none';
    }
})

var howDo = document.getElementById('how_do');
var howDoAbsolute = document.getElementById('how_do_absolute');
howDo.addEventListener('click', function(){
    if(howDoAbsolute.className.split(' ').includes('active')){
        console.log('true');
        howDoAbsolute.style.maxHeight = null;

        howDoAbsolute.className = howDoAbsolute.className.replace(' active', "");



    }else{
        // howDoAbsolute.style.display ='none';
        howDoAbsolute.className += ' active';
        howDoAbsolute.style.maxHeight = howDoAbsolute.scrollHeight + 'px';
    }
})

var iHave = document.getElementById('i_have');
var iHaveAbsolute = document.getElementById('i_have_absolute');
iHave.addEventListener('click', function(){
    if(iHaveAbsolute.className.split(' ').includes('active')){
        console.log('true');
        iHaveAbsolute.style.maxHeight = null;

        iHaveAbsolute.className = iHaveAbsolute.className.replace(' active', "");



    }else{
        // howDoAbsolute.style.display ='none';
        iHaveAbsolute.className += ' active';
        iHaveAbsolute.style.maxHeight = iHaveAbsolute.scrollHeight + 'px';
    }
})

var domainPrivacy = document.getElementById('domain_privacy');
var domainPrivacyAbsolute = document.getElementById('domain_privacy_absolute');
domainPrivacy.addEventListener('click', function(){
    if(domainPrivacyAbsolute.className.split(' ').includes('active')){
        console.log('true');
        domainPrivacyAbsolute.style.maxHeight = null;

        domainPrivacyAbsolute.className = domainPrivacyAbsolute.className.replace(' active', "");



    }else{
        // howDoAbsolute.style.display ='none';
        howDoAbsolute.className += ' active';
        domainPrivacyAbsolute.style.maxHeight = domainPrivacyAbsolute.scrollHeight + 'px';
    }
})


var howMany = document.getElementById('how_many');
var howManyAbsolute = document.getElementById('how_many_absolute');
howMany.addEventListener('click', function(){
    if(howManyAbsolute.className.split(' ').includes('active')){
        console.log('true');
        howManyAbsolute.style.maxHeight = null;

        howManyAbsolute.className = howManyAbsolute.className.replace(' active', "");



    }else{
        // howDoAbsolute.style.display ='none';
        howManyAbsolute.className += ' active';
        howManyAbsolute.style.maxHeight = howManyAbsolute.scrollHeight + 'px';
    }
})

var canI = document.getElementById('can_i');
var canIAbsolute = document.getElementById('can_i_absolute');
canI.addEventListener('click', function(){
    if(canIAbsolute.className.split(' ').includes('active')){
        console.log('true');
        canIAbsolute.style.maxHeight = null;

        canIAbsolute.className = canIAbsolute.className.replace(' active', "");



    }else{
        // howDoAbsolute.style.display ='none';
        canIAbsolute.className += ' active';
        canIAbsolute.style.maxHeight = canIAbsolute.scrollHeight + 'px';
    }
})

var howMuch = document.getElementById('how_much');
var howMuchAbsolute = document.getElementById('how_much_absolute');
howMuch.addEventListener('click', function(){
    if(howMuchAbsolute.className.split(' ').includes('active')){
        console.log('true');
        howMuchAbsolute.style.maxHeight = null;

        howMuchAbsolute.className = howMuchAbsolute.className.replace(' active', "");



    }else{
        // howDoAbsolute.style.display ='none';
        howMuchAbsolute.className += ' active';
        howMuchAbsolute.style.maxHeight = howMuchAbsolute.scrollHeight + 'px';
    }
})

var bestDomain = document.getElementById('best_domain');
var bestDomainAbsolute = document.getElementById('best_domain_absolute');
bestDomain.addEventListener('click', function(){
    if(bestDomainAbsolute.className.split(' ').includes('active')){
        console.log('true');
        bestDomainAbsolute.style.maxHeight = null;

        bestDomainAbsolute.className = bestDomainAbsolute.className.replace(' active', "");



    }else{
        // howDoAbsolute.style.display ='none';
        bestDomainAbsolute.className += ' active';
        bestDomainAbsolute.style.maxHeight = bestDomainAbsolute.scrollHeight + 'px';
    }
})

var alreadyTaken = document.getElementById('already_taken');
var alreadyTakenAbsolute = document.getElementById('already_taken_absolute');
alreadyTaken.addEventListener('click', function(){
    if(alreadyTakenAbsolute.className.split(' ').includes('active')){
        console.log('true');
        alreadyTakenAbsolute.style.maxHeight = null;

        alreadyTakenAbsolute.className = alreadyTakenAbsolute.className.replace(' active', "");



    }else{
        // howDoAbsolute.style.display ='none';
        alreadyTakenAbsolute.className += ' active';
        alreadyTakenAbsolute.style.maxHeight = alreadyTakenAbsolute.scrollHeight + 'px';
    }
})

var registerMore = document.getElementById('register_more');
var registerMoreAbsolute = document.getElementById('register_more_absolute');
registerMore.addEventListener('click', function(){
    if(registerMoreAbsolute.className.split(' ').includes('active')){
        console.log('true');
        registerMoreAbsolute.style.maxHeight = null;

        registerMoreAbsolute.className = registerMoreAbsolute.className.replace(' active', "");



    }else{
        // howDoAbsolute.style.display ='none';
        registerMoreAbsolute.className += ' active';
        registerMoreAbsolute.style.maxHeight = registerMoreAbsolute.scrollHeight + 'px';
    }
})