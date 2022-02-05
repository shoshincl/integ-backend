import './env';
import express from 'express';

const app = express();

app.listen(process.env.APP_PORT, () => {
  console.log(`API URL http://localhost:${process.env.APP_PORT}`);
});
