import { Console, time } from "console";
import fs from 'fs';

const file = fs.createWriteStream('application.log');

const log = new Console({
    stdout: file,
    stderr: file
});

log.info('this is info')
log.error('upss error!')
log.table({
    firstName: 'Bain',
    lastName: 'Nothing'
});