const createSlider = () => {
    const slider = document.querySelector('.slider');

    if (!slider) { return ; }

    const wrapper = document.createElement('div');
    const ul = document.createElement('ul');

    wrapper.className = 'slider__wrapper';
    ul.className = 'slider__items';

    while (slider.children.length) {
        const li = document.createElement('li');
        li.className = 'slider__item';
        li.append(slider.children[0]);
        ul.append(li);
    }

    wrapper.append(ul);
    slider.append(wrapper);

    

}

createSlider();