const express = require('express');
const routes = require('./routes');
// import sequelize connection
const dotenv = require('dotenv').config();
const Sequelize = require('sequelize');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});   
