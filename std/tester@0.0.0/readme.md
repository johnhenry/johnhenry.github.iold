```javascript
import TAPrunner from "./chester@0.0.0/taprunner.mjs";
import tag from "./chester@0.0.0/tag.mjs";
import equal, { deepEqual } from "./chester@0.0.0/tests/equal.mjs";
import ok from "./chester@0.0.0/tests/ok.mjs";

const TestError = class extends Error{
  constructor(actual, expected, message, operator){
    super(message);
    this.actual = actual;
    this.expected = expected;
    this.operator = operator;
  }
};



const equal = (actual, expected, message = "should be strictly equal", operator="equal") =>{
  if(a === b){
    return message;
  }
  return TestError(actual, expected, message, operator);
}

const TAPrunner = async function(title, generator){
  console.log(`TAP version ${13}
# ${title}`);
  let index = 1;
  const plan = (num)=>{
    if(num === undefined){
      console.log(`1..${index-1})`);
    }else{
      console.log(`1..${num})`);
    }
  }
  for (const output of generator()){
    if(output instanceof TestError){
      const {actual, expected, operator, message} = output;
      console.log(`not ok ${index} ${message}`);
      console.log(`  ---
    operator: ${operator}
    expected: ${expected}
    actual:   ${actual}`);
    } else {
      console.log(`ok ${index}`);
    }
    index++;
  }
}


TAPrunner(function *(plan){
  plan(2);
  yield equal();
  yield tag("they should have same stuff", deepEqual, {}, {});
});

TAPrunner(function *(done){
  yield ok(true);
  done();
});
```