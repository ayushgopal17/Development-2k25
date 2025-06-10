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

//

app.get("/" ,function(req,res)
{
    const Johnkidney=users[0].kidney;

    const Numberofpatient=Johnkidney.length;

    let NumberofHealthyPatient = 0;

    for(let i=0; i<Johnkidney.length;i++)
    {
        if (Johnkidney[i].healthy)
        {
            NumberofHealthyPatient = NumberofHealthyPatient +1;        }
    }

    const NumberofUnHealthypatient=Numberofpatient - NumberofHealthyPatient;

res.json({

    Numberofpatient,
    NumberofHealthyPatient,
    NumberofUnHealthypatient
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


app.delete("/" ,function(req,res)
{
    let newKidney=[];
    for(let i=0;i<users[0].kidney.length;i++)
    {
        if(users[0].kidney[i].healthy)
        {
         newKidney.push ({

            healthy: true
         });
        }
    }
    users[0].kidney=newKidney;
    res.json({msg : "done"})

})

app.listen(3000);

