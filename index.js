const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res
    .status(200)
    .send({ message: "Ola Mundo este é meu novo repositório clonado" });
});

app.listen(4001, () => {
  console.log("api rodando na porta 4001");
});
