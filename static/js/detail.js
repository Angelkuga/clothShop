
var stylePointsData = {
	'point-1': {
		'title': '自然肩部',
		'descri': '自然肩部，贴合身体曲线。自然肩部采用薄形垫肩及柔和肩线，顺着接缝平坦下垂，被视为典型的百搭样式之一,休闲风格和正式风格都能轻松驾驭。'
	},
	'point-2': {
		'title': '方驳领',
		'descri': '简单着装的首选，方驳领带来干净、经典的气息，既优雅又随性。'
	},
	'point-3': {
		'title': '单排两粒扣',
		'descri': '现在流行西装最常见的一种设计是单排两粒扣前襟，充分释放百搭性。单排两粒扣存在于优雅的高端西装和休闲西装里，适用于任何场合——谨记站立时只系上方纽扣。'
	},
	'point-4': {
		'title': '贴袋',
		'descri': '较为轻便的风格常见于比较休闲的款式，如亚麻夏季西装、挺括的花呢套装。贴袋是由一块与衣身面料一致的亚麻缝在上衣外部的开口式口袋。'
	}
}

function bindDetailEvent() {
	// 添加轮播和放大效果
	var owl = $('.prpd-carosuel');
	owl.owlCarousel({
	    items:1,
	    loop:true,
	    autoplay:true,
	    autoplayTimeout:5000,
	    autoplayHoverPause:true,
	    nav: true,
	    dots: true
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
	// 衣服细节选择器

	$('.style-point').click(function() {
		var pointTarget = $(this).data('point');
		var pointData = stylePointsData[pointTarget];
		if(!pointData) {
			return;
		}
		var $pointTitle = $('.prod-style .point-title'), $pointDescri = $('.prod-style .point-descri');
		$pointTitle.html(pointData.title);
		$pointDescri.html(pointData.descri);
	})
}
$(document).ready(function(){
	bindDetailEvent();
});
