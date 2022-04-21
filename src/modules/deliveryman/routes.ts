import { Router } from 'express';
import { ensureDeliverymanIsAuthenticated } from '../../middlewares/ensureDeliverymanIsAuthenticated';

import { CreateDeliverymanContoller } from './useCases/createDeliveryman/CreateDeliverymanController';
import { FindAllDeliveriesController } from './useCases/findAllDeliveries/FindAllDeliveriesController';

export const deliverymanRouter = Router();

const createDeliverymanController = new CreateDeliverymanContoller();
const findAllDeliveriesController = new FindAllDeliveriesController();

deliverymanRouter.post('/', createDeliverymanController.handle);
deliverymanRouter.get(
  '/deliveries',
  ensureDeliverymanIsAuthenticated,
  findAllDeliveriesController.handle
);