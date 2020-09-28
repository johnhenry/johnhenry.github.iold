# Methods for generating random numbers

These are methods of generating a sample, *x*, for a given random variable, *X*.

**No guarantees are made as to the distribution of the random variable.**

## Float

### X = [ 0, 1 )

```javascript
const x = Math.random(); // R
```

### X = [ 1, Infinity )

```javascript
const x = -1 / ( Math.random() - 1 ); // -1 / (R - 1)
```

### X = ( 1, Infinity ]

```javascript
const x = Math.random() ** ( -1 / Math.random() ); // R^(-1/R)
```

### X = [ 0, N ) 

```javascript
const x = Math.random() * N; // R*N
```

## Integer

### X = [ 1, N ]

```javascript
const x = Math.ceil( Math.random() * N ); // ⌈R*N⌉
```

### X = [ 0, N ]

```javascript
const x = Math.floor( Math.random() * N + 1 ); // ⌊R*N+1⌋
```

### X = [ M, N ]

```javascript
const x = Math.floor( Math.random() * ( N - M + 1 ) + N ); // ⌊R*(N-M+1)+N⌋
```

## Boolean

### X = { true, false }

```javascript
const x = Math.random() < 0.5; // R<0.5
```

## Multiset (Array)

### X = []:Array<any>

```javascript
const x = X[ Math.floor( Math.random() * X.length ) ]; // X[⌊R*|X|⌋]
```
