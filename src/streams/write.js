import fs from 'fs';
import { stdin, stdout } from 'process';

export const write = async () => {
  const streamWritable = fs.createWriteStream(
    './src/streams/files/fileToWrite.txt',
    'utf-8',
  );
  stdin.pipe(streamWritable);
};

//write();

//запуск - node ./src/streams/write.js
