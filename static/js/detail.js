
function bindDetailEvent() {
	// 添加轮播和放大效果
	var owl = $('.prpd-carosuel');
	owl.owlCarousel({
	    items:1,
	    loop:true,
	    autoplay:true,
	    autoplayTimeout:5000,
	    autoplayHoverPause:true
	});
	$('.easyzoom').easyZoom();

	// 颜色选择器
	$('.color-select .color-item').click(function(e) {
		$('.color-select .color-item').removeClass('selected');
		$(this).addClass('selected');
	});

	// 尺码选择器
	$('.size-select .size-item').click(function(e) {
		$('.size-select .size-item').removeClass('selected');
		$(this).addClass('selected');
	});

	// 数量选择器
	$count = $('.counter-select .count');
	$minus = $('.counter-select .minus');
	$plus = $('.counter-select .plus');
	var countMax = $count.data('max');
	var countMin = 0;

	$('.counter-select .minus').click(function() {
		if ($count.val() == countMin) {
			return ;
		} else if (parseInt($count.val(), 10) -1 == countMin) {
			$(this).addClass('disabled');
		} else {
			$(this).addClass('active');
		}
		
		var value = parseInt($count.val(), 10)- 1;
		if(value <= countMax - 1) {
			$plus.removeClass('disabled').addClass('active');
		}
		$count.val(value);
	});
	$('.counter-select .plus').click(function() {
		if ($count.val() == countMax) {
			return ;
		} else if (parseInt($count.val(), 10) +1 == countMax) {
			$(this).addClass('disabled');
		} else {
			$(this).addClass('active');
		}
		var value = parseInt($count.val(), 10) + 1;
		if(value >= countMin + 1) {
			$minus.removeClass('disabled').addClass('active');
		}
		$count.val(value);
	});
}
$(document).ready(function(){
	bindDetailEvent();
});
