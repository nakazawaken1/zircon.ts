var Zircon = /** @class */ (function () {
    function Zircon() {
    }
    Zircon.prototype.run = function (source) {
        return new Parser().parse(source).evaluate();
    };
    return Zircon;
}());
var Parser = /** @class */ (function () {
    function Parser() {
    }
    Parser.prototype.parse = function (source) {
        return new ZrExpression(source);
    };
    return Parser;
}());
var ZrExpression = /** @class */ (function () {
    function ZrExpression(source) {
        this.source = source;
    }
    ZrExpression.prototype.dump = function () {
        return this.source;
    };
    ZrExpression.prototype.evaluate = function () {
        return this;
    };
    return ZrExpression;
}());
console.log(new Zircon().run("echo 'Hello, World!'"));
