import recursiveFileMatch from '../std/js/recursive-file-match@0.0.0/index.mjs';

const startPath = './std/js/';
const reg = /(.+).tests.mjs/;
for (const file of recursiveFileMatch(startPath, reg)) {
  console.log(file);
  await import(`../${file}`);
}