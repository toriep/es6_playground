import addToDom from './add_to_dom';

class Person{
     constructor(name){
         this.name = name;
     }
     talk(msg){
         addToDom('h1',`${this.name} says: ${msg}`);
     }
     greet(){
         this.talk(`Hi my name is ${this.name}`)
     }
}

class SuperPerson extends Person {//class that extends another class has everything(variabls and methods/functions) the parent class has
    constructor(name,superPower){//You don't need to include the constructor class
        super(name);//This calls the parent constructor
        this.superPower = superPower;
    }
    saySuperPower(power){
        this.talk(`My super power is ${this.superPower}`)
    }
}

export default SuperPerson;