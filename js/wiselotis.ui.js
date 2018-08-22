
$.fn.customTags = function(){
  // folditem
  var $this = $(this);
  var $foldbtns = $this.find(".fold-btn");
  $foldbtns.on("click", function(e){
    e.preventDefault();
    $(this).toggleClass("active");
    if($(this).hasClass("active")){
      $(this).html($(this).data("fold"));
    }else{
      $(this).html($(this).data("open"));
    }
    var $target =$(this).siblings(".fold-contents[data-area='"+$(this).data("area")+"']");
    $target.slideToggle();
  })
}
 $.fn.selectArea = function(){
	 var $this = $(this);
	 var $arealink = $this.find(".area_link");

	 $arealink.on("click"	, function(e){
     debugger;
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
