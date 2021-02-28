import tester, { ok, notok, equal, notequal, deepequal, pass, fail } from '../index.mjs';
import { run } from '../TAPRunner.mjs';
import { DefaultMessage as DefaultMessageOK } from '../assertions/ok.mjs';
import { DefaultMessage as DefaultMessageNotOK } from '../assertions/notok.mjs';
import { DefaultMessage as DefaultMessageEqual } from '../assertions/equal.mjs';
import { DefaultMessage as DefaultMessageNotEqual } from '../assertions/notequal.mjs';
import { DefaultMessage as DefaultMessageDeepEqual } from '../assertions/deepequal.mjs';
import { DefaultMessage as DefaultMessagePass } from '../assertions/pass.mjs';
// import { DefaultMessage as DefaultMessageDeelFail } from '../assertions/fail.mjs';

import TestError from '../testerror.mjs';

await tester('Test run without print', async function *(){
  // simulate passing tests
  const tests = [
    pass,
    ok,
    notok,
    equal,
    notequal,
    deepequal
  ];
  const args = [
    [],
    [1],
    [0],
    [1, 1],
    [1, 0],
    [{a:1, b:0}, {b:0, a:1}],
  ];
  const expected = [
    DefaultMessageOK,
    DefaultMessageNotOK,
    DefaultMessageEqual,
    DefaultMessageNotEqual,
    DefaultMessageDeepEqual,
    DefaultMessagePass
  ];
  let index = 0;
  for await (const output of run(async function*(){
    for(let i = 0; i < tests.length; i++){
      yield tests[i](...args[i], expected[i]);
    }
  })){
    yield equal(output, expected[index++], 'should produce expected result');
  }

  // simulate failing tests
  const badtests = [
    ok,
    notok,
    equal,
    notequal,
    deepequal,
    fail
  ];

  const badargs = [
    [0],
    [1],
    [1, 0],
    [1, 1],
    [{a:1, b:0}, {a:1}],
    []
  ];
  for await (const output of run(async function*(){
    for(let i = 0; i < tests.length; i++){
      yield badtests[i](...badargs[i]);
    }
  })){
    yield ok(output instanceof TestError, 'should produce an error');
  }
});