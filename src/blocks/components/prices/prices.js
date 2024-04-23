const characteristicsListElem = document.querySelector('.prices');
const characteristicsItemElems = document.querySelectorAll('.prices__item');

if (characteristicsListElem) {
    characteristicsListElem.addEventListener('click', (event) => {
        const target = event.target;
        if (target.classList.contains('prices__title')) {
            const parent = target.closest('.prices__item');
            const description = parent.querySelector('.prices__list');
            description.classList.contains('active') ?
                close(target, description) :
                open(target, description);
        }
    });

    characteristicsItemElems.forEach(elem => {
        if (elem.children[1].classList.contains('active')) {
            elem.children[1].style.height = elem.children[1].scrollHeight + 'px';
        }
    });
}


const open = (button, dropDown) => {
    closeAllDrops(button, dropDown);
    dropDown.style.height = dropDown.scrollHeight + 'px';
    button.classList.add('active');
    dropDown.classList.add('active');
};

const close = (button, dropDown) => {
    button.classList.remove('active');
    dropDown.classList.remove('active');
    dropDown.style.height = '';
};

const closeAllDrops = (button, dropDown) => {
    characteristicsItemElems.forEach((elem) => {
        if (elem.children[0] !== button && elem.children[1] !== dropDown) {
            close(elem.children[0], elem.children[1]);
        }
    });
};


