---
layout: home
title: Wiselotis
permalink: /blog/
category: home
category_link: /blog/
category_image : /assets/category/home.jpg
---

<div class='row'>
<div class="col-sm-8">

  <section class='home-container'>
    <div class="greeting">
      개발을 시작한지 얼마 되지 않았지만
      <br>열정 넘치는 개발자 입니다.
      <br>개발을 하면서 다양한 삽질을 경험하고, 새로운 기술들을 습득하며
      <br>이것저것 히스토리를 남기기 위해 만든 기술 블로그 입니다.
    </div>
  </section>
  <article class='home-container'>
  <div class='postlist'>
      <p class='d_tit'>Featured Posts</p>
     <ul class="posts">
       {% for post in site.posts | limit: 10 | sort: 'date' %}
        <li title='{{post.subtitle}}'>
        <span class="tit">{{post.title}}</span>
        <span class="date">{{post.date | date: "%B %-d, %Y"}}</span>
        <span class="category">{{post.categories}}</span>
        </li>
      {% endfor %}
     </ul>
  </div>
  </article>
</div>
<div class="col-sm-4">
  <aside class='home-container tagbox-wrapper '>
       {% include tagbox.html %}
   </aside>
</div>

<footer>
</footer>
</div>
