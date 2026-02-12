type User ={
    name:string,
    age:number,
    email:String;

}



const users=new Map<string, User>()
users.set("abc",{name:"Ayu",age: 30,email:"abcgmail.com"})
users.set("xyz",{name:"avi",age:20,email:"avigmail.com" })

const user =users.get("ayu")
console.log(user)