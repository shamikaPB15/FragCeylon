import { Router } from 'express';
import { readData } from '../utils/readData.js';

const router = Router();

// GET /api/testimonials
router.get('/', async (req, res, next) => {
  try {
    res.json(await readData('testimonials.json'));
  } catch (err) {
    next(err);
  }
});

export default router;
