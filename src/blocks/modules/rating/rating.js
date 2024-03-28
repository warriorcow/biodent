const ratingStarsElement = document.querySelectorAll('.rating__stars');

ratingStarsElement.forEach(star => {
    const scoreStars = Number(star.dataset.stars);
    star.children[5 - scoreStars].classList.add('active')
});
