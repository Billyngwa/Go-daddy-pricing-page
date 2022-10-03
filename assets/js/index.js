

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

// ijhfhgurhgruvhfuvhr8ufghrfurfhv8rhgr8evhsfuvhufsvhfvfvfv

var defaultActive = document.getElementsByClassName('section_four_absolute');
for(i=0; i<defaultActive.length; i++){
    defaultActive[i].className += ' active';
    defaultActive[i].style.maxHeight = defaultActive[i].scrollHeight+'px';
}
var whatIsHeading = document.getElementById('heading_one');
var whatIsIcon = document.getElementById('first_icon');
var whatIs = document.getElementById('what_is');
var whatIsAbsolute = document.getElementById('what_is_absolute');
// console.log(whatIsAbsolute.style.display);

whatIs.addEventListener('click', function(){
    if(whatIsAbsolute.className.split(' ').includes('active')){
        console.log('true here');
        whatIsAbsolute.style.maxHeight = null;
        whatIsAbsolute.className = whatIsAbsolute.className.replace(' active', "");
        whatIsIcon.style.transform = 'rotate(270deg)';
        whatIsIcon.style.color = 'black';
        whatIsHeading.style.textDecoration = 'underline'

        // whatIsAbsolute.style.transition = '30s';
        // whatIsAbsolute.style.display = 'block';
       
    }else{
        console.log('not true');
        whatIsAbsolute.className += ' active';
        whatIsAbsolute.style.maxHeight = whatIsAbsolute.scrollHeight + 'px';
        whatIsIcon.style.transform = 'rotate(360deg)';
        whatIsIcon.style.color = '#e24747';
        whatIsHeading.style.textDecoration = 'none'
        // whatIsAbsolute.style.display ='none';
    }
})

var howDoHeading = document.getElementById('heading_two');
var howDoIcon = document.getElementById('second_icon');
var howDo = document.getElementById('how_do');
var howDoAbsolute = document.getElementById('how_do_absolute');
howDo.addEventListener('click', function(){
    if(howDoAbsolute.className.split(' ').includes('active')){
        console.log('true');
        howDoAbsolute.style.maxHeight = null;

        howDoAbsolute.className = howDoAbsolute.className.replace(' active', "");

        howDoIcon.style.transform = 'rotate(270deg)';
        howDoIcon.style.color = 'black';

    }else{
        // howDoAbsolute.style.display ='none';
        howDoAbsolute.className += ' active';
        howDoAbsolute.style.maxHeight = howDoAbsolute.scrollHeight + 'px';
        howDoIcon.style.transform = 'rotate(360deg)';
        howDoIcon.style.color = '#e24747';
    }
})

var iHaveHeading = document.getElementById('heading_three');
var iHaveIcon = document.getElementById('third_icon');
var iHave = document.getElementById('i_have');
var iHaveAbsolute = document.getElementById('i_have_absolute');
iHave.addEventListener('click', function(){
    if(iHaveAbsolute.className.split(' ').includes('active')){
        console.log('true');
        iHaveAbsolute.style.maxHeight = null;

        iHaveAbsolute.className = iHaveAbsolute.className.replace(' active', "");
        iHaveIcon.style.transform = 'rotate(270deg)';
        iHaveIcon.style.color = 'black';


    }else{
        // howDoAbsolute.style.display ='none';
        iHaveAbsolute.className += ' active';
        iHaveAbsolute.style.maxHeight = iHaveAbsolute.scrollHeight + 'px';
        iHaveIcon.style.transform = 'rotate(360deg)';
        iHaveIcon.style.color = '#e24747';
       
    }
})

var domainPrivacyHeading = document.getElementById('heading_four');
var domainPrivacyIcon = document.getElementById('fourth_icon');
var domainPrivacy = document.getElementById('domain_privacy');
var domainPrivacyAbsolute = document.getElementById('domain_privacy_absolute');
domainPrivacy.addEventListener('click', function(){
    if(domainPrivacyAbsolute.className.split(' ').includes('active')){
        console.log('true');
        domainPrivacyAbsolute.style.maxHeight = null;

        domainPrivacyAbsolute.className = domainPrivacyAbsolute.className.replace(' active', "");
        domainPrivacyIcon.style.transform = 'rotate(270deg)';
        domainPrivacyIcon.style.color = 'black';


    }else{
        // howDoAbsolute.style.display ='none';
        domainPrivacyAbsolute.className += ' active';
        domainPrivacyAbsolute.style.maxHeight = domainPrivacyAbsolute.scrollHeight + 'px';
        domainPrivacyIcon.style.transform = 'rotate(360deg)';
        domainPrivacyIcon.style.color = '#e24747';
    }
})

var howManyHeading = document.getElementById('heading_five');
var howManyIcon = document.getElementById('fifth_icon');
var howMany = document.getElementById('how_many');
var howManyAbsolute = document.getElementById('how_many_absolute');
howMany.addEventListener('click', function(){
    if(howManyAbsolute.className.split(' ').includes('active')){
        console.log('true');
        howManyAbsolute.style.maxHeight = null;

        howManyAbsolute.className = howManyAbsolute.className.replace(' active', "");

        howManyIcon.style.transform = 'rotate(270deg)';
        howManyIcon.style.color = 'black';

    }else{
        // howDoAbsolute.style.display ='none';
        howManyAbsolute.className += ' active';
        howManyAbsolute.style.maxHeight = howManyAbsolute.scrollHeight + 'px';
        howManyIcon.style.transform = 'rotate(360deg)';
        howManyIcon.style.color = '#e24747';
    }
})

var canIHeading = document.getElementById('heading_six');
var canIIcon = document.getElementById('sixth_icon');
var canI = document.getElementById('can_i');
var canIAbsolute = document.getElementById('can_i_absolute');
canI.addEventListener('click', function(){
    if(canIAbsolute.className.split(' ').includes('active')){
        console.log('true');
        canIAbsolute.style.maxHeight = null;

        canIAbsolute.className = canIAbsolute.className.replace(' active', "");
        canIIcon.style.transform = 'rotate(270deg)';
        canIIcon.style.color = 'black';


    }else{
        // howDoAbsolute.style.display ='none';
        canIAbsolute.className += ' active';
        canIAbsolute.style.maxHeight = canIAbsolute.scrollHeight + 'px';

        canIIcon.style.transform = 'rotate(360deg)';
        canIIcon.style.color = '#e24747';
    }
})


var howMuchHeading = document.getElementById('heading_seven');
var howMuchIcon = document.getElementById('seventh_icon');
var howMuch = document.getElementById('how_much');
var howMuchAbsolute = document.getElementById('how_much_absolute');
howMuch.addEventListener('click', function(){
    if(howMuchAbsolute.className.split(' ').includes('active')){
        console.log('true');
        howMuchAbsolute.style.maxHeight = null;

        howMuchAbsolute.className = howMuchAbsolute.className.replace(' active', "");
        howMuchIcon.style.transform = 'rotate(270deg)';
        howMuchIcon.style.color = 'black';



    }else{
        // howDoAbsolute.style.display ='none';
        howMuchAbsolute.className += ' active';
        howMuchAbsolute.style.maxHeight = howMuchAbsolute.scrollHeight + 'px';

        howMuchIcon.style.transform = 'rotate(360deg)';
        howMuchIcon.style.color = '#e24747';
    }
})

var bestDomainHeading = document.getElementById('heading_eight');
var bestDomainIcon = document.getElementById('eighth_icon');
var bestDomain = document.getElementById('best_domain');
var bestDomainAbsolute = document.getElementById('best_domain_absolute');
bestDomain.addEventListener('click', function(){
    if(bestDomainAbsolute.className.split(' ').includes('active')){
        console.log('true');
        bestDomainAbsolute.style.maxHeight = null;

        bestDomainAbsolute.className = bestDomainAbsolute.className.replace(' active', "");
        bestDomainIcon.style.transform = 'rotate(270deg)';
        bestDomainIcon.style.color = 'black';


    }else{
        // howDoAbsolute.style.display ='none';
        bestDomainAbsolute.className += ' active';
        bestDomainAbsolute.style.maxHeight = bestDomainAbsolute.scrollHeight + 'px';
        bestDomainIcon.style.transform = 'rotate(360deg)';
        bestDomainIcon.style.color = '#e24747';
    }
})



var alreadyTakenHeading = document.getElementById('heading_nine');
var alreadyTakenIcon = document.getElementById('ninth_icon');
var alreadyTaken = document.getElementById('already_taken');
var alreadyTakenAbsolute = document.getElementById('already_taken_absolute');
alreadyTaken.addEventListener('click', function(){
    if(alreadyTakenAbsolute.className.split(' ').includes('active')){
        console.log('true');
        alreadyTakenAbsolute.style.maxHeight = null;

        alreadyTakenAbsolute.className = alreadyTakenAbsolute.className.replace(' active', "");
        alreadyTakenIcon.style.transform = 'rotate(270deg)';
        alreadyTakenIcon.style.color = 'black';


    }else{
        // howDoAbsolute.style.display ='none';
        alreadyTakenAbsolute.className += ' active';
        alreadyTakenAbsolute.style.maxHeight = alreadyTakenAbsolute.scrollHeight + 'px';
        alreadyTakenIcon.style.transform = 'rotate(360deg)';
        alreadyTakenIcon.style.color = '#e24747';
    }
})

var registerMoreHeading = document.getElementById('heading_ten');
var registerMoreIcon = document.getElementById('tenth_icon');
var registerMore = document.getElementById('register_more');
var registerMoreAbsolute = document.getElementById('register_more_absolute');
registerMore.addEventListener('click', function(){
    if(registerMoreAbsolute.className.split(' ').includes('active')){
        console.log('true');
        registerMoreAbsolute.style.maxHeight = null;

        registerMoreAbsolute.className = registerMoreAbsolute.className.replace(' active', "");
        registerMoreIcon.style.transform = 'rotate(270deg)';
        registerMoreIcon.style.color = 'black';


    }else{
        // howDoAbsolute.style.display ='none';
        registerMoreAbsolute.className += ' active';
        registerMoreAbsolute.style.maxHeight = registerMoreAbsolute.scrollHeight + 'px';
        registerMoreIcon.style.transform = 'rotate(360deg)';
        registerMoreIcon.style.color = '#e24747';
    }   
})



// start for footer javascript
var headingIcons = document.querySelectorAll('.heading_icon');

headingIcons.forEach(headingIcon => {
    headingIcon.addEventListener('click', event => {
        headingIcon.classList.toggle("active");
        var displaypanel = headingIcon.nextElementSibling;
        if(headingIcon.classList.contains("active")){
            displaypanel.style.maxHeight = displaypanel.scrollHeight + 'px';

        }else{
            displaypanel.style.maxHeight = 0;
        }
    });
});