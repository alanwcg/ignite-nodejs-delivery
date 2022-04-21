import { Deliveries } from '@prisma/client';

import { prisma } from '../../../../database/prismaClient';

type CreateDelivery = {
  item_name: string;
  client_id: string;
}

export class CreateDeliveryUseCase {
  async execute({ item_name, client_id }: CreateDelivery): Promise<Deliveries> {
    const delivery = await prisma.deliveries.create({
      data: {
        item_name,
        client_id,
      },
    });

    return delivery;
  }
}