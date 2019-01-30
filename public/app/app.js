import { log } from './utils/logger.js';
import { notasService as service} from './service/nota.js';
import { takeUntil, debounceTime, partialize, pipe } from './utils/operators.js';
import { timeoutPromise, retry } from './handler/promise-handler.js';
import { EventEmitter } from './utils/event-emitter.js';
import { Maybe } from './utils/maybe.js';

const operations = pipe (
    partialize(takeUntil, 3),
    partialize(debounceTime, 500)
);

const action = operations(() =>
    retry(3, 3000, () => timeoutPromise(200, service.sumItems(2143)))
    // Padrão Publisher/Subscriber - Publisher
    .then(total => EventEmitter.emit('itensTotalizados', total))
    .catch(log)
);

document.querySelector('#myButton').onclick = action;