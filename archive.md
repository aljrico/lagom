---
layout: page
title: Blog Archive
---

<div class="posts">
  {% for post in site.posts %}
  <div class="post">
    <h1 class="post">
      <a href="{{ post.url }}">
        <h2><i class="fa fa-bookmark"></i>  {{ post.title }}</h2>
      </a>
    </h1>
    <span class="post-date">{{ post.date | date_to_string }}</span>
      <div class="excerpt">
        {{ post.excerpt }}
        <a href="{{ post.url }}">{{ site.theme.str_continue_reading }}</a>
        <span class="comments-count">
          <a class="comments-count-icon"><i class="fa fa-comment"></i></a>
          <a href="{{ post.url }}#disqus_thread"> Comments</a>
        </span>
      </div>
  </div>
  {% endfor %}
</div>

<!-- {% include copyright.html %} -->


