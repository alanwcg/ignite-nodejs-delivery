import { Prisma } from '@prisma/client';

import { prisma } from '../../../../database/prismaClient';
import { DeliveryNotFoundError } from '../../errors/DeliveryNotFoundError';

type UpdateEndedDate = {
  delivery_id: string;
  deliveryman_id: string;
}

export class UpdateEndedDateUseCase {
  async execute({
    delivery_id,
    deliveryman_id
  }: UpdateEndedDate): Promise<Prisma.BatchPayload> {
    const delivery = await prisma.deliveries.findUnique({
      where: {
        id: delivery_id,
      },
    });

    if (!delivery) {
      throw new DeliveryNotFoundError('Delivery not found.', 404);
    }

    const updatedDelivery = await prisma.deliveries.updateMany({
      where: {
        id: delivery_id,
        deliveryman_id,
      },
      data: {
        ended_at: new Date(),
      },
    });

    return updatedDelivery;
  }
}