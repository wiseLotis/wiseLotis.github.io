---
layout: post
title:  "githubPage google검색 가능하게 하기"
subtitle: "plugin없이 google 등록하기. "
slug: "etc_google-search" 
description: "githubPage 의 글을 플러그인 없이 google 검색이 가능하도록 sitemap.xml을 작성하자. "
categories: etc tech
tags: []
comments: true
image: /assets/posts_con/etc/google-search_title.jpg
---
/robots.txt 작성 <a class='btn btn-code basic' data-toggle="collapse" href="#rebots">CODE</a> 
<div class="collapse_wrapper">
<div class="collapse" id="rebots">
	<div class="card">
{% highlight ruby %}
User-agent: Googlebot
User-agent: DAUMOA
User-agent: NaverBot
Allow: /
Disallow: /diary/

User-agent: BadBot
Disallow: /

Sitemap: https://wiselotis.github.io/sitemap.xml

{% endhighlight %}
	</div>
</div>
</div>


/sitemap.xml 작성 <a class='btn btn-code basic' data-toggle="collapse" href="#basic">CODE</a> 
<div class="collapse_wrapper">
<div class="collapse" id="basic">
	<div class="card">
{% highlight ruby %}
{% raw %}
---
layout: null
----
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 
http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd" 
xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
{% for post in site.posts %}
{% if post.sitemap %}
<url>
<loc>{{ site.url }}{{ post.url }}</loc>
{% if post.lastmod == null %}
  <lastmod>{{ post.date | date_to_xmlschema }}</lastmod>
{% else %}
  <lastmod>{{ post.lastmod | date_to_xmlschema }}</lastmod>
{% endif %}
{% if post.sitemap.changefreq == null %}
  <changefreq>weekly</changefreq>
{% else %} <changefreq>{{ post.sitemap.changefreq }}</changefreq>
{% endif %}
{% if post.sitemap.priority == null %}
    <priority>0.5</priority>
{% else %}
  <priority>{{ post.sitemap.priority }}</priority>
{% endif %}
</url>
{% endif %}
{% endfor %}
</urlset>		
{% endraw %}
{% endhighlight %}
	</div>
</div>
</div>

포스트 프론트에 sitemap 설정을 추가 
robots.txt에서 disallow 할 수 있지만 나는 검색 될 포스트는 따로 sitemap 설정을 추가하는 방법으로 수정 하였다. 

{% highlight ruby %}
sitemap : 
	changefreq: daily
 	priority: 1.0
{% endhighlight %}
<br>

기존 코드에서.. sitemap설정이 있는 경우에만 크롤링 될 수 있도록 수정해주었다. <br>
블로그를 기록겸 작성할꺼라서.. 검색될만한 좋은 정보가 아닐 수도 있고 해서..<br>
여기서 주의 할 점!! <br>
포스트의 프론트 작성시 아래와 같은 에러가 나올 수 있다. 
 <br>
![](/assets/posts_con/etc/google-search_img6.png)

<div class="error_box"> 
	 Error: YAML Exception reading c:/SUUU/blog/wiseLotis.github.com/_posts/2018-01-18-using-sass.md:: found character that cannot start any token while scanning for the next token at line 13 column 1
</div>

이 에러는 내가 프론트 작성시 tab을 썼기 때문이다. YAML은 tab을 허용하지 않는다 
{% highlight ruby %}
sitemap : 
[공백]changefreq: daily
[공백]priority: 1.0
{% endhighlight %}
공백 으로 바꿔주자 
아직 블로그를 시작한지 얼마 안되서 모든게 낯설다..
나처럼 뭐지 하는 사람이 있을것 같아서..  
사실 저 google캡처 잊어버려서 새로운 아이디로 들어가서 새로 캡처했다.

/Gemfile 에 jekyll-sitemap 추가 
> gem "jekyll-sitemap"

gem install 
> gem install jekyll-sitemap

127.0.0.1:4000/sitemap.xml 에서 확인 <br>
![](/assets/posts_con/etc/google-search_img7.png)

google 로그인 후 나의 웹 사이트 등록 <br>
![](/assets/posts_con/etc/google-search_img1.jpg)

google에서 down받은 확인용 html을 루트 아래에 복사 <br>
웹페이지를 닫지 말것 <br>
![](/assets/posts_con/etc/google-search_img2.jpg)

origin master에 push 

>git add --all 
<br>
>git commit -m "commit message " <br>
>git push -u origin master  <br>

다시 google 페이지로 돌아가서 확인 버튼을 클릭 하면 ~ 
성공<br>
![](/assets/posts_con/etc/google-search_img3.jpg)

searchConsole > 크롤링 > sitemaps 에 들어가서 
test 후 sitemap 제출 <br>
![](/assets/posts_con/etc/google-search_img4.jpg)
<br>
![](/assets/posts_con/etc/google-search_img5.jpg)


[참고: Dveamer님의 blog 참고](http://dveamer.github.io/homepage/SubmitSitemap)
