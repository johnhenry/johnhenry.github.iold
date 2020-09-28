import TAPRunner from "./TAPRunner.mjs";
import equal from "./tests/equal.mjs";
import deepEqual from "./tests/deepequal.mjs";
import ok from "./tests/ok.mjs";

TAPRunner("A", function *(plan){
  plan(2);
  yield equal();
  yield deepEqual({}, {}, "they should have same stuff");
});

TAPRunner("B", function *(){
  yield ok(1);
  yield ok(true);
  yield ok(false);
});
