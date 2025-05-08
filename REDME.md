
## What are some differences between interfaces and types in TypeScript? ##

  ### Difference between interface and type in TypeScript ###
#### => Both are we used in typescript for type decleration of primitive and Non-primitive Data-type;

### we can used type keyword for primitive or Non-primitive, tuple, union, class decleration.
### we can only used interface keyword for object, class and Non-primitive type decleration.

### we used intersection for extending type declered variable. 
### Example:

##### type Car = {
#####  name: string;
##### };

##### type Car2 = Car & {
#####  model: string;
##### };

### we can used extend keyword for extending interface declered object or class. 
### Example

##### interface Book {
#####  name: string;
##### }

##### interface Book2 extends Book {
#####  writer: string;
##### }

### we can not used interface keyword for declering primitive type data;

## Explain the difference between any, unknown, and never types in TypeScript.

### Any:: When declare a vriable type any; then we can store string,number primitive or Non-primitive
### it does not give error; when we will take data from user then we can not know what type of data
### our user will provide. In this case we can declare a variable type any; We have to try avoid any
### type data decleration in our project.then this code will be more safe;

### Unknown:: unknown type is similar like any type. but it is more restrictive from any type;
### when we will bring data from api and we don't know what type data will be return. that case
### we can use unknown type variable or funtion decleration; we can check data type which return
### from api by type of keyword;

### Never:: Never type in typescript is when we will be sure a function will not return anything. Only 
### throw error. then we will set this function return will be Never type;