import { hash } from 'bcrypt';
import { DeliveryMan } from '@prisma/client';

import { prisma } from '../../../../database/prismaClient';
import { DeliverymanAlreadyExistsError } from '../../errors/DeliverymanAlreadyExistsError';

type CreateDeliveryman = {
  username: string;
  password: string;
}

export class CreateDeliverymanUseCase {
  async execute({ username, password }: CreateDeliveryman): Promise<DeliveryMan> {
    let deliveryman = await prisma.deliveryMan.findFirst({
      where: {
        username: {
          equals: username,
          mode: 'insensitive',
        },
      },
    });

    if (deliveryman) {
      throw new DeliverymanAlreadyExistsError('Deliveryman already exists.', 404);
    }

    const hashedPassword = await hash(password, 12);

    deliveryman = await prisma.deliveryMan.create({
      data: {
        username,
        password: hashedPassword,
      },
    });

    return deliveryman;
  }
}