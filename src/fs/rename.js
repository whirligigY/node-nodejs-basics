import fs from 'fs';
import { isExist } from './create.js';

const rename = async () => {
  const prevPath = 'src/fs/files/wrongFilename.txt';
  const nextPath = 'src/fs/files/properFilename.md';
  try {
    if (!isExist(prevPath) || isExist(nextPath))
      throw new Error('FS operation failed');
    fs.promises.rename(prevPath, nextPath);
  } catch (e) {
    console.error(e);
  }
};

//rename();
//запуск - node ./src/fs/rename.js
