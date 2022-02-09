import express from 'express';

const router = express.Router();

router.get('/products', (req, res) => {
  const { search } = req.query;
  res.status(201).json({
    products: [],
  });
});

module.exports.router = router;
