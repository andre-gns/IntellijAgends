const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

let users = [];

exports.register = async (req, res) => {
  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha) {
    return res.status(400).json({ message: "Preencha todos os campos" });
  }

  // Verificar se usuário já existe
  if (users.find((u) => u.email === email)) {
    return res.status(400).json({ message: "Email já cadastrado" });
  }

  // Criptografar senha
  const hashedPassword = await bcrypt.hash(senha, 10);

  // Salvar usuário
  users.push({ nome, email, senha: hashedPassword });

  res.status(201).json({ message: "Usuário criado com sucesso" });
};

exports.list = (req, res) => {
  res.json(users);
};

exports.login = async (req, res) => {
  const { email, senha } = req.body;

  // Buscar usuário
  const user = users.find((u) => u.email === email);

  if (!user) {
    return res.status(401).json({ message: "Email ou senha incorretos" });
  }

  // Verificar senha
  const validPassword = await bcrypt.compare(senha, user.senha);

  if (!validPassword) {
    return res.status(401).json({ message: "Email ou senha incorretos" });
  }

  // Gerar token JWT
  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.json({ token });
};

let services = [];

exports.createService = (req, res) => {
  const { nome, descricao, preco } = req.body;
  if (!nome || !descricao || !preco) {
    return res.status(400).json({ error: "Preencha todos os campos" });
  }
  services.push({ nome, preco });
  res.status(201).json({ message: "Serviço criado com sucesso" });

  exports.getServices = (req, res) => {
    res.json(services);
  };
};
