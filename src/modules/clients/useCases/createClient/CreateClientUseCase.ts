import { hash } from 'bcrypt';
import { Clients } from '@prisma/client';

import { prisma } from '../../../../database/prismaClient';
import { ClientAlreadyExistsError } from '../../errors/ClientAlreadyExistsError';

type CreateClient = {
  username: string;
  password: string;
}

export class CreateClientUseCase {
  async execute({ username, password }: CreateClient): Promise<Clients> {
    let client = await prisma.clients.findFirst({
      where: {
        username: {
          equals: username,
          mode: 'insensitive',
        },
      },
    });

    if (client) {
      throw new ClientAlreadyExistsError('Client already exists.', 404);
    }

    const hashedPassword = await hash(password, 12);

    client = await prisma.clients.create({
      data: {
        username,
        password: hashedPassword,
      },
    });

    return client;
  }
}