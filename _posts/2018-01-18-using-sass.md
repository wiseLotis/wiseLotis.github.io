---
layout: post
title:  "sass 이용하기"
subtitle: ""
slug: "using_sass" 
discription: "멋지고 간편하게 css작성하기"
categories: etc tech
google: true 
tags: [css, sass, home]
comments: true
image: "/assets/posts_title/using_sass.jpg"
sitemap : 
 changefreq: daily
 priority: 1.0
---
Sass란? <br>
=======
"Syntactically Awesome Style Sheets"의 약자로, 문법적으로 멋진 스타일 시트 ? 다.  CSS 전처리기로 복잡한 작업을 쉽게 할 수 있게 해주고, 코드의 재활용성을 높여줄 뿐 만 아니라, 
코드의 가독성을 높여주어 유지보수를 쉽게 해준다. 얼마나 멋진 스타일을 가지고 있으면 Awesome 이라고 했을까 
<br> 

일을 할때는 이미 퍼블리싱이 된 소스에서 작업을 하는 일이 많다보니 그렇게 css를 수정할 일이 엄청 많지는 않았는데, 이번에 블로그를 만들면서 css를 수정하다가 보니 css작성이 너무 불편하고 귀찮은 점들이 많았다. <br>
예를들면 main색상과 sub색상의 색상이 변경 될 때 처리 wrapper클래스 이름을 a 에서 b로 바꿀때 하위에 selector들을 전부 변경해야 했었기 때문에 상당히 불편했다 .<br> 
뭐 물론 찾아 바꾸기라는 좋은 기능은 있지만서도 원하지 않는 것들까지 바꿔버릴 수 있고, 
보기에도 확 늘어져서 한눈에 들어오지 않는 불편함이 있었다. <br>

[기존소스] <a class='btn btn-code' data-toggle="collapse" href="#basic">CODE</a> 
<div class="collapse_wrapper">
<div class="collapse" id="basic">
	<div class="card">
{% highlight ruby %}

a, a:-webkit-any-link {
	color: #cf1b27 !important;
	text-decoration: none;
}
 
a:hover{
	color:#523e7c !important;
	text-decoration: underline;
}

a:visited {
	color: #523e7c !important;
	text-decoration: none;
}
.basic a, .basic a:-webkit-any-link {
	color: #ff6f6f !important;
	text-decoration: none;
}

.basic a:hover{
	color:#cf1b27 !important;
	text-decoration: underline;
}

.basic a:visited {
	color: #523e7c !important;
	text-decoration: none;
}

.inverse a, .inverse a:-webkit-any-link {
	color: #ffffff !important;
	text-decoration: none !important;
}
.inverse a:visited{
	color: rgba(255,255,255,0.4) !important;
	text-decoration: none;
}
.inverse a:hover, .inverse a:focus{
	color:#523e7c !important;
}

{% endhighlight %}
	</div>
</div>
</div>
 
그래서 처음에는 css 자체 변수 (아래 예제 참고) 를 이용해 볼까 했었다. 

[css자체 변수 이용 ]<a class='btn btn-code' data-toggle="collapse" href="#root">CODE</a>
<div class="collapse_wrapper">
<div class="collapse" id="root">
	<div class="card">
{% highlight ruby %}
:root{
--main-color: #ff6f6f;
--sub-color: #E14D43;
--dark-main-color: #95212c;
--fc-color : #26292c;
--em-fc-color : #cf1b27;
--dark-fc-color: #523e7c;
}

.basic a, .basic a:-webkit-any-link {
color: var(--main-color) !important;
text-decoration: none;
}

.basic a:hover{
color: var(--em-fc-color) !important;
text-decoration: underline;
}

.basic a:visited {
color: var(--dark-fc-color) !important;
text-decoration: none;
}

.inverse a, .inverse a:-webkit-any-link {
color: #ffffff !important;
text-decoration: none !important;
}
.inverse a:visited{
color: rgba(255,255,255,0.4) !important;
text-decoration: none;
}
.inverse a:hover, .inverse a:focus{
color: var(--dark-fc-color) !important;
}
{% endhighlight %}
</div></div></div>
변수를 이용해서 수정 할 수 있다는 것 말고 큰 장점이 없었고, 무엇보다 css자체 변수는 explorer나 다른 브라우저에서 지원하지 않는 문제점 이 있었다.

<br>
조금이라도 덜 귀찮을 수 없을까?  라고 해서 찾은 것이 
Sass다.. 
아래와 같이 보기 어렵고 수정하기 귀찮은 코드를 훨~ 씬 간결하게 작성할 수 있다.  
Sass라면 css작성에 드는 코스트를 훨씬 절약할 수 있을 것 같다. <br>

[sass이용] <a class='btn btn-code' data-toggle="collapse" href="#sass">CODE</a>
<div class="collapse_wrapper">
<div class="collapse" id="sass">
<div class="card">
{% highlight ruby %}

$main-color: #ff6f6f;
$sub-color: #E14D43;
$dark-main-color: #95212c;
$fc-color : #26292c;
$em-fc-color : #cf1b27;
$dark-fc-color: #523e7c;

.basic{ 
a, a:-webkit-any-link {
color: $main-color !important;
text-decoration: none;
}
a:hover{
color: $em-fc-color !important;
text-decoration: underline;
}
a:visited {
color: $dark-fc-color !important;
text-decoration: none;
}
}
.inverse{
a,  a:-webkit-any-link {
color: #ffffff !important;
text-decoration: none !important;
}
a:visited{
color: rgba(255,255,255,0.4) !important;
text-decoration: none;
}
a:hover, a:focus{
color: $dark-fc-color !important;
}
}
{% endhighlight %}

</div></div></div>
위와같이 사용하는것 외에도 Extend , Mixin, 조건문, 심지어는 경고와 오류까지 다양하게 css를 작업할 수있다 .

...작성중... 