---
layout: post
title : "토비 - 테스트"
slug: "backend-spring001"
subtitle: "토비 스프링 3.1 요약 vol.스프링의 원리와 이해 - 2장"
description: ""
categories: spring serverside
tags: [spring]
comments: true
feed: true
google: true
sitemap :
 changefreq: daily
 priority: 1.0
feed : true
---

* 테스트 *
테스트란 내가 예상하고 의도했던 대로 코드가 정확히 동작하는지 확인해서 만든 코디를 확신하게 하는 작업이다.



### 어떻게 테스트 할까?

#### 웹을 이용한 테스트
웹을 이용한 테스트는 단위 테스트에서는 하지 않는다.
왜냐하면 웹에서 테스트를 하려면, 서비스 계층 , MVC 계층, 입출력 기능을 코딩한 후에 웹 애플리케이션을 서버에 배치하고 웹 화면을 띄워서 폼을 열고 값을 입력한 뒤 버튼을 눌러 등록해 봐야 한다.
서비스 클래스, 컨트롤러,  JSP 까지 너무 많은 클래스와 코드가 필요하기때문에 비효율 적이다.
웹을 이용한 테스트는 개발 마지막 단계 통합테스트 때 수행할 수 있다.

#### main()메소드를 이용한 테스트
그나마 편하게 단위 테스트를 할 수 있지만 수동으로 확인을 해야 하고 , 실행하는 것도 번거롭다. 검증 작업도 필요하다. 테스트의 수가 적으면 몰라도 많아지면 검증작업에도 시간이 걸릴 수 있다.

#### 테스트 자동화 도구
개발을 하는데 테스트는 정말 중요하다, 테스트를 수행하지 않고 개발을 한 뒤 뒤에서 테스트를 했을 때 문제가 발생한다면 문제를 확인하는데 시간이 많이 걸리고 수정하는데도 비용이 많이 든다. 또, 수정될 코드가 다른 코드에 영향을 준다면 더 많은 시간이 걸린다.
그러나 테스트를 하는 것이 업무의 부담이 된다면 테스트를 하고 싶지 않게 된다.
테스트는 빠르고 간편하게 실행 될 수 있어야 한다.
자바에는 단순하고 실용적인 테스트 도구가 여러가지 존재한다
그 중에서도 JUnit은 이름 그대로 단위테스트를 만들 때 유용하고 많이 사용 된다.

#### 테스트 주도 개발(TDD Test Driven Development)
테스트를 먼저 만들고 테스트가 성공하도록 하는 코드를 만드는 방식
테스트를 빼먹지 않고 꼼꼼히 만들 수 있음.

### JUnit
#### Junit 테스트를 위해서는?
- library 추가
<div class="codebox">

{% highlight ruby %}
	{% raw %}
 <dependency>
	<groupId>junit</groupId>
	<artifactId>junit</artifactId>
	<version>4.12</version>
</dependency>
	{% endraw %}
{% endhighlight %}
 </div>
- public 으로 선언
- @Test 어노테이션
- 실행방법
- ①	main() 안에서 JUnitCore클래스의 메인 메소드를 호출해 주는 코드를 입력
  - JUnitCore.main(“spring.user.dao.Test”);
- ②	IDE 확장기능 이용
- ③	Maven을 사용 중이라면 maven test이용
  - src/test/java 에 넣고, goals :  -Dtest={class이름} test

#### 검증 코드 전환
- assertThat(user2.getPassword(), is(user.getPassword());
#### 예외 조건에 대한 테스트
- @Test(expected=java.sql.SQLDataException.class)
#### 중복된 코드 개선
- @Before
픽스처 테스트를 수행하는데 필요한 정보나 오브젝트  일반적으로 픽스처는 반복적으로 사용 되므로 @Before메소드를 이용해서 추출해서 사용할 수 있다.
#### 텍스트를 위한 어플리케이션 컨텍스트
- 라이브러리 추가
<a class="btn btn-code" data-toggle="collapse" href="#">CODE</a>
<div class="collapse_wrapper">
<div class="collapse" id="">
<div class="card">
{% highlight java %}
<dependency>
	<groupId>org.springframework</groupId>
	<artifactId>spring-test</artifactId>
	<version>4.3.5.RELEASE</version>
</dependency>
{% endhighlight %}
</div>
</div>
</div>

- @RunWith(SpringJUnit4ClassRunner.class)
- @ContextConfiguration(locations="/applicationContext.xml")
- @Autowired
- @DirtiesContext : xml 설정파일을 변경하지 않고 테스트 코드를 통해 오브젝트 관계를 재구성할 수 있다.  스프링의 테스트 컨텍스트 프레임워크에 해당 클래스의 테스트에서 애플리케이션 컨텍스트의 상태를 변경한다는 것을 알려줌.
classpathxmlapplicationContext <- 상대적으로 xml파일 지정
java.lang.IllegalStateException: Could not load TestContextBootstrapper [null]. Specify @BootstrapWith's 'value' attribute or make the default bootstrapper class available. ~~~
이런 에러는 spring-framewor랑 spring-test 버전이 맞지 않아서 에러가 발생함
Spring-framework에 맞도록 버전을 설정해야 함..

#### 침투적기술과 비침투적 기술
- 침투적 기술 : 기술을 적용했을 때 어플리케이션 코드에 관련 API가 등장 하거나 특정 인터페이스나 클래스를 사용하도록 강제하는 기술. 어플리케이션코드가 해당 기술에 종속적임
- 비침투적기술 : 어플리케이션 로직을 담은 코드에 영향을 주지 않고 적용이 가능한 기술. -> 기술에 종속적이지 않은 순수 코드를 유지할 수 있음.   스프링

#### 학습 테스트
사용할 API나 프레임워크의 기능을 테스트로 보면서 사용방법을 익히는 것.
테스트 코드를 작성해 보면서 빠르고 정확하게 사용법을 익힐 수 있다.
#### 장점
- ①	다양한 조건에 따른 기능을 손쉽게 확인할 수 있음.
- ②	학습 테스트 코드를 개발 중에 참고할 수 있음.
- ④	테스트 작성에 대한 좋은 훈련이 된다.
- ③	프레임워크나 제품을 업그레이드 할 때 호환성을 검증 할 수 있음.
- ⑤	새로운 기술을 공부하는 과정이 즐거워진다?
