const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const topContainer = document.querySelector(".carousel-top")
const bottomContainer = document.querySelector(".carousel-bottom")

let elementCreatedStringTop = ""
let elementCreatedStringBottom =""

images.forEach((item)=>{
    elementCreatedStringTop += getStringElement(item);
    elementCreatedStringBottom += getStringOnlyImgElement(item)
});

topContainer.innerHTML = elementCreatedStringTop;
bottomContainer.innerHTML = elementCreatedStringBottom;

const carouselTopContainer = document.getElementsByClassName("carousel-top-img");
const carouselBottom = document.querySelectorAll(".carousel-bottom img")

let index = 0;
carouselTopContainer[index].classList.add("active");
carouselBottom[index].classList.add("active")

document.getElementById("next").addEventListener("click", goToNextImg);

document.getElementById("prev").addEventListener("click", goToPrevImg);

activeElementOnClick(carouselBottom, carouselTopContainer);

let nextTimer = setInterval(goToNextImg, 3000);

let isTimerBackwardGoing = false
let prevTimer;
document.getElementById("reverse-btn").addEventListener("click", stopForwardTimerAndStartBackwardTimer);

document.getElementById("stop-btn").addEventListener("click", stopTimer);
 






function getStringElement(object){
    const stringElement = `
        <div class="carousel-top-img">
            <img src="${object.image}" alt="Copertina di ${object.title}">
            <div class="image-info">
                <h2>${object.title}</h2>
                <p>${object.text}</p>
            </div>
        </div>
    `
    return stringElement
}


function getStringOnlyImgElement(object){
    const imgStringElement =`
        <img src="${object.image}" alt="Copertina di ${object.title}">
    `
    return imgStringElement
}


function goToNextImg(){
    carouselTopContainer[index].classList.remove("active");
    carouselBottom[index].classList.remove("active")
    if(index < images.length - 1){
        index++
    } else{
        index = 0 
    }
    carouselTopContainer[index].classList.add("active")
    carouselBottom[index].classList.add("active")
}



 function goToPrevImg(){
    carouselTopContainer[index].classList.remove("active");
    carouselBottom[index].classList.remove("active")
    if(index > 0){
        index --
    } else {
        index = images.length -1 
    }
    carouselTopContainer[index].classList.add("active")
    carouselBottom[index].classList.add("active")
}


 function activeElementOnClick(array, element,){
    for (let i = 0; i < array.length; i++) {
        const thisElement = array[i];
        thisElement.addEventListener("click", function(){
            element[index].classList.remove("active");
            array[index].classList.remove("active")
            index = i
            element[index].classList.add("active")
            array[index].classList.add("active")
        })
    }
}

function stopForwardTimerAndStartBackwardTimer (){

    clearInterval(nextTimer);
    
    if(!isTimerBackwardGoing){
        prevTimer = setInterval(function(){
            goToPrevImg()
        },  3000)
        isTimerBackwardGoing = true;
    }
}



function stopTimer(){

    if(nextTimer){
        clearInterval(nextTimer);
        nextTimer = null
    } else{
        nextTimer = setInterval(goToNextImg, 3000)
        console.log(nextTimer);
    }

    clearInterval(prevTimer)
    isTimerBackwardGoing = false;
}