import data from "./data.js";
import { autoSlide, createSlideShow, elGen } from "./utils.js";



const slides = document.getElementsByClassName('slide');
const carouselContainer = document.getElementById('carousel-container');

createSlideShow(carouselContainer, data)
let activeIndex = 0;
setInterval(() => {
    if (activeIndex < slides.length - 1) {
        activeIndex++;
    } else {
        activeIndex = 0;
    }
    autoSlide(slides, activeIndex)
}, 4500)



