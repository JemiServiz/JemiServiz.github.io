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
            slides[i].classList.add('active');
        }
    }
}
export function createSlideShow(parent, data) {
    data.map((r, i) => {
        const slide = elGen('div', parent, data.indexOf(r) === 0 ? 'slide active' : 'slide', null, null);
        elGen('img', slide, null, r.img, null);
        const info = elGen('div', slide, 'list-container', null, null);
        if (i === 0) {
            elGen('a', info, 'cta', null, 'Обади се').setAttribute('href', 'tel:089123456');
        }
        elGen('h2', info, 'caption', null, r.caption);
        const list = elGen('ul', info, 'list', null, null);
        r.list.map((li, i) => {
            if (i > 5) return;
            elGen('li', list, 'list-item', null, li);
        })
    })
}

export function createServicesList(parent, servicesData) {

    servicesData.map(cat => {
        const category = elGen('div', parent, 'category-container', null, null);
        elGen('h4', category, 'category-title', null, cat.category);
        const serviceList = elGen('ul', category, 'category-list', null, null);
        cat.services.map(s => elGen('li', serviceList, 'category-list-item', null, s));
    })
}