const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = 5000;

const pool = new Pool({
  user: 'user', // Votre nom d'utilisateur pour PostgreSQL
  host: '192.168.80.138', // L'adresse de l'hôte de la base de données
  database: 'paysdb', // Le nom de votre base de données
  password: 'password', // Votre mot de passe pour PostgreSQL
  port: 5432, // Le port sur lequel PostgreSQL écoute
});

app.listen(port, () => {
  console.log(`Application Express écoutant sur le port ${port}`);
});