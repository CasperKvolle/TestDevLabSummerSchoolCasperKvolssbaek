class Person {

    constructor(name, lastname, age, job, IsSleeping ) {
        this.name = name;
        this.lastname = lastname;
        this.age = age;
        this.job = job;
        this.IsSleeping = IsSleeping 
    }
    sleeping() {
        return  this.IsSleeping = true;        
    }
    calAge() {
        return 2024 - this.age;
    }

    intruduce() {
        console.log('Hi my name is '  + this.name )
    }
    logJobDesc() {
    console.log('name is: ' + this.name + ' and lastname is ' + this.lastname + 'age: ' + this.age)
    };
}
new Person('Kvolle', 'Kvolle', 45, 'Tester', false).logJobDesc()



module.exports = Person;





