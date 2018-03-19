 
(function($) {
	//함수 extend
	$.fn.extend({
		commonUiSet: function(){
			var $this = $(this);
			var user = navigator.userAgent;
			var userArray = [
			['ie ie8', user.indexOf('MSIE 8.0') != -1],
			['ie ie9', user.indexOf('MSIE 9.0') != -1],
			['ie ie10', user.indexOf('MSIE 10.0') != -1],
			['android', user.indexOf('Android') != -1],
			['iphone', user.indexOf('iPhone') != -1],
			['mobile', user.indexOf('Mobile') != -1]
			];
			console.log(user);

			//html에 agent class 붙이기
			if (!$this.find('html').is('[class^="ie"]')) {
				for (var i = 0; i < userArray.length; i++) {
					if (userArray[i][1]) {
						$this.find('html').addClass(userArray[i][0]);
					}
				}
			}
		},
		mobMenuAct: function (obj) {
			var defaults = {
					el: null,
					btn: null,
					motion: null,
					acallb: {},
					direct: 'left',
					close: null,
			};
			//생성자
			function MobMenuAct($this) {
				this.el = $this;
				this.obj = $.extend(true, defaults, obj);
				this.acallb = function (conf) {
					var def = {
							'duration': 400,
							'easing': 'easeOutExpo',
							'complete': function () {}
					};
					return $.extend(true, def, conf);
				};
				this.init();
			};
			MobMenuAct.prototype = {
					//헤더,풋터 초기화
					init: function () {
						this.bind();
					},
					//헤더 버튼 이벤트 바인드
					bind: function () {
						var _this = this;
						$(this.obj.btn).off().on({
							'click': function (e) {
								e.preventDefault();
								var $this = $(this);
								$this.parent().addClass("focus").delay(500).queue(function(){
									$this.parent().removeClass("focus").dequeue();
								});
								//사이드 메뉴 보이고
								_this.move(true);
							},
						});
						$(this.obj.close).off().on({
							'click': function (e) {
								e.preventDefault();
								var $this = $(this);
								$this.addClass("focus").delay(500).queue(function(){
									$this.removeClass("focus").dequeue();
								});
								//사이드 메뉴 안보이고
								_this.move(false);
							},
						});
					},
					//사이드 메뉴 보일때, 안보일때, 바탕 opacity 이벤트 정의
					move: function (bool) {

						if(bool && obj.show){
							obj.show();
						}
						var _this = this;
						var acallb = function (bool, obj) {
							return;
							if (bool) {
								return _this.acallb($.extend(true, {
									'complete': function () {
										$('.dimm').show().stop().animate({
											'opacity': 1
										});
									}
								}, obj));
							} else {
								return _this.acallb($.extend(true, {
									'complete': function () {
										$('.dimm').stop().animate({
											'opacity': 0
										}, {
											'complete': function () {
												$(this).hide();
											}
										});
									}
								}, obj));
							}
						};
						//body에 효과 주기
						if (bool) {
							$('body').scrollTop(0);
							$('body').addClass('gnbon');
							if (this.obj.direct == 'right') {
								$(this.obj.el).stop().animate({
									'transform': 'translateX(0)'
								}, acallb(bool, {
									'easing': 'easeOutExpo',
									'duration': 1000
								}));
								$('.dimm').show().stop().animate({
									'opacity': 1
								});
								if (this.obj.motion == 1) {
									$('.container, .hmenu_head').stop().animate({
										'transform': 'translateX(-280px)'
									}, acallb(bool, {
										'easing': 'easeOutExpo',
										'duration': 1000
									}));
								}
							}
							if (this.obj.direct == 'left') {
								$(this.obj.el).stop().animate({
									'left': 0
								}, acallb(bool));
								$('.dimm').show().stop().animate({
									'opacity': 1
								});
							}
						} else {
							$('body').removeClass('gnbon');
							if (this.obj.direct == 'right') {
								$(this.obj.el).stop().animate({
									'transform': 'translateX(' + $(this.obj.el).width() + 'px)'
								}, acallb(bool, {
									'easing': 'easeOutExpo',
									'duration': 1000
								}));
								$('.dimm').stop().animate({
									'opacity': 0
								}, {
									'complete': function () {
										$(this).hide();
									}
								});
								if (this.obj.motion == 1) {
									$('.container, .hmenu_head').stop().animate({
										'transform': 'translateX(-0)'
									}, acallb(bool, {
										'easing': 'easeOutExpo',
										'duration': 1000
									}));
								}
							}
							if (this.obj.direct == 'left') {
								$(this.obj.el).stop().animate({
									'left': '-100%'
								}, acallb(bool));
								$('.dimm').stop().animate({
									'opacity': 0
								}, {
									'complete': function () {
										$(this).hide();
									}
								});
							}
						}
					},
			};
			this.each(function () {
				$.data(this, new MobMenuAct($(this), obj));
			});
			
			return this;
		},
	});
})(jQuery);


$.when( $.ready ).then(function() {
	console.log("document is loaded"); 
	$(document).commonUiSet(); 

}); 