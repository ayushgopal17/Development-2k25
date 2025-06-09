const express = require("express");
const app=express();

app.use(express.json());
const users= [{
//
    name: "John",
    kidney: [{
      healthy: false
}]

}];



app.get("/" ,function(req,res)
{
    const Johnkidney=users[0].kidney;

    const Numberofkidneys=Johnkidney.length;

    let NumberofHealthykidney = 0;

    for(let i=0; i<Johnkidney.length;i++)
    {
        if (Johnkidney[i].healthy)
        {
            NumberofHealthykidney = NumberofHealthykidney +1;        }
    }

    const NumberofUnHealthykidney=Numberofkidneys - NumberofHealthykidney;

res.json({

    Numberofkidneys,
    NumberofHealthykidney,
    NumberofUnHealthykidney
})


})

app.post("/",function(req,res){


    const isHealthy=req.body.isHealthy;
    users[0].kidney.push({
        healthy :isHealthy
    })
    res.json
    ({msg: "Done!"


    })

})

app.put("/",function(req,res){
    for(let i=0;i<users[0].kidney.length;i++)
    {
        users[0].kidney[i].healthy =true;
    }
    res.json({});
})


app.listen(3000);

