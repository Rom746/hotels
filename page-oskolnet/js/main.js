const createSlider = () => {
    let count = 0;
    for (const slider of document.querySelectorAll('.slider')) {

        if (!slider) { return; }

        const wrapper = document.createElement('div');
        const ul = document.createElement('ul');
        const ol = document.createElement('ol');


        wrapper.className = 'slider__wrapper';
        ul.className = 'slider__items';
        ol.className = 'slider__indicators';
        ul.dataset.id = count;
        ol.dataset.id = count++;

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
}

const moveTo = (e) => {
    e.preventDefault();
    const id = e.target.parentElement.dataset.id;
    const index = parseInt(e.target.dataset.toInd, 10);
    const slider = document.querySelector(`[data-id="${id}"]`);
    console.log(slider);
    const carrentSlide = slider.querySelector('.slider__item--active');
    const currentIndex = carrentSlide.dataset.ind;

    if (index == currentIndex) { return; }

    const slide = slider.querySelector(`[data-ind="${index}"]`);
    const slideInd = e.target.parentElement.querySelector(`[data-to-ind="${currentIndex}"]`);

    console.log(slideInd, currentIndex);



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

const setTabs = () => {
    const tabs = document.querySelectorAll('.tabs__item');
    tabs.forEach(tab => 
        tab.addEventListener('click',(event) => {
            const blockTab = document.querySelector(event.target.dataset.link);
            document.querySelector('.tabs__block--active').classList.toggle('tabs__block--active');
            document.querySelector('.tabs__item--active').classList.toggle('tabs__item--active');
            blockTab.classList.toggle('tabs__block--active');
            tab.classList.toggle('tabs__item--active');
        })
    );
}


createSlider();
setTabs();