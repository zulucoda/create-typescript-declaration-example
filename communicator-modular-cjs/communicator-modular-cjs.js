/**
 * commonjs example
 * commonjs load modules synchronously
 */

const communicatorModularCJS = {};

communicatorModularCJS.greet = function (message) {
    return `<h1> ${message} </h1>`;
}

module.exports = communicatorModularCJS;