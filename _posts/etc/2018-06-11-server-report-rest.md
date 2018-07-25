---
layout: post
title:  "REST?"
subtitle: "REST 정의, 이용"
slug: "server-report-rest"
description: "REST에 대해서 알아 보고, 어떻게하면 제대로 된 RESTful api를 만들 수 있을지 알아보자. "
categories: etc
tags: [arch]
comments: true
google: true
sitemap :
 changefreq: daily
 priority: 1.0
feed : true
---

#### REST (Representational safe transfer) (by Roy Fielding : 웹의 창시자)
분산 하이퍼미디어 시스템을 위한 소프트웨어 아키텍처의 한 형식으로 웹의 장점을 최대한 활용할 수 있도록 설계 된 네트워크 아키텍쳐 원리의 모음이다.

* 네트워크 아키텍쳐 원리 : 자원을 정의하고 자원에 대한 주소를 지정하는 방법
RESTful : REST 원리를 따르는 시스템

#### REST아키텍쳐의 여섯가지 제약조건
1.	Uniform Interface
-	클라이언트가 백엔드와 독립적으로 단일 언어로 서버와 통신 할 수 있음.
-	클라이언트와 서버간의 통신을 위한 변하지 않는 표준화 된 수단이 제공 되어야 함.
-	REST 인터페이스 원칙에 대한 가이드
  - * 자원기반 (Resource Based)
  - * 표현을 통한 자원 조작 (Manipulation of Resources Through Representations)
  - *	자기 설명적 메시지 (self-descriptive Message)
  - *	HATEOAS(Hypermedia as the Engine of Application State

2.	Stateless
-	REST는 API를 stateless 하게 수행한다.(상태를 저장하지 않음. 서버는 클라이언트의 상태와 서버의 상태를 알지 못해도 상관없음.)

3.	Cacheable
-	WWW에서 처럼 client 에서 캐시기능을 사용할 수 있다.

4.	Client-Server (클라이언트와 서버의 분리)
-	서버와 클라이언트는 인터페이스가 변경 되지 않는 한 독립적으로 교체 및 개발 가능 (클라이언트는 서버에 있는 데이터 저장소에 관심이 없고, 서버는 클라이언트의 상태를 보존하지 않는다.(stateless)

5.	Layered System (계층화된 시스템)
-	클라이언트는 클라이언트와 서버 중간에 중개 서버가 있는지 알 수 없음.
-	중개 서버는 로드 밸런싱 등을 할 수 있고, 캐싱 가능, 보안 정책 시행 가능

6.	Code on Demand (optional)
-	Code on Demend 를 사용하면 응용 프로그램 내에서 사용하기 위해  API를 통해 코드 또는 애플릿을 전송할 수 있음. (웹 API가 여러 언어로 사용되기 때문에 채택이 어려워졌고 보안에 대한 우려가 있음.)

#### 올바른 RESTful API 만들기
1.	심플하고 직관 적으로
-	최대 2 depth 정도로 간단하게 만드는 것이 좋음.(자체표현구조)
-	리소스명은 동사보다 명사를 사용
-	행위의 경우 method를 이용해서 정의하면 됨. 	
나쁜 예) POST: /users/setUserName  >>  수정 : POST: /users/jenny
-	의미에 맞게 단수명사 보다 복수 명사를 사용

2.	리소스간 관계를 표현하는 방법
  1)	서브리소스를 이용 GET - /users/{userId}/cellphoneNo -> 소유, has 관계일 때 좋음  
  2)	서브리소스에 관계를 명시 GET /users/{userId}/like/food -> 관계가 애매하거나 구체적인 표현이 필요할 때

(참고)머릿글 및 수락 매개 변수
요청 헤더에서 클라이언트는 서버에게 수신할 수 있는 콘텐츠 유형을 보냄 (Accept 필드)
MIMEtype (https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)  

3.	에러처리  : 기본 HTTPResonseCode를 사용하고 ResponseBody에 detail을 서술
-	200 : 성공
-	400: BadRequest
-	401: Unathorized – api 인증, 인가 실패
-	404: Not found – 해당 리소스가 없음.
-	405: Method Not allowed – 메소드가 사용불가능 함
-	500 :Internal Server Error – 서버 에러
https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
- 자세한 정보를 Message에 서술 할 수 있음.
{“status”:”401”,”message”:”Authenticate”,”code”:200003,”more
info”:”http://www.twillo.com/docs/errors/20003"}

4.	API version 관리
새로운 기능이 들어간 새로운 api 배포 시 하위 호환성을 보장하면서 서비스를 해야 하기 때문에버전 관리가 필요함.  
{serviceName}/{version}/{REST url} -> POST: myWeb.com/users/v1.0  

5.	Paging / Partial Response .
-	Paging : GET /record?page=5&rpp=25  :총 125 레코드가 response로 온다.
-	Partial Response(부분응답): GET/{userId}/friends?fields = id,namd

6.	검색 (전역검색 과 지역검색)
-	전역검색은 전체 리소스에 대한 검색 /search?q=name%3DKim
-	지역검색은 특정 리소스에 대한 검색 /users?q=name%3DKim
-	쿼리 조건은 하나의 쿼리 스트링으로!
0

11

1








11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
<pre>
GET _ Users? Name=kim&age=20&offset=20&limit=10 // 이름이 Kim이고 나이가 20인 user를 20부터 10명 가져옴.
- 단점 > offset limit이 쿼리 조건인지 페이징 조건인지 모름
- 수정 >  users?q=*Name %3DKim,age%3D20 *&offset=20&limit=10
</pre>

7.	단일 API 엔드포인트 활용
여러 개의 서버에서 동작할 때 , reverseProxy 서버를 세우고 api.myweb.com 단일 url을 구축후
api.myweb.com/users -> user.myweb.com
api.myweb.com/cars -> car.myweb.com
으로 라우팅하게 함.
Api 서버들이 확장이 되어도 클라이언트는 단일 엔드포인트를 보면 되고, 부하 분산 및 로그를 통한 감사도 편리함.

8.	HATEOAS 를 이용한 링크 처리
(Hypermedia As The Engine of Application State) 하이퍼 미디어의 특징을 이용하여 http리스판스에 다음 Action이나 관계된 리소스에 대한 http 링크를 제공

#### Rest의 문제점

1.	표준 규약이 없다 – 서비스 표준 규약이 없기 때문에 안티 패턴이 적용된 REST Api도 많이 사용되고 있음. 안티패턴을 지양해야 함.

2.	전통적인 RDBMS에 적용시키기 어려움.
- Primary key가 복잡한 경우 (여러 개의 컬럼이 모여서 하나의 pk가 되는 경우 , 주민번호 + 이름 + 핸드폰 번호 ) /users/v1.0/{personalNo}/{userNm}/{cellphoneNo}  인 경우 의미가 이상하게 해석 될 수 있음 (REST 의 특징이자 장점이 사라짐)
- 해결방안 AK(Alternative Key) 를 사용할 수 있음. 의미를 가지지 않는 unique한 value를 key값으로 사용할 수 있음.  (google)
- mongoDB같은건 jsonDocument를 그대로 넣을 수 있는 구조를 갖을 수 있다.


#### Rest api 보안
1.	인증_ api를 호출하는 대상을 확인 (api호출 가능한지..)
  - 1)	API key방식 – api 제공자에게 key를 발급받아, 호출할 때 key를 메시지에 넣어서 호출
  - 2)	API token방식 – 사용자가 아이디 패스워드로 사용자 인증을 받은 후 일정 기간 동안 유효한 토큰을 발급받아 이용. (탈취를 당해도 ID/PW가 탈취당하지 않는다.)
  - 3)	HTTP Basic Auth
  Id/pw를 http header에 Base64로 인코딩 authorization 중간에 탈취당하면 노출 되므로 https를 사용  
  4)	Digest access Auth
  HTTP Basic Auth를 보강해서 나옴. 서버로부터 nonce라는 난수를 받아 id와 password를 nonce와 hash해서 전송.
  - 5)	클라이언트 인증 추가
  - 6)	제 3자 인증
  - 7)	IP whitelist를 이용한 터널링 – api를 호출하는 클라이언트의 api가 일정할 경우(서버간 통신): 앞단에 apche 웹서버를 배치해서 특정 url로 들어오는 iplist를 제한
  - 8)	Bi-directional Certification(Mutual SSL)
  양방향으로 SSL 제공 API호출에 대한 인증을 클라이언트의 인증서를 이용
  가장 높은 수준의 인증

2.	인가(Authorization)_ 리소스에 대해서 사용할 권한이 있는지
  - 1)	API 인가 방식  
    - 	RBAC (Role Based Access Control) : 일부 권한을 가진 일부관리자를 만들고 사용자에게 관리자 권한 부여
    - 	ACL(Access Control List) : 사용자에게 권한을 직접 부여
  - 2)	API 인가 처리 위치
    - 	Api를 호출하는 클라이언트 : 클라이언트가 신뢰할 수 있는 경우에만 사용 가능함. Ex) 조회 하려는 사용자의 id 가 세션에 있는 사용자 id 와 일치하는 경우에만 조회하는 api 호출
    - 	Api를 실행하는 API server  : ** 가장 일반적임 api 서버의 비즈니스 로직단에서 권한 처리를 하는 방식.
    - 	Gateway – javascript기반의 web클라이언트 등 다양한 클라이언트가 나옴에 따라 서버 쪽으로 인가의 책임이 이동함. (javascript는 변경가능하므로 인가가 의미가 없어짐.)
    Api호출이 들어오면 apiAccessToken을 사용자 정보와 권한 정보로 api token management로 변환 후 접근하려는 api 에 대해서 권한 인가 처리를 함.
    구현이 쉽지 않음. –  token에 매핑되는 id가 때에 따라 http body에 json 형태나 header에 있을 수 있는데 이때 gateway에서 로직을 구현해야 하기 때문에 어려움이 있음.

3.	네트워크레벨암호화_ https
  - 1)	HTTPS 사용 - ** 가장 일반적 Man-in-the-Middle Attack이 있을 수 있음-> 공인된 인증서를 사용시 가장 손쉽게 방지할 수 있음.

4.	메시지무결성보장_ message가 변조가 되지 않도록 방지
  -  message에 대한 Signature를 생성 메시지와 함께 보내어 검증
  - 	REPLY ATTACK 해커가 값을 변조하지 않고 같은 요청을 계속해서 보내는 것 -> timestamp 를 이용해서 해결 가능함. 호출된 시간 +-10분만큼의 호출만 정상적인 호출로 인식   

5.	메시지본문 암호화 _ cost 문제도 있고 메시지 기반으로 라우팅하는등의 작업이 어려우므로 보안이 필요한 부분만 암호화 함.  
  - 1)	비대칭키 알고리즘 :  공개키와 비공개키 이용, 클라이언트에서 서버로 보내는 단방향 메시지에 대해서는 사용이 가능하지만, 서버에서 클라이언트로 보내는 RESPONSE 메시지에 적용이 어려움.
    - 	RSA – HTTPS 사용 ,
  - 2)	대칭키 알고리즘 : 서버와 클라이언트가 같은 키를 가지고 있음. (키가 노출 되면 답이 없다. – 안전하게 키를 전송하는 방법이 필요함. – 비대칭키로 대칭키를 전달.. )
    - 	AES 256

6. SPA(Single Page Application)
  – javascript 기술이 발전하면서 spa가 유행하기 시작함. 페이지 reloading이 없으므로 반응성이 좋아서 많이 사용
  코드 자체가 노출 되기 때문에(로직을 변경 할 수 있음) API 보안도 새로운 요구사항을 가지고 옴.
  - 1)	Single Origin Policy ( 동일 출처 정책 ): 웹 브라우저에서 동작하는 프로그램은 해당 프로그램이 로딩된 위치에 있는 리소스에만 접근이 가능함. (포트도 일치 해야함. http -> https 호출 불가능)
7.	Single Origin Policy 에 의한 제약을 해결하는 방법
    - 	CORS(Cross-Origin Resource Sharing)
      API 서버와 javascript가 호스팅 되는 서버의 url이 다르기 때문에 발생하는 문제 이기 때문에 앞단에 ReverseProxy를 넣어서 전체 url을 만들어 줄 수 있다.

    - 	JSONP                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           


  -- 작성중 --
---
<pre>
* 참고 *
    [조대협님의 블로그(http://bcho.tistory.com)](http://bcho.tistory.com/953)
    - REST API 이해와 설계 - 1 개념 잡기 http://bcho.tistory.com/953
    - REST API 이해와 설계 - 2 디자인 가이드  http://bcho.tistory.com/954
    - REST API 이해와 설계 - 3 보안 가이드  http://bcho.tistory.com/955
    - http://www.restapitutorial.com/lessons/whatisrest.html
    - https://ko.wikipedia.org/wiki/REST
</pre>
