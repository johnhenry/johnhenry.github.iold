# Tester

A context-independent testing framework inspired by [tape]().

## context-independent

Many javascript testing frameworks work by running via processes that inject 
extra non-standard objects and functions during test run-time.

Some of these processes place limits on test run-time features, making it  imposssible to test features available in your application.

Tester's context-independent nature allows you to use it like any other javascript module. Simply import it into any standard javascript runtime -- browser, [node](https://nodejs.org) or [deno](https://deno.land) and run it.

## TAP Output

Tester outputs to the console using the [Test Anything Protocol](). 

## Usage

### with plan argument

```javascript
// import main tester function;
import tester from 'tester/index.mjs';
// import assertions
import equal from 'tester/assertions/equal.mjs';
// run test...
await tester('test name', async function *(plan){
  plan(1);
  let answer = await 42;
  //...by yielding applied assertions
  yield equal(42, answer);
});
```

### without plan argument

```javascript
// import main tester function;
import tester from 'tester/index.mjs';
// import assertions
import notequal from 'tester/assertions/equal.mjs';
// run test
await tester('test name', async function *(){
  let answer = await 41;
  // yield assertions
  yield equal(42, answer);
});
```

## assetions

### included

#### ok

#### notok

#### equal

#### notpequal

#### deepequal

### external

### creating assertions

## TapRunner, run, flexibility