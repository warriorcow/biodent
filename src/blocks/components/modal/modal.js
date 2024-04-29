const TRANSITION_MS = 300;
const modals = document.querySelectorAll('.modal');
const callbackModalElements = document.querySelectorAll('[data-modal="callback"]');
const doctorModalElements = document.querySelectorAll('[data-modal="doctor"]');
[...callbackModalElements, ...doctorModalElements].forEach(el => {
    el.addEventListener('click', ({ target }) => {
        openModal(target.dataset.modal);
    });
});
modals.forEach((modal, indexModal) => {
    const modalCloseButton = modal.querySelector('.modal__close');
    const modalBackdrop = modal.querySelector('.modal__backdrop');

    [modalCloseButton, modalBackdrop].forEach(el => {
        el.addEventListener('click', () => closeModal(indexModal));
    });
});

function openModal(idModal) {
    modals.forEach(el => {
        if (el.getAttribute('id') === idModal) {
            el.style.display = 'flex';
            el.style.transition = `all ${TRANSITION_MS}ms`;
            document.querySelector('body').classList.add('open-modal');
            document.querySelector('header').classList.add('open-modal');
            document.querySelector('footer').classList.add('open-modal');
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
        document.querySelector('body').classList.remove('open-modal');
        document.querySelector('header').classList.remove('open-modal');
        document.querySelector('footer').classList.remove('open-modal');
    }, 150)
    setTimeout(() => {
        modals[indexModal].style.display = 'none';
    }, TRANSITION_MS);
}


