
import TestError from "../testerror.mjs"
export default (actual, message = "should be truthy", operator="ok") =>{
  if(actual){
    return message;
  }
  return new TestError(message, {actual, operator});
}
