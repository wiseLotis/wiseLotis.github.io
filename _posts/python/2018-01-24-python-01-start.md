---
layout: post 
title : "python 시작하기"
slug: "python-01-start"
subtitle: ""
description: "왜 python인가?"
date: 2018-01-24
categories: python 
google: true 
tags: [python]
comments: true
feed: true
---

## 파이썬 시작하기 


*왜 파이썬인가?* 

내가 파이썬에 관심을 갖게 된 이유는 빅데이터에 관심이 생겼을 때 *빅데이터*를 다루는 기술 중에 파이썬 이 한자리 하고 있다고 이야기를 들었기 때문이었다. 

파이썬이 어떤 언어인지 알지 못했었지만 뭐 알아두면 좋지 않을까? 정도였다. 

빅데이터는 여러가지 기술의 집합이지만 
파이썬의 문법적 간결성과 효과적인 자료구조(2차원 이상의 데이터를 표현하기에 좋음.) 는 많은 빅데이터 솔루션 회사들이 파이썬을 이용하기 시작하였다. 

파이썬을 경험? 체험? 해보기 위해 가장 처음 해본일은 django를 이용한 웹사이트 구축이었다. 

파이썬은 내가 생각했던것보다 훨씬 더 훌륭한 언어였다. 

문법의 간결성과 간결성으로 부터 오는 가독성, 높은 가독성을 바탕으로 한 효율적인 코드 작성 등은 훨씬 더 매력적으로 다가왔다. 

django 프레임워크의 편리함도 한몫했던것 같다 
(django를 이용한 홈페이지만들기는 앞으로 Django 카테고리에 포스팅 할 예정이다. )

서론이 꽤나 길어졌다. 

### 정적언어 VS 동적언어 

다음은 아주 간단한 프로그램이다. 

*c언어*
{% highlight ruby %}
{% raw %}
#include <stdio.h> 
int main(int argc, char* argv[]){
	int age = 20; 
	printf('she is %d', age);
	return 0; 
}
{% endraw %}
{% endhighlight %}


*java*
{% highlight ruby %}
{% raw %}
public class ddd {
	public static void main(String[] args) {
		int age = 20; 
		System.out.printf("no she isn't %d", age);
	}
}
{% endraw %}
{% endhighlight %}

*python*

{% highlight ruby %}
{% raw %}
age = 20
print('she wants to live like %s', age)
{% endraw %}
{% endhighlight %}

java와 c를 보면 변수를 사용할때 변수의 타입을 꼭 선언해 주어야 한다. (변수의 타입: 컴퓨터에게 메모리에서 사용할 공간과 용도를 알려줌. )
또, 한번 변수를 선언하고 나면 변수의 타입을 바꿀 수 없다. ( 엄마한테 문제집 산다고 만원 받아서 까까를 사먹을 수 없다.)
변수의 타입에 맞춰서 변수를 사용해야 하기 때문에 이를 *정적언어*라고 말한다. 


반대로 파이썬은 동적언어라고 하는데, 위에서 파이썬을 이용한 코드를 보면 
변수 사용 시 변수의 타입을 따로 지정하지 않아도 된다. 
(엄마한테 받은 만원으로 까까를 사먹어도 문제가 없다.)


또한, 동적언어는 코드를 컴파일러가 아닌 *인터프리터*로 해석한다. (정적언어는 컴파일러로..) 

*정적언어와 동적언어의 차이는 컴파일러와 인터프리터의 차이에 기인한다.*


<div class="somebox">
<em>컴파일러와 인터프리터</em> <br><br>
컴파일러나 인터프리터나 둘 다 하는 일은 비슷한데 방식이 다르다. 
<br>
컴파일러는 고급언어로 쓴 프로그램을 컴퓨터가 알수 있도록 번역하고 실행하는 과정을 거치는데, 한 번에 기계어로 변환하기 때문에 번역 시간이 오래 걸리고 번거롭지만 
한번 번역된 이후에는 다시 번역하지 않아도 되기 때문에 실행 속도가 빠르다. 
<br>
<br>
인터프리터는 프로그램을 한번에 기계어로 번역하지 않고 한 단계씩 기계어로 해석하여 실행하는 언어처리 프로그램이다. (목적 프로그램이 생성 되지 않는다 > 메모리 할당이 되지 않음.)<br>
줄단위로 번역하기 때문에 시분할 시스템에 유용하다 <br>
그러나 반대로 실행시간이 길다.
<br>
<br>
아, 이건 좀 벗어난 이야기 인데..<br>
java도 인터프리터를 사용한다. <br>
java는 원시 프로그램 (java) 을 컴파일러를 이용해서 목적 프로그램( javac - 자바바이트코드)를 만든다.  <br>

자바 바이트 코드는 JVM (Java Virtual Machine) 언어 인데 JVM은 특정 운영체제로 부터 독립적으로 작동하게 하여 플랫폼의 제약을 없애준다. 중간어(자바바이트코드)를 운영체제에 맞는 기계어로 번역한다. 
<br>
결과적으로 원시 프로그램을 목적프로 그램으로 만들때 컴파일러를 사용하기 때문에(한번에 자바바이트코드로 번역한다.) 인터프리터를 사용하긴 하지만 정적 언어이다. <br>
</div><br>


다시 동적언어에 대한 설명으로 돌아와서, 위에 설명 한대로 동적언어는 인터프리터를 이용하기 때문에 실행 시간이 길다. 

그래서 예전에는 정적언어로 작성된 프로그램에 데이터를 공급하는 용도(그래서 글루 코드라고 불렸다고 한다.)로 사용되었지만 최근에는 인터프리터의 최적화로 인한 속도 개선으로 큰업무를 처리하는데도 사용되고 있다.(빅데이터의 영향이 크지 않나 싶다.)

동적언어의 종류는 파이썬 이외에도 perl, ruby( ruby on rails 짱짱맨 ), php 등이 있다. 
그러나 이 친구들도 파이썬의 간결 명료함을 따라올 수 없다. 너무나 깔끔하다 
깔끔한데 이해가 안가지 않는다. 꼭 필요한말만 하고 쓸데 없는 말은 안하는 멋진 친구다. 
나처럼 이렇게 주저리주저리 말많은 수다쟁이가 아니다. 

이렇게 멋진 친구인데도 단점은 있다. 
동적언어의 단점. 인터프리터를 사용하는 언어의 가장 큰 단점은 누가 뭐래도 속도이다. 
느린 실행시간.. 계산 작업이 많은 프로그램(cpu바운드?)의 경우 이 치명적인 단점을 극복하지 못할 수 있다. 

그럼에도 불구하고 말이 너~무 많은 교장선생님 훈화처럼 요지를 파악하기 어려운것 보다.  
간단하게 할말만 하는 파이썬이 더 효율 적일 수 있고 

파이썬 인터프리터가 지속적으로 개선되고 있고, 많은 사람들이 사용하는 만큼 그 속도가 더더욱 빨라질 것이라고 믿어 의심치 않는다. 

끝!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

\- 파이썬 철학 (import this) -
<div class='somebox'>
Beautiful is better than ugly.<br>
Explicit is better than implicit.<br>
Simple is better than complex.<br>
Complex is better than complicated.<br>
Flat is better than nested.<br>
Sparse is better than dense.<br>
Readability counts.<br>
Special cases aren't special enough to break the rules.<br>
Although practicality beats purity.<br>
Errors should never pass silently.<br>
Unless explicitly silenced.<br>
In the face of ambiguity, refuse the temptation to guess.<br>
There should be one-- and preferably only one --obvious way to do it.<br>
Although that way may not be obvious at first unless you're Dutch.<br>
Now is better than never.<br>
Although never is often better than *right* now.<br>
If the implementation is hard to explain, it's a bad idea.<br>
If the implementation is easy to explain, it may be a good idea.<br>
Namespaces are one honking great idea -- let's do more of those!<br>
</div>