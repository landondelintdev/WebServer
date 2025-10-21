import express from "express";

const app = express();
const port = 8080;

//middleware
//Servir contenido estatico
app.use(express.static("public"));

app.get("/hola-mundo", (req, res) => {
  res.send("Hola mundo con Tadeo");
});

app.get(/.*/, (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
