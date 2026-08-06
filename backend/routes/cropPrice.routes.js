import express from 'express';
import { getCropPricesByLocation } from '../controllers/cropPrice.controller.js';

import authenticate from '../middlewares/auth.middleware.js';

const router = express.Router();

router.get('/', authenticate, getCropPricesByLocation);

export default router;