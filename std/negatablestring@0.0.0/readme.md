
```javascript
import {scale, concat};
const HELLO = "HELLO";
const GOODBYE = scale("HELLO", -1);
const COMBO = concat(HELLO, GOODBYE);
const [string0, ...colors0] = HELLO.consoleIterator();
const [string1, ...colors1] = GOODBYE.consoleIterator();
const [string2, ...colors2] = COMBO.consoleIterator();

console.log(...HELLO.consoleIterator());
console.log(...GOODBYE.consoleIterator());
console.log(...COMBO.consoleIterator());
console.log(`("${string0}" + "${string1}") = "${string2}"`, ...colors0, ...colors1, ...colors2);
```