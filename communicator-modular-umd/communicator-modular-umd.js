(function (root, factory) {
    if(typeof define === "function" && define.amd) {
        // AMD
        define([], factory);
    }else if (typeof exports === 'object' && module.exports) {
        // CommonJS
        module.exports = factory();
    }else{
        // Browser globals (Note: root is Window)
        root.communicatorModularUMD = factory();
    }
})(this, function () {
    // Methods
    function greet(message) {
        return `<h1> ${message} </h1>`;
    }

    // exposed public methods
    return {
        greet,
    }
});