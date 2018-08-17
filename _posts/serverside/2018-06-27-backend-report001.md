---
layout: post
title : "String? StringBuilder? StringBuffer?"
slug: "backend-report001"
subtitle: "왜 StringBuilder를 써야 하는가?"
description: ""
categories: java serverside
tags: [java]
comments: true
feed: true
google: true
sitemap :
 changefreq: daily
 priority: 1.0
feed : true
---


## StringBuilder를 왜 사용할까?

String은 변경 할 수 없는 type이다 즉 String value = "abc"; value ="def"; 인경우

String은 public final class 이므로 상속 받을 수 없고 새로운 값을 할당 할때마다 새로 생성이 됨.

즉  abc가 들어있던 메모리에 def가 들어가는 것이 아니라 새로운 String 클래스가 생성되서 새로운 주소에 def가 들어감.

때문에 String을 계속 생성하면 String의 주소값이 stack에 계속 쌓이고 클래스들은 GC가 호출 되기 전까지 heap에 계속 쌓여있게 되기 때문에 성능의 저하를 가져올 수 있음.


 반면에 StringBuffer와 StringBuildder는 memory에 append 하는 방식으로 클래스를 직접 생성하지 않음.

StringBuffer와 StringBuilder의 가장 큰 차이점은 동기화이다. StringBuilder의 경우 동기화를 보장하지 않기 때문에 멀티스레드 환경에서 안전하지 않다.  

그럼 StringBuffer를 쓰지 왜 StringBuilder를 쓰는걸까 ?

StringBuilder는 싱글 스레드 환경에서 StringBuffer의 drop-in replacement(더 좋은 성능을 내기 위한 대체품)로 사용하기 위해 설계(since JDK) 되었다.

 즉! 동기화가 수행되지 않는 만큼 더 빠르다!

 멀티 스레드 환경이 아니라면 StringBuffer보다 StringBuilder를 사용하자!

(drop-in replacement는 컴퓨터 공학에서 사용하는 용어 https://en.wikipedia.org/wiki/Drop-in_replacement )

String, StringBuilder, StringBuffer를 잘 구분해서 사용해야겠다.
