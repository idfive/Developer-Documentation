# JavaScript

## Type Assertion

```typescript
let menu = document.querySelector('.menu'); // Okay
let menu = document.querySelector('.menu') as HTMLElement; // Better
```

## Type Hinting

```typescript
let isDone = false; // Okay
let isDone: boolean = false; // Better

let myNumber = 1; // Okay
let myNumber: number = 1; // Better

let myString = "Hello World"; // Okay
let myString: string = "Hello World"; // Better
```

## DOM Existence checking
When selecting HTML elements, don't assume that they will always be present in the DOM.

```typescript
// Bad
let menu = document.querySelector('.menu') as HTMLElement;
menu.classList.add('menu--has-js');

// Good
let menu = document.querySelector('.menu') as HTMLElement;
if (menu) {
  menu.classList.add('menu--has-js');
}
```

## Performance
Traversing the DOM is expensive. Save references to dom elements wherever possible.

```js
// Bad
if (
  document.querySelector(".menu") &&
  !document.querySelector(".menu").classList.contains("active")
) {
  document.querySelector(".menu").classList.add("active");
}

// Good
const menu = document.querySelector(".menu") as HTMLElement;
if (menu && !menu.classList.contains("active")) {
  menu.classList.add("active");
}
```

Onscroll event throttling.

```js
let lastKnownScrollPosition: number = 0;
let ticking: boolean = false;

window.addEventListener("scroll", e => {
  lastKnownScrollPosition = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(() => {
      doSomething(lastKnownScrollPosition); 
      ticking = false;
    });
    ticking = true;
  }
}, true);

function doSomething(scrollPos) {
  // Do something
}
```


## Functions
Optional parameters.

```js
function doSomething(element: HTMLElement, isSpecial: boolean = false) {
  let classToAdd  = (isSpecial) ? "special-class" : "normal-class";

  if (!element.classList.contains(classToAdd)) {
    element.classList.add(classToAdd);
  }

  return element;
}

doSomething(element); // Returns element with "normal-class" added
doSomething(element, true); // Returns element with "spacial-class" added
```
