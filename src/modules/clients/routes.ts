import { Router } from 'express';
import { ensureClientIsAuthenticated } from '../../middlewares/ensureClientIsAuthenticated';

import { CreateClientContoller } from './useCases/createClient/CreateClientController';
import { FindAllDeliveriesController } from './useCases/findAllDeliveries/FindAllDeliveriesController';

export const clientsRouter = Router();

const createClientController = new CreateClientContoller();
const findAllDeliveriesController = new FindAllDeliveriesController();

clientsRouter.post('/', createClientController.handle);
clientsRouter.get(
  '/deliveries',
  ensureClientIsAuthenticated,
  findAllDeliveriesController.handle
);