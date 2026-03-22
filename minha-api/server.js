const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.json({ mensagem: "Container Show do Sandrolaxx!", status: "Sucesso" });
});

app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});