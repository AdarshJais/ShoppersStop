import express from 'express';
import dotenv from 'dotenv';
import ConnectDB from './config/db.js';
import colors from 'colors';

//we strickly need to us "products.js" and not simply product what we do in frontend
import products from './data/products.js';

const app = express();
dotenv.config();

ConnectDB();

app.get('/', (req, res) => {
  res.send('Api is running/....');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
