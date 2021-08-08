let timeout = 0;
const timeouts = new Set();

const DEFAULT_OPTIONS = {
  WAIT: 0,
  BASE: 2,
  LIMIT: Infinity,
};

export default (func, options, ...args) => {
  let [wait, limit, base] = [
    DEFAULT_OPTIONS.WAIT,
    DEFAULT_OPTIONS.LIMIT,
    DEFAULT_OPTIONS.BASE,
  ];
  if (typeof options === "number") {
    wait = options;
  } else if (Array.isArray(options)) {
    wait = options[0] ?? wait;
    limit = options[1] ?? limit;
    base = options[2] ?? base;
  } else if (options && typeof options === "object") {
    wait = options.wait ?? wait;
    limit = options.limit ?? limit;
    base = options.base ?? base;
  }
  let iteration = 0;
  const localTimeout = timeout++;
  timeouts.add(localTimeout);
  const go = () => {
    try {
      func(...args);
    } catch (error) {
      if (++iteration >= limit) {
        throw new Error(`Iteration limit of ${limit} exceeded. ${error}`);
      }
      const time = wait * base ** iteration;
      setTimeout(async () => {
        if (timeouts.has(localTimeout)) {
          await go();
        }
      }, time);
    }
  };
  setTimeout(go);
  return localTimeout;
};

export const clear = timeouts.delete.bind(timeouts);
