---
title: wiseLotis
permalink: /blog/
layout: home
---

<link rel="stylesheet" href="/css/home.css"/>



<div class="group_by_cat" id="serverside">
<h3 class='name_cat'><a href="/post/serverside">ServerSide.</a></h3>
<div class='cate-img'>
<img src="/assets/category/start-blog.jpg"/>
</div>
<div class="post-item">
{% for post in site.categories["serverside"] limit:10 %}
<p><a href="{{ site.baseurl }}{{ post.url }}">{{post.title}}</a></p>
{% endfor %}
</div>
</div>


<div class="group_by_cat" id="frontend">
<h3 class='name_cat'><a href="/post/FrontEnd">FrontEnd</a></h3>
<div class='cate-img'>
<img src="/assets/category/Web-Design.jpg"/>
</div>
<div class="post-item">
{% for post in site.categories["frontend"] limit:10 %}
<p><a href="{{ site.baseurl }}{{ post.url }}">{{post.title}}</a></p>
{% endfor %}
</div>
</div>

<div class="group_by_cat" id="task">
<h3 class='name_cat'><a href="/post/task">TASK.</a></h3>
<div class='cate-img'>
<img src="/assets/category/task.jpg"/>
</div>

<div class="post-item">
{% for post in site.categories["task"] limit:10 %}
<p><a href="{{ site.baseurl }}{{ post.url }}">{{post.title}}</a></p>
{% endfor %}
</div>
</div>

<div class="group_by_cat" id="etc">
<h3 class='name_cat'><a href="/post/etc">ETC.</a></h3>
<div class='cate-img'>
<img src="/assets/category/start-blog.jpg"/>
</div>
<div class="post-item">
{% for post in site.categories["etc"] limit:10 %}
<p><a href="{{ site.baseurl }}{{ post.url }}">{{post.title}}</a></p>
{% endfor %}
</div>
</div>
