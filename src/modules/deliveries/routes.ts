import { Router } from 'express';

import { ensureClientIsAuthenticated } from '../../middlewares/ensureClientIsAuthenticated';
import { ensureDeliverymanIsAuthenticated } from '../../middlewares/ensureDeliverymanIsAuthenticated';
import { CreateDeliveryController } from './useCases/createDelivery/CreateDeliveryController';
import { FindAllNotDeliveredController } from './useCases/findAllNotDelivered/FindAllNotDeliveredController';
import { UpdateDeliverymanController } from './useCases/updateDeliveryman/UpdateDeliverymanController';
import { UpdateEndedDateController } from './useCases/updateEndedDate/UpdateEndedDateController';

export const deliveriesRouter = Router();

const createDeliveryController = new CreateDeliveryController();
const findAllNotDeliveredController = new FindAllNotDeliveredController();
const updateDeliverymanController = new UpdateDeliverymanController();
const updateEndedDateController = new UpdateEndedDateController();

deliveriesRouter.post(
  '/',
  ensureClientIsAuthenticated,
  createDeliveryController.handle
);
deliveriesRouter.get(
  '/not-delivered',
  ensureDeliverymanIsAuthenticated,
  findAllNotDeliveredController.handle
);
deliveriesRouter.put(
  '/update-deliveryman/:id',
  ensureDeliverymanIsAuthenticated,
  updateDeliverymanController.handle
);
deliveriesRouter.put(
  '/update-endedDate/:id',
  ensureDeliverymanIsAuthenticated,
  updateEndedDateController.handle
);