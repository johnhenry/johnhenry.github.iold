import { setIntervalWait, clearIntervalWait } from "./index.mjs";

const t = setIntervalWait(console.log, 1000, "Hello");
setTimeout(clearIntervalWait, 10000, t);
