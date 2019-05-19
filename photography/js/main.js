$(window).on('load scroll resize', function(){
	$( '.isInViewport:in-viewport(-75)' ).addClass( 'visible' );
});

$(window).on('load', function() {
	$('.img-load').each(function(){
			$(this).attr('src', $(this).data('original'));
			$(this).on("load", function () {
			$(this).addClass('img-loaded').removeClass('img-load');
		});
	});
});