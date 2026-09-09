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

In the GitHub repository, open **Settings -> Pages** and set **Source** to **GitHub Actions**.

After that, every push to `master` or `main` that changes `docs/**` will build and publish the site automatically.

If you rename this repository to `prashantdivate.github.io`, set `baseurl: ""` in `_config.yml`.
