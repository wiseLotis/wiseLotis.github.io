 

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
