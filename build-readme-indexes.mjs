import recursiveFileMatch from './std/recursive-file-match@0.0.0/index.mjs';
import fs from 'fs';
import showdown from 'showdown';
const converter = new showdown.Converter();

for await (const [match] of recursiveFileMatch('./std/', /\/([A-Za-z0-9\-\_]+).md/)) {
  if(match.substr(match.length - 6).toLowerCase() === 'readme') {
    const infile = `${match}.md`;
    const outfile = `${match}.html`;
    console.log(`${infile} => ${outfile}`);
    fs.writeFileSync(outfile, converter.makeHtml(fs.readFileSync(infile, 'utf8')));
  };
}
