import { services } from "./data.js";

let mobile = document.querySelector('.mobile-navigation')
let closeIcon = document.querySelector('.fa-xmark')
let hamburgerIcon = document.querySelector('.fa-bars');
let ul = document.querySelector('.top-nav-ul');
let servicesSection = document.getElementById('services');
let filterSearch = document.querySelector('.filter')
let filteredArray = []


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
// console.log(services)
let actualService = services;



// 29/09/2023

//run the map function to populate the service section of the HTML
let serviceMap = () => {
    
    actualService.map((service) => {

        let div = document.createElement('div');

        let img = document.createElement('img');
        img.setAttribute('src',service.image)
        
        let h3 = document.createElement('h3');
        h3.setAttribute('class','service-title');
        h3.innerText = service.title;
        
        let para = document.createElement('p');
        para.setAttribute('class','service-description');
        para.innerText = service.desc;
        
        let button1 = document.createElement('button');
        button1.setAttribute('class','learn-more');
        button1.innerText = 'Learn More';
        
        let button2 = document.createElement('button');
        button2.setAttribute('class','apply-now');
        button2.innerHTML = 'Apply Now';
        
        let button3 = document.createElement('button');
        button3.setAttribute('class','comming-soon');
        button3.innerHTML = 'Comming Soon';
        
        div.append(img,h3,para);
        
        service.button ? div.append(button1,button2) : div.appendChild(button3);
        
        // if(service.button){
            //     div.append(button1,button2)
            // }else{
                //     div.appendChild(button3) 
                // }
                
                servicesSection.appendChild(div)
                // console.log(div);
                
    });
           
};

serviceMap();

//array.push


// let arr = [2,4,5,6,7,8,9]
// arr.push(11)
// console.log(arr);
// arr.pop()
// console.log(arr)
// let splicedArray = arr.splice(2,3)
// console.log(splicedArray);
// console.log(arr)

// let mappedArray = arr.map((num)=> {
//   return num*2
// })
// // console.log(mappedArray)
// let filtered = arr.filter((num) => {
//     return num%2 !== 0;
// })

// console.log(filtered);

// run the filter here
// filterSearch.addEventListener('keydown',()=>{
//     for(let i = 0; i < actualService.length; i++){
//         if(actualService[i].title.includes(filterSearch.value)){
//             filteredArray.push(actualService[i])
//         }
//     }
// })