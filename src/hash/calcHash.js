import crypto from 'crypto';
import fs from 'fs';

export const calculateHash = async () => {
  let info = '';
  fs.readFile(
    './src/hash/files/fileToCalculateHashFor.txt',
    'utf-8',
    (err, data) => {
      if (err) throw new Error('FS operation failed');
      info = data;
    },
  );
  const key = 'secret';
  const sha256 = crypto.createHmac('sha256', key);
  const hash = sha256.update(info).digest('hex');
  console.log(hash);
};

//calculateHash();
//запуск - node ./src/hash/calcHash.js
