
$.fn.areaSelecting = function(){
	var $this = $(this);

	$this.each(function(){
		var area = $(this).find('.btn_area > .btn.active').eq(0).data('area')||"";
		if(!area){
			 area = $(this).find('.btn_area > .btn').eq(0).data('area')||"";
		}
		$(area).show();
	})
	$this.find('.btn_area > .btn').on('click', function(e){
		var $boxarea = $(this).parents('.btn_area').siblings('.box_area');
		$(this).siblings('.btn').not($(this)).removeClass('active');
		if(!$(this).hasClass('active')){
			$(this).addClass('active');
			var area = $(this).data('area');
			$(area).show();
			$boxarea.find('.box').not(area).hide();
		}
	});
}

 $.fn.selectArea = function(){
	 var $this = $(this);
	 var $arealink = $this.find(".area_link");

	 $arealink.on("click"	, function(e){
		 e.preventDefault();
 		 if($(this).hasClass("active")){
			 return false;
		 }
		 var area_nm = $(this).data("area"),
				 $target =  $(".area-contents[data-area='"+area_nm+"']");
			$(".area-contents").not($target).hide();
			$target.show();
			$arealink.filter(".active").removeClass("active");
			$(this).addClass("active");

	 });

	 $arealink.filter(".active").each(function(e){
		$(this).trigger("click");
	})
 }
