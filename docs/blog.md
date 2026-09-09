---
layout: page
title: Writing
kicker: Blog
description: Notes from building, debugging, deploying, and learning in public.
permalink: /blog/
---

<div class="writing-list">
  {% for post in site.posts %}
    <article class="post-card">
      <div class="post-meta">
        <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %-d, %Y" }}</time>
        {% if post.category %}<span>{{ post.category }}</span>{% endif %}
      </div>
      <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
      <p>{{ post.excerpt | strip_html | truncate: 190 }}</p>
    </article>
  {% endfor %}
</div>

## Publish a New Post

Create a Markdown file in `_posts` using this format:

```text
YYYY-MM-DD-your-post-title.md
```

Start it with:

```yaml
---
title: "Your Post Title"
date: YYYY-MM-DD
category: Open Source
reading_time: 4 min read
---
```

Then write the post below the front matter.
