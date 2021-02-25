import TestError from "../testerror.mjs"
export default (actual, unexpected, message = "should not be strictly equal", operator="notequal") =>{
  if(actual !== unexpected){
    return message;
  }
  return new TestError(message, {actual, unexpected, message, operator});
}