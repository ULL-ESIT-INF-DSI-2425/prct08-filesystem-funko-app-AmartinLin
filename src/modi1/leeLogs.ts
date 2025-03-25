// import {readFile} from 'fs';

// if (process.argv.length < 4) {
//   console.log("Numero de parametros insifucientes");
// }

// /**
//  * Función que lee un fichero pasado por argumento 
//  * y cuenta la cantidad de palabras que contiene 
//  */
// export function callReadFile(): void {
//   const ruta_archivo: string = process.argv[2];
//   const palabra: string = process.argv[3];
  
//   readFile(ruta_archivo, (err, data) => {
//     if (err) {
//       console.log('Hay algún problema con el archivo a leer, comprueba que existe');
//     } else {
//       let a: string[] = data.toString().split(" ");
//       let contador: number = 0;
//       a.forEach((palabraIt) => {
//         if (palabraIt.includes(palabra)) {
//           contador++;
//         }
//       });
//       console.log(`Numero de ${palabra} en el fichero ${ruta_archivo}: ${contador}`);
//     }
//   });
// } 

// callReadFile();