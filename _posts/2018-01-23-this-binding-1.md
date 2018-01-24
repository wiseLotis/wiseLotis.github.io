---
layout: post
title:  "this 바인딩"
subtitle: ""
slug: "this-binding-1" 
description: "this란 무엇인가? "
categories: etc tech
google: true 
tags: [home]
comments: true 
sitemap : 
changefreq: daily
priority: 1.0
feed : true 
---

### What is this? 

js(Javascript: 편의상 js라고 작성 하겠다.) 로 코딩을 하다보면 수도 없이 많이 this를 사용한다 <br>
나는 each, foreach를 이용해서 loop를 돌릴때나 element 의 특성값을 가져올때나 여하튼 무지하게 많이 사용하는것 같다.  <br>
<br> 처음에는 js를 시작했을때에는 scope의 개념으로 생각하고 제대로  this를 보지 못했다. 
<br> 내가 목표로 하고 있는건 그저 그런 개발자가 아니므로  *this를 제대로 마주하고 싶어졌다.*  
<br>


우선 어떤 함수를 호출하면 활성화 레코드  즉 실행 콘텍스트가 생성 된다 <br>
실행콘텍스트는  *실행 가능한 자바스크립트 코드가 실행되는 환경* 로 자바스크립트 엔진이 코드를 실행하기 위해 필요한 여러가지 정보가 들어있다. <br>
( js는  단일 스레드 단일 동시 언어로, 한번에 하나의 작업만 할 수 있다. 그래서 call-stack이라고 하는 실행 컨텍스트가 쌓이는 호출 스택을 가지고 있다. )<br>

함수를 실행하면 다음의 단계를 거치게 된다 

1. 활성화 객체 생성 (include *VO:Variable Object*, *Scope chain*, *this Object*) 

2. argument 객체 생성 ( VO > AO )  

3. 유효범위 정보 생성 (scope-chain) - 부모가 갖고 있는 VO 와 scope-chain이 포함된 리스트가 생성 된다. 
스코프 체인에 대해서도 나중에 포스팅 해야지.. 
[nextree- scope의 이해](http://www.nextree.co.kr/p7363/)  

4. 변수의 객체화 (variable object) 
- 코드 내 함수 표현식을 제외한 함수 선언을 대상으로 생선된 함수 객체가 값으로 설정 됨. (함수 호이스팅)
- VO 의 프로퍼티로 변수명이 undefined로 선언됨.(변수 호이스팅) //var 로 선언된 함수는 선언 및 초기화가 함께 진행 됨. 변수 값은 실행 시 할당된다. <br>

5. this 바인딩 (this object)

6. 실행 

[PoiemaWeb]에 쉽고 자세하게 설명 되어있으니 참고 (http://poiemaweb.com/js-execution-context)<br>
실행 컨텍스트의 순서는 내가 찾아 본 여러 포스트에서 조금씩 달랐다. 해석의 문제인가.. <br>
어떤 책에 실행 콘텍스트에 call-stack이 포함되어 있다고도 적혀있다... <br>
개인적으로 찾아 보고 나중에 포스팅 해야겠다.  <br>

뭐 다른 이야기는 각설하고.. 다시 this로 돌아오자면 <br>
this는 작성 시점이 아닌 런타임 시점에 *함수 호출 당시 상황(언제 어떻게 호출했는가?)*에 따라 결정 된다.<br>

위의 과정을 이해 해야 <br>
this 바인딩에 대해서 알 수 있기 때문에 이렇게 서두가 길어져 버렸다 . <br>
( 어디까지 적어야 하느냐가 정말 어려운것 같다. ) <br>

바인딩의 종류는 아래와 같다 . <br>

1. 기본 바인딩  < 
2. 암시적 바인딩 < 
3. 명시적 바인딩 ( 하드 바인딩 )  
4. new 바인딩 

####1. 기본 바인딩 

'단독함수 실행'에 관한 규칙으로 나머지 규칙에 해당하지 않을 경우 적용되는 *기본규칙*이다 <br>

{% highlight ruby %}
function hi(){
console.log('hi'+this.name); 
}
var name = 'jenny'; 
hi(); 
{% endhighlight %}<br>
위 code의 결과는 당연히 2이다. <br>
변수 a와 함수 foo()는 전역 VO에 선언되어 있다. this 는 기본바인딩 되어 전역 객체를 참조한다. <br>

* 엄격 모드 * 의 경우 전역 객체가 기본 바인딩 대상에서 제외 된다 <br>
{% highlight ruby %}
function hi(){
"use strict"; 
console.log('hi'+this.name); 
}
var name = 'jenny'; 
hi(); // type error
{% endhighlight %}<br>
foo() 호출 부의 엄격 모드 여부와는 상관이 없다 .  <br>

####2. 암시적 바인딩 <br>
호출부에 콘텍스트 객체가 있는지, 객체의 소유/ 포함 여부를 확인하는 것이다. <br>
즉, 실행 콘텍스트의 DO에 있는지 여부를 확인 한다. <br>
함수 레퍼런스에 대한 콘텍스트 객체가 존재할 때 암시적 바인딩 규칙에 따라 이 콘텍스트 객체가 함수 호출 <br>

{% highlight ruby %}
function hi(){
console.log('hi'+this.name); 
}
var obj1 = {
name: 'jenny'; 
obj2:obj2
}
var obj2 = {
name: 'lisa'; 
hi: hi
}

obj1.obj2.hi(); // hi lisa

{% endhighlight %}

<br>

sayHi(obj.hi)


hi 호출 했을때  호출 시점에 obj의 객체 레퍼런스가 준비 되어 있다. <br>
hi 함수의 실행 콘텍스트 생성 시 this에 바인딩 된다.<br>  (* 객체의 참조가 체이닝 된 형태인 경우 최상위/최하위 호출부와 연관된다.중간단계는 무시~ 당연한 결과이다. obj2의 this 가 obj이고, foo의 this 도 obj가 될테니까..  ) <br>


{% highlight ruby %}
function hi(){
console.log('hi' + this.name); 
}

function sayHi(){
hi(); 
}
var obj = {
name : 'jenny', 
hi : hi
}
var name ='jisoo'; 
{% endhighlight %}

위의 예제와 비교해 보면 정말 아리송 하게 만드는 결과가 나온다 결과는 'hi jisso'  이를 암시적 소실이라고 한다. 
인자로 함수를 넘기면 암시적으로 레퍼런스가 할당된다. 
내장 함수를 사용할 경우 위와 같은 현상이 일어남. 
위의 코드를 실행하면 실제로 hi 콘텍스트 생성 시 this가 window 객체로 바인딩 된다 (엄격 모드일 경우 undefined)


<script>
	function hi(){
		console.log('hi' + this.name); 
	}

	function sayHi(){
		var name = 'lisa'; 
		hi(); 
	}
	var obj = {
		name : 'jenny', 
		hi : hi
	}
	var name ='jisoo'; 

	sayHi.call(obj);

</script>


