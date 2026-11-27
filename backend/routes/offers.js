import { Router } from 'express';
import { readData } from '../utils/readData.js';

const router = Router();

// GET /api/offers – only offers with "active": true
router.get('/', async (req, res, next) => {
  try {
    const offers = await readData('offers.json');
    res.json(offers.filter((offer) => offer.active));
  } catch (err) {
    next(err);
  }
});

export default router;
