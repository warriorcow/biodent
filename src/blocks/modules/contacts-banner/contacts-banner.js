const markerLink = require('%images%/map-marker.png');

if (document.querySelector('#map')) {
    ymaps.ready(init);
    function init() {
        let myMap = new ymaps.Map('map', {
            center: [56.831349, 60.550698],
            controls: ['smallMapDefaultSet'],
            zoom: 15
        });

        var myPlacemark = new ymaps.Placemark(
            [56.8316, 60.5507],
            {},
            {
                iconLayout: 'default#image',
                iconImageHref: markerLink.default,
                iconImageSize: [32, 43],
                iconImageOffset: [-15, -20]
            }
        );

        myMap.geoObjects.add(myPlacemark);
    }
}
