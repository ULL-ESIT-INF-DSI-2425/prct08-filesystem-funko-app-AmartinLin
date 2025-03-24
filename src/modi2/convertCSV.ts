import {readFile} from 'fs';
import { writeFile } from 'fs';

if (process.argv.length < 4) {
  console.log("Numero de parametros insifucientes");
}

function readTheFile(archivoALeer: string): []{
  let element: [] = [];
  readFile(archivoALeer, (err, data) => {
    if (err) {
      console.log('Hay algún problema con el archivo a leer, comprueba que existe');
    } else {
      element = JSON.parse(data.toString());
    }
  });
  return element;
} 

function writeTheFile(archivoAEscribir: string, elementos: []): void{
  elementos.forEach((elemento) => {
    writeFile(archivoAEscribir, elemento, (err) => {
      if (err) {
        console.log('Something went wrong when writing your file');
      } else {
        console.log('Escribiendo...');
      }
    });
  });
} 

let b: [] = readTheFile(process.argv[2]);
writeTheFile(process.argv[3], b);