const headerElement = document.querySelector('.header');
const headerElementHeight = headerElement.offsetHeight;
const headerNestedElements = document.querySelectorAll('.header__navigation-item--with-list');
const headerNavigationElement = document.querySelector('.header__container--navigation');
const headerNavigationElementHeight = headerNavigationElement.offsetHeight;
let lastScrollTop = window.scrollY;
let scrollDirection;

if (window.scrollY >= headerElementHeight) {
    headerElement.classList.add('header--fixed');
}

headerNestedElements.forEach(item => {
    item.addEventListener('mouseenter', () => {
        headerNavigationElement.style.height = `${headerNavigationElementHeight}px`;
        setTimeout(() => {
            headerNavigationElement.classList.add('hovered');
            headerNavigationElement.style.height = '187px';
        }, 0);

    });

    item.addEventListener('mouseleave', () => {
        console.log('mouseenter');
        headerNavigationElement.classList.remove('hovered');
        headerNavigationElement.style.height = `${headerNavigationElementHeight}px`;
    });
});

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
