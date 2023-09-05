export function elGen(el, parent, cls, src, content) {
    const element = document.createElement(el);
    if (cls) {
        element.className = cls;
    }
    if (content) {
        element.textContent = content;
    }
    if (src) {
        element.setAttribute('src', src);
    }
    parent.appendChild(element);
    return element;
}
export function autoSlide(slides, activeIndex) {

    for (let i = 0; i < slides.length; i++) {
        if (i !== activeIndex) {
            slides[i].classList.remove('active');
        } else {
            slides[i].classList.add('active')
        }
    }
}