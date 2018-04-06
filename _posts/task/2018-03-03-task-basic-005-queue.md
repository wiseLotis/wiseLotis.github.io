---
layout: post
title:  "BacktotheBasic - 큐(queue)"
subtitle: "LinkedList를 이용한 스택을 활용하여 계산기 만들어 보기"
slug: "task-basic-005-queue"
description: "큐에 대해서 알아보고 큐를 구현해 보자"
categories: task
tags: [task, home]
comments: true
image: "/assets/posts_con/cover_task.jpg"
google: true
sitemap :
 changefreq: daily
 priority: 1.0
feed : true
---
 ##큐(queue)

 큐는 리스트와 다르게 먼저 들어온 놈이 먼저들어가는 자료구조이다.

 ![큐](/assets/posts_con/task/queue.gif)

이런 큐의 문제점은 삭제로직에 있다.<br>
![큐](/assets/posts_con/task/queue-delete.png)<br>
배열을 이용해서 큐를 만든 경우<br>
맨처음 들어온 애를 삭제를 하면 뒤에 따라온 애들이 다 한칸씩 이동해야하는(shift연산) 번거로움이 있다는 것이다.

![큐](/assets/posts_con/task/queue-delete2.png)

이런 번거로움을 해결하기 위해 전단이라는 변수를 이용해서 맨처음 들어온 놈의 인덱스만 관리를 하면 되는데<br>
이경우에는 shift연산으로 인한 부하 문제는 해결 할 수있지만 제거 연산을 수행할 수록 큐의 가용 용량도 줄어든다.

그래서 등장한게 순환 큐이다.
![큐](/assets/posts_con/task/circular-queue.png)

그러나 이 순환 큐에도 문제점이 존재한다.

![큐](/assets/posts_con/task/circular-queue-emptyorfull.png)


후단의 값은 실제의 후단에 1을 더한 값을 갖는데 큐가 모두 비어있어도 전단과 후단이 같은 인덱스를 가리키고, 모두 차있어도 같은 인덱스를 가리킨다.
즉, 큐가 비어있는지 꽉차있는지 확인 할수가 없다.

![큐](/assets/posts_con/task/circular-queue-emptyorfull2.png)

그래서 순환큐에서는 배열을 생성할때 실제 용량보다 1만큼 더 크게 만들고 전단과 후단사이를 비우게 한다.
큐가 비어있을땐 전단과 후단이 같은 인덱스를 가리키고, 큐가 꽉 차있는 경우에는 후단이 전단보다 1작은 값을 가지게 된다.

큐를 구현해 보자
