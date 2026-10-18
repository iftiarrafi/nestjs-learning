// Enums : we can make groups of related constant values

enum UserRole {
    ADMIN="Admin",
    USER="User",
    MANAGER="Manager"
}

const role = UserRole.ADMIN
console.log(role)

type User = {
    id : number,
    name : string,
    age : number,
    password : string,
}

// Utility Type : Partial , Pick , Omit , Readonly

// Partial<T> : it makes every property optional

type updatedUser = Partial<User>

const user1 : updatedUser = {
    name : "Rafi"
}
console.log(user1)

// Pick<T> : to pick only certain property

type pickUser = Pick<User , "name" | "age">
const user2 : pickUser = {
    name : "bob" , age:30
}
console.log(user2)


// Omit<T> : not to pick a property(password)

type userWithoutPassword = Omit<User , "password">

const user3 : userWithoutPassword = {
    id: 10 , name :"bob" , age : 30
}
console.log(user3)

// Readonly : to make a type readonly (cannot do operations)

type readonlyUser = Readonly<User>

const user4 : readonlyUser = {
    id : 101 , name : "rafi" , age : 36 , password : "123456"
}

//we cannot do : user4.name = "bob" now
console.log(user4);
