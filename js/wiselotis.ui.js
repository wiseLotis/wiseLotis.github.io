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
	})


}