// const express =require('express')
// const app=express()

// app.get("/",(req,res)=>{
//     res.sendFile("/Users/ayushgopal/Development-2k25/crud/index.html")
// })

// app.post('/sum',function(req,res){

//     const a=parseInt(req.body.a);
//     const b=parseInt(req.body.b);

//     const sum=a+b;
//     res.json({
//         sum
// })

// })

// app.get('/sub/:a/:b',(req,res)=>{

//     const a=req.params.a;
//     const b=req.params.b;

//     sub=a-b;

//     res.json({
//         sub
// })
// })

// app.get('/',(req,res)=> {
// res.sendFile("/Users/ayushgopal/Development-2k25/crud/index.html")
// })


// app.get('/mul/:a/:b',(req,res)=>{
 
// const a=req.params.a;
// const b=req.params.b;

// mul=a*b;
// res.json({
//     mul
// })
// })

// app.get('/div/:a/:b',(req,res)=>{
// a=req.params.a;
// b=req.params.b;
// const div=a/b;

// res.send("<b><u>" +
// div
// +
// "</b></u>"
// )
// })

// app.listen(3000)



const express= require('express');

const app=express();

app.use(express.json());


app.use(function(req,res,next){
    console.log("hi therre");
    next()
});

app.get("/",(req,res)=>{
    res.sendFile("/Users/ayushgopal/Development-2k25/crud/index.html")
})

app.get('/sum/:a/:b',(req,res)=>{

    const a= parseInt(req.params.a);
    const b=parseInt(req.params.b);

    const sum=a+b;

    res.json({
        ans: sum
    })
})

app.get('/sub/:a/:b',(req,res)=>{
    const a= parseInt(req.params.a);
    const b=parseInt(req.params.b);

    sub=a-b;

    res.json({
        ans: sub
    })
})


app.get('/mul/:a/:b',(req,res)=>{
    const a=parseInt(req.params.a);
    const b=parseInt(req.params.b);

    const mul=a*b;
    res.json({
        ans: mul
    })
})


app.get('/div/:a/:b',(req,res)=>{
    const a=parseInt(req.params.a);
    const b=parseInt(req.params.b);
    const div=a/b;
    res.json({
        ans:div
    })
})
app.listen(3000)
