import fs from 'fs';
import { stdout, stdin } from 'process';

export const read = async () => {
  const stream = fs.createReadStream(
    './src/streams/files/fileToRead.txt',
    'utf-8',
  );
  stream.pipe(stdout);
  stream.on('error', (err) => {
    console.log(err);
  });
};

//read();
//запуск - node ./src/streams/read.js
