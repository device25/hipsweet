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
				container = $this.closest('.faq__list'),
				item = $this.closest('.faq__item');

			if (!item.hasClass('active')) {
				item
					.addClass('active')
					.siblings()
					.removeClass('active');
			} else {
				item.removeClass('active');
			}
		});
	})();
});