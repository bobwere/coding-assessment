import * as fs from 'fs';
import { Job } from '../types';

const readline = require('readline');

/**
 * read input data from file
 * @param filePath path to input file
 * @returns Array of Jobs that will be processed
 */
export async function processInputFile(filePath:string): Promise<Job[]> {
  const fileStream = fs.createReadStream(filePath);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let index = 0;
  let tempInput = [];
  let jobs:Job[] = []

  for await (const data of rl) {
    // check if its not the first line of the file
    if(index !== 1) {
    // record job metadata 
    tempInput.push(data);

    // determine if we have enough inforamtion to create a Job i.e starttime, endtime and profit
    if(tempInput.length === 3) {
        // add job to jobs list
        jobs.push(
            {
                start_time: Number(tempInput[0]),
                end_time: Number(tempInput[1]),
                profit: Number(tempInput[2])
            }
        );

        // reset tempInput
        tempInput.splice(0, tempInput.length);
    }
   }

   index++;
  }

  return jobs;
}



