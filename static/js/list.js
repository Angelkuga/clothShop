	
/* filter */
$(".filter-abr .filter-item").click(function() {
	if($(this).hasClass('filter-price')) {
		if($(this).hasClass('up')) {
			$('.price-list').slideUp();
		} else {
			$('.price-list').slideDown();
		}
		$(this).toggle('up');
	} else {
		$(this)toggle('up');
	}
});
