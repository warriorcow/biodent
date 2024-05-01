const headerElement = document.querySelector('.header');
const headerElementHeight = headerElement.offsetHeight;
const headerNestedElements = document.querySelectorAll('.header__navigation-item--with-list');
const headerNavigationElement = document.querySelector('.header__container--navigation');
const headerNavigationHamburger = document.querySelector('.header__hamburger');
const headerNavigationMenu = document.querySelector('.header__desktop');
const headerNavigationClose = document.querySelector('.header__close');
let headerNavigationElementHeight;
let lastScrollTop = window.scrollY;
let scrollDirection;

if (window.scrollY >= headerElementHeight) {
    headerElement.classList.add('header--fixed');
}

headerNestedElements.forEach(item => {
    item.addEventListener('mouseenter', () => {
        if (window.innerWidth < 1100) {
            return;
        }
        headerNavigationElement.style.height = `${headerNavigationElementHeight}px`;
        setTimeout(() => {
            headerNavigationElement.classList.add('hovered');
            headerNavigationElement.style.height = '187px';
        }, 0);
    });

    item.addEventListener('mouseleave', () => {
        if (window.innerWidth < 1100) {
            return;
        }
        headerNavigationElement.classList.remove('hovered');
        headerNavigationElement.style.height = `${headerNavigationElementHeight}px`;
    });

    item.querySelector('a').addEventListener('click', (el) => {
        if (window.innerWidth >= 1100) {
            return;
        }
        el.preventDefault()
        el.target.nextElementSibling.classList.toggle('open');
    });
});

headerNavigationHamburger.addEventListener('click', () => {
    document.querySelector('body').classList.add('lock');
    headerNavigationElement.style.height = null;
    headerNavigationMenu.classList.add('open');
});

headerNavigationClose.addEventListener('click', () => {
    document.querySelector('body').classList.remove('lock');
    headerNavigationMenu.classList.remove('open');

    headerNestedElements.forEach(item => item.querySelector('.header__navigation-submenu').classList.remove('open'));
});

if (window.scrollY <= 72) {
    setStaticHeader();
} else {
    setFixedHeader();
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
});

function setFixedHeader() {
    headerNavigationElementHeight = headerNavigationElement.offsetHeight;
    headerElement.classList.add('header--fixed');
    headerNavigationElement.style.height = null;
}

function setStaticHeader() {
    headerNavigationElementHeight = headerNavigationElement.offsetHeight;
    headerElement.classList.remove('header--fixed');
    headerNavigationElement.style.height = null;
}
