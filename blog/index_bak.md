---
title: wiseLotis
permalink: /blog/bak
layout: home
---

<link rel="stylesheet" href="/css/home.css"/>

<div class="">
<div class="row">
{%  for headPost in site.tags["headPost"] %}
<div class="col-sm-4">
		<div class="post-wrapper inverse">
			<div class="post-category">
				<a href="/posts/{{headPost.categories[0]}}"><span>{{headPost.categories[0]}}</span></a>
			</div>
<a href="{{headPost.url}}">
				<div class="post-inner">
					<div class="post-image">
					<img src="{% if post.image %} {{headPost.image}} {% else %} {{site.post_image}} {% endif %}"/>
					</div>
					<h3 class="post-title">{{headPost.title}}</h3>
					<div class="post-description">{{headPost.description}}</div>
					<span class="post-date">{{headPost.date | date: '%B %d, %Y'}}</span>
				</div>
			</a>
			<div class="post-tagWrapper">
				{% for tag in headPost.tags %}
						<span class="post-tag"> {{ tag }} </span>
				{% endfor %}
			</div>
		</div>
	</div>
{% endfor %}
{% for post in site.tags["home"]%}
	<div class="col-sm-4">
		<div class="post-wrapper inverse">
			<div class="post-category">
				<a href="/posts/{{post.categories[0]}}"><span>{{post.categories[0]}}</span></a>
			</div>
			<a href="{{post.url}}">
				<div class="post-inner">
					<div class="post-image">
					<img src="{% if post.image %} {{post.image}} {% else %} {{site.post_image}} {% endif %}"/>
					</div>
					<h3 class="post-title">{{post.title}}</h3>
					<div class="post-description">{{post.description}}</div>
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
