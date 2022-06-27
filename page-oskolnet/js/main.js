const createSlider = () => {
    const slider = document.querySelector('.slider');

    if (!slider) { return; }

    const wrapper = document.createElement('div');
    const ul = document.createElement('ul');
    const ol = document.createElement('ol');

    wrapper.className = 'slider__wrapper';
    ul.className = 'slider__items';
    ol.className = 'slider__indicators';

    let ind = 1;

    while (slider.children.length) {
        const item = document.createElement('li');
        const li = document.createElement('li');

        item.className = 'slider__item';
        li.className = 'slider__indicator';

        if (ind == 1) {
            item.classList.add('slider__item--active');
            li.classList.add('slider__indicator--active')
        }

        item.dataset.ind = li.dataset.toInd = ind++;

        item.append(slider.children[0]);
        ul.append(item);
        ol.append(li);

        li.addEventListener('click', moveTo);
    }

    wrapper.append(ul);
    slider.append(wrapper);
    slider.append(ol);

}

const moveTo = (e) => {
    e.preventDefault();
    const index = parseInt(e.target.dataset.toInd, 10);
    const carrentSlide = document.querySelector('.slider__item--active');
    const currentIndex = carrentSlide.dataset.ind;

    if (index == currentIndex) { return ;}

    const slide = document.querySelector(`[data-ind="${index}"]`);
    const slideInd = document.querySelector(`[data-to-ind="${currentIndex}"]`);

    const slider = document.querySelector('.slider__items');

    slide.classList.add('slider__item--active');
    e.target.classList.add('slider__indicator--active');

    carrentSlide.classList.remove('slider__item--active');
    slideInd.classList.remove('slider__indicator--active');

    const h = (index - currentIndex) * (-100);
    const currentX = parseInt(slider.dataset.translate, 10) || 0;

    console.log(h);

    slider.style.transform = `translateX(${h + currentX}%)`;
    slider.dataset.translate = h + currentX;

}


createSlider();
