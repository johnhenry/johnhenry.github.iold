import TestError from "../testerror.mjs"
export default (actual, expected, message = "should be strictly equal", operator="equal") =>{
  if(actual === expected){
    return message;
  }
  return new TestError(message, {actual, expected, message, operator});
}