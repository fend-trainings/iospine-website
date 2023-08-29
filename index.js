
let mobile = document.querySelector('.mobile-navigation')
// let header = document.querySelector('.header');
mobile.style.left = '150%';
let closeIcon = document.querySelector('.fa-xmark')
let hamburgerIcon = document.querySelector('.fa-bars');
hamburgerIcon.addEventListener('click', function appear(){
   mobile.style.left = '30%'
})
closeIcon.addEventListener('click', () => {
        mobile.style.left = '150%';
    })

// header.addEventListener('click', () => {
//          mobile.style.left = '150%';
// })

 