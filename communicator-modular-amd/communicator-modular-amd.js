/**
 * AMD example
 * AMD loads modules asynchronously
 */

define([], function () {
    return {
        greet: function (message) {
            return `<h1> ${message} </h1>`;
        }
    }
});