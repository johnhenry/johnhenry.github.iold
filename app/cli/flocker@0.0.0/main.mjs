import * as handlers from "./handlers.mjs";
export default async (args) => {
  const {_: [dir = ".", ...rest]} = args;
  delete args._;
  try{
    await handlers[dir]?.(args, rest);
  }catch(error){
    handlers.error(error);
  }
  handlers[dir] || await handlers.error(null, args, dir, ...rest);
};