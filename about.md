---
layout: default
title: About
permalink: /about/
---
<script src = "/js/greensock/TweenMax.min.js"></script>
<script src = "/js/greensock/plugins/TextPlugin.min.js"></script>
<link rel="stylesheet" href="/css/about.css" />
<div>
<a href="/blog" class="btn-blog_link">Go to Blog..</a>
</div>
<section id="say_hello">
  <p class="greeting"></p>
  <!-- <div class="hello_area">
안녕하세요.<br> 도전을 두려워하지 않는 <span class="strong_1">프로열정러</span><br>
<span class="strong_2">개발자 유수연</span>입니다.
  </div>
  <img src="/assets/me.gif" alt="유수연사진"/>
  <span class="scrollinfo">Scroll▼</span> -->
</section>

<section id="introduce">
  <p class="title">Contact..</p>
  <p>Mail: wiselotis@gmail.com</p>
</section>
 <div class="flower_area">
</div>

<script>
 $(document).ready(function(){
 	TweenMax.to('.greeting', 3, {text:"Hello- Nice to see you!", ease:Linear.easeNone, repeat: -1, repeatDelay:1 });

  var falling = true;

  TweenLite.set(".flower_area",{perspective:600})
  //TweenLite.set("img",{xPercent:"-50%",yPercent:"-50%"}
  var total = 30;
  var container =$(".flower_area"),	w = window.innerWidth , h = window.innerHeight;

   for (i=0; i<total; i++){
     var flower = $("<span></span>");
      TweenLite.set(flower, {attr:{class:'flowers'},x:R(0,w),y:R(-200,-150),z:R(-200,200)});
     container.append(flower);
     fallingElm(flower);
   }

   function fallingElm(elm){
     TweenMax.to(elm,R(6,15),{y:h+100,ease:Linear.easeNone,repeat:-1,delay:-15});
     TweenMax.to(elm,R(4,8),{x:'+=100',rotationZ:R(0,180),repeat:-1,yoyo:true,ease:Sine.easeInOut});
     TweenMax.to(elm,R(2,8),{rotationX:R(0,360),rotationY:R(0,360),repeat:-1,yoyo:true,ease:Sine.easeInOut,delay:-5});
   };

  function R(min,max) {return min+Math.random()*(max-min)};

});
</script>
