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
console.log(res, res1, res2);
