import IMask from 'imask';

const elements = document.querySelectorAll('[type=tel]');
const maskOptions = {
    mask: '+{7} (000) 000-00-00'
};

elements.forEach(phone => {
    IMask(phone, maskOptions);
});

