interface User {
    firstName: String;
    LastName: string;
    age:number;
    email?:String
}

function isLegal(user:User){
    if(user.age>18){
        return true;
    }
    else {
        return false;
    }
}

function greet(user:User){
    console.log("Hi there"+ user.firstName);
}
   isLegal({
    firstName: "Ayush",
    LastName: "Gopal",
    age: 23
   })

   let ans=greet;
   console.log(ans);