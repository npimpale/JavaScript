//we can use var name as we like or we can also use $
var calc = (function () {
    function Add(x, y) {
        return x + y;
    }
    function Subtract(x, y) {
        return x - y;
    }
    function Multiply(x, y) {
        return x * y;
    }
    function Divide(x, y) {
        return x / y;
    }

    return {
        Add: Add,
        Sub: Subtract,
        Mult: Multiply,
        Div: Divide
    }
})();

var $ = (function () {
    function Add(x, y) {
        return x + y;
    }
    function Subtract(x, y) {
        return x - y;
    }
    function Multiply(x, y) {
        return x * y;
    }
    function Divide(x, y) {
        return x / y;
    }

    return {
        Add: Add,
        Sub: Subtract,
        Mult: Multiply,
        Div: Divide
    }
})();