export default async function* (wait = 1000, base = 2, limit = Infinity) {
  yield 0;
  let iteration = 0;
  while (true) {
    const time = wait * base ** iteration++;
    if (time > limit) {
      throw new Error("limit");
    }
    await new Promise((resolve) => setTimeout(resolve, time));
    yield time;
  }
}
