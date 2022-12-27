const express = require("express");
const axios = require("axios");

const app = express();

app.listen("3000");

//Método GET
app.route("/").get((req, res) => res.send("Hello, testando server node"));
app.route("/sobre").get((req, res) => res.send("Hello, sobre"));

//middleware
app.use(express.json());

//Método POST
app.route("/").post((req, res) => res.send(req.body));
app.use(express.json());
let author = "Gabriel";
app.route("/").get((req, res) => res.send(author));

//Método PUT
app.route("/").put((req, res) => {
  author = req.body;
  res.send(author);
});

//Método DELETE
app.route("/:identificador").delete((req, res) => {
  res.send(req.params.identificador);
});

//Parametros BODY
app.use(express.json());
app.route("/").post((req, res) => {
  const { nome, cidade } = req.body;
  res.send(`meu nome é ${nome} e minha cidade é ${cidade}`);
});

//Parametros ROUTES
app.route("/").get((req, res) => res.send("Olá"));
app.route("/:variavel").get((req, res) => res.send(req.params.variavel));
app.route("/indentidade/:nome").get((req, res) => res.send(req.params.nome));

//Parametros QUERY
app.route("/").get((req, res) => res.send(req.query.nome));
app.route("/about/user").get((req, res) => res.send(req.query));

//Consumindo API com Node.js
app.route("/").get((req, res) => {
  axios
    .get("https://api.github.com/users/GABRIEL-KOLLER")
    .then((result) => res.send(result.data))
    .catch((error) => console.error(error));
});
