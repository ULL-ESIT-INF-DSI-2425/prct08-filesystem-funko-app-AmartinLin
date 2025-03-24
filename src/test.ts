import {writeFile} from 'fs';

writeFile('helloworld.txt', 'Hello World!', () => {
  console.log('File helloworld.txt has just been created');
});