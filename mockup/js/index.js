$(function() {
	var favCounter = 0;
	$('.btn-fav').click(function(e) {
		if ($(this).parents().hasClass('favored')) {} else {
			$(this).parent().addClass('favored');
			favCounter++;
			$('.msg-no-fav-yet').removeClass('show');
			$('#fav_counts').html(function(i, val) {
				return +favCounter
			});
		}
	});
	$('.btn-trash').click(function(e) {
		$(this).parent().removeClass('favored');
		favCounter--;
		if (favCounter < 1) {
			$('.msg-no-fav-yet').addClass('show');
		}
		$('#fav_counts').html(function(i, val) {
			return +favCounter
		});
	});
	$('header div').click(function(e) {
		$('header div').removeClass('active');
		$(this).addClass('active');
		$('body').toggleClass('show-only-favs');
		$("html, body").animate({
			scrollTop: 0
		}, "fast");
		if (favCounter > 1) {
			$('.msg-no-fav-yet').removeClass('show');
		}
	});
});