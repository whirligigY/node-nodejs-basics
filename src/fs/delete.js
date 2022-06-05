import fs from 'fs';

const remove = async () => {
  const filePath = 'src/fs/files/fileToRemove.txt';
  fs.unlink(filePath, (err) => {
    if (err) throw new Error('FS operation failed');
  });
};

//remove();
//запуск - node ./src/fs/delete.js
