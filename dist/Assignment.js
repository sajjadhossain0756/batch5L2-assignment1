"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
// console.log(myCar.getInfo());
// console.log(myCar.getModel())
function processValue(value) {
    if (typeof value === "string") {
        return value.length;
    }
    else {
        return value * 2;
    }
}
const res7 = processValue('hello');
const res8 = processValue(10);
function getMostExpensiveProduct(products) {
    const sortedProducts = products.sort((a, b) => b.price - a.price);
    const expensiveProduct = sortedProducts[0];
    if (expensiveProduct) {
        return expensiveProduct;
    }
    return null;
}
const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
];
const res10 = getMostExpensiveProduct(products);
// console.log(res10)
// Output: { name: "Bag", price: 50 }
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday";
})(Day || (Day = {}));
function getDayType(day) {
    if (day === Day.Monday || day === Day.Tuesday || day === Day.Wednesday ||
        day === Day.Thursday || day === Day.Friday) {
        return `Weekday`;
    }
    return `Weekend`;
}
const res11 = getDayType(Day.Monday);
// console.log(res11)
function squareAsync(n) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('calling');
        if (n >= 0) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(n * n);
                }, 1000);
            });
        }
        else {
            return new Promise((reject) => {
                setTimeout(() => {
                    throw new Error(`Negative Number Not Allowed`);
                }, 1000);
            });
        }
    });
}
squareAsync(8).then(console.log); // Output after 1s: 16
// squareAsync(-3).catch(console.error);    // Output: Error: Negative number not allowed
