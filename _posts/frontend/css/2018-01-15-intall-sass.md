---
layout: post
title:  "sass 설치"
subtitle: ""
slug: "install-sass"
description: "sass 컴파일 하기"
categories: frontend
google: true
tags: [sass]
comments: true
image: "/assets/posts_title/using_sass.jpg"
sitemap :
 changefreq: daily
 priority: 1.0
feed : true
---

github page를 사용하면서 sass를 이용해보니까 회사에서 화면단 css 작업을 할때 너무나 sass가 그립다.
편리함을 맛보았기 때문인건가..

그래서 scss 파일을 컴파일 하는 아~~~ 주 쉬운 방법을 찾았더니
atom 에 sass-autocompile이라는 패키지가 있다는것을 알게 되었다. 편하다..

atom은 회사에서 사용할 에디터를 고심하다가.. sublimeText는 마음에 들지만 라이센스 비용이 들어가고 brackets는 가볍지만 뭐라고 해야하지.. 뭔까 깨끗하게 나오지 않고 원인 모를 불편함에 설치한지 2시간 만에 삭제를 할 수 밖에 없었고 마지막으로 선택한게 atom이었다.(그러나 조금 무겁다..)

일단 사용한지 얼마되지 않았지만 현재까지는 아주 만족스럽다.  

다시 sass 컴파일로 넘어가서, sass-autocompile 패키지를 install 하게 되면 절대로!!! 동작하지 않고
아래에 시뻘건 오류 메시지가 나온다.

그렇다 sass-autocompile 은 node-sass 를 설치해야 사용할 수 있다.  

나는 node.js를 예전에 설치 했었기 때문에  따로 설치 하지 않고 바로  node-sass를 설치해 주었다.

<pre>npm install -g node-sass</pre>

-g  옵션은 global 옵션으로 모든 폴더에서 node-sass를 사용할 수 있게 해준다.  
여튼 이렇게 node-sass~를 설치 하고 나면 아주 쉬원~~ 하게 autocompile이 된다.
![image](/assets/posts_con/etc/sass-autocompile-success.jpg)

scss파일이 있는 폴더에 바로 \*.min.css 라는 css 파일이 생성되어 나를 아주 기쁘게 한다.

sass 로 컴파일 하는 방법은 요기..[hackya 님의 글 sass(scss)컴파일 하는 방법 ](https://hackya.com/kr/sass-scss-%EC%BB%B4%ED%8C%8C%EC%9D%BC-%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95/)에 아주 잘나와 있음.

페이지에서 hackYa 님이 미국에서 일할거 아니면 건너뛰라고 하셨지만 궁금해서 한번 해보았다.

npm install -g scss-compile
+ scss-compile@0.1.7
added 85 packages in 7.484s

설치가 되었다.

package.json을 열어야 한다 . package.json이 어디있지...
C:\Users\****\AppData\Roaming\npm\node_modules\scss-compile
요기 아래에 package.json이 있다.

블로그에서 12번째 줄을 보라고 했는데 그새 뭐가 많이 추가가 되었는지 이번엔 55번째 줄에 있눈

{% highlight ruby %}
"scripts": {
  "scss-compile": "node-sass -rw assets/scss -o assets/css",
  "test": "npm run scss-compile",
  "watch": "npm run scss-compile"
}
{% endhighlight %}

얘를 폴더 형식에 맞게 수정해 주면 되나보다 .

여튼 저 블로그에 들어가면 sass를 컴파일 할 수 있는 다양한 방법이 아주~ 친절하게 작성되어있다.
