$( document ).ready(function() {
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


    $("form").submit(function(){
     $.fancybox.open({
    src  : '#modal',
    type : 'inline',
    opts : {
      onComplete : function() {
        console.info('done!');
      }
    }
  });
  });

  $('.menu__btn').on('click', function(){
	$('.menu__list').slideToggle();
  });
	

$(document).ready(function() { 
	var windowWidth = $(window).width();
	if(windowWidth < 980) {header.destroy();}
	
	$(window).resize(function(){
		var windowWidth = $(window).width();
		if(windowWidth < 980) {header.destroy();}
	});
});



});
