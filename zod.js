
// const express = require("express");
// const zod = require("zod")
// const app = express();

// const schema = zod.object({
//   kidneys: zod.array(zod.number())
// });

// app.post("/health-checkup", function (req, res) {
//   const response = schema.safeParse(req.body);  // 👈 pura body validate
//   res.send({
//     response
//   });
// });



// app.listen(4003);


const zod = require("zod");

function validateInput(obj) {

    const schema=zod.object({
        email: zod.string().email(),
      password: zod.string().min(8)
      })
      const response=schema.safeParse(obj);
      console.log(response);
        
    }
    
validateInput({
    email: "samplee@gmail.com",
    password: "12345678"
});