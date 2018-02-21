---
title: wiseLotis
permalink: /blog/
layout: home
---

<link rel="stylesheet" href="/css/home.css"/>
<div class="">
	<div class="row">
		{% if site.tags['headpost'] %}
		{% for post in site.tags["headpost"] %}
		<div class='col-sm-8 home-headwrapper'>
			<div class="container">
				<div class="head-title">
					<div class="category">
					<a href="/posts/{{post.categories[0]}}" data-toggle="tooltip" data-placement='top' title='{{post.categories[0]}}로 이동합니다.' ><span>{{post.categories[0]}}</span></a>
				</div>					<div class=''>
<!-- -->
						<h2>{{post.title}}</h2>
					</div>
<!-- --> 
					<span class="date">{{post.date | date: '%B %d, %Y'}}</span>
<!-- -->
				</div>
				<div class="inner-wrapper">
					<div class="head-image">
						<img src="{% if post.image %} {{post.image}} {% else %} {{site.post_image}} {% endif %}"/>
					</div>
					<div class="head-body">{{post.content}}</div>
					<div class="tagWrapper">
						{% for tag in post.tags %} {% if tag != "headpost" %}
						<a href='/tags/{{ tag }}' class="post-tag"> {{ tag }} </a>
						{% endif %} {% endfor %}
					</div>
				</div>
			</div>
		</div>
{% endfor %}
		<div class="col-sm-4">
			<ul class="home-postlist">
				 
{% else %}
	<div class='col-sm-12'>	
		<ul class="home-postlist full_area">
				
{% endif %}
			{% for post in site.tags["home"] limit:5 %}
	<li>
<!-- --> <div class="post-wrapper basic">
						<a href='{{post.url}}'>
							<div class="post-image">
								<img src="{% if post.image %} {{post.image}} {% else %} {{site.post_image}} {% endif %}"/>
							</div>
							<h3 class="post-title">{{post.title}}</h3>
							<div class="post-description">{{post.description}}</div> 
						</a>
				<!-- --><p class="post-date">
				{{post.date | date: '%B %d, %Y'}}</p>
				<div class="post-tagWrapper">
							{% for tag in post.tags %} {% if tag !="home" and tag !="headpost" %}
							<span class="post-tag"><a href="/tags/{{tag}}">{{ tag }}</a></span> {% endif %}
							{% endfor %}
						</div>
				<!-- --></div>
				</li>
				{% endfor %}
				</ul> 
		</div>
	</div>
</div>



<!-- <div class="col-sm-4 homelist-wrapper">
{% for post in site.tags["home"] %}
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
{% endfor %}
</div> -->
