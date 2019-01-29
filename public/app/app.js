import { handleStatus } from './handler/promise-handler.js';
import { log } from './utils/logger.js';
import { notasService as service} from './service/nota.js';

document.querySelector('#myButton').onclick = () =>
    service
    .sumItems(2143)
    .then(log)
    .catch(log);