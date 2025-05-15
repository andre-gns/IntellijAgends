const serviceController = require("./serviceController");

exports.getServices = (req, res) => {
  res.send("Lista de serviços");
};

exports.createService = (req, res) => {
  const newService = req.body;
  // Aqui você salvaria no banco
  res.status(201).send({ message: "Serviço criado", data: newService });
};
