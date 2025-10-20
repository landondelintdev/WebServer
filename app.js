import express from "express";

const app = express();
const port = 8080;

//middleware
//Servir contenido estatico
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Home Page con Tadeo");
});

app.get("/hola-mundo", (req, res) => {
  res.send("Hola mundo con Tadeo");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
