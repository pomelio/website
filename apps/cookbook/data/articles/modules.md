---
subject: modules
---

# modules
> module are for the re-usable program. 
- module is a `map` value
- module includes variables and functions. These variables and function can be referenced by the `import` statement


Modules are loaded by the platform when a variable or function of module is referenced. This makes sure the
other pages or modules can use the referenced module.


There are 2 kinds of modules:
- built-in modules,  which is developed by the platform. The built-in modules are imported by a prefix starts with `std` or `ext`
- app modules, which are wallaby files suffix with `.wby` developed by the user and saved under the `/bin/modules` folder. The app modules are imported by a prefix starts with `modules`

The module `std.global` doesn't need to be imported and the functions and variables in this module can be referenced directly.

## app modules
> The extension of a user defined app module file is `.wby`. Functions and variables can be defined in the module, and all these functions and variables can be referenced by other app modules and pages.

- the app module files must be saved under the folder `/bin/modules`

the following is an example module saved under `/bin/modules/abc.wby` 

```
//abc.wby

let i = 1;
let b = 'abc';

fn plus1(val) {
   return value + 1;
}

```


The following is a page saved under `/bin/hello.wby`

```
// hello.wby

import modules.abc as a;

assert(a.i == 1);
assert(a.b == 'abc');

let b = a.plus1(2);
assert(b == 3);
```