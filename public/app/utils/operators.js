export const partialize = (fn, ...args) => 
    fn.bind(null, ...args);

export const compose = (...fns) => value => 
    fns.reduceRight((previuosValue, fn) => fn(previuosValue), value);

export const pipe = (...fns) => value => 
    fns.reduce((previuosValue, fn) => fn(previuosValue), value);

export const takeUntil = (times, fn) =>
    () => times-- > 0 && fn();

// Para agendar a execução de uma função
export const debounceTime = (miliseconds, fn) => {
    let timer = 0;
    return () => {
        clearTimeout(timer);
        timer = setTimeout(fn, miliseconds);
    }
}