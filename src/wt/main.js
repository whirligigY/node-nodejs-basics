import { Worker } from 'worker_threads';
import { cpus } from 'os';

export const performCalculations = async () => {
  const numOfCpus = cpus().length;
  const resultArr = [];

  [...Array(numOfCpus)].forEach((_, index) => {
    const res = new Promise((resolve, reject) => {
      const worker = new Worker('./src/wt/worker.js', {
        workerData: index + 10,
      });
      worker.on('message', (msg) => resolve(msg));
      worker.on('error', () => reject(new Error('an error')));
    });
    resultArr.push(res);
  });
  Promise.allSettled(resultArr).then((values) =>
    console.log(
      values.map((val) => {
        return {
          status: val.status === 'fulfilled' ? 'resolved' : 'error',
          data: val?.value ? val.value : 'null',
        };
        // val.status = val.status === 'fulfilled' ? 'resolved' : 'error';
        // val.value = val.value && typeof val.value  === 'Number' ? 'resolved' : 'null';
        // return val;
      }),
    ),
  );
};

//performCalculations();

//node ./src/wt/main.js
