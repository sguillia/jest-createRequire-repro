# Jest repro

Minimum reproducible of a possible Jest issue

## The problem

The `require.main` of modules that are required from within a test file is undefined, only if:

- those modules were required with a require created with `createRequire`
- `createRequire` was given another module than the current one (observe how `parent2.js` works as expected)
- the test file is run with Jest, not Node

Tested with Jest 26.4.2, Node v12.4.0

## Why it's an issue

- I want to use `require.main.filename` to get the name of the requiring file, as it would work in a node context.

## Expected behavior

```
$ node parent2.js
<path>

$ jest parent2.js
<path>
```

```
$ node parent3.js
<path>

$ jest parent3.js
<path>
```

## Actual behavior

```
$ node parent2.js
<path>

$ jest parent2.js
<path>
```

```
$ node parent3.js
<path>

$ jest parent3.js
null
```
