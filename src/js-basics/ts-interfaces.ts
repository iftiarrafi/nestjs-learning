// Interface is a blueprint that defines the structure of an object
// mostly interface is used for object
// type is used for object , premetive , union etc 
interface User {
    readonly id:number // id cannot be changed now
    name : string
    email : string
    age?: number //optional property
}

let user : User = {
    id:10,
    name:"bob",
    email: "bob.bob",
    age : 30
}

function printUser(user : User) : any{
    console.log(user.id)
    console.log(user.name)
}

printUser(user)

type Product = {
    id:number
    name:string
}

let prod1:Product = {
    id:1,
    name:"phone"
}
console.log(user)
console.log(prod1)

