import { isExist } from './create.js';
import fs from 'fs';

async function createDir(dirPath) {
  const dir_copy = await fs.promises.mkdir(
    dirPath,
    { recursive: true },
    (err) => {
      if (err) throw err;
    },
  );
}

const copy = async () => {
  try {
    const dirPath = 'src/fs/files';
    const dirCopyPath = 'src/fs/files_copy';
    const isDirExist = isExist(dirPath);
    const isCopyDirExist = isExist(dirCopyPath);
    if (!isDirExist || isCopyDirExist) throw new Error('FS operation failed');
    await createDir(dirCopyPath);
    try {
      const files = await fs.promises.readdir(dirPath);
      files.forEach((file) => {
        try {
          fs.promises.copyFile(`${dirPath}/${file}`, `${dirCopyPath}/${file}`);
        } catch (e) {
          throw new Error('File reading error');
        }
      });
    } catch (e) {
      throw new Error('File copying error');
    }
  } catch (e) {
    console.error(e);
  }
};

//copy();
//запуск - node ./src/fs/copy.js
