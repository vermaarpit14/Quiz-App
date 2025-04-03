const questions = [
  {
    category: "C Programming",
    questions: [
      {
        question: "What will be the output of `printf('%d', sizeof('A'));` in a 32-bit C compiler?",
        options: ["1", "2", "4", "8"],
        correctAnswer: 2,
      },
      {
        question: "Which of the following is NOT a valid storage class in C?",
        options: ["auto", "register", "extern", "heap"],
        correctAnswer: 3,
      },
      {
        question: "What does the `volatile` keyword in C indicate?",
        options: ["The variable may change unexpectedly", "The variable is constant", "The variable is stored in RAM", "The variable is optimized by the compiler"],
        correctAnswer: 0,
      },
      {
        question: "What is the output of `printf('%d', 5 + 'A');`?",
        options: ["5A", "70", "Error", "Undefined"],
        correctAnswer: 1,
      },
      {
        question: "Which of these is NOT a valid way to declare a pointer in C?",
        options: ["int *ptr;", "int* ptr;", "int ptr*;", "All are valid"],
        correctAnswer: 2,
      },
      {
        question: "What happens if you free a pointer twice in C?",
        options: ["No effect", "Undefined behavior", "Memory leak", "Compiler error"],
        correctAnswer: 1,
      },
      {
        question: "What is the output of `printf('%d', 3.5 + 2);`?",
        options: ["5", "5.5", "Undefined", "Compilation error"],
        correctAnswer: 3,
      },
      {
        question: "Which of the following is NOT a valid way to pass an array to a function in C?",
        options: ["void func(int arr[])", "void func(int *arr)", "void func(int arr[5])", "void func(int arr)"],
        correctAnswer: 3,
      },
      {
        question: "What is the output of `printf('%d', 1 == 1 == 1);`?",
        options: ["0", "1", "True", "Compilation error"],
        correctAnswer: 0,
      },
      {
        question: "What does `strcmp()` return if two strings are identical?",
        options: ["1", "0", "-1", "Depends on compiler"],
        correctAnswer: 1,
      },
      {
        question: "What is the output of `printf('%d', sizeof(void));`?",
        options: ["0", "1", "Undefined", "Compiler error"],
        correctAnswer: 3,
      },
      {
        question: "Which of these is NOT a valid C preprocessor directive?",
        options: ["#include", "#define", "#ifdef", "#function"],
        correctAnswer: 3,
      },
      {
        question: "What is the output of `printf('%d', 10 << 2);`?",
        options: ["10", "20", "40", "5"],
        correctAnswer: 2,
      },
      {
        question: "What is the correct way to declare a function pointer in C?",
        options: ["int (*func)();", "int *func();", "int func*();", "int (func)();"],
        correctAnswer: 0,
      },
      {
        question: "What is the output of `printf('%d', ~5);` if integers are 4 bytes?",
        options: ["-6", "5", "10", "Undefined"],
        correctAnswer: 0,
      },
      {
        question: "What is the output of `printf('%d', 5 / 2);`?",
        options: ["2.5", "2", "3", "Undefined"],
        correctAnswer: 1,
      },
      {
        question: "Which of these is NOT a valid way to initialize an array in C?",
        options: ["int arr[] = {1, 2, 3};", "int arr[3] = {1, 2, 3};", "int arr[3] = {1};", "int arr[3] = {};"],
        correctAnswer: 3,
      },
      {
        question: "What is the output of `printf('%d', !5);`?",
        options: ["0", "1", "5", "Undefined"],
        correctAnswer: 0,
      },
      {
        question: "What is the output of `printf('%d', sizeof(int(*)[10]));` on a 64-bit system?",
        options: ["4", "8", "10", "40"],
        correctAnswer: 1,
      },
      {
        question: "What is the output of `printf('%d', 1 < 2 < 3);`?",
        options: ["0", "1", "True", "Undefined"],
        correctAnswer: 1,
      },
      {
        question: "Which of these is NOT a valid C keyword?",
        options: ["const", "volatile", "friend", "restrict"],
        correctAnswer: 2,
      },
      {
        question: "What is the output of `printf('%d', sizeof('\\0'));`?",
        options: ["1", "2", "4", "Undefined"],
        correctAnswer: 2,
      },
      {
        question: "What is the output of `printf('%d', 5 && 2);`?",
        options: ["0", "1", "2", "5"],
        correctAnswer: 1,
      },
      {
        question: "What is the output of `printf('%d', 5 || 0);`?",
        options: ["0", "1", "5", "Undefined"],
        correctAnswer: 1,
      },
      {
        question: "What is the output of `printf('%d', sizeof(struct {char a; int b;}));` on a 32-bit system?",
        options: ["5", "6", "8", "Undefined"],
        correctAnswer: 2,
      },
    ],
  },
  {
    category: "HTML",
    questions: [
      {
        question: "Which HTML5 element is used for playing video files?",
        options: ["<media>", "<video>", "<movie>", "<play>"],
        correctAnswer: 1,
      },
      {
        question: "What does the `defer` attribute do in a <script> tag?",
        options: ["Delays script execution until HTML parsing is done", "Prevents the script from running", "Makes the script asynchronous", "Forces the script to load first"],
        correctAnswer: 0,
      },
      {
        question: "Which attribute is used to make an <input> field required in HTML5?",
        options: ["mandatory", "required", "validate", "mustfill"],
        correctAnswer: 1,
      },
      {
        question: "What is the correct HTML5 doctype declaration?",
        options: ["<!DOCTYPE html5>", "<!DOCTYPE HTML>", "<!DOCTYPE HTML5>", "<!DOCTYPE>"],
        correctAnswer: 1,
      },
      {
        question: "Which tag is used to define a dropdown list in HTML?",
        options: ["<list>", "<dropdown>", "<select>", "<option>"],
        correctAnswer: 2,
      },
      {
        question: "What does the `placeholder` attribute do in HTML?",
        options: ["Sets a default value", "Displays hint text", "Makes the field read-only", "Hides the input"],
        correctAnswer: 1,
      },
      {
        question: "Which HTML element is used for drawing graphics via JavaScript?",
        options: ["<canvas>", "<svg>", "<draw>", "<graphics>"],
        correctAnswer: 0,
      },
      {
        question: "What is the purpose of the `<meta charset='UTF-8'>` tag?",
        options: ["Defines page encoding", "Sets the page title", "Links to a stylesheet", "Defines a viewport"],
        correctAnswer: 0,
      },
      {
        question: "Which HTML5 element is used for side content?",
        options: ["<sidebar>", "<aside>", "<section>", "<div>"],
        correctAnswer: 1,
      },
      {
        question: "What is the correct way to embed an SVG file in HTML?",
        options: ["<img src='image.svg'>", "<svg src='image.svg'>", "<embed src='image.svg'>", "All of the above"],
        correctAnswer: 3,
      },
      {
        question: "Which HTML tag is used for a line break?",
        options: ["<br>", "<lb>", "<break>", "<newline>"],
        correctAnswer: 0,
      },
      {
        question: "What does the `target='_blank'` attribute do in an <a> tag?",
        options: ["Opens link in a new tab", "Opens link in the same tab", "Prevents the link from opening", "Hides the link"],
        correctAnswer: 0,
      },
      {
        question: "Which HTML5 element is used for progress bars?",
        options: ["<progress>", "<meter>", "<bar>", "<loading>"],
        correctAnswer: 0,
      },
      {
        question: "What is the purpose of the `<noscript>` tag?",
        options: ["Defines alternative content if JavaScript is disabled", "Prevents scripts from running", "Loads scripts asynchronously", "Hides scripts from the browser"],
        correctAnswer: 0,
      },
      {
        question: "Which attribute is used to disable an <input> field?",
        options: ["readonly", "disabled", "off", "lock"],
        correctAnswer: 1,
      },
      {
        question: "What is the correct way to create a hyperlink in HTML?",
        options: ["<a url='example.com'>Link</a>", "<a href='example.com'>Link</a>", "<link src='example.com'>", "<hyperlink>example.com</hyperlink>"],
        correctAnswer: 1,
      },
      {
        question: "Which HTML element is used for a table header?",
        options: ["<thead>", "<th>", "<header>", "<theader>"],
        correctAnswer: 1,
      },
      {
        question: "What does the `contenteditable` attribute do?",
        options: ["Makes an element editable", "Hides content", "Prevents editing", "Loads content dynamically"],
        correctAnswer: 0,
      },
      {
        question: "Which HTML5 element is used for date input?",
        options: ["<input type='date'>", "<date>", "<calendar>", "<time>"],
        correctAnswer: 0,
      },
      {
        question: "What is the purpose of the `<figure>` tag?",
        options: ["Defines a diagram", "Groups media content with captions", "Creates a border", "Defines a footer"],
        correctAnswer: 1,
      },
      {
        question: "Which HTML tag is used for subscript text?",
        options: ["<sub>", "<sup>", "<small>", "<low>"],
        correctAnswer: 0,
      },
      {
        question: "What does the `async` attribute do in a <script> tag?",
        options: ["Delays script execution", "Makes the script load asynchronously", "Prevents the script from running", "Forces the script to load first"],
        correctAnswer: 1,
      },
      {
        question: "Which HTML element is used for a thematic break?",
        options: ["<break>", "<hr>", "<line>", "<divider>"],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of the `<datalist>` tag?",
        options: ["Defines a dropdown list", "Creates a list of suggestions for input fields", "Displays a list of data", "Hides data"],
        correctAnswer: 1,
      },
      {
        question: "Which HTML5 element is used for audio playback?",
        options: ["<sound>", "<audio>", "<music>", "<play>"],
        correctAnswer: 1,
      },
    ],
  },
  {
    category: "CSS",
    questions: [
      {
        question: "Which CSS property is used to change text color?",
        options: ["text-color", "font-color", "color", "text-style"],
        correctAnswer: 2,
      },
      {
        question: "What does `box-sizing: border-box;` do?",
        options: ["Includes padding and border in element width", "Excludes margins from width", "Forces element to full width", "Hides borders"],
        correctAnswer: 0,
      },
      {
        question: "Which selector has the highest specificity?",
        options: ["#id", ".class", "tag", "!important"],
        correctAnswer: 0,
      },
      {
        question: "What does `z-index` control?",
        options: ["Horizontal stacking", "Vertical stacking", "Opacity", "Rotation"],
        correctAnswer: 1,
      },
      {
        question: "Which property is used to create rounded corners?",
        options: ["border-radius", "corner-radius", "round-border", "border-style"],
        correctAnswer: 0,
      },
      {
        question: "What does `position: sticky;` do?",
        options: ["Fixes element relative to viewport", "Makes element draggable", "Hides element until scrolled", "Locks element in place"],
        correctAnswer: 0,
      },
      {
        question: "Which CSS unit is relative to font size?",
        options: ["px", "em", "vw", "pt"],
        correctAnswer: 1,
      },
      {
        question: "What does `display: flex;` enable?",
        options: ["Grid layout", "Flexbox layout", "Table layout", "Inline layout"],
        correctAnswer: 1,
      },
      {
        question: "Which property animates CSS changes?",
        options: ["animation", "transition", "transform", "keyframe"],
        correctAnswer: 1,
      },
      {
        question: "What does `overflow: hidden;` do?",
        options: ["Hides scrollbars", "Clips overflow content", "Expands container", "Disables scrolling"],
        correctAnswer: 1,
      },
      {
        question: "Which pseudo-class selects an element being hovered?",
        options: [":active", ":hover", ":focus", ":visited"],
        correctAnswer: 1,
      },
      {
        question: "What does `transform: rotate(45deg);` do?",
        options: ["Scales element", "Rotates element 45 degrees", "Skews element", "Moves element"],
        correctAnswer: 1,
      },
      {
        question: "Which property controls space between lines of text?",
        options: ["line-height", "letter-spacing", "word-spacing", "text-spacing"],
        correctAnswer: 0,
      },
      {
        question: "What does `@media` query do?",
        options: ["Imports stylesheets", "Applies styles conditionally", "Defines animations", "Creates variables"],
        correctAnswer: 1,
      },
      {
        question: "Which selector targets direct children?",
        options: ["A > B", "A + B", "A ~ B", "A B"],
        correctAnswer: 0,
      },
      {
        question: "What does `opacity: 0.5;` do?",
        options: ["Makes element 50% transparent", "Hides element", "Blurs element", "Darkens element"],
        correctAnswer: 0,
      },
      {
        question: "Which property creates a shadow effect?",
        options: ["shadow", "box-shadow", "text-shadow", "drop-shadow"],
        correctAnswer: 1,
      },
      {
        question: "What does `float: left;` do?",
        options: ["Moves element left", "Floats element to left of container", "Aligns text left", "Clears left floats"],
        correctAnswer: 1,
      },
      {
        question: "Which property changes cursor style?",
        options: ["cursor", "pointer", "mouse", "hover"],
        correctAnswer: 0,
      },
      {
        question: "What does `background-clip: content-box;` do?",
        options: ["Clips background to content box", "Extends background", "Hides background", "Repeats background"],
        correctAnswer: 0,
      },
      {
        question: "Which property controls text alignment?",
        options: ["text-align", "align-text", "font-align", "justify"],
        correctAnswer: 0,
      },
      {
        question: "What does `will-change: transform;` do?",
        options: ["Forces GPU acceleration", "Prevents transforms", "Disables animations", "Hides element"],
        correctAnswer: 0,
      },
      {
        question: "Which pseudo-element styles the first line of text?",
        options: ["::first-line", "::first-letter", "::before", "::after"],
        correctAnswer: 0,
      },
      {
        question: "What does `object-fit: cover;` do?",
        options: ["Crops image to fill container", "Stretches image", "Centers image", "Repeats image"],
        correctAnswer: 0,
      },
      {
        question: "Which property controls column layout?",
        options: ["columns", "grid-columns", "flex-columns", "multi-column"],
        correctAnswer: 0,
      },
    ],
  },
  {
    category: "JavaScript",
    questions: [
      {
        question: "What is the output of `console.log(typeof NaN);`?",
        options: ["'number'", "'NaN'", "'undefined'", "'string'"],
        correctAnswer: 0,
      },
      {
        question: "Which of these is NOT a falsy value in JavaScript?",
        options: ["0", "' '", "null", "undefined"],
        correctAnswer: 1,
      },
      {
        question: "What does `'5' + 3` evaluate to in JavaScript?",
        options: ["8", "53", "NaN", "Error"],
        correctAnswer: 1,
      },
      {
        question: "What is the output of `console.log(0.1 + 0.2 === 0.3);`?",
        options: ["true", "false", "NaN", "Error"],
        correctAnswer: 1,
      },
      {
        question: "Which method removes the last element from an array?",
        options: ["pop()", "shift()", "slice()", "splice()"],
        correctAnswer: 0,
      },
      {
        question: "What does `'use strict';` do in JavaScript?",
        options: ["Enforces stricter parsing", "Disables hoisting", "Prevents global variables", "All of the above"],
        correctAnswer: 3,
      },
      {
        question: "What is the output of `console.log([] == ![]);`?",
        options: ["true", "false", "Error", "Undefined"],
        correctAnswer: 0,
      },
      {
        question: "Which keyword creates a block-scoped variable?",
        options: ["var", "let", "const", "Both let and const"],
        correctAnswer: 3,
      },
      {
        question: "What is the output of `console.log(1 < 2 < 3);`?",
        options: ["true", "false", "Error", "Undefined"],
        correctAnswer: 0,
      },
      {
        question: "What does `Array.isArray([])` return?",
        options: ["true", "false", "null", "undefined"],
        correctAnswer: 0,
      },
      {
        question: "What is the output of `console.log('b' + 'a' + + 'a' + 'a');`?",
        options: ["'baaa'", "'baNaNa'", "'baaNa'", "'baundefineda'"],
        correctAnswer: 1,
      },
      {
        question: "Which method creates a new array with modified elements?",
        options: ["forEach()", "map()", "filter()", "reduce()"],
        correctAnswer: 1,
      },
      {
        question: "What is the output of `console.log(typeof []);`?",
        options: ["'array'", "'object'", "'undefined'", "'null'"],
        correctAnswer: 1,
      },
      {
        question: "What does `this` refer to in an arrow function?",
        options: ["Window object", "Parent function's context", "Undefined", "The function itself"],
        correctAnswer: 1,
      },
      {
        question: "What is the output of `console.log(!!'');`?",
        options: ["true", "false", "undefined", "Error"],
        correctAnswer: 1,
      },
      {
        question: "Which operator checks both value and type equality?",
        options: ["==", "===", "=", "!=="],
        correctAnswer: 1,
      },
      {
        question: "What is the output of `console.log(3 > 2 > 1);`?",
        options: ["true", "false", "Error", "Undefined"],
        correctAnswer: 1,
      },
      {
        question: "What does `setTimeout(() => {}, 0)` do?",
        options: ["Executes immediately", "Executes after 0ms", "Adds to event loop", "Never executes"],
        correctAnswer: 2,
      },
      {
        question: "What is the output of `console.log(typeof null);`?",
        options: ["'null'", "'object'", "'undefined'", "'number'"],
        correctAnswer: 1,
      },
      {
        question: "Which method converts JSON to a JavaScript object?",
        options: ["JSON.parse()", "JSON.stringify()", "JSON.toObject()", "JSON.decode()"],
        correctAnswer: 0,
      },
      {
        question: "What is the output of `console.log([] + []);`?",
        options: ["'[]'", "' '", "''", "0"],
        correctAnswer: 2,
      },
      {
        question: "What does `'use strict';` prevent?",
        options: ["Hoisting", "Global variables", "Octal literals", "All of the above"],
        correctAnswer: 3,
      },
      {
        question: "What is the output of `console.log(+'10' + 10);`?",
        options: ["'1010'", "20", "NaN", "Error"],
        correctAnswer: 1,
      },
      {
        question: "Which method joins array elements into a string?",
        options: ["join()", "concat()", "split()", "toString()"],
        correctAnswer: 0,
      },
      {
        question: "What is the output of `console.log(typeof function(){});`?",
        options: ["'function'", "'object'", "'undefined'", "'method'"],
        correctAnswer: 0,
      },
    ],
  }
];