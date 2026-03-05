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
function combine() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var totals = 0;
    var str = '';
    args.forEach(function (arg) {
        if (typeof arg === 'number') {
            totals += arg;
        }
        else if (typeof arg === 'string') {
            str += arg;
        }
    });
    return [totals, str];
}
var _a = combine(1, 2, 3, 3, 3, 3, 3, 'hello world', 'i love your'), total = _a[0], str = _a[1];
var makeNegative = function (value) { return value * -1; };
//console.log(makeNegative(2))
// function format(input:string): string;
// function format(input:number): number;
// function format(input:string|number|undefined): (string|number) {
//     if(typeof input ==='string'){
//         return input.toUpperCase()
//     }
//     else if(typeof input==='number'){
//         return input
//     }
//     else{
//         throw new Error("expected Input")
//     }
// }
//console.log(format("hello"))
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.makeSound = function () {
        console.log("Generic sound!");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.makeSound = function () {
        //super.makeSound();
        console.log("Wooooof");
    };
    return Dog;
}(Animal));
var animal = new Animal();
var dog = new Dog();
//console.log(dog.makeSound())
var data = 'Data';
var num = data;
console.log(typeof num);
