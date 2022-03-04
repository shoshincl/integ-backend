import express from 'express';

const router = express.Router();

import { ProductModel, UserModel } from './db';

router.get('/products', async (req, res) => {
  const { search } = req.query;
  let products = null;
  if (isNaN(search as any)) {
    products = await ProductModel.find({
      $or: [
        { description: new RegExp(search as string, 'i') },
        { brand: new RegExp(search as string, 'i') },
      ],
    });
  } else {
    products = await ProductModel.find({ id: search });
  }

  res.status(201).json({
    products,
  });
});

router.get('/users', async (req, res) => {
  const { id } = req.query;
  let user = null;
  if (id) {
    user = await UserModel.find({ id });
  }
  res.status(201).json({ id });
});

module.exports.router = router;
