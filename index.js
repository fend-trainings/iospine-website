
let mobile = document.querySelector('.mobile-navigation')
let closeIcon = document.querySelector('.fa-xmark')
let hamburgerIcon = document.querySelector('.fa-bars');
let ul = document.querySelector('.top-nav-ul');
mobile.style.width = '0';
let hidden = () =>{
    ul.style.visibility = 'hidden';
    closeIcon.style.visibility = 'hidden';
}
hidden();

hamburgerIcon.addEventListener('click', function appear(){  
    mobile.style.visibility = 'visible';
    mobile.style.width = '70%';
    closeIcon.style.visibility = 'visible';
    setTimeout(() =>{
        ul.style.visibility = 'visible'; 
    } ,1500);
    hamburgerIcon.style.visibility = 'hidden';
})

closeIcon.addEventListener('click', () => {
    mobile.style.width = '0';
    hamburgerIcon.style.visibility = 'visible';
    hidden()
})
