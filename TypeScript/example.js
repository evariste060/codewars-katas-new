var student;
student = {
    id: 1,
    name: "John",
    marks: 85
};
//console.log(student.id)
function greet(name) {
    return "hello ".concat(name);
}
//console.log(greet('Evariste'))
// function add(a:number,b:number,c?:number): number{
//   return a+b+c;
// }
// console.log(add(1,2))
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 2] = "up";
    Direction[Direction["down"] = 3] = "down";
    Direction[Direction["left"] = 4] = "left";
    Direction[Direction["right"] = 5] = "right";
})(Direction || (Direction = {}));
var currentStatus = "Approved";
if (currentStatus = "Approved") {
    console.log("You are addmitted Brother!!");
}
