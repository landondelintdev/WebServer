import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Home Page con Tadeo");
});

app.get("/hola-mundo", (req, res) => {
  res.send("Hola mundo con Tadeo");
});

app.listen(8080);
