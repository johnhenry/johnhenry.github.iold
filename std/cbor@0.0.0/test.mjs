import TAPRunner from "../tester@0.0.0/TAPRunner.mjs";
// import equal from "../tester@0.0.0/tests/equal.mjs";
import deepEqual from "../tester@0.0.0/tests/deepequal.mjs";
// import ok from "../tester@0.0.0/tests/ok.mjs";

import { encode, decode, Tag } from "./index.mjs";
const chars = "abcdefghijklmnopqrstuvwxyzABCDEFG";
const input = [
  {
      greeting:"hello world",
      otherGreetings:[
        "how are you doing",
        "what's the haps brother"
      ]
    },
  null,
  undefined,
  [135n, "up", true, false, 1, 1.25],
  chars.split(""), // 33chars
  new Uint8ClampedArray([3, 5, 21, 0, 8, 3, 4 , 0, 23, 3, 5, 21, 80, 8, 3, 45, 0, 23, 3, 5, 21, 0, 8, 53, 145, 0, 23, 53, 5, 2, 6, 7, 45]),
  new Uint8ClampedArray([3, 5, 21]),
  Object.fromEntries(chars.split("").map(s=>[`k${s}`, `v${s}`])),
  new Map([[1n, 1n], ['b', 2n], ['c', 3n ]]),
  new Tag(4, chars.split("")),
];

TAPRunner("test", function *(plan){
  plan(1);
  yield deepEqual(input, decode(encode(input)), "they should have same stuff");
});






