import fs from 'fs';
import zlib from 'zlib';

export const compress = async () => {
  const redableStream = fs.createReadStream(
    './src/zip/files/fileToCompress.txt',
    'utf-8',
  );
  const wrirablestream = fs.createWriteStream('./src/zip/files/archive.gz');
  const gzip = zlib.createGzip();

  redableStream.pipe(gzip).pipe(wrirablestream);
};

//compress();
//start node ./src/zip/compress.js
