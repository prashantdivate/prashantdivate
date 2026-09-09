# Prashant Divate Website

This folder contains the GitHub Pages site.

## Local Preview

```bash
bundle install
bundle exec jekyll serve
```

Open `http://localhost:4000/prashantdivate/`.

## Publish a Blog

Add a Markdown file under `_posts` named `YYYY-MM-DD-title.md`.

## Deploy

In the GitHub repository, open **Settings -> Pages**, choose **Deploy from a branch**, select `main`, then select `/docs`.

If you rename this repository to `prashantdivate.github.io`, set `baseurl: ""` in `_config.yml`.
