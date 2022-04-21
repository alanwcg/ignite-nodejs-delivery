import { Deliveries } from '@prisma/client';

import { prisma } from '../../../../database/prismaClient';
import { DeliveryNotFoundError } from '../../errors/DeliveryNotFoundError';

type UpdateDeliveryman = {
  delivery_id: string;
  deliveryman_id: string;
}

export class UpdateDeliverymanUseCase {
  async execute({
    delivery_id,
    deliveryman_id
  }: UpdateDeliveryman): Promise<Deliveries> {
    const delivery = await prisma.deliveries.findUnique({
      where: {
        id: delivery_id,
      },
    });

    if (!delivery) {
      throw new DeliveryNotFoundError('Delivery not found.', 404);
    }

    const updatedDelivery = await prisma.deliveries.update({
      where: {
        id: delivery_id,
      },
      data: {
        deliveryman_id,
      },
    });

    return updatedDelivery;
  }
}