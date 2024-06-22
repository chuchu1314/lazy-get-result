# Lazy Evaluation Function

## Overview

This document describes the functionality and usage of the `lazyGetResult` utility function. The purpose of this function is to facilitate lazy loading and caching of results from an expensive or time-consuming computation. It ensures that the provided function (`fn`) is executed only once, upon the first call, and subsequent calls simply return the cached result.

## Usage

### Installation

```bash
npm install @cmchu/lazy-get-result --save
```

### Example

```javascript
import lazyGetResult from '@cmchu/lazy-get-result';

// An expensive computation function
function complexComputation() {
  console.log('Computing complex result...');
  // Simulated long-running process
  const result = performExpensiveCalculation();
  return result;
}

// Wrapping with lazyGetResult
const lazyComplexComputation = lazyGetResult(complexComputation);

// First call will execute the function and log "Computing complex result..."
console.log(lazyComplexComputation());

// Subsequent calls will not recompute, just return the cached result
console.log(lazyComplexComputation());
```

## API

### `lazyGetResult(fn: (...args: any[]) => T): () => T`

#### Parameters

- `fn`: A function of type `(...args: any[]) => T`. This is the function you want to lazily evaluate and cache its result.

#### Returns

A new function of type `() => T`. When invoked for the first time, this function will execute `fn`, cache its result, and return that result. All further invocations of this returned function will yield the cached result without re-executing `fn`.

#### Note

- Error handling is integrated within `lazyGetResult`. If `fn` throws an error during its first execution, the error is caught, and the `called` flag is reset to `false`, ensuring that the function can be retried.

## Conclusion

The `lazyGetResult` utility promotes efficient resource utilization by deferring and caching the outcome of potentially costly operations. It is particularly beneficial in scenarios where an operation's output is needed but can be computationally intensive or involve external service calls, making it ideal for optimizing performance in web applications, data processing pipelines, or any environment where reducing redundant computations is crucial.