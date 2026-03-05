var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function getFirst(array) {
    return array[0];
}
var num = [1, 2, 3, 3];
var fruits = ["Apple", "banana", "Orange"];
var i = getFirst(num);
var j = getFirst(fruits);
console.log(j);
var userResponse = {
    data: "name",
    status: 200
};
//   let name: number|string = "na";
//   let n = name as string;
//   console.log(typeof n); //string
//
function prop(obj, key) {
    return obj[key];
}
var person = { name: "Evariste" };
console.log(person);
var Shape2D = /** @class */ (function () {
    function Shape2D() {
    }
    return Shape2D;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius) {
        var _this = _super.call(this) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.getArea = function () {
        return 2 * this.radius;
    };
    return Circle;
}(Shape2D));
var circle = new Circle(3);
console.log(circle.getArea());
