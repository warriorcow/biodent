const servicesElements = document.querySelectorAll('[data-service]');

servicesElements.forEach(service => {
    service.addEventListener('mouseenter', ({ target }) => {
        target.classList.add('active');
    });

    service.addEventListener('mouseleave', ({ target }) => {
        target.classList.remove('active');
    });
});
