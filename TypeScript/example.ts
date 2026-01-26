let student: {
  id: number;
  name: string;
  marks: number;
};

student = {
  id: 1,
  name: "John",
  marks: 85
};
//console.log(student.id)
function greet(name:string) : string{
  return `hello ${name}`
}
//console.log(greet('Evariste'))
// function add(a:number,b:number,c?:number): number{
//   return a+b+c;
// }
// console.log(add(1,2))
enum Direction{
  up =2,
  down,
  left,
  right
}
//console.log(Direction.down)
type status = "Approved" | "failied";
let currentStatus:status = "Approved"
if(currentStatus = "Approved"){
  console.log("You are addmitted Brother!!");
}