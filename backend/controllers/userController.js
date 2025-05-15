// Simulação de "banco de dados" em memória
let users = [];

exports.register = (req, res) => {
  const { nome, email, senha } = req.body;
  if (!nome || !email || !senha) {
    return res.status(400).json({ error: "preencha todos os campos" });
  }
  users.push({ nome, email, senha });
  res.status(201).json({ message: "Usuário criado com sucesso" });
};
exports.list = (req, res) => {
  res.json(users);
};
