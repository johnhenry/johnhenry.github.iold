// import TAPRunner from "../tester@0.0.0/TAPRunner.mjs";
// import equal from "../tester@0.0.0/assertions/deepequal.mjs";
// // import ok from "../tester@0.0.0/assertions/ok.mjs";

import { encode, decode, Tag } from "./index.mjs";
// console.log(decode(encode(1)));
// const chars = "abcdefghijklmnopqrstuvwxyzABCDEFG";
// TAPRunner("it should encode mixed input", function *(plan){
//   plan(1);
//   const input = [
//     {
//         greeting:"hello world",
//         otherGreetings:[
//           "how are you doing",
//           "what's the haps brother"
//         ]
//       },
//     null,
//     undefined,
//     [135n, "up", true, false, 1, 1.25],
//     chars.split(""), // 33chars
//     new Uint8ClampedArray([3, 5, 21, 0, 8, 3, 4 , 0, 23, 3, 5, 21, 80, 8, 3, 45, 0, 23, 3, 5, 21, 0, 8, 53, 145, 0, 23, 53, 5, 2, 6, 7, 45]),
//     new Uint8ClampedArray([3, 5, 21]),
//     Object.fromEntries(chars.split("").map(s=>[`k${s}`, `v${s}`])),
//     new Map([[1n, 1n], ['b', 2n], ['c', 3n ]]),
//     new Tag(4, chars.split("")),
//   ];
//   const output = decode(encode(input));
//   yield equal(input, output, "they should have same stuff");
// });






