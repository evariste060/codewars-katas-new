  function getFirst<T>(array:T[]):T{
    return array[0]
  }
  const num = [1,2,3,3]
  const fruits = ["Apple","banana", "Orange"]
  const i = getFirst(num)
   const j = getFirst<string>(fruits)

  console.log(j)
  interface ApiResponse<T>{
    data:T;
    status:number;
  }
  const userResponse: ApiResponse<string> = {
    data: "name",
    status: 200
  }
//   let name: number|string = "na";
//   let n = name as string;
//   console.log(typeof n); //string
  //
  function prop<k,v extends keyof k>(obj:k,key:v){
    return obj[key]
  }
//   let str = prop({name:"Evariste"},'name')
//   let a = [1,2,3]
//   a.map(()=>{})
//   const map = new Map<string,number>()
//   map.set('stg',1)
//   map.set(1,23)
// type PartialWithExceptions<T, K extends keyof T> = 
//   Partial<Omit<T, K>> & Required<Pick<T, K>>;
interface User {
  name: string;
  age: number;
}

// Mapped type that makes all properties of User optional
type newType<T> = {
    [p in keyof T ]?: T[p];
}
// Result: { name?: string; age?: number; }
type PartialUser = newType<User>
let person:PartialUser = {name:"Evariste"}
console.log(person)
abstract class Shape2D{
    abstract getArea():number;
}
class Circle extends Shape2D{
    radius:number;
    constructor(radius:number){
        super();
        this.radius = radius;
    }
    getArea(){
        return 2*this.radius;
    }
}
const circle = new Circle(3)
console.log(circle.getArea())
interface data  {
 [name:string]:string;
}
const persons: data ={
    evariste: "Evariste",
    eric: "Eric"
}
console.log(persons)
type Scores = {
    [key:string]:number
}
const user:Scores = {
    evariste:12,
    eric:20
}
type scores = Record<string, number>;
type eee = Record<number,boolean>


