---
layout: default
title: Prashant Divate
description: Futuristic open-source lab, blogs, and practical engineering notes from Prashant Divate.
---

<section class="hero">
  <div class="hero-copy">
    <p class="eyebrow">Open source systems · Cloud · Linux · DevOps</p>
    <h1>Building a public lab for <span>useful engineering notes.</span></h1>
    <p>
      I am Prashant Divate. I write about Linux, Docker, Python, cloud platforms, GitHub,
      and the practical lessons that come from building in public.
    </p>
    <div class="cta-row">
      <a class="button" href="{{ '/blog/' | relative_url }}">Read the blog</a>
      <a class="button secondary" href="https://github.com/{{ site.author.github }}">Explore GitHub</a>
    </div>
  </div>
  <div class="hero-canvas" data-orbit aria-hidden="true"></div>
</section>

<section class="signal-panel" aria-label="Current focus">
  <div class="signal">
    <strong>Linux</strong>
    <span>systems and command-line craft</span>
  </div>
  <div class="signal">
    <strong>Cloud</strong>
    <span>AWS, Azure, deployment notes</span>
  </div>
  <div class="signal">
    <strong>OSS</strong>
    <span>public projects and learning logs</span>
  </div>
</section>

<section class="section">
  <div class="section-heading">
    <h2>Project Signals</h2>
    <p>Areas I am shaping into repositories, examples, and practical write-ups.</p>
  </div>
  <div class="grid">
    {% for project in site.data.projects %}
      <article class="card">
        <span class="chip">{{ project.signal }}</span>
        <h3>{{ project.name }}</h3>
        <p>{{ project.summary }}</p>
        <div class="chip-row">
          <span class="chip">{{ project.stack }}</span>
        </div>
      </article>
    {% endfor %}
  </div>
</section>

<section class="section split">
  <div class="note-panel">
    <p class="eyebrow">Publishing system</p>
    <h2>Write small, publish often, compound trust.</h2>
    <p>
      Open-source reputation grows when people can see your thinking. This site gives you a place
      to turn experiments into posts, link them to repositories, and make your work easier to discover.
    </p>
    <ul class="lab-list">
      <li>Document one command, one bug, one deployment, or one idea at a time.</li>
      <li>Keep project notes close to the code they came from.</li>
      <li>Use the blog as a public proof-of-work trail.</li>
    </ul>
  </div>
  <div>
    <div class="section-heading">
      <h2>Latest Writing</h2>
      <p><a href="{{ '/blog/' | relative_url }}">All posts</a></p>
    </div>
    <div class="writing-list">
      {% for post in site.posts limit:3 %}
        <article class="post-card">
          <div class="post-meta">
            <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %-d, %Y" }}</time>
            {% if post.category %}<span>{{ post.category }}</span>{% endif %}
          </div>
          <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
          <p>{{ post.excerpt | strip_html | truncate: 150 }}</p>
        </article>
      {% endfor %}
    </div>
  </div>
</section>

<script type="module" src="{{ '/assets/js/orbit.js' | relative_url }}"></script>
