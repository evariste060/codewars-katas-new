//creating class add prototype method speak to Person prototype such that every instant will share this method without having it own
class Person{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    speak(){
        console.log(`hello! my name is ${this.name}`)
    }
}
//creation sub class that inhert from parents using super to call constructor of parents using super as function
class Human extends Person{
    constructor(legs,age,name){
        super(name,age)
        this.legs = legs
        
    }
//calling prototype method form the parent and add some customs method using super as objects
    speak(){
        super.speak();
        console.log('hooooooook!')
    }
}
//creating instances of both parents and child class
const evarist = new Person("evariste",20)
const child = new Human(2,'someone',20)
child.speak()
console.log(child.age)