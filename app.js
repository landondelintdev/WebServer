import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 8080;

// Middleware: servir contenido estático
app.use(express.static(join(__dirname, "public")));

app.get("/index", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/generic", (req, res) => {
  res.sendFile(__dirname + "/public/generic.html");
});

app.get("/elements", (req, res) => {
  res.sendFile(__dirname + "/public/elements.html");
});

// Ruta comodín (404)
app.get(/.*/, (req, res) => {
  res.sendFile(__dirname + "/public/404");
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
