import express from 'express';
import dotenv from 'dotenv';
import ConnectDB from './config/db.js';
import colors from 'colors';
//we strickly need to us "fileName.js" and not simply product what we do in frontend
//import products from './data/products.js';
import productRoutes from './routes/productRoutes.js';
import { notFound, errorHandler } from './middleWare/errorMiddleWare.js';
const app = express();
dotenv.config();
ConnectDB();

app.get('/', (req, res) => {
  res.send('Api is running....');
});

app.use('/api/products', productRoutes);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
