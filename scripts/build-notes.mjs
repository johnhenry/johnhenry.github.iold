import recursiveFileMatch from '../std/js/recursive-file-match@0.0.0/index.mjs';
import fs from 'fs';
import showdown from 'showdown';
const converter = new showdown.Converter();
const bodyWrapper = (body)=>`
<html>
  <head>
    <title>A Note</title>
    <link rel="stylesheet" href="/css/index.css">
  </head>
  <body>
    ${body}
  </body>
</html>
`

const reg = /(.+).md/;

for await (const infile of recursiveFileMatch('./notes/', reg)) {
  const outfile = `${reg.exec(infile)[1]}.html`;
  fs.writeFileSync(outfile, converter.makeHtml(fs.readFileSync(infile, 'utf8')));
  console.log(`${infile} => ${outfile}`);
}
