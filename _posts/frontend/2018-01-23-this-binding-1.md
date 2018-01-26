---
layout: post
title:  "this 바인딩"
subtitle: "this 마주보기"
slug: "this-binding-1" 
description: "this란 무엇인가? "
categories: frontend
google: true 
tags: [js, home]
comments: true 
image: "/assets/posts_title/this-binding-1.jpg"
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

[PoiemaWeb](http://poiemaweb.com/js-execution-context)에 쉽고 자세하게 설명 되어있으니 참고 <br>
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

#### 1. 기본 바인딩 

'단독함수 실행'에 관한 규칙으로 나머지 규칙에 해당하지 않을 경우 적용되는 *기본규칙*이다 <br>

{% highlight ruby %}
function introduce(){
console.log('my name is '+this.name); 
}
var name = 'jenny'; 
introduce(); 
{% endhighlight %}<br>
위 code의 결과는 당연히 my name is jenny 이다. <br>
변수 a와 함수 foo()는 전역 VO에 선언되어 있다. this 는 기본바인딩 되어 전역 객체를 참조한다. <br>

* 엄격 모드 * 의 경우 전역 객체가 기본 바인딩 대상에서 제외 된다 <br>
{% highlight ruby %}
function introduce(){
"use strict"; 
console.log('hi, my name is '+this.name); 
}
var name = 'jenny'; 
introduce(); // type <error></error>
{% endhighlight %}<br>

foo() 호출 부의 엄격 모드 여부와는 상관이 없다 .  <br>


#### 2. 암시적 바인딩


호출부에 콘텍스트 객체가 있는지, 객체의 소유/ 포함 여부를 확인하는 것이다. <br>
즉, 실행 콘텍스트의 DO에 있는지 여부를 확인 한다. <br>
함수 레퍼런스에 대한 콘텍스트 객체가 존재할 때 암시적 바인딩 규칙에 따라 이 콘텍스트 객체가 함수 호출 <br>

{% highlight ruby %}
function introduce(){
console.log('hi, my name is '+this.name); 
}
var jenny = {
name: 'jenny',
friend:lisa
}
var lisa = {
name: 'lisa', 
introduce: introduce
}

name: 'suji'
jenny.friend.introduce(); // hi, my name is lisa

{% endhighlight %}

<br>
 
introduce(jenny.introduce); 이면 hi, my name is jenny  전역에서 호출을 했어도, suji가 아닌 jenny다. 호출 했을때  호출 시점에 객체 레퍼런스가 준비 되어 있으므로 jenny가 this에 바인딩 될것이다. 이것을 암시적 바인딩이라고 한다.  <br>
 introduce 함수의 실행 콘텍스트 생성 시 this에 바인딩  되므로 <br>  
jenny.friend.introduce(); 의 결과는 hi, my name is lisa 가 된다. <br>


{% highlight ruby %}
function introduce(){
console.log('hi, my name is ' + this.name); 
}

function says(fn){
	fn(); 
}

var jenny = {
	name : 'jenny', 
	says: introduce
}
var name ='jisoo'; 

says(jenny.says); //hi, my name is jisoo !!!! 

{% endhighlight %}

위의 예제와 비교해 보면 정말 아리송 하게 만드는 결과가 나온다 결과는 'hi. my name is  jisso'  이를 암시적 소실이라고 한다. 
인자로 함수를 넘기면 암시적으로 레퍼런스가 할당된다. 
내장 함수를 사용할 경우 위와 같은 현상이 일어남. 
위의 코드를 실행하면 실제로 hi 콘텍스트 생성 시 this가 window 객체로 바인딩 된다 (엄격 모드일 경우 undefined)


#### 3. 명시적 바인딩 

객체 자신을 변형하거나 함수 레퍼런스 프로퍼티를 이용하지 않고 this에 어떤 객체를 바인딩하고 싶을때 명시적 바인딩을 사용한다.


{% highlight ruby %}

function introduce(){
	console.log( "I am " + this.age + " year\'s old."); 
}
var jenny = { 
	name: jenny, 
	age : 20
}
introduce.call(jenny);  // I am 20 year's old

{% endhighlight %}

위의 예제는 introduce 실행 콘텍스트 생성 시 this에 jenny 객체가 바인딩 된다. <br>
객체 대시 단순 원시값을 전달 할경우 원시값에 대응 되는 객체가 this에 바인딩 되는데 이를  박싱이라고도 한다. [포스트: 박싱과 언박싱](ready)
<br>
*명시적으로 바인딩을 해도 암시적 소실이나 프레임워크가 임의로 더어쓰는 경우는 해결이 불가능 함.* 


{% highlight ruby %}

function introduce(){
	console.log( "I am " + this.age + " year\'s old."); 
}
var jenny = { 
	name: jenny, 
	age : 20, 
	says: introduce
}

var sayJenny = jenny.says; 
var age = 30; 

sayJenny(jenny); // I am 30 year's old. ... 이런... 

{% endhighlight %}

sayJenny는 indroduce를 가리키는 레퍼런스일 뿐이다. introduce의 this 에는 명시적 바인딩이 먹히지 않는다. 

이런 명시적 바인딩에 약간의 꼼수를 더할 수 있다. 

{% highlight ruby %}

function calc(num){
	console.log(this.a, num); //2, 3
	return this.a+num; 
}

var num1 = {
	a:2
}

var plus = function(){
	return calc.apply(num1, arguments); 
}
var result = plus(3); 
console.log(result);//5

{% endhighlight %}

헬퍼를 쓸때 사용하는 바인딩이 하드 바인딩이다. <br>
인자를 넘겨 반환값을 돌려받는 등의 함수에 많이 사용된다.  <br>
하드바인딩은 강력! 하다. <br>
plus가 전역에서 호출되었지만 개의치 않는다. <br>
어디서 호출하던지간에 plus의 실행 콘텍스트의 this객체에는 num1이 바인딩 된다. <br>
완전~ 마이페이스이다.. <br>
마이페이스인 사람은 융통성이 없다 지멋대로다. 이런사람은 아무리 능력이 있어도 잘 써먹지 못할 수도 있다. 유연하지 못하기 때문이다. <br>
그래서 강력하면서도 유연한~ <br>소프트 바인딩이 있는데 소프트 바인딩은 this가 전역이거나 undefined일 경우 미리 준비한 대체 기본 객체로 셋팅한다. 
<br> 

소프트 바인딩은 대충 이렇게 넘어가고.. 
다시 하드 바인딩으로 돌아가자면.. 
이런 하드 바인딩 패턴으로 만들어진 함수가 bind함수 이다. 
또 이런 bind 함수를 이용하여 콜백함수의 this를 지정해 주지 못하는 경우의 예비책으로 javascript는 *API 호출 콘텍스트*를 제공 한다. 

- Array.from ( arrayLike [ , mapfn [ , thisArg ] ] )
- Array.prototype.every ( callbackfn [ , thisArg] )
- Array.prototype.filter ( callbackfn [ , thisArg ] )
- Array.prototype.find ( predicate [ , thisArg ] )
- Array.prototype.findIndex ( predicate [ , thisArg ] )
- Array.prototype.forEach ( callbackfn [ , thisArg ] )
- Array.prototype.map ( callbackfn [ , thisArg ] )
- Array.prototype.some ( callbackfn [ , thisArg ] )

흐미.. 유용해 보이는것... 이걸 왜 이제 알았지..?  
암튼.. 얘네를 이용해서 this바인딩을 이용해서 callback함수에 this 바인딩을 해줄 수 있다. 



#### 4. new 바인딩 
드디어 마지막 new바인딩.. 길고 길었다..this야.. 
js에서 new는 클래스 지향적 의미와 상관이 없다고 한다. (그랬어...? )
js에서 생성자란 new연산자 옆에 붙는 그냥 일반함수일 뿐이다.
클래스가 인스턴스화 되는것도 아니고 특별한 함수의 형태도 아니다. 
그냥 새로운 객체를 생성하는것이다. 

new 연산자를 이용하여 생성자 호출을 하면 다음과 같은 일들이 벌어진다고 한다. 
1. 객체 생성 
2. prototype 연결 
3. 생성된 객체는 해당 함수 호출 시 this로 바인딩 된다. 
4. 이 함수가 자신의 또다른 객체를 반환하지 않는 한 new와 함께 호출 된 함수는 자동으로 새로 생성된 객체를 반환한다. 
이책은.. 다좋은데.. 해설이 애매한게 많다. 뭔말을 하는지 도통 뭔말을 하는건지 이해가지 않을때가 있다. 

{% highlight ruby %}
function person(name, age){
	if(age < 20){
		return new student(name, age, 'student'); 
	}else{
		this.name = name; 
		this.age = age; 
	}
}

function student(name, age, job){
	console.log('student'); 
	this.name = name; 
	this.age = age; 
	this.job = job; 
}

var jenny = new person('jenny',18); 

console.log(jenny.name); 

{% endhighlight %}

1. jenny라는 객체가 생성 되었다. 
var jenny = new person('jenny'); 
2. prototype이 연결 되었다.// jenny < person{ name : 'jenny', __proto__: object}
3. 생성된 객체는 해당 함수 호출 시 this로 바인딩 된다. 
this 에 jenny가 바인딩되어서 정확히는 jenny라고 하는 person객체가 바인딩 되어서..jenny라는 person객체의 name에 인자로 전달된 'jenny'가 들어가게 되었다. 
4. 이 함수가 자신의 또 다른 객체를 반환하지 않는 한? new 와 함께 호출 된 함수는 자동으로 새로 생성된 객체를 반환 한다. // person함수가 age 20 이하일때는 person이 아닌 student를 반환한다. 이런 경우를 제외하고는 자동으로 ~ return문이 없어도 person 객체를 반환한다. 
 

계속 보면 이해가 간다.. 이해가 안가면 한번 보고 두번보고 이해 갈때가지 보면 언젠간 이해가 된다. 뭐든 인내는 쓰다. 그러나 인내하고 또 인내하면 언젠가 밝은 내일이... (아직은 안보이지만) 보일것이다.  

#### 5.바인딩 활용 

##### 커링(Currying) - 부분 적용

바인딩의 우선 순위를 따지자면 

new바인딩 >  명시적 바이딩 > 암시적 바인딩 > 기본바인딩 

순이지만 항상 예외란것이 존재 한다 
명시적 바인딩의 꼼수인 하드 바인딩이 new바인딩 보다 우선 시 된다. 
이건 뭐.. 어쩔 수 없는 일이다.  이름 부터가 강력하게 생긴 하드바인딩 아닌가.. 

그러나 어떻게 해서든 하드 바인딩을 오버라이드 해야 할때가 있다 
그것이 바로 커링이라는 요상한 이름의 기술이다. 

쉽게 말해서 점심때 식당가면 기본반찬 셋팅되어 있는거랑 같은 느낌이다.

함수 인자를 전부 혹은 일부만 셋팅 해놓는 것이다. 

다음은 bind함수의 활용 예이다. 

 {% highlight ruby %}


function list() {
  return Array.prototype.slice.call(arguments);
}

var list1 = list(1, 2, 3); // [1, 2, 3]

// 미리 설정된 선행 인수가 있는 함수 생성
var leadingThirtysevenList = list.bind(undefined, 37); //

var list2 = leadingThirtysevenList();
// [37]

var list3 = leadingThirtysevenList(1, 2, 3);
// [37, 1, 2, 3]
{% endhighlight %}

참고: [mdn web docs](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)

list를 선언할때 37 을 딱 깔아 놓고 나중에 담에 함수 호출할때 들어오는 인자들을 뒤로 깐다. 
와... 넘 쌈박하다.. 

var leadingThirtysevenList = list.bind(undefined, 37); 
여기서 첫번째 인자를 undefined 또는 null 값으로 넘기면 this 바인딩이 무시되고 기본 바인딩 규칙이 적용 된다. 

그런데 여기서 this값이 아무래도 상관이 없다고 해서 null 이나 undefined로 넘겨버린다면 문제가 생길 수 있다. 기본바인딩 된 객체에 있는 변수를 참조 할 수 있기 때문이다. 
this가 아무래도 상관이 없다면 .. 안전한 this가 필요하다.
프로그램과 무관한 완전 빈객체를 만들어서 this로 전달 하면 더 ~ 안전한 코드가 될 수 있다. 
(텅빈 객체는 Object.create(null)을 이용하여 만든다.) 

##### 어휘적 this 

###### *self=this;* 

self=this;는 this 바인딩 유지를 위해 사용된다. <br>
self=this 는 꼼수일까?  책의 저자는 self = this; 의 활용을 this를 제대로 이해하지 못하고 골치 아픈 this에서 도망치기 위한 꼼수라고 설명한다. 

인터넷을 찾아보니 self=this 의 사용에 대해서 의견이 분분 하다.  

{% highlight ruby %}
function clock(){ 
	setTimeout(function(){
		alert("wakeup!!!  it's" + this.time ); 
	}, 1000); 
}
var alarm = {
	time : 7 
}

clock.call(alarm); 

{% endhighlight %}

위를 실해 보면 // wakeup!!!  it's undefined
this.time 은 undefine 이다. alarm객체를 명시적 바인딩 해주었지만 setTimeout은 내장 함수이므로 this에 window객체가 바인딩 되기 때문이다. 

이를 해결하기 위해서 아래와 같이 self 를 사용 할 수 있다.  

*slef=this* 
{% highlight ruby %}
function clock(){ 
	var self = this; 
	setTimeout(function(){
		alert("wakeup!!!  it's" + self.time ); 
	}, 1000); 
}
var alarm = {
	time : 7 
}
clock.call(alarm); 
{% endhighlight %}

이런 해결 방법을 저자는 꼼수라고 생각을 한다는 것이다. 
저자가 원하는 방식은 bind를 이용하는 하드 바인딩을 염두해 두었을 것이다.  
bind 함수를 이용하면 무리 없이 it's 7 이라고 나온다.  

{% highlight ruby %}
function clock(){ 
	setTimeout(function(){
		alert("wakeup!!!  it's" + this.time ); 
	}.bind(this), 1000); 
}
var alarm = {
	time : 7 
}

clock.call(alarm); 
{% endhighlight %}

jquery 라면 $.proxy를 이용할 수도 있다.  
뭐.. 어느게 좋다라고는 저자 처럼 말 할 수 없을것 같다.  
인터넷을 찾아보니 self= this;에 대한 의견이 분분하다.. self=this;를 사용했을때 속도가 더 빠르다 라는 이야기도 있고.. 
(https://codereview.stackexchange.com/questions/49872/using-var-self-this-or-bindthis)

사람들이 주장하는 것중에 가장 공감되는 의견은 self가 window 의 별칭이라는 것이다. 
확실히 var self = this; 라인 한줄을 빼먹었을때 오류들을 생각해보면 확실히 bind가 나을지도 모르겠다. 
나는 self 보다 bind를 사용할 것 같긴 하다. 


우리 회사에서 개발하고 있는 앱은 call과 self 를 이용해서 상속의 구조를 취하고 있다.  

*core1* 

{% highlight ruby %}
var fruit  = function(){
	var self = this; 
 	var says = this.says= {
		sort  : function() {
			console.log('this is fruit' );
		} 
	} 
}
{% endhighlight %}

*core2*
 {% highlight ruby %}
var fruit_red = function(){
	fruit.call(this); 
	var self = this; 
	self.says.color = function(item){
 		console.log(item + 'is red'); 
	} 
}
{% endhighlight %}

*개별 js - 각 페이지별 js* 
 {% highlight ruby %}
 var fruit_red_apple = function(){
	fruit_red.call(this); 
	var self = this; 
	var name = 'apple'; 
	this.init = function(){

		self.says.sort(name); 
		self.says.color(name);
	}
}
{% endhighlight %}

위와 같이 js를 만들고, 
jsp script ready 함수에서 new 연산자를 이용해 객체를 만들고 init 하는 형태를 가지고 있다.  

{% highlight ruby %}
$(document).ready(function(){
	var apple = new fruit_red_apple()
	apple.init(); // this is fruit // apple is red
})
{% endhighlight %}

<br><br>
new 연산자를 이용해서 객체를 생성하면 apple이라고 하는 fruit_red_apple 객체가 생성된다. <br>
객체를 생성하면 call 메소드로 인해 call-stack에  fuit_red_apple -> fruit_red -> fruit 순으로 쌓이고 실행 한다. <br>
fruit.call(this) : 명시적 바인딩을 이용해서 fruit의 실행 콘텍스트의 this를 fruit_read_apple{}로 바인딩 한다. <br>
이와 동일 하게 fruit_red.call(this) 를 통해 fruit_red의 실행 콘텍스트의 this를 또 한번 fruit_read_apple{}로 바인딩 하고있다. <br>

###### *FatArrow (=>)화살표 함수*
this를 보장하는 수단으로 화살표 함수도 있다.
<br>
{% highlight ruby %}
function clock() {
  this.second= 0;

  setInterval(() => {
    this.second++; // |this| properly refers to the person object
  }, 1000);
}
var clock = new clock();
{% endhighlight %}

<br>
 clock() 객체의 a 는 1000ms당 1씩 증가한다. <br>
 setInterval의 콜백 함수는 this를 무조건 어휘적으로 포착 한다.  <br>
화살표 함수는 4가지 규칙 대신에 감싸고 있는 스코프를 보고 this를 판단한다. <br>
렉시컬 스코프를 쓰겠다고 기존의 this체계를 포기하는  방법이라고 책의 저자가 은근히 까다가 마지막쯤엔 <br>
혼용해서 쓰면 관리도 안되고 이해가 안될 수 있으니 쓸꺼면 렉시컬 스코프만 쓰고 가식적인 this 스타일의 코드는 집어쳐라고 말한다. <br>

여기까지 this 에 대해서 알아보았다. <br>
드디어 this를 벗어날 수 있게 되었다. <br>
길고 긴 포스팅이었다. <br>
시간 날 때 짬짬히 쓰느라고 꽤 걸렸지만.. 역시 포스팅하길 잘한것 같다. 포스팅을 위해서 예제를 만들면서 공부하니까  <br>
this에 대해서 100% 까지는 아니어도 꽤나 잘 이해할 수 있게 되었다. <br>
(아.. 마무리를 어떻게 지어야 할지 모르겠네)

끝!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

<script>
 

</script>


