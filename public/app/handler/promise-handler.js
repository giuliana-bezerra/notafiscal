export const handleStatus = res =>
    res.ok ? res.json() : Promise.reject(res.textContent);

export const timeoutPromise = (miliseconds, promise) => {
    const timeout = new Promise((resolve, reject) =>
        setTimeout(() => reject(`Timeout! Limite de tempo ultrapassou ${miliseconds}`), miliseconds)
    );
    return Promise.race([promise, timeout]);
};

export const delay = miliseconds => data =>
    new Promise((resolve, reject) => 
        setTimeout(() => resolve(data), miliseconds));

export const retry = (retries, miliseconds, fn) =>
    fn().catch(err => {
        console.log(retries);
        return delay(miliseconds)().then(
            () => retries > 1 
            ? retry(--retries, miliseconds, fn) 
            : Promise.reject(err)
        );
    });