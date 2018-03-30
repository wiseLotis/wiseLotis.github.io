
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
		} 
	});
})(jQuery);


$.when( $.ready ).then(function() {
	console.log("document is loaded");
	$(document).commonUiSet();
});
