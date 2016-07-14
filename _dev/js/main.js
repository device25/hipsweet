//= ../bower/jquery/dist/jquery.js
//= ../bower/slick-carousel/slick/slick.js
//= ../bower/jquery-mask-plugin/dist/jquery.mask.js

'use strict'
$(document).ready(function(){
	
// slider
	(function () {
		$('.slick').slick({
			dots: true
		});
	})();

// scroll
	(function () {
		$('a[href^="#"]').on('click', function () {
			var element = $(this).attr('href');
		    $('body').animate({
		    	scrollTop: $(element).offset().top}, 1000
		    );
		    return false;
		});
	})();

// tabs
	(function () {
		$('.team__nav-member').on('click', function (e) {
			e.preventDefault();
			var
				$this = $(this),
				index = $this.index(),
				container = $('.members__list'),
				content = container.find('.member__item').eq(index);
				
			$this.addClass('nav-member_active')
				.siblings()
				.removeClass('nav-member_active');

			content.addClass('member__item_active')
				.siblings()
				.removeClass('member__item_active');
		});
	})();

// mask
	(function () {
		$('.order__phone').mask('+7 (000) 000-00-00');
	})();

// accordion
	(function () {
		$('.question').on('click', function (e) {
			e.preventDefault();
			var 
				$this = $(this),
				item = $this.closest('.faq__item');

			item
				.addClass('active')
				.siblings()
				.removeClass('active');
		});
	})();

// map
	(function() {
		ymaps.ready(init);
		var 
			myMap,
			myPlacemark;

		function init(){     
			myMap = new ymaps.Map("map", {
				center: [59.90381837601091,30.538691876674624],
				zoom: 12,
				controls: []
			});
			myPlacemark = new ymaps.Placemark([59.90371837601091,30.394691876674624], {},{ 
				iconLayout: 'default#image',
        		iconImageHref: 'img/placemark.png',
        		iconImageSize: [42, 59]
        	});
        	myMap.geoObjects.add(myPlacemark);
        	myMap.behaviors.disable('scrollZoom');
		}
	})();
});