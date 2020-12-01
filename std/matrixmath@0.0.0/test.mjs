import { createMultiply } from "./index.mjs";

const multiply = createMultiply();

console.log(multiply([[1,0],[0,1]], [[0,1],[1,0]]));