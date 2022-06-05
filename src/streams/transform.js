import { Transform } from 'stream';
import { stdin, stdout } from 'process';

export const transform = async () => {
  const transformed = new Transform({
    transform(chunk, encoding, callback) {
      this.push(chunk.toString().split('').reverse().join('') + '\n');
      callback();
    },
  });
  stdin.pipe(transformed).pipe(stdout);
};
transform();
//node ./src/streams/transform.js
