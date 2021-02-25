import equal from "./assertions/equal.mjs";
import notequal from "./assertions/notequal.mjs";
import deepEqual from "./assertions/deepequal.mjs";
import ok from "./assertions/ok.mjs";
import notok from "./assertions/notok.mjs";

import { run } from "./TAPRunner.mjs";
import TestError from "./testerror.mjs";

export default {
  // "empty tests": function *(){},
  // "unfun one": function *(plan){
  //   plan(1);
  //   yield notequal();
  // },
  // "two true": function *(plan){
  //   plan(2);
  //   yield equal(1, 1);
  //   yield deepEqual({}, {}, "they should have same stuff");
  // },
  // "three truths and a lie": function *(){
  //   yield ok(1);
  //   yield ok(true);
  //   yield notok(false);
  //   yield notok(true);
  // },
  "meta": async function * (){
    for await(const result of run(function *(){
      yield ok(true);
      yield notok(false);
      yield equal(true, true);
      yield notequal(undefined, null);
      yield deepEqual({}, {});
    })){
      yield notok(result instanceof TestError);
    };
  }
}
