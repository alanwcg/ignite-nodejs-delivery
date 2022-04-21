import { Router } from 'express';

import { clientsRouter } from './modules/clients/routes';
import { accountsRouter } from './modules/accounts/routes';
import { deliverymanRouter } from './modules/deliveryman/routes';
import { deliveriesRouter } from './modules/deliveries/routes';

export const router = Router();

router.use('/clients', clientsRouter);
router.use('/sessions', accountsRouter);
router.use('/deliveryman', deliverymanRouter)
router.use('/deliveries', deliveriesRouter);