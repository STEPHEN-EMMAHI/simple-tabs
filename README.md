# simple-tab

## Overview

A project that teaches skills on how to build tab(s).

## Project Architecture

MVC Architecture

### Folder Structure

```text
.
├── README.md
├── index.html
├── package.json
├── public
│   ├── robots.txt
│   └── sitemap.xml
├── src
│   ├── assets
│   │   └── favicon-32x32.png
│   ├── controller
│   │   └── main.js
│   ├── model
│   │   ├── changetheme.js
│   │   ├── hide-all-tabs.js
│   │   ├── navbar.js
│   │   └── tabs.js
│   └── view
│   └── style.css
└── vite.config.ts
```

## How to clone simple-tab project

1. Clone repo
   ```
   git clone git@github.com:STEPHEN-EMMAHI/simple-tabs.git
   ```
2. Install dependencies
   ```
   npm install
   ```
3. Run development Environment
   ```
   npm run dev
   ```
4. Copy local host server and send to browser <br>
   Example: http://localhost:5173

## Tech Stack

[![Tech Skills](https://skillicons.dev/icons?i=html,js,tailwind,vite,git)](https://skillicons.dev)

# Concepts Learnt

1. Event delegation - A javascript technique where you attach one event listener to a parent element instead of adding seperate listeners to each child element. When an event ocurs on a child, it bubbles up to the parent, where the parent listener can determine which child triggered the event.
