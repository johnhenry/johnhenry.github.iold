import './string-prototype.mjs';
import {negater, scale, concat } from './NegatableString.mjs';
const NEGATIVE_COLOR = 'red';
const POSITIVE_COLOR = 'lightblue';
////
const REVERSED = scale('DESREVER', -1);
console.log(REVERSED.toString());
console.log(...REVERSED.consoleIterator(NEGATIVE_COLOR, POSITIVE_COLOR));
console.log(...REVERSED.toString().consoleIterator(NEGATIVE_COLOR, POSITIVE_COLOR));
console.log(REVERSED.toString("~"));

////
console.log(...negater("mississippi").consoleIterator(NEGATIVE_COLOR, POSITIVE_COLOR));
console.log(...negater("m~iss~iss~ipp~i").consoleIterator(NEGATIVE_COLOR, POSITIVE_COLOR));
console.log(...negater("mis~sis~sip~pi").consoleIterator(NEGATIVE_COLOR, POSITIVE_COLOR));
console.log(...negater("mi~ssi~ssi~ppi").consoleIterator(NEGATIVE_COLOR, POSITIVE_COLOR));
console.log(...negater("mi~ss~is~si~pp~i").consoleIterator(NEGATIVE_COLOR, POSITIVE_COLOR));
console.log(...negater("1~-1", "-").consoleIterator(NEGATIVE_COLOR, POSITIVE_COLOR));
////
const factor = 4;
const HELLO = "HELLO";
const OLLEH = scale(HELLO, -1);
// const GOODBYE = "GOODBYE";
const EYBDOOG = scale("GOODBYE", -1);

const [string0, ...colors0] = HELLO.consoleIterator(NEGATIVE_COLOR, POSITIVE_COLOR);
const [string1, ...colors1] = EYBDOOG.consoleIterator(NEGATIVE_COLOR, POSITIVE_COLOR);
const [string2, ...colors2] = scale(concat(HELLO, EYBDOOG), factor).consoleIterator(NEGATIVE_COLOR, POSITIVE_COLOR);
console.log(`("${string0}" + "${string1}") * ${factor} => "${string2}"`, ...colors0, ...colors1, ...colors2);

const [stringB, ...colorsB] = OLLEH.consoleIterator(NEGATIVE_COLOR, POSITIVE_COLOR);
const [stringC, ...colorsC] = scale(concat(HELLO, OLLEH), factor).consoleIterator(NEGATIVE_COLOR, POSITIVE_COLOR);
console.log(`("${string0}" + "${stringB}") * ${factor} => "${stringC}"`, ...colors0, ...colorsB, ...colorsC);

console.log(concat(scale('http://', -1), "http://www.google.com", true).toString());

// const lordsprayer = 
// `Our Father, who art in heaven,
// hallowed be thy Name,
// thy kingdom come,
// thy will be done,
// on earth as it is in heaven.
// Give us this day our daily bread.
// And forgive us our trespasses,
// as we forgive those
// who trespass against us.
// And lead us not into temptation,
// but deliver us from evil.
// For thine is the kingdom,
// and the power, and the glory,
// for ever and ever. Amen.`;

// const devilsprayer = scale(lordsprayer, -1);
// console.log(lordsprayer);
// console.log(...devilsprayer.consoleIterator(NEGATIVE_COLOR, POSITIVE_COLOR));
// console.log(concat(lordsprayer, devilsprayer).toString());
