import { log } from './utils/logger.js';
import { notasService as service} from './service/nota.js';
import { takeUntil, debounceTime, partialize, pipe } from './utils/operators.js';

const operations = pipe (
    partialize(takeUntil, 3),
    partialize(debounceTime, 500)
);

const action = operations(() =>
    service
    .sumItems(2143)
    .then(log)
    .catch(log)
);

document.querySelector('#myButton').onclick = action;