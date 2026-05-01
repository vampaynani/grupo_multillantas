$(document).on('ready', function(){
 	TweenMax.to('.downImg', .7, {bottom: 20, repeat:-1, yoyo:true});
 	$('.back.uno').on('mouseover', function(){
 		TweenLite.to('.conocenos', 2.5, { ease: Power2.easeOut, y: 0 });
 	});
 //scroll imagen flecha
$('.downImg').on('click', function(e){
  		e.preventDefault ();
  		var top = $('#uno').offset().top;
  		isScrolling = true;
  		TweenLite.to(window, 1, {scrollTo:{y: top}, ease:Power2.easeOut, onComplete: function(){ isScrolling = false; skipAnimations(); checkAnimations(); }
  		});
  	});
 	$('.down').on('click', function(e){
 		e.preventDefault ();
 		var sections = [$('.uno'), $('.dos'), $('.tres'), $('.cuatro'), $('.cinco'), $('.seis')];
 		var scroll = $(window).scrollTop();
 		var nextSection = null;
 		for(var i = 0; i < sections.length; i++){
 			if(sections[i].offset().top > scroll + 5){
 				nextSection = sections[i];
 				break;
 			}
 		}
if(nextSection){
			isScrolling = true;
			TweenMax.to(window, 0.8, {
				scrollTo:{y: nextSection.offset().top},
				ease: Back.easeOut,
				delay: 0,
				onComplete: function(){ isScrolling = false; skipAnimations(); checkAnimations(); }
			});
		}
 	});
 	function skipAnimations(){
 		var scroll = $(window).scrollTop();
 		var wh = $(window).height();
 		if(!animUno && $('.uno').offset().top < scroll - 100){
 			TweenLite.set('.uno .title', { opacity: 1, x: 0 });
 			TweenLite.set('.p', { x: 700 });
 			animUno = true;
 		}
 		if(!animDos && $('.dos').offset().top < scroll - 100){
 			TweenLite.set('.dos .title', { opacity: 1, x: 0 });
 			TweenLite.set('#productos', { right: 70, display: 'block' });
 			TweenLite.set('.dos a', { right: 70, display: 'block' });
 			animDos = true;
 		}
 		if(!animTres && $('.tres').offset().top < scroll - 100){
 			TweenLite.set('.tres .title', { opacity: 1, x: 0 });
 			TweenLite.set('.servicios', { x: 800 });
 			animTres = true;
 		}
 		if(!animCuatro && $('.cuatro').offset().top < scroll - 100){
 			TweenLite.set('.cuatro .title', { opacity: 1, x: 0 });
 			TweenLite.set('#mayoristas', { right: 70, display: 'block' });
 			animCuatro = true;
 		}
 		if(!animCinco && $('.cinco').offset().top < scroll - 100){
 			TweenLite.set('.nitro', { opacity: 1, y: 0 });
 			TweenLite.set('.textNItro', { opacity: 1, y: 0 });
 			TweenLite.set('.nitrogeno', { left: 250, display: 'block' });
 			animCinco = true;
 		}
 	}

 	$('.ContactoScroll').on('click', function(e){
 		e.preventDefault ();
 		var top = $('.seis').offset().top;
 		isScrolling = true;
 		TweenMax.to(window, 0.8, {
 			scrollTo:{y: top},
 			ease: Power2.easeOut,
 			onComplete: function(){ isScrolling = false; skipAnimations(); checkAnimations(); }
 		});
 	});
	// < = a mayor
 	//var section = $('.uno' ).offset().top;
 	//$(window).scroll(function(){
 	//	console.log($(window).scrollTop());
 	//	console.log($('.uno' ).offset().top);
 	//	var scroll = $(window).scrollTop();
 	//	if(scroll > 500){
 	//		var top = $('#uno').offset().top; // cambia el valor del top
 	//		console.log($('#uno').offset().top);
 	//		TweenLite.to(window, 1, {scrollTo:{y: top}, ease:Power2.easeOut
 	//		});
 	//	};
 	//});
 	var animUno = false, animDos = false, animTres = false, animCuatro = false, animCinco = false, animSeis = false;
 	var isScrolling = false;

 	function checkAnimations(){
 		if(isScrolling) return;
 		var scroll = $(window).scrollTop();
 		var wh = $(window).height();

		// UNO
		if(!animUno && $('.uno').offset().top < scroll + wh - 100){
			TweenLite.to('.p', 1, { ease: Power2.easeOut, x: 700 });
			animUno = true;
		}

		// DOS
		if(!animDos && $('.dos').offset().top < scroll + wh - 100){
			TweenLite.to('#productos', 1, { ease: Power2.easeOut, right: 70, display: 'block'});
			TweenLite.to('.dos a', 1.2, { ease: Power2.easeOut, right: 70, display: 'block'});
			animDos = true;
		}

		// TRES
		if(!animTres && $('.tres').offset().top < scroll + wh - 100){
			TweenLite.to('.servicios', 1.2, { ease: Power2.easeOut, x: 800 });
			animTres = true;
		}

		// CUATRO
		if(!animCuatro && $('.cuatro').offset().top < scroll + wh - 100){
			TweenLite.to('#mayoristas', 1, { ease: Power2.easeOut, right: 70, display: 'block'});
			animCuatro = true;
		}

		// CINCO
		if(!animCinco && $('.cinco').offset().top < scroll + wh - 100){
			TweenLite.from('.textNItro', 1, { ease: Power2.easeOut, y: 40, opacity: 0, delay: 0.2 });
			TweenLite.to('.nitrogeno', 1, { ease: Bounce.easeOut, left: 250, display: 'block'});
			animCinco = true;
		}

		// SEIS
		if(!animSeis && $('.seis').offset().top < scroll + wh){
 			TweenLite.to('#sucursal1', .5, { ease: Power2.easeOut, x: 450, delay: 0.3, onComplete: function(){
 				TweenLite.to('#sucursal2', .5, { ease: Power2.easeOut, x: 450, onComplete: function(){
 					TweenLite.to('#sucursal3', .5, { ease: Power2.easeOut, x: 450, onComplete: function(){
 						TweenLite.to('#sucursal4', .5, { ease: Power2.easeOut, x: 450});
 					}});
 				}});
 			}});
 			animSeis = true;
 		}
 	}

 	// DOT NAV
 	$('.dot-nav__item').on('click', function(e){
 		e.preventDefault();
 		var target = $(this).data('section');
 		var top = $(target).offset().top;
 		isScrolling = true;
 		TweenMax.to(window, 0.8, {
 			scrollTo: {y: top},
 			ease: Power2.easeOut,
 			onComplete: function(){ isScrolling = false; skipAnimations(); checkAnimations(); updateDots(); }
 		});
 	});

 	function updateDots(){
 		var scroll = $(window).scrollTop();
 		var wh = $(window).height();
 		var sections = ['.cabeza', '.uno', '.dos', '.tres', '.cuatro', '.cinco', '.seis'];
 		var current = 0;
 		for(var i = 0; i < sections.length; i++){
 			if($(sections[i]).offset().top <= scroll + wh / 2){
 				current = i;
 			}
 		}
 		$('.dot-nav__item').removeClass('active');
 		$('.dot-nav__item').eq(current).addClass('active');
 	}

 	$(window).scroll(updateDots);
 	updateDots();

 	$(window).scroll(checkAnimations);
 	$('.tecamac').on('click', function(e){
 		e.preventDefault ();
 		TweenLite.to('.Muno', .5, { ease: Power2.easeOut, left: 420, display: 'block', opacity: 1, onComplete: function(){
 			TweenLite.to('.Mdos', .5, { ease: Power2.easeOut, left: 0, opacity: 0, display: 'none'});
 			TweenLite.to('.Mtres', .5, { ease: Power2.easeOut, left: 0, opacity: 0, display: 'none'});
 			TweenLite.to('.Mcuatro', .5, { ease: Power2.easeOut, left: 0, opacity: 0, display: 'none'});
 		}});
 	});
 	$('.pachuca').on('click', function(e){
 		e.preventDefault ();
 		TweenLite.to('.Mdos', .5, { ease: Power2.easeOut, left: 420, display: 'block', opacity: 1, onComplete: function(){
 			TweenLite.to('.Muno', .5, { ease: Power2.easeOut, left: 0, opacity: 0, display: 'none'});
 			TweenLite.to('.Mtres', .5, { ease: Power2.easeOut, left: 0, opacity: 0, display: 'none'});
 			TweenLite.to('.Mcuatro', .5, { ease: Power2.easeOut, left: 0, opacity: 0, display: 'none'});
 		}});

 	});
 	$('.ecatepec').on('click', function(e){
 		e.preventDefault ();
 		TweenLite.to('.Mtres', .5, { ease: Power2.easeOut, left: 420, display: 'block', opacity: 1, onComplete: function(){
 			TweenLite.to('.Muno', .5, { ease: Power2.easeOut, left: 0, opacity: 0, display: 'none'});
 			TweenLite.to('.Mdos', .5, { ease: Power2.easeOut, left: 0, opacity: 0, display: 'none'});
 			TweenLite.to('.Mcuatro', .5, { ease: Power2.easeOut, left: 0, opacity: 0, display: 'none'});
 		}});
 	});
 	$('.jilotepec').on('click', function(e){
 		e.preventDefault ();
 		TweenLite.to('.Mcuatro', .5, { ease: Power2.easeOut, left: 420, display: 'block', opacity: 1, onComplete: function(){
 			TweenLite.to('.Muno', .5, { ease: Power2.easeOut, left: 0, opacity: 0, display: 'none'});
 			TweenLite.to('.Mtres', .5, { ease: Power2.easeOut, left: 0, opacity: 0, display: 'none'});
 			TweenLite.to('.Mdos', .5, { ease: Power2.easeOut, left: 0, opacity: 0, display: 'none'});
 		}});
 	});
 });