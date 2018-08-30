---
layout: basic
permalink: /tags/
title: tags
---

<head>
<style>
  .content-wrapper{
     max-width:100% !important;
     padding: 20px 5vw;
   }
</style>
<script src = "/js/greensock/TweenMax.min.js"></script>

</head>

<link href="/css/category.css" rel="stylesheet">

  <div class="row">
  <div class="col-sm-4">
    <aside class='tagbox-wrapper negative'>
         {% include tagbox.html %}
     </aside>
  </div>
    <div class="col-sm-8 tag-content-wrapper negative" style="border-top: 1px solid #f1f1f1 ">
      {% for tag in site.tags %}
      {% capture tag_name %}{{ tag | first }}{% endcapture %}
      {% if tag_name != "home" and tag_name != "headpost" %}
      <div class="tag_name MT30">
        <span>Posts related to </span><h3>{{tag_name}} </h3>
      </div>
      <ul class="postlist">
        {% for post in site.tags[tag_name] %}
        <li class="post">
          <a href="{{ post.url | prepend: site.baseurl }}" >
          <div class="row">
            <span class="tit col-sm-12"   {% if post.subtitle %} title="{{ post.subtitle }}" {% endif %}>
              {{ post.title }}
            </span>
              {% if post.description %}
              <div class='col-sm-8'>
              <span class="post-description">
                {{ post.description }}
              </span>
            </div>
            {% endif %}
            <span class="date col-sm-4">
               {{ post.date | date: "%B %-d, %Y" }}
            </span>
          </div>

        </a>
      </li>

      {% endfor %}
    </ul>
    {% endif %}

{% endfor %}<!-- <p class="subtitle">Posts related to: {{ page.title }}</p>
-->

</div>
</div>
</div>

</body>
