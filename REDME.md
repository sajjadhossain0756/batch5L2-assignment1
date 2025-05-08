
## What are some differences between interfaces and types in TypeScript? ##

  ### Difference between interface and type in TypeScript ###
#### => Both are we used in typescript for type decleration of primitive and Non-primitive Data-type;

### we can used type keyword for primitive or Non-primitive, tuple, union, class decleration.
### we can only used interface keyword for object, class and Non-primitive type decleration.

### we used intersection for extending type declered variable. 
### Example:

type Car = {
  name: string;
};

type Car2 = Car & {
  model: string;
};

### we can used extend keyword for extending interface declered object or class. 
### Example

interface Book {
  name: string;
}

interface Book2 extends Book {
  writer: string;
}

### we can not used interface keyword for declering primitive type data;
