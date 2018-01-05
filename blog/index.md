---
title: wiseLotis
permalink: /blog/
layout: home
---
<link rel="stylesheet" href="/css/blog_index.css"/>

<div class="container">
<div class="row">
	{% for post in site.tags["notice"]%}
	<div class="col-sm-4">
		<div class="post-wrapper inverse">
		<div class="post-category"><a href="/posts/{{post.categories}}"><span>{{post.categories}}</span></a></div>
		<a href="{{post.url}}">
		<div class="post-inner">
			<div class="post-image">
			<img src="{% if post.image %} {{post.image}} {% else %} {{site.post_image}} {% endif %}"/>
			</div>
			<h3 class="post-title">{{post.title}}</h3>
			<div class="post-description">{{post.discription}}</div>
			<span class="post-date">{{post.date | date: '%B %d, %Y'}}</span>
		</div>
		</a>
		<div class="post-tagWrapper">
			{% for tag in post.tags %}
			<span class="post-tag"> {{ tag }} </span>
			{% endfor %}
		</div>
	</div>
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