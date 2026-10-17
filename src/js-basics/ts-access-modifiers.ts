// public , private , protected , readonly

class Person {
    public name = "bob" //by default everything is public
    private password = "12345" // password cannot be directly used outside of the class but can be used via other method
    protected role = "admin" // same as private but can be used in child-classes

    showPass(){
        return this.password
    }
}

class Employee extends Person {

    constructor(r:string){
        super()
        this.role = r
    }
    showRole(){
        return this.role
    }
}

const per = new Person()
console.log(per.name)
// not possible console.log(per.password) but
console.log(per.showPass())


const emp = new Employee("dev")
console.log(emp.showRole())
