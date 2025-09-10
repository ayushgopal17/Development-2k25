const express =require("express");
const mongoose = require("mongoose");
const app=express();

app.use(express.json())

mongoose.connect(
    "mongodb+srv://Ayush12345:Mongodb%40998877@cluster0.epz0jiw.mongodb.net/folder1",
);

const User = mongoose.model("Users", {
    name: String,
    email: String,
    password: String,
});

app.post("/signup", async function(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

const existingUser= await User.findOne({email:username});
    if(existingUser){
        return res.status(400).send("Username already exist");
    }
    
    const user = new User({
        name: name,
        email: username,
        password: password,
    });

    user.save();
    res.json({"msg":"User created successfully"})

    
});
