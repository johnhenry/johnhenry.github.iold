// implement setInterval and clearInterval in javascript using setTimeout
let timeout = 0;
const timeouts = new Set();

export const setIntervalWait = (func, time, ...args) => {
  const localTimeout = timeout++;
  timeouts.add(localTimeout);
  const next = () => {
    if (timeouts.has(localTimeout)) {
      func(...args);
      // We call "func" before setTimeout to ensure that it is not called again until the previous iteration is finished.
      setTimeout(next, time);
    }
  };
  setTimeout(next, time);
  return localTimeout;
};
export const clearIntervalWait = timeouts.delete.bind(timeouts);
