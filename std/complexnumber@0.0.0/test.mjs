// import testing framework
import TAPRunner from "../tester@0.0.0/TAPRunner.mjs";
import equal from "../tester@0.0.0/tests/equal.mjs";
import ok from "../tester@0.0.0/tests/ok.mjs";
import notok from "../tester@0.0.0/tests/notok.mjs";

// import testing library
import './number-prototype.mjs';
import i from "./i.mjs";// import 𝑖 from "./i.mjs"; // Does not work in Deno due to unicode issues
import { fromRectangular , fromPolar} from "./ComplexNumber.mjs";
import { add, subtract, multiply, divide, trunc, equal as numEqual, random } from './ComplexMath.mjs';

await TAPRunner("Numbers", function *(){
  const SAMPLE_NUM = Math.random();
  yield equal(SAMPLE_NUM.r, SAMPLE_NUM, "regular components should have real value of itself");
  yield equal(SAMPLE_NUM.m, SAMPLE_NUM, "regular components should have magnitude value of itself");
  yield equal(SAMPLE_NUM.i, 0, "regular components should have imaginary value of zero");
  yield equal(SAMPLE_NUM.a, 0, "regular components should have angle value of zero");
});

await TAPRunner("Additon", function *(){
  const A = random();
  const B = random();
  const C = add(A, B);
  yield ok(numEqual(A.r + B.r, C.r), "should be equal");
  yield ok(numEqual(A.i + B.i, C.i), "should be equal");
});

await TAPRunner("Subtraction", function *(){
  const A = random();
  const B = random();
  const C = subtract(A, B);
  yield ok(numEqual(A.r - B.r, C.r), "should be equal");
  yield ok(numEqual(A.i - B.i, C.i), "should be equal");
});

await TAPRunner("Multiplication", function *(){
  yield ok(numEqual(-1, multiply(i, i)), "should be equal");
});

await TAPRunner("Division", function *(){
  yield ok(numEqual(subtract(0, i), divide(1, i)), "should be equal");
});

await TAPRunner("Truncation", function *(){
  yield ok(numEqual(trunc(fromRectangular(1.1234, 5.6789 ), 2), trunc(fromRectangular(1.12, 5.68 ), 2)));
});

await TAPRunner("Polar", function *(){
  yield ok(numEqual(fromPolar(1, Math.PI/2), i));
});