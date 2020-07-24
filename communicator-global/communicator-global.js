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

// (function (window) {
//     function communicatorGlobal() {
//         const _communicatorGlobal = {};
//         // This emulates a simple method on a TS Class
//         _communicatorGlobal.greet = function (message) {
//             return `<h1> ${message} </h1>`;
//         }
//         return _communicatorGlobal;
//     }
//     if ((typeof window.communicatorGlobal) === 'undefined') {
//         window.communicatorGlobal = communicatorGlobal();
//     }
// })(window);

(function (window) {
    function communicatorGlobal() {
        const _communicatorGlobal = {};
        // adding a subclass
        _communicatorGlobal.Settings = function (message) {
          this.message = message;
        };

        // new up the class with default
        _communicatorGlobal.settings = new _communicatorGlobal.Settings("default global")

        // This emulates a simple method on a TS Class
        _communicatorGlobal.greet = function () {
            return `<h1> ${_communicatorGlobal.settings.message} </h1>`;
        }
        return _communicatorGlobal;
    }
    if ((typeof window.communicatorGlobal) === 'undefined') {
        window.communicatorGlobal = communicatorGlobal();
    }
})(window);