let timeout = 0;
const timeouts = new Set();

const DEFAULT_OPTIONS = {
  WAIT: 0,
  LIMIT: Infinity,
};

export default (func, options, ...args) => {
  let [wait, limit] = [DEFAULT_OPTIONS.WAIT, DEFAULT_OPTIONS.LIMIT];
  if (typeof options === "number") {
    wait = options;
  } else if (Array.isArray(options)) {
    wait = options[0] ?? wait;
    limit = options[1] ?? limit;
  } else if (options && typeof options === "object") {
    wait = options.wait ?? wait;
    limit = options.limit ?? limit;
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
      iteration;
      setTimeout(async () => {
        if (timeouts.has(localTimeout)) {
          await go();
        }
      }, wait);
    }
  };
  setTimeout(go);
  return localTimeout;
};

export const clear = timeouts.delete.bind(timeouts);
