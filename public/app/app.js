import { handleStatus } from './handler/promise-handler.js';

document.querySelector('#myButton').onclick = () =>
    fetch('http://localhost:3000/notas')
    .then(handleStatus)
    .then(console.log)
    .catch(console.log);