const serviceController = require("./serviceController");

let services = [];

// Middleware de autenticação
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: "Não autorizado" });
  }
  // Verificar token JWT
  next();
};

exports.getServices = (req, res) => {
  res.send("Lista de serviços");
};

exports.createService = (req, res) => {
  const { nome, preco } = req.body;

  // Validações
  if (!nome || !preco) {
    return res.status(400).json({ message: "Preencha todos os campos" });
  }

  if (preco < 0) {
    return res.status(400).json({ message: "Preço inválido" });
  }

  // Sanitização
  const sanitizedName = nome.trim().replace(/[<>]/g, "");

  services.push({ nome: sanitizedName, preco });
  res.status(201).json({ message: "Serviço criado com sucesso!" });
};

exports.listServices = (req, res) => {
  res.json(services);
};
