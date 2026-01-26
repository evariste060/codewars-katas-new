const names: readonly string[] = ["Evariste","Theogene"];
//names.push("Evarist"

console.log(names);
//tuple
let tuple: [number,boolean,string];
tuple = [7,true,"Evariste"];
tuple.push(55)
console.log(tuple)
//readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'coding'];
// throws error as it is readonly.
//ourReadonlyTuple.push('Coding God took a day off');
//Named tuples
const graph: [x:number,y:number] = [17,12]
const [x,y] = graph;
console.log(x)
//TypeScript object type


