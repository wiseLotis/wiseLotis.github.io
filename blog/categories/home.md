---
layout: category
title: Wiselotis
permalink: /home
category: home
category_image : /assets/category/home.jpg
---

<div class='row'>
<div class="col-sm-8">

  <section class='home-container'>
    <p class="tit">greeting..</p>
    <div class="greeting">
      개발을 하면서 다양한 삽질을 경험하고, 새로운 기술들을 습득하며
      <br>이것저것 히스토리를 남기기 위해 만든 기술 블로그 입니다.
    </div>
  </section>
  <article class='home-container'>
    <p class='tit'>Featured Posts</p>
    <div class='postlist-wrapper'>
         {% capture category_nm %}{{page.categories | first }}{% endcapture %}
    <ul class="postlist" data-category='{{category_nm}}'>
         {% assign postlist = site.posts %}
         {% for post in postlist | limit: 10 | sort: 'date' %}

          <li class="post" >
            <a href="{{post.url}}" title='{{post.subtitle}}' class="post-link">
              <span class="tit">  {% for category in post.categories %}
                <span class="category"> [ {{category}} ] </span>
                {% endfor %} {{post.title}}</span>
              <span class="desc">{{post.description}}</span>
              <span class="date">{{post.date | date: '%B %d, %Y'}}</span>
            </a>
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
