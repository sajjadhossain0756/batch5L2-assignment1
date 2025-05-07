"use strict";
function formatString(input, toUpper) {
    if (toUpper || typeof toUpper === 'undefined') {
        return input.toUpperCase();
    }
    else {
        return input.toLocaleLowerCase();
    }
}
const res = formatString('Hello');
const res1 = formatString('Hello', true);
const res2 = formatString('Hello', false);
function filterByRating(items) {
    const result = items.filter(item => item.rating >= 4);
    return result;
}
const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 3.0 }
];
const res4 = filterByRating(books);
// console.log(res4);
// Output: [ { title: "Book A", rating: 4.5 }, { title: "Book C", rating: 5.0 } ]
function concatenateArrays(...arrays) {
    const [a, ...z] = [...arrays];
    const concatArray = a.concat(...z);
    return concatArray;
}
const res5 = concatenateArrays(["a", "b"], ["c"]);
const res6 = concatenateArrays([1, 2], [3, 4], [5]);
// console.log(res5, res6);
class Vehicle {
    constructor(make, year) {
        this.make = make;
        this.year = year;
    }
    getInfo() {
        return `Make: ${this.make}, Year: ${this.year}`;
    }
}
class Car extends Vehicle {
    constructor(make, year, model) {
        super(make, year);
        this.model = model;
    }
    getModel() {
        return `Model: ${this.model}`;
    }
}
const myCar = new Car("Toyota", 2020, "Corolla");
console.log(myCar.getInfo());
console.log(myCar.getModel());
