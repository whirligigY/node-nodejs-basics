import process from 'process';

export const parseArgs = () => {
  const args = process.argv;
  const newArr = [];
  args.forEach((el, index) => {
    if (el.startsWith('--')) {
      newArr.push(`${el.slice(2)} is ${args[index + 1]}`);
    }
  });
  console.log(newArr.join(', '));
};

//parseArgs();
//node ./src/cli/args.js --propName value --prop2Name value2
