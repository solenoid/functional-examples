# Functional Examples
The intention here is to show some simple real world code examples with differing
levels of functional programming approaches taken.

They are roughly in a progression where you will likely find example 4 or 5 most useful.
The earlier examples are things you might do until you understand later approaches.

Chaining is an important area of distinction between the `underscore` and
`lodash` approaches, specifically related to lazily evaluation. In this example
the difference is slight, but as the size of data grows both chained lodash and
transducers will only work on items that will be present in the final results.

`lodash` and `transducers` take a different approach to laziness in that it
is only present if you chain in lodash, but is inherent in the transducer
approach.

The transducer approach can be applied to data structures other than a literal
array and lodash isn't as broadly applicable to streams, events or observables.

## Getting started
You'll need both `node` and `npm` to run these examples.

Once you have them run `npm install` to get all the libraries used in the examples.

## The examples
Are split into different files with the main theme of each being:

1. loops
2. One big map
3. underscore
4. lodash
5. transducers

```
node example1 # run loops
node example2 # run one big map
node example3 # run underscore
node example4 # run lodash
node example5 # run transducers
```

## Common patterns
The `(field || 0)` pattern allows safe summing across missing or null values.

The `fieldA ? (fieldB / fieldA) : null` pattern prevents divide by zero
(or falsey) from happening.
