function combine(...args: (number|string)[]):[number,string]{
   let totals = 0;
   let str = '';
   args.forEach(arg=>{
    if(typeof arg === 'number'){
        totals+=arg;
    }
    else if(typeof arg === 'string'){
        str+=arg
    }
   })
   return [totals,str];
}
const [total,str] = combine(1,2,3,3,3,3,3,'hello world','i love your');
//console.log({total})
//console.log({str})
type Negate = (value:number)=> number;
const makeNegative : Negate = (value) => value * -1;
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
class Animal{
    makeSound(): void{
        console.log("Generic sound!")
    }
}
class Dog extends Animal{
    override makeSound(): void {
        //super.makeSound();
        console.log("Wooooof")
        
    }
}
const animal = new Animal();
const dog = new Dog()
//console.log(dog.makeSound())
let data:string = 'Data';
let num = data as unknown as  number;
console.log(typeof num)
let number;
const names: readonly string[] = ["Evariste","Theogene"];
//names.push("Evarist"

console.log(names);
//tuple
let tuple: [number,boolean,string];
tuple = [7,true,"Evariste"];
tuple.push(55)
//console.log(tuple)
//readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'coding'];
// throws error as it is readonly.
//ourReadonlyTuple.push('Coding God took a day off');
//Named tuples
const graph: [x:number,y:number] = [17,12]
const [x,y] = graph;
console.log(x)
//TypeScript object type
function change(weight: number|string ){
  if(typeof weight === "number"){
    return weight*2.2;

  }  else{
    return parseInt(weight)*2.2
  }
}
//console.log(change(10))
//console.log(change('100kg'))
type Role = 'admin' | 'user';

const authorize = (role: Role): string => {
  switch (role) {
    case 'admin':
      return 'You can do anything';
    case 'user':
      return 'You can do something';
    default:
      // never reach here util we add a new role
      const _unreachable: never = role;
      throw new Error(`Invalid role: ${_unreachable}`);
  }
};

console.log(authorize('admin'));


