import IMask from 'imask';

const elements = document.querySelectorAll('[type=tel]');
const maskOptions = {
    mask: '+{7} (000) 000-00-00',
    prepare: function (value, masked) {
        if (value === '8' && !masked.value.startsWith('+7')) {
            return '7';
        }
        return value;
    },
};

elements.forEach(phone => {
    IMask(phone, maskOptions);
});

