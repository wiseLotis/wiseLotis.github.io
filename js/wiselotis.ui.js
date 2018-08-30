
$.fn.customTags = function(){
  // folditem
  var $this = $(this);
  var $foldbtns = $this.find(".fold-btn");

  $foldbtns.on("click", function(e){
    e.preventDefault();

    var $this = $(this),
        $wrapper = $(this).parents(".fold-area-wrapper"),
        $target =$wrapper.find(".fold-contents[data-area='"+$this.data("area")+"']");

      if($this.hasClass("active")){
        $this.html($this.data("fold")||"close");
      }else{
        $this.html($this.data("open")||"open");
      }
      $this.toggleClass("active");
      $target.toggleClass("active");
      $target.slideToggle();
   });

   var $selectlink = $this.find(".area-link");
   $selectlink.on("click", function(e){
     e.preventDefault();
     var $this = $(this),
        $wrapper = $this.parents(".select-area-wrapper"),
        $target = $wrapper.find(".area-contents[data-area='"+$this.data("area")+"']");
    if(!$this.hasClass("active")){
      $wrapper.find(".area-contents.active").removeClass("active").hide();
      $wrapper.find(".area-link.active").removeClass("active");
      $target.addClass("active").show();
      $this.addClass("active");
    }else{

    }

   })

   function slideTarget($btn, $target, option){
     if($btn.hasClass("active")){
       $target.hide();
     }else{
       $target.show();
     }
     $btn.toggleClass("active");
     $target.toggleClass("active");
   }


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
