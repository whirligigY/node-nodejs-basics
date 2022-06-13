import process from 'process';

export const parseEnv = () => {
  const objectEnv = process.env;
  const newArr = [];

  Object.keys(objectEnv).forEach((el) => {
    if (el.startsWith('RSS_')) {
      newArr.push(`${el}=${objectEnv[el]}`);
    }
  });
  console.log(newArr.join(', '));
};

//parseEnv();
//запуск - RSS_ID=56045 RSS_KEY=foobar NODE_ENV=development node ./src/cli/env.js
