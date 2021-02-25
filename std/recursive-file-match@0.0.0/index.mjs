import path from 'path';
import fs from 'fs';
const recursiveFileMatch = async function *(startPath, filter){
  if (!fs.existsSync(startPath)){
      console.log("no dir ", startPath);
      return;
  }
  for(const file of fs.readdirSync(startPath)){
    const filename = path.join(startPath, file);
    if (fs.lstatSync(filename).isDirectory()){
      yield * await recursiveFileMatch(filename, filter); //recurse
    }
    else if (filter.test(filename)) {
      const match = path.join(startPath, filter.exec(filename)[1]);
      yield [match, filename];
    }
  }
};

export default recursiveFileMatch;
