export default (action, wait = 1000, base = 2, limit = Infinity) => {
  let iteration = 0;
  const go = (...args) => {
    try {
      action(...args);
    } catch (error) {
      const time = wait * base ** iteration++;
      if (time > limit) {
        throw error;
      }
      setTimeout(
        () => {
          go(...args);
        },
        time,
        limit
      );
    }
  };
  return go;
};
