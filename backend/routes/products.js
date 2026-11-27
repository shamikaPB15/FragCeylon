import { Router } from 'express';
import { readData } from '../utils/readData.js';

const router = Router();

// GET /api/products – all products
router.get('/', async (req, res, next) => {
  try {
    res.json(await readData('products.json'));
  } catch (err) {
    next(err);
  }
});

// GET /api/products/:id – one product (by numeric id or slug)
router.get('/:id', async (req, res, next) => {
  try {
    const products = await readData('products.json');
    const product = products.find(
      (p) => String(p.id) === req.params.id || p.slug === req.params.id
    );
    if (!product) return res.status(404).json({ success: false, message: 'Product not found' });
    res.json(product);
  } catch (err) {
    next(err);
  }
});

export default router;
