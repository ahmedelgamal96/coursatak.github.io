; (function () {

	'use strict';

	var mobileMenuOutsideClick = function () {

		$(document).click(function (e) {
			var container = $("#gtco-offcanvas, .js-gtco-nav-toggle");
			if (!container.is(e.target) && container.has(e.target).length === 0) {
				$('.js-gtco-nav-toggle').addClass('gtco-nav-white');

				if ($('body').hasClass('offcanvas')) {

					$('body').removeClass('offcanvas');
					$('.js-gtco-nav-toggle').removeClass('active');

				}


			}
		});

	};

	var formTab = function () {

		$('.tab-menu a').on('click', function (event) {
			var $this = $(this),
				data = $this.data('tab');

			$('.tab-menu li').removeClass('active');
			$this.closest('li').addClass('active')

			$('.tab .tab-content-inner').removeClass('active');
			$this.closest('.tab').find('.tab-content-inner[data-content="' + data + '"]').addClass('active');

			event.preventDefault();

		});

	};

	var offcanvasMenu = function () {

		$('#page').prepend('<div id="gtco-offcanvas" />');
		$('#page').prepend('<a href="#" class="js-gtco-nav-toggle gtco-nav-toggle gtco-nav-white"><i></i></a>');
		var clone1 = $('.menu-1 > ul').clone();
		$('#gtco-offcanvas').append(clone1);
		var clone2 = $('.menu-2 > ul').clone();
		$('#gtco-offcanvas').append(clone2);

		$('#gtco-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		$('#gtco-offcanvas')
			.find('li')
			.removeClass('has-dropdown');

		// Hover dropdown menu on mobile
		$('.offcanvas-has-dropdown').mouseenter(function () {
			var $this = $(this);

			$this
				.addClass('active')
				.find('ul')
				.slideDown(500, 'easeOutExpo');
		}).mouseleave(function () {

			var $this = $(this);
			$this
				.removeClass('active')
				.find('ul')
				.slideUp(500, 'easeOutExpo');
		});


		$(window).resize(function () {

			if ($('body').hasClass('offcanvas')) {

				$('body').removeClass('offcanvas');
				$('.js-gtco-nav-toggle').removeClass('active');

			}
		});
	};


	var burgerMenu = function () {

		$('body').on('click', '.js-gtco-nav-toggle', function (event) {
			var $this = $(this);


			if ($('body').hasClass('overflow offcanvas')) {
				$('body').removeClass('overflow offcanvas');
			} else {
				$('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();

		});
	};



	var contentWayPoint = function () {
		var i = 0;

		// $('.gtco-section').waypoint( function( direction ) {


		$('.animate-box').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('animated-fast')) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function () {

					$('body .animate-box.item-animate').each(function (k) {
						var el = $(this);
						setTimeout(function () {
							var effect = el.data('animate-effect');
							if (effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if (effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if (effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						}, k * 200, 'easeInOutExpo');
					});

				}, 100);

			}

		}, { offset: '85%' });
		// }, { offset: '90%'} );
	};


	var dropdown = function () {

		$('.has-dropdown').mouseenter(function () {

			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function () {
			var $this = $(this);

			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});

	};


	var owlCarousel = function () {

		var owl = $('.owl-carousel-carousel');
		owl.owlCarousel({
			items: 3,
			loop: true,
			margin: 20,
			nav: true,
			dots: true,
			smartSpeed: 800,
			autoHeight: true,
			navText: [
				"<i class='ti-arrow-left owl-direction'></i>",
				"<i class='ti-arrow-right owl-direction'></i>"
			],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				1000: {
					items: 3
				}
			}
		});


		var owl = $('.owl-carousel-fullwidth');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 20,
			nav: true,
			dots: true,
			smartSpeed: 800,
			autoHeight: true,
			navText: [
				"<i class='ti-arrow-left owl-direction'></i>",
				"<i class='ti-arrow-right owl-direction'></i>"
			]
		});




	};



	var goToTop = function () {

		$('.js-gotop').on('click', function (event) {

			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');

			return false;
		});

		$(window).scroll(function () {

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});

	};


	// Loading page
	var loaderPage = function () {
		$(".gtco-loader").fadeOut("slow");
	};

	var counter = function () {
		$('.js-counter').countTo({
			formatter: function (value, options) {
				return value.toFixed(options.decimals);
			},
		});
	};

	var counterWayPoint = function () {
		if ($('#gtco-counter').length > 0) {
			$('#gtco-counter').waypoint(function (direction) {

				if (direction === 'down' && !$(this.element).hasClass('animated')) {
					setTimeout(counter, 400);
					$(this.element).addClass('animated');
				}
			}, { offset: '90%' });
		}
	};




	// Youtube

	var varID = '78RUGbKkMFI';
	var varApiKey = 'AIzaSyDDBk8tAkod1VRRNyFZF09fgQyMpnSe5HI';

	$(".vedioBlock").each(function () {
		var that = this;
		var link = $(this).attr('id');

		$(this).find(".popup-youtube").attr('href', 'https://www.youtube.com/watch?v=' + link);
		$(this).find(".embed-responsive-item").attr('src', 'https://www.youtube.com/embed/' + link);
		function getVids() {
			$.get(
				"https://www.googleapis.com/youtube/v3/videos", {
					part: 'snippet',
					id: link,
					key: varApiKey
				},
				function (data) {
					ChangeTitle(data.items[0].snippet.title);
				}
			)
			function ChangeTitle(titleText) {
				$(that).find('.vedioTitle').text(titleText);
			}
		}
		getVids();
	});


	$(".imageBlock").each(function () {
		var src = $(this).find("img").attr('src')
		$(this).find(".image-popup").attr('href', src);
	});


	$(function () {
		mobileMenuOutsideClick();
		formTab();
		offcanvasMenu();
		burgerMenu();
		contentWayPoint();
		dropdown();
		owlCarousel();
		goToTop();
		loaderPage();
		counterWayPoint();
	});


}());



