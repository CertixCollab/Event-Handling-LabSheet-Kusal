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

## Exercises

The lab contains the following exercises implemented in `script.js`:

1. Button Click Alert — click the button (`#btnClick`) to show an alert.
2. Change Text Content — update a paragraph via `#changeTextBtn` and `#paragraphText`.
3. Change Background Color — buttons (`#redBtn`, `#greenBtn`, `#blueBtn`) change the page background.
4. Double Click Event — double-click the box (`#doubleBox`) to change background and message (`#doubleMessage`).
5. Key Press Detection — detect keys in `#keyInput` and display in `#keyOutput`.
6. Character Count — live character count for `#charText` shown in `#charCount`.
7. Form Submission — prevent default submit on `#simpleForm` and show `#formMessage`.
8. Form Validation — validate `#validationForm` fields and display feedback in `#validationMessage`.
9. Focus and Blur Events — focus/blur styling behavior on `#focusInput`.
10. Mouseover and Mouseout Events — hover effects on `#hoverBox`.
11. Mouse Position Tracking — show cursor coordinates in `#mousePosition`.
12. Event Propagation — click `#parentDiv` to observe bubbling behavior.
13. stopPropagation on Child — `#childBtn` stops propagation and handles its own click.
14. Dynamic List Creation and Click Event — programmatically add list items to `#itemList` and handle clicks, displaying the selection in `#clickedItem`.
15. Image Slider — simple slider using `#slider`, `#prevBtn`, and `#nextBtn`.
16. Dark Mode Toggle — toggle `dark-mode` class using `#darkModeBtn`.
17. Simple Calculator — perform add/subtract/multiply/divide with inputs `#num1`, `#num2` and show result in `#result`.

## Notes

- No build steps or external dependencies are required — plain HTML/CSS/JS.
- If you'd like, I can add a short section summarizing the key functions in `script.js`.
