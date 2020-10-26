## Group Definition
For any group *G*, with operation *⋅*, the following is true:

### Closure
For all *a*, *b* in *G*, the result of the operation, *a ⋅ b*, is also in *G*.

### Associativity
For all *a*, *b* in *G*, *(a ⋅ b) ⋅ c* = *a ⋅ (b ⋅ c)*.

### Identity element
There exists an element *e* in *G* such that, for every element *a* in *G*, the equation *e ⋅ a* = *a ⋅ e* = *a* holds. Such an element is unique (see below), and thus one speaks of the identity element.

### Inverse element
For each *a* in *G*, there exists an element *b* in *G*, commonly denoted *a<sup>−1</sup>* (or *−a*, if the operation is denoted "+"), such that *a ⋅ b* = *b ⋅ a* = *e*, where e is the identity element.

## Number Groups

Real Numbers form groups with addition (+) and multiplication (*) as operations.

The following are examples and not proofs:

### Closure

```javascript
2 + 4 === 6;
2 * 4 === 8;
```

### Associativity

```javascript
(1 + 2) + 3 === 1 + (2 + 3) === 6
(1 * 2) * 3 === 1 * (2 * 3) === 6;
```
### Identity element

```javascript
8 + 0 === 8; // e = 0
8 * 1 === 8; // e = 1
```

### Inverse element

```javascript
16 + (-16) === 0; // b is the negative
16 * (1/16) === 1; // b is the reciprocal -- technically this is only a group if we exclued zero
```

## Number String Groups

A "moniod" is like a group, but do not require the **Inverse element** part.
Strings form a "monoid" with the concatenation (+) operation. 

### Closure

```javascript
"hello" + " there" === "hello there";
```

### Associativity

```javascript
("what's" + " up" ) + " doc?" === "whats's" + (" up" + " doc?") ===  "what's up doc?";
```
### Identity element

```javascript
"what else " + "" === "what else"; // ""
```

### Inverse element
Because of the lack of the notion of an "inverted" or "negative" string, strings do not form a "group".
However; we can invent this notion ourselves!

There are many ways to construct a "negative string".
We'll take a route that looks at string concatenation as analogous to numeric addition.

 - What is a "negative number" and how might we apply this to creating a negative string?
 - How would we represent this in code?
   - Add additional features to existing string object?
     - How does the current string object work?
     - What would need to change?
   - Create entirely new object?
     - (How) do we maintain compatibility with existing strings?
 - How would we display this to a user in a way that makes sense?
   - What alternative representations exist?
     - Styles? Colors? Characters?
   - What problems might this cause? 
 - What are some other dissimilar features of number and strings that they might be able to share with eachother?
   - Can we multiply strings by eachother? 
     - Can we multiply strings by numbers (verctor spaces)? (Ruby does this sort of)

  (v + w)c === 0 and c !== 0
  v + w === 0/c
  v + w === 0
  therefore v = -1*w and w = -1*v

  given a vector v, we can define a vector -1*v as it's inverse as in addition with numbers....

  "a" + -"a" => ""
  "b" + -"b" => ""
  "a" + "b" => "ab"
  -"a" + -"b" => (-"a" + -"b")
  "ab" + -"ab" => ""

  "ab" is composed of the negated components "a" and "b" in reverse order, to preserve associativity. 

  ("a" + "b" ) + (-"b" + -"a")
  "a" + ("b"  + -"b") + -"a" 
  "a" + "" + -"a"
  ""