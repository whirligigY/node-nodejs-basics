import fs from 'fs';

export const isExist = (path) => {
  try {
    return fs.existsSync(path);
  } catch (err) {
    throw err;
  }
};

const create = async () => {
  try {
    const filePath = 'src/fs/files/fresh.txt';
    const isFileExist = isExist(filePath);
    if (isFileExist) throw new Error('FS operation failed');

    fs.writeFile(filePath, 'I am fresh and young', 'utf8', (err) => {
      if (err) throw new Error('Error adding data to file');
    });
  } catch (e) {
    console.error(e);
  }
};

//create();
//запуск - node ./src/fs/create.js
