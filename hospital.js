const express = require("express");
const app=express();

const users= [{

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
app.listen(3000);

