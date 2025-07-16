const popup = document.getElementById('cookiePopup');
const button = document.getElementById('cookieAcceptBtn');

if (localStorage.getItem('cookieAccepted') !== 'true') {
    setTimeout(() => {
        requestAnimationFrame(() => {
            popup.classList.add('visible');
        });
    }, 1000);

}

button?.addEventListener('click', () => {
    localStorage.setItem('cookieAccepted', 'true');
    popup.classList.remove('visible');
});
