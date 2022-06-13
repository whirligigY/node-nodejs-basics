import fs from 'fs';
import zlib from 'zlib';

export const decompress = async () => {
  const redableStream = fs.createReadStream('./src/zip/files/archive.gz');
  //   const wrirablestream = fs.createWriteStream(
  //     './src/zip/files/fileToCompress.txt',
  //   );
  const gUnzip = zlib.createGunzip();

  redableStream.pipe(gUnzip);

  const data = await new Promise((resolve) => {
    const chanksArr = [];
    gUnzip.on('data', (chank) => chanksArr.push(chank));
    gUnzip.on('finish', () => resolve(chanksArr.join(' ')));
  });

  fs.writeFile('./src/zip/files/fileToCompress.txt', data, (err, data) => {
    if (err) throw err;
  });
};

//decompress();
//запуск node ./src/zip/decompress.js
