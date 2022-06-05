import fs from 'fs';

export const read = async (filePath) => {
  try {
    const data = await fs.promises.readFile(filePath, 'utf-8');
    console.log(data);
  } catch (e) {
    throw new Error('FS operation failed');
  }
};

const filePath = 'src/fs/files/fileToRead.txt';
//read(filePath);
//запуск - node ./src/fs/read.js
