import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import "./styles.css";

const Home = () => {
  const features = [
    {
      title: "Chatbot 24h",
      description: "Atendimento automático 24 horas por dia",
      path: "/chatbot",
    },
    {
      title: "Gestão Simples",
      description: "Interface fácil de usar",
      path: "/gestao",
    },
    {
      title: "Notificações",
      description: "Receba alertas importantes",
      path: "/notificacoes",
    },
  ];

  const handleClick = (path: string) => {
    window.open(path, "_blank");
  };

  return (
    <div className="container">
      <h1 className="title">
        Intellij Agends - Sistema de Agendamento Inteligente
      </h1>

      <div className="cards-container">
        {features.map((feature, index) => (
          <Card key={index} className="card">
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {feature.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {feature.description}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleClick(feature.path)}
                fullWidth
              >
                Saiba mais
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
