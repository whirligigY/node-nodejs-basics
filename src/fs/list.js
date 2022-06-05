import fs from 'fs';
import { isExist } from './create.js';

const list = async () => {
  try {
    const dirPath = 'src/fs/files';
    if (!isExist(dirPath)) throw new Error('FS operation failed');
    const files = await fs.promises.readdir(dirPath);
    try {
      files.forEach((file) => {
        console.log(file);
      });
    } catch (e) {
      throw new Error('FS operation failed');
    }
  } catch (e) {
    console.error(e);
  }
};

//list();
//запуск - node ./src/fs/list.js
