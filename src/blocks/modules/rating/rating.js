const ratingStarsElement = document.querySelectorAll('.rating__stars');
console.log(ratingStarsElement)
ratingStarsElement.forEach(star => {
    const scoreStars = Number(star.dataset.stars);
    star.children[5 - scoreStars].classList.add('active');
});
