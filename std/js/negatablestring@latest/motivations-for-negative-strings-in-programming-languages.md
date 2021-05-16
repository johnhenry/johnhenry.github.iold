# Motivation for Negative Strings in programming languages

Say we want to remove the first part of a string.
Specifically, let's take the "glad" out of "gladiator".

The standard way is to call the "slice" method of the longer string ("gladiator")
with the length of the other string as an argument.

```javascript
const gladiator = "gladiator";
const glad = "glad";
const iator = gladiator.slice(glad.length);
console.log({iator});
```

Similarly, we can use the slice method to remove the last part of a string.

```javascript
const gladiator = "gladiator";
const iator = "iator";
const glad = gladiator.slice(0, -iator.length);
console.log({glad});
```

Now, if we want to do the opposite, can do this:

```javascript
const glad = "glad";
const iator = "iator";
const gladiator = glad + iator;
console.log({gladiator});
```

Main Question: Why can't we do this?

```javascript
const gladiator = "gladiator";
const glad = "gladiator" - "iator";// or "gladiator" + -"iator"
const iator = - "glad" + iator;
console.log({glad, iator});
```

+ for Numbers is not the same as + for strings in javascript.

 - + for Numbers represents additon
 - + for strings represeents concatination

The + operatore is "overloaded" --
the associated (hidden) addition function behaves differently
given the context.

Some languages like PHP make this explicit by
using different operators to represent additon and concationation.

String Concatenation

```php
$glad = "glad";
$iator = "iator";
$gladiator = $glad . $iator;
echo $gladiator;
```

Numeric Addition

```php
$one = 1;
$two = 2;
$three = 1 + 2;
echo $three;
```

We can't do it because the + operator represents concatenation, not addition.

But what if we could...

# Groups

Before discuss implementing such a thing, let's think about math for a bit.

Understanding how "negative numbers" work might give us insight into "negative strings" *should* work.

## Group Definition

Under addition, numbers form what's know a "group".

For any group *G*, with operation *⋅*, the following is true:

```javascript
2 + 4 === 6;
```

### Closure
For all *a*, *b* in *G*, the result of the operation, *a ⋅ b*, is also in *G*.

```javascript
(1 + 2) + 3 === 1 + (2 + 3) === 6
```

### Associativity
For all *a*, *b* in *G*, *(a ⋅ b) ⋅ c* = *a ⋅ (b ⋅ c)*.

### Identity element
There exists an element *e* in *G* such that, for every element *a* in *G*, the equation *e ⋅ a* = *a ⋅ e* = *a* holds. Such an element is unique (see below), and thus one speaks of the identity element.

```javascript
8 + 0 === 8; // e = 0
```

### Inverse element
For each *a* in *G*, there exists an element *b* in *G*, commonly denoted *a<sup>−1</sup>* (or *−a*, if the operation is denoted "+"), such that *a ⋅ b* = *b ⋅ a* = *e*, where e is the identity element.

```javascript
16 + (-16) === 0; // b is the negative
```

Under concatenation, strings form what's know a "monoid" --
a group without the notion of an "inverse element".

Consider the following a variable *a*.

If *a* is a number, the inverse of a is *-a* := -1**a*.

-  How would we define *-a* if *a* is a string?
    - Could we define "-1 for strings" and multiply it by a?
    - Could we redefine * to allow for multiplying numbers by strings?
    - Must we use multiplications at all? Could  *-a* := *whatever we want*?
 - How would we represent this in code?
   - Add features to existing string object?
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
