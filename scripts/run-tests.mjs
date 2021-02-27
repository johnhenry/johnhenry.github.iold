import recursiveFileMatch from '../std/js/recursive-file-match@0.0.0/index.mjs';

const reg = /(.+).tests.mjs/;
for await (const file of recursiveFileMatch('./std/', reg)) {
  console.log(file);
  await import(`../${file}`);
}