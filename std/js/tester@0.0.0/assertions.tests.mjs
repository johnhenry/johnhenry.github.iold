import tester from './index.mjs';
import ok from "./assertions/ok.mjs";
import notok from "./assertions/notok.mjs";
import equal from "./assertions/equal.mjs";
import notequal from "./assertions/notequal.mjs";
import deepEqual from "./assertions/deepequal.mjs";


await tester('Test Assertions', function *(plan){
  plan(5);
  yield ok(true, 'ok should pass if given argument is truthy');
  yield notok(false, 'notok should pass if given argument is falsy');
  yield equal(true, true, 'equal should pass if given arguments are strictly equal (or not both NaN)');
  yield notequal({a:1, b:2}, {b:2, a:1}, 'notequal should pass if given arguments are strictly notequal (or not both NaN)');
  yield deepEqual({a:1, b:2}, {b:2, a:1}, 'equal should pass if given arguments are deeply equal');
});

