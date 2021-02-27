import esbuild from 'esbuild';
import recursiveFileMatch from '../std/js/recursive-file-match@0.0.0/index.mjs';

const reg = /(.*service-worker)\.es6\.mjs/;

for await (const infile of recursiveFileMatch('./', reg)) {
  const outfile = `${reg.exec(infile)[1]}.js`;
  esbuild.buildSync({
    entryPoints: [infile],
    outfile,
    bundle: true,
    format:'iife'
  });
  console.log(`${infile} => ${outfile}`);
}
