import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

let produtos = [];

app.get("/cart", (req, res) => {
  res.json(produtos);
});

app.post("/cart", (req, res) => {
  const produto = {
    id: Date.now(),
    ...req.body,
  };
  produtos.push(produto);
  res.status(201).json({produto});
});

app.put("/cart/:id", (req, res) => {
  const { id } = req.params;
  const index = produtos.findIndex((p) => p.id == id);
  if (index === -1)
    return res.status(404).json({ mensagem: "Produto não encontrado!" });
  produtos[index] = { ...produtos[index], ...req.body };
  res.json({ mensagem: "Produto atualizado!", produto: produtos[index] });
});

app.delete("/cart/:id", (req, res) => {
  const { id } = req.params;
  produtos = produtos.filter((p) => p.id != id);
  res.json({ mensagem: "Produto removido com sucesso!" });
});

export default app;
