import express from 'express';

const router = express.Router();

import { ProductModel } from './db';

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

module.exports.router = router;
