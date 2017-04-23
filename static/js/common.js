var menuAniData= {
	open: 600,
	close: 800
};
var menuTimer;

function findBootstrapEnvironment() {
    var envs = ['xs', 'sm', 'md', 'lg'];

    var $el = $('<div>');
    $el.appendTo($('body'));

    for (var i = envs.length - 1; i >= 0; i--) {
        var env = envs[i];

        $el.addClass('hidden-'+env);
        if ($el.is(':hidden')) {
            $el.remove();
            return env;
        }
    }
}

function setFootMenu() {
	console.log(findBootstrapEnvironment());
	if (findBootstrapEnvironment() == "xs" || findBootstrapEnvironment() == "sm") {
		$("#j_footer_menu").addClass("footer-menu-mobile");
		$("#j_footer_menu .sub-menu .wrap-box").css("display", "none");
		$("#j_footer_menu .sub-menu .tit").unbind().click(function() {
			console.log("come in");
			$("#j_footer_menu .sub-menu .tit").removeClass("opened");
			if ($(this).closest("li").find(".wrap-box").css("display") == "block") {
				$(this).removeClass("opened");
				$(this).closest("li").find(".wrap-box").removeClass("opened")
			} else {
				$(this).addClass("opened");
				$(this).closest("li").find(".wrap-box").addClass("opened")
			}
			return false
		})
	} else {
		$("#j_footer_menu").removeClass("footer-menu-mobile");
		$("#j_footer_menu .sub-menu .tit").unbind("click");
		$("#j_footer_menu .sub-menu .wrap-box").css("display", "block")
	}
}



function bindEvent() {

	// menu
	$('.menu-toggle').click(function(){
		$('.sub-menu-sm-xs').toggleClass('opened');
	});

	$('.sub-menu-sm-xs .close').click(function() {
		$('.sub-menu-sm-xs').removeClass('opened');
	});

	$('.sub-menu-sm-xs a.main').click(function(){
		var $a = $(this);
		var $ul = $(this).next('ul');
		$a.removeClass("opened");
		if ($ul.css("display") == "block") {
			 $a.removeClass("opened");
			 $ul.slideUp();
		} else {
			$a.addClass("opened");
			$ul.slideDown();
		}
		return false
	});


	$(".menu-item").on("mouseleave", function() {
		var $menuItem = $(this);
		clearTimeout(menuTimer);
		hideSubMenu($menuItem);
		menuTimer = setTimeout(function() {
			$menuItem.find(".title").removeClass("selected")
		}, menuAniData.close)
	});

	$(".menu-item").on("mouseover", function() {
		var $menuItem = $(this);
		$menuItem.find(".title").removeClass("selected");
		$menuItem.find(".title").addClass("selected");
		showSubMenu($menuItem);
		clearTimeout(menuTimer);
		menuTimer = setTimeout(function() {			
		}, menuAniData.open)
	});
	
	

	$(".geniousbar-search").click(function(p) {
		p.preventDefault();
		// $.zegna.banners.closeAll();
		$(".sliderWrap").removeClass("nobg");
		$(".sliderWrap").removeClass("bg2");
		$(".sliderWrap .content").hide();
		// $(".geniousbaricons li a").removeClass("active");
		// $(".geniousbarsearchlink").addClass("active");
		$(".sliderWrap .geniousbarsearchcontent").show();
		$(".ribbon-right").addClass("opened");
		// if (!(location.protocol === "http:" && fiabSecureLogin == "true")) {
		// 	$(".ribbon-right").addClass("opened")
		// }
		// if (findBootstrapEnvironment() != "xs" || 1 == 1) {
		// 	$("#geniousbarsearchresults").css("height", $(".ribbon-right").height() - 118 - 70)
		// }
		// $("#submenu-sm-xs").removeClass("opened");
		// if ($("html").hasClass("touch")) {
		// 	$("body").addClass("prevent-scroll")
		// }
		return false
	});
	$(".geniousbar-account").click(function(p) {
		p.preventDefault();
		// $.zegna.banners.closeAll();
		$(".sliderWrap").removeClass("nobg");
		$(".sliderWrap").removeClass("bg2");
		$(".sliderWrap .content").hide();

		$(".sliderWrap .geniousbaraccountcontent").show();
		$(".ribbon-right").addClass("opened");
		return false
	});
	$("#close-ribbon-right").click(function(p) {
		p.preventDefault();
		// $(".geniousbaricons li a").removeClass("active");
		$(".ribbon-right").removeClass("opened");
		// $("#submenu-sm-xs").removeClass("opened");
		// $("html, body").removeClass("prevent-scroll");
		// if ($(".genious-search-suggestion").data("aibs-widget") === "GeniousSearchSuggestion") {
		// 	$(".geniousbarcontent input#keywords").val("");
		// 	$(".textbox-search.genious-search-suggestion a").removeClass("fill-svg-search");
		// 	$(".geniousbarcontent #search-result").stop().delay(500).queue(function() {
		// 		$(this).addClass("opacity-0")
		// 	});
		// 	$(".autosuggestion").removeClass("opacity-1");
		// 	$(".autosuggestion").addClass("opacity-0 hide")
		// }
		return false;
	});

}

function hideSubMenu(target) {
	target.find(".sub-menu").removeClass("open");
	target.find(".title").removeClass("selected");
	
}

function showSubMenu(target) {
	target.find(".title").addClass("selected");
	target.find(".sub-menu").addClass("open");
}
$(document).ready(function() {
	// $('.rec-txt.desktop').hide();
	$(window).resize(function() {
		setFootMenu();
	});
	setFootMenu();
	bindEvent();
});