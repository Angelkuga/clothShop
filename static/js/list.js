function bindListEvent() {
	/* filter */
	$(".filter-bar .filter-item").click(function(e) {
		e.preventDefault();
		console.log($(this).hasClass('filter-price'));
		if($(this).hasClass('filter-price')) {
			if($(this).hasClass('down')) {
				$('.price-list').slideUp();
			} else {
				$('.price-list').slideDown();
			}
			$(this).toggleClass('down');
		} else {
			$(this).toggleClass('down');
		}
	});
	$(".filter-bar .price-item").click(function(e) {
		e.preventDefault();
		var selectTxt = $(this).html();
		$('.filter-price').html(selectTxt).removeClass('down');
		$('.price-list').slideUp();
	});
}

$(document).ready(function() {
	bindListEvent();
});
