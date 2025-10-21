import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 8080;

// Middleware: servir contenido estático
app.use(express.static("public"));

app.get("/hola-mundo", (req, res) => {
  res.send("Hola mundo con Tadeo");
});

// Ruta comodín (404)
app.get(/.*/, (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
