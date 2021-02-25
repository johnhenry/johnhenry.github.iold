import { print } from "./TAPRunner.mjs";
import tests from './sample.test.mjs';
for await (const [name, test] of Object.entries(tests)){
  await print(test, name);
}