/**
 * Creates a lazy evaluation function that executes the given function and caches its result 
 * only on the first call.
 * @param fn The function to be lazily loaded and whose result will be cached.
 * @returns A function that, when invoked for the first time, executes `fn` and caches the result; 
 * subsequent calls return the result from the first execution.
 */
export default function lazyGetResult<T>(fn: (...args: any[]) => T): () => T {
  let result: T
  let called = false

  return () => {
    if (!called) {
      called = true
      try {
        result = fn()
      } catch (error) {
        called = false
        throw error
      }
    }
    return result
  }
}