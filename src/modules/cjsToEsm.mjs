import path from 'path';
import fs from 'fs';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import { fileURLToPath } from 'url';
import './files/c.js';

const random = Math.random();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.join(__filename);

let unknownObject;

if (random > 0.5) {
  unknownObject = JSON.parse(fs.readFileSync('./src/modules/files/a.json'));
} else {
  unknownObject = JSON.parse(fs.readFileSync('./src/modules/files/b.json'));
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServerHttp((_, res) => {
  res.end('Request accepted');
});

export { unknownObject, createMyServer };

console.log(unknownObject);

//node ./src/modules/cjsToEsm.mjs
