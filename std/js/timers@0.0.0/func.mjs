export default (action, wait = 0, base = 2, limit = Infinity) =>
  async (...args) => {
    let iteration = 0;
    again: while (true) {
      try {
        return await action(...args);
      } catch (error) {
        const time = wait * base ** iteration++;
        if (time > limit) {
          throw error;
        }
        await new Promise((resolve) => setTimeout(resolve, time));
        continue again;
      }
    }
  };
