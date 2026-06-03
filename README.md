# Event Handling Labsheet

A small front-end labsheet demonstrating DOM event handling patterns using plain HTML, CSS, and JavaScript.

## Project Structure

- [index.html](index.html): The HTML entrypoint with interactive examples.
- [script.js](script.js): JavaScript exercises and event handlers.
- [style.css](style.css): Simple styles for the lab UI.

## Overview

This repository contains a compact set of examples to explore common event-handling concepts in the browser: adding/removing listeners, event propagation (bubbling/capturing), preventing default behavior, event delegation, and keyboard/mouse interactions.

## How to run

1. Open `index.html` directly in your browser, or serve the folder with a simple static server for best results.

Example using Python (recommended when testing AJAX or fetch):

```bash
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

Or use the VS Code Live Server extension to serve the folder.

## Usage

- Interact with the buttons, form elements, and other controls in the page to trigger handlers implemented in `script.js`.
- Open the browser DevTools console to view logs and inspect event objects.

## Development

- Edit `script.js` to add or modify event listeners and behaviors.
- Keep `index.html` markup in sync if you add new controls.

## Learning goals

- Understand how to attach event listeners to elements.
- Explore event propagation and how `stopPropagation()` and `preventDefault()` work.
- Practice event delegation for scalable listener management.

## Notes

- No build steps or external dependencies are required — plain HTML/CSS/JS.
- If you'd like, I can add a short section summarizing the key functions in `script.js`.

