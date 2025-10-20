import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Landon is the best");
});

app.listen(8080);
