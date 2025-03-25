import net from 'net';
import {readFile, watchFile} from 'fs';

if (process.argv.length !== 3) {
  console.log('Please, provide a filename.');
} else {
  const fileName = process.argv[2];

  net.createServer((connection) => {
    console.log('A client has connected.');

    connection.write(JSON.stringify({'type': 'watch', 'file': fileName}) +
      '\n');

    // watchFile(fileName, (curr, prev) => {
    //   connection.write(JSON.stringify({
    //     'type': 'change', 'prevSize': prev.size, 'currSize': curr.size}) +
    //      '\n');
    // });

    readFile(fileName, (err, data) => {
      if (err) {
        console.log("error");
      } else {
        connection.write(
          JSON.stringify({
            type: "read",
            content: data.toString(),
          })
        )
      }
    })

    connection.on('close', () => {
      console.log('A client has disconnected.');
    });
  }).listen(60300, () => {
    console.log('Waiting for clients to connect.');
  });
}