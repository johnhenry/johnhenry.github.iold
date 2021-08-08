import { iterator, funcSync, func, setBackoff, setRetry } from "./index.mjs";

const SYMBOL_SUCCESS = Symbol("success");
const succeedsOnN = (
  N,
  trial = (limit) => console.log("trial", limit),
  success = (limit) => console.log("success", limit)
) => {
  let limit = N;
  return () => {
    if (limit-- > 1) {
      trial(N - limit);
      throw new Error(`Try ${limit} more times.`);
    }
    success(N - limit);
    return SYMBOL_SUCCESS;
  };
};

// {
//   const succeedsOn3 = succeedsOnN(3);
//   for await (const waited of iterator(1000, 2, Infinity, 0)) {
//     // console.log(waited);
//     try {
//       succeedsOn3();
//       break;
//     } catch {
//       continue;
//     }
//   }
// }

// {
//   const succeedsOn3 = succeedsOnN(3);
//   const t = func(succeedsOn3);
//   console.log(await t());
// }

// {
//   const succeedsOn3 = succeedsOnN(3);
//   const t = funcSync(succeedsOn3);
//   t();
// }

{
  setRetry(succeedsOnN(4), [1000, 3]);
}

// {
//   setBackoff(succeedsOnN(4), [1000, 3]);
// }
