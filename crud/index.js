const express =require('express')
const app=express()

app.get("/",(req,res)=>{
    res.sendFile("/Users/ayushgopal/Development-2k25/crud/index.html")
})

app.post('/sum',function(req,res){

    const a=parseInt(req.body.a);
    const b=parseInt(req.body.b);

    const sum=a+b;
    res.json({
        sum
})

})

app.get('/sub/:a/:b',(req,res)=>{

    const a=req.params.a;
    const b=req.params.b;

    sub=a-b;

    res.json({
        sub
})
})

app.get('/',(req,res)=> {
res.sendFile("/Users/ayushgopal/Development-2k25/crud/index.html")
})


app.get('/mul/:a/:b',(req,res)=>{
 
const a=req.params.a;
const b=req.params.b;

mul=a*b;
res.json({
    mul
})
})

app.get('/div/:a/:b',(req,res)=>{
a=req.params.a;
b=req.params.b;
const div=a/b;

res.send("<b><u>" +
div
+
"</b></u>"
)
})

app.listen(3000)