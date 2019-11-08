"use strict";
console.log(' First Sample With TypeScript');
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.sum = function (x, y) {
        console.log('Número é: ', x + y);
        return x + y;
    };
    return MyClass;
}());
MyClass.sum(5, 5);
