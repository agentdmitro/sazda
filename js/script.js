
var header = $('.header'),
	scrollPrev = 0;

$(window).scroll(function() {
	var scrolled = $(window).scrollTop();
	
	if ( scrolled > 100 && scrolled > scrollPrev ) {
		header.addClass('out');
	} else {
		header.removeClass('out');
	}
	scrollPrev = scrolled;
});



	$('a.open-register').click(function (e) {
		e.preventDefault();
		$('.popup.popup-register.show').removeClass('show');
		$('.bg-menu2').removeClass('show');
	});
	
	$('a.open-login').click(function (e) {
		e.preventDefault();
		$('.popup.popup-login.show').removeClass('show');
		$('.bg-menu').removeClass('show');
	});
	
		
	$('a.open-login').click(function (e) {
		e.preventDefault();
		$('.popup.popup-login').toggleClass('show');
		$('.popup.popup-register.show').removeClass('show');
		$('.bg-menu').toggleClass('show');
	});
	
	
	$('a.open-register').click(function (e) {
		e.preventDefault();
		$('.popup.popup-register').toggleClass('show');
		$('.popup.popup-login.show').removeClass('show');
		$('.bg-menu2').toggleClass('show');
	});
    
	
	$('.bg-menu').click(function () {
		$('.popup').removeClass('show');
		$('.bg-menu').removeClass('show');
	});
	$('.close').click(function () {
		$('.popup').removeClass('show');
		$('.bg-menu').removeClass('show');
	});
	
	$('.bg-menu2').click(function () {
		$('.popup').removeClass('show');
		$('.bg-menu2').removeClass('show');
	});
	$('.close').click(function () {
		$('.popup').removeClass('show');
		$('.bg-menu2').removeClass('show');
	});


	$(document).ready(function() {
		$('.header__burger').click(function(event) {
			$('.header__burger,.header__menu').toggleClass('active');
			$('body').toggleClass('lock');
		});
	});
	
	// закрытие меню при клике на ссылку
	$(document).ready(function() {
		$('.header__list').click(function(event) {
			$('.header__burger,.header__menu').toggleClass('active');
			$('body').toggleClass('lock');
		});
	});



	



