const express = require('express');
const routes = require('./routes');
const connection = require('./config/connection');
const Sequelize = require('sequelize');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = new Sequelize(connection);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});   
