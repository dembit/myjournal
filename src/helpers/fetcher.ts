export const PromiseDelay = <T>(data: T, delay = 300) =>
  new Promise<T>(resolve => setTimeout(() => resolve(data), delay))
