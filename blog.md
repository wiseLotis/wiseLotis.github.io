---
title: wiseLotis
permalink: /blog/
layout: home
---
<div class="container">
<div class="row">
	{% for post in site.posts %}
	<div class="col-sm-4 post-wrapper">
		<div class="post-category">{{post.categories}}</div>
		<a href="{{post.url}}">
		<div class="post-inner">
			<img src="{% if post.image %} {{post.image}} {% else %} {{site.post_image}} {% endif %}"/>
			<h3 class="post-title">{{post.title}}</h3>
			<span class="post-description">{{post.discription}}</span>
			<span class="post-date">{{post.date | date: '%B %d, %Y'}}</span>
		</div>
		</a>
	</div>
	{% endfor %}
</div> 
</div>

<!-- <ul class="post">
	{% for post in site.posts %}
	<li class="post-title">
		<a href="{{post.url}}">
			{{ post.title }}
		</a>
		<div class='container'>
			
			{{post.discription}}
			{{post.date | date: '%B %d, %Y'}}
			</div>

			</li>
			{% endfor %}
</ul> -->