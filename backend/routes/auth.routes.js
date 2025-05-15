const express = require("express");
const router = express.Router();

// Rota de login simulada
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  // Aqui você validaria com o banco e geraria o token
  res.send({ token: "fake-jwt-token", email });
});

// Rota de registro simulada
router.post("/register", (req, res) => {
  const newUser = req.body;
  // Aqui você registraria no banco
  res.status(201).send({ message: "Usuário registrado", user: newUser });
});

module.exports = router;
