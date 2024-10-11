import { Router } from 'express';

import { homeGETP } from '../Controllers/PublicController.js';

const router = Router();

router.get('/', homeGETP);

export default router;