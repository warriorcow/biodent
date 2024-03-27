const headerElement = document.querySelector('.header');
const headerElementHeight = headerElement.offsetHeight;
let lastScrollTop = window.scrollY;
let scrollDirection;

if (window.scrollY >= headerElementHeight) {
    headerElement.classList.add('header--fixed');
}
window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY;

    scrollDirection = scrollTop > lastScrollTop ? 'down' : 'up';
    lastScrollTop = scrollTop;

    if (scrollDirection === 'up' && scrollTop <= 72) {
        setStaticHeader();
    }

    if (scrollDirection === 'down' && scrollTop >= headerElementHeight) {
        setFixedHeader();
    }

    console.log('Scroll direction:', scrollDirection);
});

function setFixedHeader() {
    headerElement.classList.add('header--fixed');
}

function setStaticHeader() {
    headerElement.classList.remove('header--fixed');
}
