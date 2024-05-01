import {createHTMLSliderSmall, destroySliderSmall, initSliderSmall} from '%components%/slider-small/slider-small';

const TRANSITION_MS = 300;
const modals = document.querySelectorAll('.modal');
const buttonModalElements = document.querySelectorAll('[data-modal]');

buttonModalElements.forEach(el => {
    const nameModal = el.dataset.modal;
    const modalInfo = el.dataset.modalInfo;
    let parcedInfo;

    if (modalInfo) {
        parcedInfo = JSON.parse(modalInfo);
    }

    if (nameModal === 'doctor' && !modalInfo) {
        el.remove();
    }

    if (nameModal === 'our-work' && !modalInfo) {
        el.remove();
    }

    el.addEventListener('click', () => {
        if (nameModal === 'doctor' && modalInfo) {
            fillDoctorModal(parcedInfo);
        } else {
            clearDoctorModal();
        }

        if (nameModal === 'our-work' && modalInfo) {
            fillOurWorkModal(parcedInfo);
        }

        openModal(nameModal);
    });
});
modals.forEach((modal, indexModal) => {
    const modalCloseButton = modal.querySelector('.modal__close');
    const modalBackdrop = modal.querySelector('.modal__backdrop');
    [modalCloseButton, modalBackdrop].forEach(el => {
        el.addEventListener('click', () => closeModal(indexModal));
    });
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' || event.keyCode === 27) {
        modals.forEach((modal, index) => closeModal(index));
    }
});

function openModal(idModal) {
    modals.forEach(el => {
        if (el.getAttribute('id') === idModal) {
            el.style.display = 'flex';
            el.style.transition = `all ${TRANSITION_MS}ms`;
            document.querySelector('html').classList.add('open-modal');
            document.querySelector('header').classList.add('open-modal');
            el.querySelector('.modal__content').style.transition = `all ${TRANSITION_MS}ms`;
            setTimeout(() => {
                el.classList.add('open');
            }, 0);
        }
    });
}

function closeModal(indexModal) {
    modals[indexModal].classList.remove('open');
    setTimeout(() => {
        document.querySelector('html').classList.remove('open-modal');
        document.querySelector('header').classList.remove('open-modal');
    }, 150);
    setTimeout(() => {
        modals[indexModal].style.display = 'none';
        destroySliderSmall();
    }, TRANSITION_MS);
}

function fillDoctorModal({title, subtitle, description, photo, certificates}) {
    const titleElement = document.querySelector('.more-about-doctor__title');
    const subtitleElement = document.querySelector('.more-about-doctor__subtitle');
    const descriptionElement = document.querySelector('.more-about-doctor__description');
    const photoElement = document.querySelector('.more-about-doctor__image img');
    titleElement.innerHTML = title || '';
    subtitleElement.innerHTML = subtitle || '';
    descriptionElement.innerHTML = description || '';
    photoElement.src = photo || 'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg';
    if (certificates) {
        createHTMLSliderSmall(certificates);
        initSliderSmall();
    }
}

function clearDoctorModal() {
    const titleElement = document.querySelector('.more-about-doctor__title');
    const subtitleElement = document.querySelector('.more-about-doctor__subtitle');
    const descriptionElement = document.querySelector('.more-about-doctor__description');
    const photoElement = document.querySelector('.more-about-doctor__image img');
    titleElement.innerHTML = '';
    descriptionElement.innerHTML = '';
    subtitleElement.innerHTML = '';
    photoElement.src = 'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg';
    destroySliderSmall();
}

function fillOurWorkModal({title, description, photo}) {
    const titleElement = document.querySelector('.our-work__title');
    const descriptionElement = document.querySelector('.our-work__description');
    const photoBeforeElement = document.querySelector('.our-work__result--before img');
    const photoAfterElement = document.querySelector('.our-work__result--after img');

    titleElement.innerHTML = title;
    descriptionElement.innerHTML = description;
    photoBeforeElement.src = photo?.before || 'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg';
    photoAfterElement.src = photo?.after || 'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg';
}
