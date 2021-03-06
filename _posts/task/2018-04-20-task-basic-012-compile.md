//---
layout: post
title:  "BacktotheBasic - 컴파일러, 링크, 인터프리터"
subtitle: ""
slug: "task-basic-011-compile"
description: ""
categories: task
tags: [task]
comments: true
image: "/assets/posts_con/cover_task.jpg"
google: true
sitemap :
 changefreq: daily
 priority: 1.0
feed : true
---


컴파일러, 링크, 인터프리터

초기 프로그램들은 어셈블리어로 작성 되었다.
어셈블리어는 기계와 일대일 대응이 되는 컴퓨터 프로그래밍 언어이다.
 하나의 프로그램을 개발하면 서로 다른 CPU가 나올 때 마다 서로 다른 어셈블리어로 작성해야 하기 때문에 작성하는 비용이 커지게 되고, 고급 프로그래밍언어가 등장하게 되었다.
고급언어로 작성된 프로그램들을 실행하는 데에는 두 가지 방법이 있다. 가장 일반적인 방법은 프로그램을 컴파일 하는 것이고, 다른 하나는 프로그램을 인터프리터에 통과시키는 방법이다.

한국 사람과 이탈리아 사람이 대화를 하기 위해서는 통역가가 필요하다.
컴파일러와 인터프리터는 사람과 기계가 대화를 주고 받을 수 있도록 도와주는 통역사 혹은 번역가의 역할을 한다.


컴파일러란 특정 프로그래밍 언어로 쓰여 있는 문서를 다른 프로그래밍 언어로 옮기는 프로그램을 말한다. 원래의 문서를 소스 코드 혹은 원시 코드라고 부르고, 출력된 문서를 목적 코드라고 부른다. 원시 코드에서 목적 코드로 옮기는 과정을 컴파일이라고 한다.
좁은 의미에서 컴파일러는 주로 고수준 언어로 쓰인 소스 코드를 어셈블리어 or 기계어 등의 저수준 언어로 번역하는 프로그램이다.

컴파일러의 실행 단계
1.	구문분석 : 소스코드를 읽어 개별 문법 요소 단위로 자른 뒤, 이 문법 요소들을 해석하여 추상구문트리(abstract syntax tree, AST :  소스코드에서 발생되는 구조체) or 구문트리를 만든다.
2.	최적화 : AST를 분석하여 최적화를 수행한다. 도달할 수 없는 코드식별, 상수표현식 계산, 루프풀기
3.	 코드생성: 최적화된 AST 로부터 목적코드 생성. 목표언어가 기계어일 경우 레지스터할당, 연산수서바꾸기 등 하드웨어 최적화
4.	링킹: 목적 코드가 기계어일 경우 여러 라이브러리 코드를 하나로 묶어 하나의 실행파일을 생성하게 됨.

인터프리터는 프로그래밍 언어의 소스 코드를 바로 실행하는 컴퓨터 프로그램 또는 환경을 말한다. 고급 언어로 작성된 원시코드 명령어들을 한번에 한 줄씩 읽어 들여서 중간 형태로 번역한 다음 실행한다. (컴파일러는 고급 명령어들을 직접 기계어로 번역한다.)
