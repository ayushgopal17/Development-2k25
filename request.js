const express = require("express");

const app= express();

let numberofRequest=0;

function calculateRequest(req ,res ,next){
  numberofRequest++;
  console.log(numberofRequest);
  next();
}

app.get("/health-checkups",calculateRequest,function(req,res)
{
  
});

app.get("/health-checkups",calculateRequest,function(req,res)
{

});

app.listen(4000);