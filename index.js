import servicesData from "./servicesData.js";
import data from "./slideData.js";
import { autoSlide, createServicesList, createSlideShow, elGen } from "./utils.js";



const slides = document.getElementsByClassName('slide');
const carouselContainer = document.getElementById('carousel-container');
const servicesContainer = document.getElementById('services-container');

createSlideShow(carouselContainer, data);
createServicesList(servicesContainer, servicesData);

let activeIndex = 0;
setInterval(() => {
    if (activeIndex < slides.length - 1) {
        activeIndex++;
    } else {
        activeIndex = 0;
    }
    autoSlide(slides, activeIndex)
}, 2000)



