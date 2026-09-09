---
layout: page
title: Projects
kicker: Open Source
description: A focused place for repositories, experiments, and work-in-progress ideas.
permalink: /projects/
---

<div class="grid">
  {% for project in site.data.projects %}
    <article class="card">
      <span class="chip">{{ project.signal }}</span>
      <h3>{{ project.name }}</h3>
      <p>{{ project.summary }}</p>
      <p><strong>Stack:</strong> {{ project.stack }}</p>
      {% if project.link contains "://" %}
        <p><a href="{{ project.link }}">Open project</a></p>
      {% else %}
        <p><a href="{{ project.link | relative_url }}">Open project</a></p>
      {% endif %}
    </article>
  {% endfor %}
</div>

## Add Your Own Project

Edit `_data/projects.yml` and add another item with `name`, `summary`, `signal`, `link`, and `stack`.
The project appears here and on the homepage automatically.
