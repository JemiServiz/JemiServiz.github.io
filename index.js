import data from "./data.js";
import { autoSlide, elGen } from "./utils.js";



const slides = document.getElementsByClassName('slide');
const carouselContainer = document.getElementById('carousel-container');

data.map(r => {
    const slide = elGen('div', carouselContainer, 'slide', null, null);
    elGen('img', slide, null, r.img, null);
    elGen('h2', slide, 'caption', null, r.caption);
})
let activeIndex = 0;
setInterval(() => {
    if (activeIndex < slides.length - 1) {
        activeIndex++;
    } else {
        activeIndex = 0;
    }
    autoSlide(slides, activeIndex)
}, 2000)



