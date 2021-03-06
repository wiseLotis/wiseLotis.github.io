---
layout: post
title:  "BacktotheBasic - 탐색(순차탐색)"
subtitle: "자료구조-탐색"
slug: "task-basic-011-searching "
description: "탐색"
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
### 순차 탐색

순차 탐색은 처음부터 끝까지 모든 요소를 차례로 비교해서 데이터를 찾는 알고리즘이다.
한쪽으로만 탐색을 하기때문에 선형 탬색이라고 부른다.
비효율 적이지만 정렬되지 않은 데이터 집합속에서 데이터를 찾을 수 있는 유일한! 방법이고,
자료구조의 종류에 상관없이 모두 사용할 수 있고,
구현이 용이 하여 버그의 가능성이 낮기 때문에 높은 성능을 필요로 하지 않거나 데이터 집합의 크기가 작은 곳에서 자주 사용된다.

### 자기 구성 순차 탐색(self-organizing Sequential Search)

아무리 정렬되지 않은 데이터라도 차례로 찾는건 너무나 비효율 적이다.  
100 개의 데이터가 있을 때 내가 찾는 데이터가 99 번째에 있으면 계속 해서 99번 비교를 해서 데이터를 가져와야 한다.  
자기구성순차탐색은 ms의 최근 문서 목록과 같이 내가 자주 찾는 데이터를 앞으로 옮겨서 탐색을 용이하게 하는 방식이다.

자기구성법은 자주 사용되는 항목을 어떻게 구별하는가에 따라 아래와 같이 나눌 수 있다.

- 전진이동법
- 전위법
- 빈도계수법

#### 전진이동법
전진이동법은 항목을 한번 탐색하고 나면 그 항목을 데이터 집합의 가장 앞에 위치하는 방법이다(MS 최근 문서).  
하지만 특정 항목들이 집중적으로 탐색 대상이 되는것이 흔한일이 아니므로, 같은 또 다시 검색 될 가능성이 높은 데이터 집합에서 사용하는 것이 좋다.

#### 전위법
전위법은 탐색된 항목을 바로 앞의 요소와 위치를 이동해서, 자주  탐색된 항목을 점진적으로 앞으로 옮긴다.
100개의 데이터 집합일때 n번째의 데이터는 n-1번의 선택을 받으면 가장 앞에 위치 할 수 있다.
이역시 비민주적일 수 있다.
왜냐하면  99번째 데이터는 98번의 선택을 받아야만 하고, 전위법의 경우 가장뒤에 있는 데이터가 가장많은 선택을 받더라도 데이터 집합의 크기가 크면 가장 앞에 올 수 있다는 보장을 받을 수 없다 (왜? )

#### 계수법
요소들이 탐색된 횟수를 별도의 공간에 저장해 두고 탐색 된 횟수가 높은 순으로 데이터 집합을 재구성하는 전략의 알고리즘이다.
가장 민주적인 방법으로 보이지만 계수 결과를 저장하는 별도의 공간을 유지해야 하고 계수 결과에 따라 데이터 집합을 재배치 해야 하기때문에 비용이 많이 든다.


### 이진탐색
