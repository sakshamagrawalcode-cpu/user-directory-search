# User Directory

A user directory that displays profile cards in a responsive grid, with a search
box that filters results as you type. Built with plain HTML, CSS and JavaScript —
no frameworks or libraries.

**Live demo:** [https://sakshamagrawalcode-cpu.github.io/user-directory-search/]

![Screenshot](screenshot.png)

## Features

- Live search filtering on user names, updating on every keystroke
- Responsive grid — the number of columns adjusts to the viewport width
- "No users found" message when the search returns no matches
- Cards use a profile photo as the background with a frosted-glass overlay
  behind the name and bio

## Built with

- HTML5
- CSS3 — Grid (`auto-fit` / `minmax`), `backdrop-filter`, pseudo-elements
- JavaScript (ES6) — `createElement`, `DocumentFragment`, `filter`, `forEach`

## Running locally

```bash
git clone https://github.com/sakshamagrawalcode-cpu/user-directory-search.git
cd user-directory-search
```

Open `index.html` in a browser. No build step or dependencies.

## Possible improvements

- Load users from an API instead of a hardcoded array
- Extend search to match bio text as well as names
- Debounce the input handler
