import { Clients } from '@prisma/client';

import { prisma } from '../../../../database/prismaClient';

export class FindAllDeliveriesUseCase {
  async execute(client_id: string): Promise<Omit<Clients, 'password'>[]> {
    const deliveries = await prisma.clients.findMany({
      where: {
        id: client_id,
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