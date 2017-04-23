function bindIndexEvent() {

	// backup  返回顶部
	 $("#j_backup").click(function(e) {
          //以1秒的间隔返回顶部
        $('body,html').animate({scrollTop:0},600);
   	});
	// $(".menu-item").find(".title").on("click", function(A) {
	// 	if (!$("html").hasClass("touch")) {
	// 		clearTimeout(x);
	// 		var $menuItemTitle = $(this);
	// 		var $mainMenu= $menuItemTitle.closest(".main-menu");
	// 		var $menuItem = $menuItemTitle.closest(".menu-item");
	// 		$menuItem.addClass("selected")
	// 	}
	// });


	// rec-prod 推荐产品 列表显示
	$("#j_rec_img,.rec-txt").click(function() {
		var $prodList = $('#j_rec_prod_list');
		if ($prodList.css("display") == "block") {
			if (findBootstrapEnvironment() == "xs" || findBootstrapEnvironment() == "md") {
				$('.rec-txt.mobile').removeClass('opened');
			} else {
				$('.rec-txt.desktop').removeClass('opened');
			}
			$prodList.slideUp();	
		} else {
			if (findBootstrapEnvironment() == "xs" || findBootstrapEnvironment() == "md") {
				$('.rec-txt.mobile').addClass('opened');
			} else {
				$('.rec-txt.desktop').addClass('opened');
			}
			$prodList.slideDown();	
		}
		return;
	});

}

$(document).ready(function() {
	// $('.rec-txt.desktop').hide();
	$(window).resize(function() {
		if (findBootstrapEnvironment() == "sm" || findBootstrapEnvironment() == "xs") {
			$(".rec-txt.desktop").removeClass('show');	
		}
		
	});
	bindIndexEvent();
});