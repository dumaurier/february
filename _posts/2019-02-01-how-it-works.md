---
title: How it Works
date: '2019-02-01 03:38pm'
layout: posts
categories: blog
abstract: An overview of how this repo works.
author: Josh Vogt
permalink: '/posts/:title/'
---
## This is a starter project for Jekyll powered sites.

The purpose of this project is to provide an easy way to get a site up and running without touching a code editor. This requires two main things: a GitHub account and Netlify. This project uses NetlifyCMS for updating files stored in GitHub.

Let's assume you've already signed up for a GitHub account....

### Deploy to Netlify

Netlify makes it very easy to create a new site from GitHub repo. So easy that all you have to do is press a button. Like the one below.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/dumaurier/pwa_jekyll)

This will launch Netlify's sign up flow. You can rename the repo (which will be pushed to your own GitHub account) and build the site.

### Enable NetlifyCMS

The next step is to enable Netlify's Identity service to allow NetlifyCMS to talk to your site's GitHub repo. Click on the `Identity` link in Netlify's top navigation and enable Netlify's Identity service. 

The NetlifyCMS in this project relies a `git-gateway` for magic. Under the `Identity` settings, select the `Services` option and click `Enable Git Gateway`. Once enabled you should be go to go. 

You also have the option of using external providers for authentication. I'd recommend selecting GitHub as a provider. Doing so will let you sign in to the CMS with your GitHub credentials.

### Log in to the CMS

When Netlify builds your site the first time it will create a URL for you. Visit that URL and append it with `/admin/`. That's the address for the CMS. 

### Change the Settings

This project has several sections ready for customizing your site. I'll fill this section out later. But you can change the title of the site, add social media accounts and change the CSS framework the site uses. Right now, the options are the default framework (which is purposefully sparse) or Bootstrap. Once you save the changes Netlify will rebuild your site. 

### You're done

Nice.
