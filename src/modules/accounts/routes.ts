import { Router } from 'express';

import { AuthenticateClientController } from './useCases/authenticateClient/AuthenticateClientController';
import { AuthenticateDeliverymanController } from './useCases/authenticateDeliveryman/AuthenticateDeliverymanController';

export const accountsRouter = Router();

const authenticateClientController = new AuthenticateClientController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();

accountsRouter.post('/clients/authenticate', authenticateClientController.handle);
accountsRouter.post('/deliveryman/authenticate', authenticateDeliverymanController.handle);