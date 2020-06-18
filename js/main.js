$(document).ready(function () {
	var options = {
		offset: 100
	}
	var header = new Headhesive('.header-top', options);

	let videos = document.getElementsByClassName("portfolio__item");

	for (let video of videos) {
		video.addEventListener('mouseenter', function () {
			video.play();
		});
		video.addEventListener('mouseleave', function () {
			video.pause();
		});
	}

	$(".menu__list").on("click", "a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({
			scrollTop: top - 150
		}, 1500);
	});

	$(".menu ul li a").click(function (e) {
		$(".menu ul li a").removeClass('active');
		$(this).addClass('active');
	})

	$(".icon-mute").click(function () {
		var src = $(this).attr('src');
		var newsrc = (src == 'images/mute.png') ? 'images/loud.png' : 'images/mute.png';
		$(this).attr('src', newsrc);
	});
	new WOW().init();

	$("form").submit(function () {
		$.fancybox.open({
			src: '#modal',
			type: 'inline',
			opts: {
				onComplete: function () {
					console.info('done!');
				}
			}
		});
	});

	$('.checkbox2').on('click', function () {
		$('.menu__nav').slideToggle();
	});

	$(document).ready(function () {
		var windowWidth = $(window).width();
		if (windowWidth < 980) {
			header.destroy();
		}

		$(window).resize(function () {
			var windowWidth = $(window).width();
			if (windowWidth < 980) {
				header.destroy();
			}
		});
	});

	$('.menu__language').click(function () {
		$(this).toggleClass('open');
	})

	$('.menu__language li').click(function () {
		var setLang = $('.menu__language').data('location'),
			dataLangSelect = $(this).data('lang')
		$('.menu__language').data('location', dataLangSelect);
		$('.menu__language li').removeClass('active');
		$(this).toggleClass('active');
	})

	$('.menu__language-inside li').click(function () {
		var setLang = $('.menu__language').data('location'),
			dataLangSelect = $(this).data('lang')
		$('.menu__language-inside').data('location', dataLangSelect);
		$('.menu__language-inside li').removeClass('active');
		$(this).toggleClass('active');
	})
});
