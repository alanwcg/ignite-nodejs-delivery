import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

import { authConfig } from '../../../../config/auth';
import { prisma } from '../../../../database/prismaClient';
import { AuthenticationError } from '../../errors/AuthenticationError';

type AuthenticateDeliveryman = {
  username: string;
  password: string;
}

type Response = {
  token: string;
}

export class AuthenticateDeliverymanUseCase {
  async execute({ username, password }: AuthenticateDeliveryman): Promise<Response> {
    let deliveryman = await prisma.deliveryMan.findFirst({
      where: {
        username: {
          equals: username,
          mode: 'insensitive',
        },
      },
    });

    if (!deliveryman) {
      throw new AuthenticationError('username or password invalid.', 401);
    }

    const passwordMatched = await compare(password, deliveryman.password);

    if (!passwordMatched) {
      throw new AuthenticationError('username or password invalid.', 401);
    }

    const token = sign({ username }, authConfig.deliverymanTokenSecret, {
      subject: deliveryman.id,
      expiresIn: authConfig.tokenExpiresIn,
    });

    return {
      token,
    }
  }
}