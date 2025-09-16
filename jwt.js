const jwt=require("jsonwebtoken");


const value={
name : "Ayush",
accountNumber : 123123

}
// const token = jwt.sign(value,"secret");
// console.log(token);

const verifiedvalue=jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQXl1c2giLCJhY2NvdW50TnVtYmVyIjoxMjMxMjMsImlhdCI6MTc1ODAyMjYxNH0.fHbdvxyPqUHzuRmgTAtOLryWjihIirWhrxjDWn-WJYs","secret");
console.log(verifiedvalue);