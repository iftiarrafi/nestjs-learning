class Userx {
    name : string
    age : number

    constructor(name : string , age : number){
        this.name = name
        this.age = age
    }

    greet(){
        console.log(`Hello ${this.name}`)   
    }
}

const userx1 = new Userx("bob",26)
console.log(userx1)
userx1.greet()