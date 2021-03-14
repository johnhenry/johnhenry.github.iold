import InvertedPromise from "../invertedpromise@0.0.0/index.mjs";
const END = Symbol('END');
export default () => {
  let done;
  let promise;
  const out = {};
  const getNext = () => {
    return promise = InvertedPromise();
  };
  out.iterator = (async function * (){
      try {
        while(true){
          if(done){
            throw END;
          }
          yield await getNext().promise;
          if(done){
            throw END;
          }
        }
      }catch(e){
        if(e !== END){
          throw e;
        }
      }
  })();
  out.resolve = (value) => promise?.resolve(value);
  out.reject = (value) => promise?.reject(value);
  out.end = () => {
    done = true;
    promise?.reject(END);
  };
  return out;
};
