export const partialize = (fn, ...args) => 
    fn.bind(null, ...args);

export const compose = (...fns) => value => 
    fns.reduceRight((previuosValue, fn) => fn(previuosValue), value);

export const pipe = (...fns) => value => 
    fns.reduce((previuosValue, fn) => fn(previuosValue), value);