export default function lazyGetResult<T>(fn: (...args: any[]) => T): () => T