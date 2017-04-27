function(t, e) {
	function n(n) {
		function h() {
			return !Ct.wrap || 0 === Ct.slides.length || 0 === Ct.content.length
		}

		function f(t) {
			return Ct.content[t].getAttribute("src") === Pt
		}

		function d() {
			var t = void 0;
			return t = _t.cloudinaryEnabled ? i.getElHeight(Ct.wrap) : i.getElHeight(Ct.content[bt])
		}

		function g() {
			return -(100 * bt)
		}

		function m() {
			var t = 0;
			return p.forEach(Ct.slides, function(e, n) {
				0 === n || n > bt || (t -= e.clientHeight)
			}), t + "px"
		}

		function v() {
			It = Ct.slides[bt].offsetWidth
		}

		function y() {
			return It
		}

		function b(t) {
			Tt = t
		}

		function _() {
			return Tt
		}

		function S() {
			Ot = zt ? _t.handheldSwipeThresholdFactor : _t.defaultSwipeThresholdFactor
		}

		function E() {
			return Ot
		}

		function w(t, e) {
			A(Ct.wrap, e), i.setCSS(Ct.wrap, wt.transform, wt.translate + "(" + t + "%,0)")
		}

		function x(t, e) {
			A(Ct.siteWrap, e), i.setCSS(Ct.siteWrap, wt.top, t), i.setCSS(Ct.header, wt.position, wt.fixed), i.setCSS(Ct.header, wt.top, "0")
		}

		function A(t, e) {
			i.removeClass(t, _t.transitionClass), e && i.addClass(t, _t.transitionClass)
		}

		function C(t) {
			var e = 0,
				n = !0;
			if (Math.abs(t.deltaX) > y() * E()) {
				switch (_()) {
					case 2:
						bt = it(At.arrowNext);
						break;
					case 4:
						bt = it(At.arrowPrev)
				}
				W(), e = g()
			} else e = g();
			return [e, n]
		}

		function k(t) {
			if (t.type !== a.USER_ACTIONS.PAN_LEFT && t.type !== a.USER_ACTIONS.PAN_RIGHT) throw Error("event is not of type panleft or panright");
			var e = !1;
			if (b(t.direction), t.type === a.USER_ACTIONS.PAN_LEFT && !O()) return I(), [g(), e];
			var n = 100 / y() * t.deltaX / 2;
			(0 === bt && _() === a.ACTIONS.DIRECTIONS.RIGHT || bt === Rt - 1 && _() === a.ACTIONS.DIRECTIONS.LEFT) && (n *= _t.dragSlowDownFactor);
			var r = n + g();
			return [r, e]
		}

		function P(t) {
			switch (t.type) {
				case a.USER_ACTIONS.PAN_LEFT:
				case a.USER_ACTIONS.PAN_RIGHT:
					return k(t);
				case a.USER_ACTIONS.PANEND:
					return C(t);
				default:
					throw Error("No " + a.USER_ACTIONS.PAN_LEFT + ", " + a.USER_ACTIONS.PAN_RIGHT + ",\n\t\t\t\t\t\t" + a.USER_ACTIONS.PANEND + " event passed as an argument")
			}
		}

		function T() {
			Ut = !1
		}

		function I() {
			Ut = !0
		}

		function O() {
			return Ut
		}

		function N(t) {
			var e = bt === Rt - 1 ? Rt - 1 : bt + 1,
				n = 0 === bt ? bt : bt - 1;
			bt = t ? e : n
		}

		function D(t, e) {
			var n = bt - 1 <= 0 ? 0 : bt - 1,
				r = bt + 1 >= Rt - 1 ? Rt - 1 : bt + 1;
			bt = e ? n : r
		}

		function B(t) {
			Ft = t
		}

		function L(t) {
			setTimeout(function() {
				Bt = !1
			}, t)
		}

		function j() {
			kt && kt.init()
		}

		function R() {
			if (_t.cloudinaryEnabled) {
				var t = 0;
				H(t)
			}
		}

		function M() {
			Z(), j(), Ct.bullets > 0 && V(), R(), _t.contentIsImage && _t.loadImageOnInit && H(_t.preloadImages ? bt + 1 : bt), F(), Rt = Ct.slides.length, U(), S(), _t.positionArrowsByCss || X(), z(), gt()
		}

		function F() {
			_t.scrollToFooter && Wt && (i.addClass(Ct.footer, "js-slide-not-full-height"), Ct.slides.push(Ct.footer))
		}

		function U() {
			Wt ? (i.setCSS(Ct.siteWrap, {
				position: wt.absolute,
				left: 0,
				right: 0,
				top: 0
			}), Y(), J(), tt()) : (K(), Q())
		}

		function H(t) {
			if (Ct.content.length <= 1 && t > 0) return !1;
			var e = Ct.content[t].getAttribute(At.dataSrc),
				n = Ct.content[t];
			n.setAttribute("src", e), i.on(n, "load", function() {
				i.setCSS(Ct.loaders[t], wt.display, wt.none), i.setCSS(n, wt.opacity, "1"), bt === t && pubSub.publish("" + s.PUBSUB_EVENTS.IMAGE_LOADED, bt), Q()
			})
		}

		function V() {
			Ct.bullets.forEach(function(t) {
				i.removeClass(t, Et.activeClass)
			}), Ct.bullets[bt] && i.addClass(Ct.bullets[bt], Et.activeClass)
		}

		function z() {
			return !(!Dt || 0 === Ct.arrows.length) && (Ct.arrows.forEach(function(t) {
				l.publish(s.PUBSUB_EVENTS.ANIMATE_RESET, [t])
			}), Ct.slides.length <= 1 && Ct.arrows.forEach(function(t) {
				return i.addClass(t, "suit-slider__arrow-animation")
			}), $(), !!Vt && void setTimeout(function() {
				Ct.arrows.forEach(function(t) {
					return ot(t)
				})
			}, _t.arrowOnMobileFadeoutTime))
		}

		function $() {
			0 === bt ? (i.addClass(Ct.arrows[0], "suit-slider__arrow-animation"), i.removeClass(Ct.arrows[1], "suit-slider__arrow-animation")) : bt === Rt - 1 ? (i.addClass(Ct.arrows[1], "suit-slider__arrow-animation"), i.removeClass(Ct.arrows[0], "suit-slider__arrow-animation")) : Ct.arrows.forEach(function(t) {
				return i.removeClass(t, "suit-slider__arrow-animation")
			})
		}

		function W() {
			q(), 0 !== Ct.bullets.length && V(), z(), pubSub.publish("" + s.PUBSUB_EVENTS.UPDATED_SLIDE, bt), Wt || (Q(), Vt && _t.fixedPositionBullets && _t.scrollToTop && (setTimeout(et, 600), ht()))
		}

		function q() {
			if (_t.contentIsImage) {
				var t = f(bt);
				t && (H(bt), v()), G()
			}
		}

		function G() {
			if (_t.preloadImages) {
				var t = bt + 1 === Rt ? 0 : bt + 1,
					e = f(t);
				e && H(t)
			}
		}

		function K() {
			Ct.slides.forEach(function(t, e) {
				i.setCSS(t, wt.left, 100 * e + "%"), _t.cloudinaryEnabled ? i.show(t, wt.flex) : i.show(t)
			})
		}

		function Y() {
			var t = i.getEl(Et.html, e, !0)[0];
			i.setCSS(t, wt.overflow, wt.hidden), i.setCSS(document.body, wt.overflow, wt.hidden)
		}

		function X() {
			var t = i.getEl(Et.arrow, n, !0),
				e = d(),
				r = _t.positionArrowsToViewport || Mt < e,
				o = r ? Mt : e,
				a = (o + _t.arrowIconHeight) / 2;
			t.forEach(function(t) {
				i.setCSS(t, wt.top, a + "px")
			})
		}

		function J() {
			var t = Ct.bulletWrap.clientHeight,
				e = Mt / 2 - t / 2;
			i.setCSS(Ct.bulletWrap, wt.top, e + "px")
		}

		function Z() {
			if (_t.useViewportHeight && _t.useCustomViewportHeight) throw Error("useViewportHeight and useTwiceViewportHeight cannot be set totrue simultaneously, please change accordingly")
		}

		function Q() {
			if (_t.isSettingHeight) {
				var t = void 0;
				t = _t.useViewportHeight ? Mt - Ct.wrap.offsetTop : _t.useCustomViewportHeight ? i.getViewport().y * _t.customViewportHeightFactor : d(), t > 1 && i.setCSS(Ct.wrap, wt.height, t + "px")
			}
		}

		function tt() {
			var t = n.offsetTop;
			p.forEach(Ct.slides, function(e) {
				if (!i.hasClass(e, "js-slide-not-full-height")) {
					var n = Mt - t;
					i.setCSS(e, wt.height, n + "px")
				}
			})
		}

		function et() {
			_t.scrollToTop && (jt = !0, c(e.body, "scroll", {
				duration: 400,
				easing: "easeOutQuad",
				complete: nt
			}))
		}

		function nt() {
			i.setCSS(e.body, wt.transform, wt.none), i.setCSS(Ct.bulletWrap, wt.position, wt.absolute), Lt = !1, jt = !1, ht()
		}

		function rt(t) {
			if (t > Rt || t < 0) throw Error("The position you entered does not exist.");
			bt = t - 1, W(), z(), Wt ? x(m(), !0) : w(g(), !0)
		}

		function it(t) {
			switch (t) {
				case At.arrowPrev:
					return bt = 0 === bt ? bt : bt - 1;
				case At.arrowNext:
					return bt = bt === Rt - 1 ? Rt - 1 : bt + 1;
				default:
					bt = parseInt(t)
			}
			return bt
		}

		function ot(t) {
			l.publish(s.PUBSUB_EVENTS.ANIMATE_FADE_OUT, [t])
		}

		function at(t) {
			return (t.className.indexOf(Et.bullet.substring(1)) !== -1 || t.className.indexOf("suit-slider__bullet") !== -1) && _t.makeBulletsReadOnly
		}

		function st(t) {
			if (t.preventDefault(), Nt && !jt && ("panstart" === t.type && T(), t.type === a.USER_ACTIONS.PAN_LEFT || t.type === a.USER_ACTIONS.PAN_RIGHT || t.type === a.USER_ACTIONS.PANEND)) {
				var e = P(t),
					n = r(e, 2),
					i = n[0],
					o = n[1];
				w(i, o)
			}
		}

		function ut(t) {
			if (!Ft && (t.preventDefault(), !Bt)) {
				var e = t.deltaY <= -qt,
					n = t.deltaY >= qt;
				(e || n) && (Bt = !Bt, zt ? N(e) : (D(t, e), L(_t.scrollTimeoutDeskop)), W(), x(m(), !0))
			}
		}

		function ct(t) {
			Nt = t
		}

		function lt(t) {
			Dt = t
		}

		function pt() {
			return Mt = i.getViewport().y, v(), S(), _t.positionArrowsByCss || X(), z(), Wt && !Ft ? (J(), tt(), void x(m(), !0)) : void Q()
		}

		function ht() {
			var t = window.scrollY + Mt > document.body.clientHeight - Ct.footer.clientHeight;
			t && Lt ? (i.setCSS(Ct.bulletWrap, wt.position, wt.absolute), Lt = !1) : t || Lt || (i.setCSS(Ct.bulletWrap, wt.position, wt.fixed), Lt = !0)
		}

		function ft(t) {
			if (!at(t.target)) {
				var e = t.target.getAttribute(At.dataDir) || t.target.parentNode.getAttribute(At.dataDir);
				return bt = it(e), W(), Wt ? void x(m(), !0) : void w(g(), !0)
			}
		}

		function dt() {
			i.on(t, a.USER_ACTIONS.WHEEL, ut), l.subscribe("disable-scroll", function(t, e) {
				_t.id === e && B(!0)
			}), l.subscribe("enable-scroll", function(t, e) {
				_t.id === e && B(!1)
			}), zt && ($t.on(a.USER_ACTIONS.PAN, ut), $t.on(a.USER_ACTIONS.PANEND, function() {
				Bt = !1
			}), i.on(n, a.USER_ACTIONS.TOUCHMOVE, function(t) {
				t.preventDefault()
			}))
		}

		function gt() {
			return Vt || i.on(t, a.USER_ACTIONS.RESIZE, i.debounce(pt, _t.debounce)), i.on(Ct.wrap, a.USER_ACTIONS.TOUCHSTART, function() {
				z()
			}), mt(), Wt ? void dt() : (_t.fixedPositionBullets && i.on(t, a.USER_ACTIONS.SCROLL, ht), void(zt && ($t.on("panleft panright panstart panend", st), i.on(e, a.USER_ACTIONS.TOUCHMOVE, function(t) {
				jt && t.preventDefault()
			}))))
		}

		function mt() {
			_t.useNavigation && Ct.navigation.length > 0 && i.onEach(Et.navigationClass, a.USER_ACTIONS.CLICK, ft, n), _t.contentIsImage && _t.slideOnImageClick && i.onEach(Et.content, a.USER_ACTIONS.CLICK, function() {
				bt = bt === Rt - 1 ? 0 : bt + 1, W()
			}, n)
		}

		function vt(t) {
			kt = t
		}

		function yt() {
			return Ct
		}
		var bt = 0,
			_t = {},
			St = {
				debounce: 200,
				debounceDragTablet: 200,
				contentIsImage: !0,
				preloadImages: !0,
				useNavigation: !0,
				positionArrowsByCss: !1,
				positionArrowsToViewport: !1,
				arrowIconHeight: 24,
				dragSlowDownFactor: .4,
				handheldSwipeThresholdFactor: .08,
				defaultSwipeThresholdFactor: .12,
				arrowOnMobileFadeoutTime: 2e3,
				scrollTimeoutDeskop: 800,
				scrollTwoSlidesTreshold: 150,
				scrollTreshold: 4,
				slideOnImageClick: !1,
				useViewportHeight: !1,
				useCustomViewportHeight: !1,
				customViewportHeightFactor: 2,
				disableDesktopDrag: !1,
				loadImageOnInit: !0,
				verticalSlider: !1,
				disableVerticalSliderOnMobile: !0,
				transitionClass: "suit-slider__animate-transition",
				fixedPositionBullets: !1,
				scrollToTop: !1,
				scrollToFooter: !1,
				isSettingHeight: !0,
				disableScrollWithPubsub: !1,
				id: "suit-slider",
				cloudinaryEnabled: !1,
				makeBulletsReadOnly: !1
			},
			Et = {
				navigationClass: ".js-slider-nav",
				bullet: ".js-slider-bullet",
				bulletWrap: ".js-slider-bullet-wrap",
				wrapper: ".js-slider-wrap",
				slides: ".js-slide",
				content: ".js-slider-content",
				activeClass: "el-active",
				arrow: ".js-slider-arrow",
				loader: ".js-slider-loader",
				footer: ".js-footer",
				siteWrap: ".js-site-wrap",
				header: ".js-menu-header-wrap",
				html: ".js-html"
			},
			wt = {
				left: "left",
				height: "height",
				translate: "translate",
				transform: "transform",
				top: "top",
				display: "display",
				opacity: "opacity",
				position: "position",
				fixed: "fixed",
				absolute: "absolute",
				none: "none",
				overflow: "overflow",
				hidden: "hidden",
				flex: "flex"
			},
			xt = {
				tablet: "tablet"
			},
			At = {
				dataDir: "data-slider-dir",
				dataSrc: "data-src",
				arrowPrev: "prev",
				arrowNext: "next"
			},
			Ct = {
				navigation: i.getEl(Et.navigationClass, n, !0),
				wrap: i.getEl(Et.wrapper, n, !0)[0],
				slides: i.getEl(Et.slides, n, !0),
				content: i.getEl(Et.content, n, !0),
				arrows: i.getEl(Et.arrow, n, !0),
				bullets: i.getEl(Et.bullet, n, !0),
				bulletWrap: i.getEl(Et.bulletWrap, n, !0)[0],
				loaders: i.getEl(Et.loader, n, !0),
				footer: i.getEl(Et.footer, e, !0)[0],
				siteWrap: i.getEl(Et.siteWrap, e, !0)[0],
				header: i.getEl(Et.header, e, !0)[0]
			},
			kt = void 0,
			Pt = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
		if (h()) return !1;
		var Tt = 0,
			It = 400,
			Ot = .3,
			Nt = !0,
			Dt = !0,
			Bt = !1,
			Lt = !0,
			jt = !1,
			Rt = void 0,
			Mt = i.getViewport().y,
			Ft = !1,
			Ut = !1,
			Ht = navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
			Vt = i.isScreenSize(s.BREAKPOINTS.MOBILE),
			zt = o.getDeviceInfo().device === xt.tablet || i.isScreenSize(s.BREAKPOINTS.TABLET),
			$t = new u(n, {
				domEvents: !0
			});
		o.updateNodeConfig(n, St, _t);
		var Wt = _t.verticalSlider || Vt && !_t.disableVerticalSliderOnMobile,
			qt = Ht ? 0 : _t.scrollTreshold;
		return {
			init: M,
			goToSlide: rt,
			setHeight: Q,
			enableDrag: ct,
			enableArrows: lt,
			getElements: yt,
			setSlideHeight: tt,
			insertContentModule: vt
		}
	}
	var h = i.getEl(".js-suit-slider", e, !0);
	return 0 !== h.length && ([].forEach.call(h, function(t) {
		var e = n(t);
		t.suitSlider = Object.create(e)
	}), {
		getInstance: function(t) {
			if (!("suitSlider" in t)) {
				var e = n(t);
				t.suitSlider = Object.create(e)
			}
			return t.suitSlider
		}
	})
}(window, window.document)