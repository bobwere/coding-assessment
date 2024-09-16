import * as fs from 'fs';
import { Goodie, InputResult } from '../types';

const readline = require('readline');

/**
 * read input data from file
 * @param filePath path to input file
 * @returns [InputResult] that will be further processed
 */
export async function processInputFile(filePath:string): Promise<InputResult> {
  const fileStream = fs.createReadStream(filePath);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let index = 1;
  let numberOfEmployees = 0;
  let goodies:Goodie[] = []

  for await (const line of rl) {
    const [name, data] = line.split(':');

    if(index === 1) {
      numberOfEmployees = Number(data);
    }

    if(index !== 1) {
      // add good to array
      goodies.push(
        {
         name: name,
         price: Number(data.trim())
        }
    );
   }

   index++;
  }

  return {
    goodies,
    numberOfEmployees
  };
}



