const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const mainRoutes = require("./routes");
const serviceRoutes = require("./routes/service.routes");
const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/users.routes");
const scheduleRoutes = require("./routes/schedule.routes");

app.use("/", mainRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/schedules", scheduleRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Servidor escutando na porta ${PORT}`);
});
