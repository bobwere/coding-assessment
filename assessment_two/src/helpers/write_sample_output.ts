import * as util from 'util';
import * as stream from 'stream';
import * as fs from 'fs';
import {once} from 'events';

const finished = util.promisify(stream.finished);

export async function processOutputFile(filePath:string, output:any[]) {
    const writable = fs.createWriteStream(filePath, {encoding: 'utf8'});
    for await (const chunk of output) {
      if (!writable.write(chunk)) { 
        await once(writable, 'drain');
      }
    }
    writable.end(); 

    await finished(writable);      
}
