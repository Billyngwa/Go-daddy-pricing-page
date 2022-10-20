var defaultActive = document.getElementsByClassName('section_four_absolute');
for(i=0; i<defaultActive.length; i++){
    defaultActive[i].className += ' active';
    defaultActive[i].style.maxHeight = defaultActive[i].scrollHeight+'px';
}

var defaultActiveIcon = document.getElementsByClassName('section_four_heading_icon');
for(i=0; i<defaultActiveIcon.length; i++){
    defaultActiveIcon[i].className += ' active';
    defaultActiveIcon[i].style.transform.before = defaultActiveIcon[i].scrollHeight+'px';
}
// style for section four javascript

 var sectionFourHeadingIcons = document.querySelectorAll('.section_four_heading_icon');
 sectionFourHeadingIcons.forEach(sectionFourHeadingIcon => {
    sectionFourHeadingIcon.addEventListener('click', state => {
        sectionFourHeadingIcon.classList.toggle("active");
        var sectionFourPanel = sectionFourHeadingIcon.nextElementSibling;
        if(sectionFourHeadingIcon.classList.contains("active")) {
            sectionFourPanel.style.maxHeight = sectionFourPanel.scrollHeight + 'px';
        }else{
            sectionFourPanel.style.maxHeight = 0;
        }
    });
 });

// start for footer javascript
var headingIcons = document.querySelectorAll('.heading_icon');

headingIcons.forEach(headingIcon => {
    headingIcon.addEventListener('click', state => {
        headingIcon.classList.toggle("active");
        var displaypanel = headingIcon.nextElementSibling;
        if(headingIcon.classList.contains("active")){
            displaypanel.style.maxHeight = displaypanel.scrollHeight + 'px';

        }else{
            displaypanel.style.maxHeight = 0;
        }
    });
});

 // code to toggle hamburger. From this hamburger menu clicking we can control alot.
 var hamburgerButton = document.querySelector('.hamburger_btn');
 var mobilePannel = document.querySelector('.mobile_nav');
 var slideNav = document.querySelector('.slide_nav');
 var mainHeader = document.querySelector('.main_header');
 var mainSection = document.querySelector('.main_section');
 hamburgerButton.addEventListener('click', function(){
    hamburgerButton.classList.toggle("active");
    // mobilePannel.classList.toggle("active");
    slideNav.classList.toggle("active");
    mainHeader.classList.toggle("active");
    mainSection.classList.toggle("active");
 });
 
 // code to toggle the cart button
 var shoppingCart = document.querySelector('.mobile_shopping_cart');
 var cartButton = document.querySelector('.cart_button');
 cartButton.addEventListener('click', function(){
    cartButton.classList.toggle("active");
    shoppingCart.classList.toggle("active");
    slideNav.classList.remove("active");
 });
 
  // code to toggle the cart cross
  var cartCross = document.querySelector('.cart_cross');
  cartCross.addEventListener('click', function(){
     cartCross.classList.toggle("active");
     shoppingCart.classList.toggle("active");
  });

  // code to toggle the black div the cross might be disabled by default once the black div is toggled
  // in case this happens just swap code positions of the cross and black div
//  var blackDiv = document.querySelector('.black');
//  blackDiv.addEventListener('click', function(){
//     blackDiv.classList.toggle("active");
//     shoppingCart.classList.toggle("active");
//  });

