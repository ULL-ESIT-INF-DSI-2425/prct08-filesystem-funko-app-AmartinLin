export type complejo = [number, number];

/**
 * Hace una suma de complejos
 * @param complejo1 - número complejo 1
 * @param complejo2 - número complejo 2
 * @returns un número de tipo complejo resultado de la suma
 */
export function add(complejo1 : complejo, complejo2 : complejo) : complejo {
  let resultado : complejo = [complejo1[0] + complejo2[0], complejo1[1] + complejo2[1]];
  return resultado;
}

/**
 * Hace una resta de complejos
 * @param complejo1 - número complejo 1
 * @param complejo2 - número complejo 2
 * @returns un número de tipo complejo resultado de la resta
 */
export function sub(complejo1 : complejo, complejo2 : complejo) : complejo  {
  return [complejo1[0] - complejo2[0], complejo1[1] - complejo2[1]];
}

/**
 * Hace una multiplicación de complejos
 * @param complejo1 - número complejo 1
 * @param complejo2 - número complejo 2
 * @returns un número de tipo complejo resultado de la multiplicación
 */
export function mult(complejo1 : complejo, complejo2 : complejo) : complejo {
  // (a+bi) * (c+di)
  let compleja : number = (complejo1[0] * complejo2[1]) + (complejo1[1] * complejo2[0]); // adi + bci
  let real : number = (complejo1[0] * complejo2[0]); // ac
  let parte_negativa : number = (complejo1[1] * complejo2[1]) * -1 // bdi^2 === -bd
  return [(real + parte_negativa), compleja];
}

/**
 * Hace una división de complejos
 * @param complejo1 - número complejo 1
 * @param complejo2 - número complejo 2
 * @returns un número de tipo complejo resultado de la división
 */
export function div(complejo1 : complejo, complejo2 : complejo) : complejo | undefined {
  let numerador = mult(complejo1, [complejo2[0], -complejo2[1]]);
  let denominador = mult(complejo2, [complejo2[0], -complejo2[1]]); // debería ser solo parte real
  if (denominador[1] !== 0) return undefined;
  return [numerador[0] / denominador[0], numerador[1] / denominador[0]];
}

/**
 * Hace el producto escalar de un número complejo
 * @param complejo - Numero complejo
 * @param escalar - Entero por el que se hace el producto escalar
 * @returns Número complejo resultante
 */
export function prod(complejo : complejo, escalar : number) : complejo {
  return [complejo[0] * escalar, complejo[1] * escalar];
}

/**
 * Hace el producto escalar de un número complejo
 * @param complejo - Número complejo
 * @returns El conjugado del numero complejo pasado como parámetro
 */
export function conj(complejo : complejo) : complejo {
  return [complejo[0], -complejo[1]];
}

/**
 * Hace el valor absoluto del número complejo
 * @param complejo - Número complejo
 * @returns El valor absoluto del número complejo
 */
export function abs(complejo : complejo) : number {
  return Math.sqrt((complejo[0] * complejo[0]) + (complejo[1] * complejo[1]));
}