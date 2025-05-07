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
console.log(res5, res6);
