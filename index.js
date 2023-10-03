import { services } from "./data.js";

let mobile = document.querySelector('.mobile-navigation')
let closeIcon = document.querySelector('.fa-xmark')
let hamburgerIcon = document.querySelector('.fa-bars');
let ul = document.querySelector('.top-nav-ul');
let servicesSection = document.getElementById('services');
let filterSearch = document.querySelector('.filter')
let filteredArray = [];
let repeat = false
let actualService = services;


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




// 29/09/2023

//run the map function to populate the service section of the HTML
let serviceMap = () => {
    if(filterSearch.value === '') actualService = services;
    console.log('I ran it')
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
// filter through the array of services
// get the value from the search input
// check if the value is included in any services title
// if any, clear the div
//append respective services to the div
// if service that includes the keyword are not found, set the innerhtml of the div to No services found
// if the search input is empty, populate the div as normal with all services present.

filterSearch.addEventListener("keyup",() => {
   filteredArray = [];
   servicesSection.innerHTML = '';
    actualService.filter((service) => {
        
        if(filterSearch.value !== ''){
            if(service.title.includes(filterSearch.value) || service.desc.includes(filterSearch.value)){
                // push it to the array holding filtered values
                filteredArray = [...filteredArray,service]
            }
        }
        // append services to the div
        
    })
    if(filteredArray.length === 0) serviceMap();

    if(filteredArray.length !== 0 && filterSearch.value !== ''){
        actualService = filteredArray;
        console.log("filtered map")
        serviceMap();
    }
    // console.log(filteredArray)
    if(filteredArray.length === 0 && filterSearch.value !== ''){
        let paragraph = document.createElement('p');
        paragraph.innerHTML = 'no services found';
        servicesSection.appendChild(paragraph);
    } 
})