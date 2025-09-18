const express = require("express");
const path = require("path");

const app = express();

// Serve frontend from "public" folder
app.use(express.static(path.join(__dirname, "public")));

// API route: /sum
app.get("/sum", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  const sum = a + b;
  res.send(sum.toString());
});

// API route: /interest
app.get("/interest", (req, res) => {
  const principal = parseInt(req.query.principal);
  const rate = parseInt(req.query.rate);
  const time = parseInt(req.query.time);

  const interest = (principal * rate * time) / 100;
  const total = principal + interest;

  res.send({
    total: total,
    interest: interest,
  });
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});



