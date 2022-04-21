import { DeliveryMan } from '@prisma/client';

import { prisma } from '../../../../database/prismaClient';

export class FindAllDeliveriesUseCase {
  async execute(deliveryman_id: string): Promise<Omit<DeliveryMan, 'password'>[]> {
    const deliveries = await prisma.deliveryMan.findMany({
      where: {
        id: deliveryman_id,
      },
      select: {
        id: true,
        username: true,
        deliveries: true,
      },
    });

    return deliveries;
  }
}