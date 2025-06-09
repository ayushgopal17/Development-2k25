const express = require("express");
const app=express();

function sum(n)
{
let ans=0;
for(let i = 1;i<=n;i++)
{
     ans = ans+i;
}
return ans;

}

app.get("/", function(req,res)
{
    const n =req.query.n;
    const ans=sum(n);
    res.send("Hi your ans is "+ ans);

})

app.listen(3003);

// now goto server then type localhost:3003/?n=5,6,7 or any input you wanna give in your input for a suitable output