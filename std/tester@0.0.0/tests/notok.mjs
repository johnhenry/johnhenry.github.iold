import TestError from "../testerror.mjs"
export default (actual, message = "should be falsy", operator="notok") =>{
  if(!actual){
    return message;
  }
  return new TestError(message, {actual, operator});
}
