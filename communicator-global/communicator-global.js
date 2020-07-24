// (function (window) {
//
//     const defaultMessage = 'Hello, World from global';
//     if (typeof (window.communicatorGlobal) === 'undefined') {
//         window.communicatorGlobal = function (message) {
//             if (message === undefined) {
//                 message = defaultMessage;
//             }
//             return `<h1> ${message} </h1>`
//         }
//     }
//
// })(window);

(function (window) {
    function communicatorGlobal() {
        const _communicatorGlobal = {};
        // This emulates a simple method on a TS Class
        _communicatorGlobal.greet = function (message) {
            return `<h1> ${message} </h1>`;
        }
        return _communicatorGlobal;
    }
    if ((typeof window.communicatorGlobal) === 'undefined') {
        window.communicatorGlobal = communicatorGlobal();
    }
})(window);