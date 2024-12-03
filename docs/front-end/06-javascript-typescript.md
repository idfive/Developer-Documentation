---
description: Style Guide, Pointers & Architecture
---

# JavaScript / TypeScript

## Architecture
The entrypoint for all typescript modules is **main.ts** (located at **source/js/main.ts**). Functions are imported here (for example `import cardsInit from "./components/card";`) and then functions called below (`cardsInit();`).

## No Refresh

Using a site with functionality that changes on screen size should not require a browser refresh during that session. The user should be able to resize their screen at will and still be able to access all functionality of the website.

The following demonstrates setting up a typescript class which efficiently tracks resizing. In this example a media query variable is set to watch for a max-width of 768px. The `init` method contains the `handleResize` which contains methods that require detecting the resize.

```javascript
const mobileMQ = window.matchMedia("(max-width: 768px)");

private init() {
  this.handleResize();
}

private handleResize() {
  const resize = () => {
    this.function(); // add methods here that require a change on resize
  };
  mobileMQ.addEventListener("change", resize);
  resize();
}

private function() {
  if(mobileMQ.matches) {
    // mobile code
  }
}
```

## Verbose Code
Prefer verbose over vague function and variable names.

```typescript
let x = document.querySelector('.main-menu') as HTMLElement; /* Bad */
let mainMenu = document.querySelector('.main-menu') as HTMLElement; /* Good */
```

```typescript
function filter() {} /* Okay */
function filterEvents() {} /* Better */
```

## Variables

When declaring references, prefer `const` over `let` when possible. `const` prevents references from unintentionally being reassigned which can lead to bugs and side effects. When mutation is necessary, use `let` over `const`. `var` should never be used as it uses function scoping instead of block scoping which is almost always preferable.

## Type Assertion

```typescript
const menu = document.querySelector(".menu"); // Bad
const menu = <HTMLElement>document.querySelector(".menu"); //Okay
const menu = document.querySelector(".menu") as HTMLElement; // Better
```

## Type Hinting

```typescript
const isDone = false; // Okay
const isDone: boolean = false; // Better

const myNumber = 1; // Okay
const myNumber: number = 1; // Better

const myString = "Hello World"; // Okay
const myString: string = "Hello World"; // Better
```

## DOM Existence Checking

When selecting HTML elements, don't assume that they will always be present in the DOM. [Optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) was added in the ES2020 spec and provides by far the easiest way to check that an element is defined.

```typescript
// Bad
const menu = document.querySelector(".menu") as HTMLElement;
menu.classList.add("menu--has-js");

// Okay
const menu = document.querySelector(".menu") as HTMLElement;
if (menu) {
  menu.classList.add("menu--has-js");
}

// Better (with optional chaining)
const menu = document.querySelector(".menu") as HTMLElement;
menu?.classList.add("menu--has-js");
```

## Performance

Traversing the DOM is expensive. Save references to dom elements wherever possible.

```js
// Bad
if (!document.querySelector(".menu")?.classList.contains("active")) {
  document.querySelector(".menu").classList.add("active");
}

// Good
const menu = document.querySelector(".menu") as HTMLElement;
if (!menu?.classList.contains("active")) {
  menu.classList.add("active");
}
```

Onscroll event throttling.

```js
let lastKnownScrollPosition: number = 0;
let ticking: boolean = false;

window.addEventListener(
  "scroll",
  (e) => {
    lastKnownScrollPosition = window.scrollY;
    if (!ticking) {
      window.requestAnimationFrame(() => {
        doSomething(lastKnownScrollPosition);
        ticking = false;
      });
      ticking = true;
    }
  },
  true
);

function doSomething(scrollPos) {
  // Do something
}
```

## Functions

Optional parameters.

```js
function doSomething(element: HTMLElement, isSpecial: boolean = false) {
  const classToAdd = isSpecial ? "special-class" : "normal-class";

  if (!element?.classList.contains(classToAdd)) {
    element.classList.add(classToAdd);
  }

  return element;
}

doSomething(element); // Returns element with "normal-class" added
doSomething(element, true); // Returns element with "spacial-class" added
```

## Modules

Package code as re-usable modules.

### Named Exports

```typescript
//----- sticky-element.ts -----/
export class StickyElement(element: HTMLElement) { ... }

//----- index.ts -----/
import { StickyElement } from 'sticky-element';
```

### Default Exports

```typescript
//----- some-function.ts -----/
export default function() { ... }

//----- index.ts -----/
import someFunction from 'some-function';
```

### Multiple Exports

```typescript
//----- some-related-functions.ts -----/
function functionA() { ... }
function functionB() { ... }
export { functionA, FunctionB };

//----- index.ts -----/
import { functionB } from 'some-related-functions';
```

## Component Design Pattern - Classes

A common pattern that we use for component definitions is to use an ES6 `class` with the component's state and methods encapsulated within each instance. An example of this pattern is as follows:

```typescript
export class Foo {
  protected element: HTMLElement;
  protected childElement: HTMLElement;
  protected fooProperty: boolean;

  public constructor(element: HTMLElement) {
    if (element) {
      this.element = element;
      this.childElement = this.element.querySelector(".foo__child");
      this.init();
    }
  }

  protected init() {
    // Initial setup code like binding event listeners, DOM manipulation, etc. goes here.
  }
}

// Export a function that finds all components on load and instantiates a class instance for each node.
export function fooInit() {
  const els = document.querySelectorAll(".foo");
  for (let i = 0; i < els.length; i++) {
    new Foo(els);
  }
}
```

### Component Options

For certain components, you may want to pass an `options` argument in addition to the `element` argument to provide the ability to customize instances. To do this, it's helpful to create an `interface` alongside your `class` definition that defines the shape of this `options` object. For example:

```typescript
export interface FooOptions {
  fooProperty: boolean;
  barOptionalProperty?: boolean;
}

// Optionally define a set of default property values to be used if values aren't provided.
const defaultOptions = {
  fooProperty: true,
} as FooOptions;

export class Foo {
  protected element: HTMLElement;
  protected options: FooOptions;

  // Pass an empty object as the default value to later merge defaults into this.options.
  public constructor(element: HTMLElement, options: FooOptions = {}) {
    if (element) {
      this.element = element;
      // Merge in defaults and allow common/shared properties to be overridden by the values passed through args.
      this.options = {
        ...defaultOptions,
        ...options,
      };
    }
  }
}
```

With this defined as an `interface`, you get the benefit of having editor autocomplete suggestions as you build out the object while also preventing properties that shouldn't be allowed on the object from being defined or providing properties that use incorrect types.
