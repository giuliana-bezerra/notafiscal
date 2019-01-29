export const handleStatus = res =>
    res.ok ? res.json() : Promise.reject(res.textContent);