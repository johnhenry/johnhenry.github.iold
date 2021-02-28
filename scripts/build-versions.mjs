import fs from 'fs';
import path from 'path';
import fse from 'fs-extra';

const reg = /(.*)@(.*)/;
const record = {};
const startPath = './std/js/';
import symvervCompare from '../std/js/symver-compare@0.0.0/index.mjs';
for(const directory of fs.readdirSync(startPath)){
  const filename = path.join(startPath, directory);
  if(!reg.test(filename)){
    continue;
  }
  if (!fs.lstatSync(filename).isDirectory()){
    continue
  }
  const [,name,version] = reg.exec(filename);
  if(version === 'latest'){
    continue;
  }
  record[name] = record[name] ? record[name].push(version) && record[name] : [version];
}

for(const [name, versions] of Object.entries(record)){
  const version = `${name}@${versions.sort(symvervCompare)[versions.length -1]}`
  const latest = `${name}@latest`;
  console.log({version, latest})
  if(fs.existsSync(latest) && fs.lstatSync(latest).isDirectory()){
    fse.removeSync(latest);
  }
  fse.copySync(version,latest);
}
