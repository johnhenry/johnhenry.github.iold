import fs from 'fs';
import path from 'path';
import fse from 'fs-extra';
import numlistCompare from '../std/js/numlist-compare@0.0.0/index.mjs';

const startPath = './std/js/';
const reg = /(.*)@(\d+\.\d+\.\d+)$/;
const record = {};

for(const directory of fs.readdirSync(startPath)){
  const filename = path.join(startPath, directory);
  if(!reg.test(filename) || !fs.lstatSync(filename).isDirectory()){
    continue;
  }
  const [,name, ver] = reg.exec(filename);
  const version = ver.split('.').map(Number);
  record[name] = record[name] ? record[name].push(version) && record[name] : [version];
}

for(const [name, versions] of Object.entries(record)){
  const version = `${name}@${versions.sort(numlistCompare)[versions.length -1].join('.')}`
  const latest = `${name}@latest`;
  if(fs.existsSync(latest) && fs.lstatSync(latest).isDirectory()){
    fse.removeSync(latest);
  }
  fse.copySync(version, latest);
}
