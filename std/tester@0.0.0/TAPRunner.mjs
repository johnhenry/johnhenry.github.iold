
const TAP_VERSION = 13; 
import TestError from "./testerror.mjs"
export default async function(title, generator, log=console.log){
  log(`TAP version ${TAP_VERSION}`)
  log(`# ${title}`);
  let index = 1;
  let planCalled = false;
  const plan = (num)=>{
    if(planCalled){
      throw new Error('do not call plan more than once');
    }
    planCalled = true;
    if(num === undefined){
      log(`1..${index-1}`);
    }else{
      log(`1..${num}`);
    }
  }
  let tests = 0;
  let pass = 0;
  let fail = 0;
  for await (const output of generator(plan)){
    if(output instanceof TestError){
      const { message } = output;
      log(`not ok ${index} - ${message}`);
      log(`  ---`);
      for(const [key, value] of Object.entries(output.val)){
        log(`    ${key}: ${value}`);
      };
      log(`  ...`);
      fail++;
    } else {
      log(`ok ${index} - ${output}`);
      pass++;
    }
    index++;
    tests++;
  }
  if(!planCalled){
    plan();
  }
  log(`# tests ${tests}`);
  log(`# pass  ${pass}`);
  log(`# fail  ${fail}`);
}