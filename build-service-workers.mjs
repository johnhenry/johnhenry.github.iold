import esbuild from 'esbuild';
import recursiveFileMatch from './std/recursive-file-match@0.0.0/index.mjs';

for await (const [match] of recursiveFileMatch('./', /(service-worker).es6.mjs/)) {
  const infile = `${match}.es6.mjs`;
  const outfile = `${match}.js`;
  const entryPoints = [infile];
  esbuild.buildSync({
    entryPoints,
    outfile,
    bundle: true,
    format:'iife'
  });
  console.log(`${infile} => ${outfile}`);
}
