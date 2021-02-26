import recursiveFileMatch from './std/recursive-file-match@0.0.0/index.mjs';
import fs from 'fs';
import showdown from 'showdown';
const converter = new showdown.Converter();
const bodyWrapper = (title="A Note", body)=>`
<html>
  <head>
    <title>${title}</title>
    <link rel="stylesheet" href="/css/index.css">
  </head>
  <body>
    ${body}
  </body>
</html>
`

for await (const [match] of recursiveFileMatch('./notes/', /([A-Za-z0-9\-\_]+).md/)) {
  const infile = `${match}.md`;
  const outfile = `${match}.html`;
  console.log(`${infile} => ${outfile}`);
  fs.writeFileSync(outfile, converter.makeHtml(bodyWrapper(undefined, fs.readFileSync(infile, 'utf8'))));
}
