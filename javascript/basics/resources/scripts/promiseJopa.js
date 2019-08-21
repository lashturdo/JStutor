/**
 * Реализовать функцию JopaPromise
 * она принимает в себя executor(функцию)
 * executor принимает в качестве аргумента функцию resolve, которая по окончанию executor вызывается.
 * Функция resolve принимает в качестве аргумента или скалярное или JopaPromise
 *
 *
 * */


var PENDING = "PENDING";
var RESOLVED = "RESOLVED";

function JopaPromise(executor) {
    console.log("Call JopaPromise");
    var self = this;
    console.log(self);
    self.currentStatus = PENDING;
    console.log("Current status:" + self.currentStatus);
    self.result = undefined;
    console.log("Current result: ", self.result);


    function resolve(value) {
        console.log("Call resolve");
        self.result = value;
        console.log("undefined");

        console.log("Result value: ", self.result);
        self.currentStatus = RESOLVED;
        console.log("Current status:" + self.currentStatus);

    }

    console.log("Before executor");

    executor(resolve);
}

/**
 * then является функцией, которая имеет в качестве аргумента listener.
 * listener это функция, которая принимает в качестве аргумента result.
 * listener будет выполнен только тогда, когда executor выдаст скалярное значение и это значение передасться в listener
 * Listener может возвращать, как скалярное значение, так и JopaPromise
 * Функция вызова then возвращает Promise, он будет ?resolved?, когда listener вернёт скалярное значение
 */

JopaPromise.prototype.then = function (listener) {
    console.log("Call then");
    if (this.currentStatus === PENDING) {
        console.log("Current status: ", this.currentStatus);
        console.log("Returning new JopaPromise");
        return new JopaPromise(function (resolve) {
        });
    }
    if (this.currentStatus === RESOLVED) {
        console.log("Current status: ", this.currentStatus);
        var currentResult = listener(this.result);
        return new JopaPromise(function (resolve) {
            console.log(currentResult);
            resolve(currentResult);

        });
    }


};

var promise = new JopaPromise(function (resolve) {
    console.log("Call executor");
    //resolve("1");
    setTimeout(function () {
        console.log("Inside timeout");
        resolve("1");
    }, 1000)
}).then(function (result) {
    console.log("Call listener, with result: ", result);
    return 2;
}).then(function (result2) {
    console.log("Call listener 2, with result: ", result2);
    return 3;
});
console.log(promise);
