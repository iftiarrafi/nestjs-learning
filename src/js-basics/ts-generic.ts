// <T> : generic for code reusability

//without generic

function getNum(value:number):number{
    return value
}
function getString(value:string):string{
    return value
}
function getBool(value:boolean):boolean{
    return value
}

// but this generic,

// Generic Function

function getData<T>(data:T):T{
    return data
}
console.log(getData<string>("Rafi"))
console.log(getData<number>(10))
console.log(getData<boolean>(true))

// Generic Classes
class Box<T>{
    value:T
    constructor(val:T){
        this.value = val
    }
}

const box1 = new Box<string>("Tesla")
const box2 = new Box<number>(100)

console.log(box1.value)
console.log(box2.value)

// generic interface

interface ApiRes<T>{
    success : boolean,
    data:T
}

const res1: ApiRes<object> ={
    success:true,
    data: {
        message : "user is created",
    }
}
console.log(res1)

// Generic constraint

function getLength<T extends {length:number}>(value:T){
    return value.length
}

console.log(getLength("Hello World"))
console.log(getLength([1,2,3,4,5,6]))