import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

import { authConfig } from '../../../../config/auth';
import { prisma } from '../../../../database/prismaClient';
import { AuthenticationError } from '../../errors/AuthenticationError';

type AuthenticateClient = {
  username: string;
  password: string;
}

type Response = {
  token: string;
}

export class AuthenticateClientUseCase {
  async execute({ username, password }: AuthenticateClient): Promise<Response> {
    let client = await prisma.clients.findFirst({
      where: {
        username: {
          equals: username,
          mode: 'insensitive',
        },
      },
    });

    if (!client) {
      throw new AuthenticationError('username or password invalid.', 401);
    }

    const passwordMatched = await compare(password, client.password);

    if (!passwordMatched) {
      throw new AuthenticationError('username or password invalid.', 401);
    }

    const token = sign({ username }, authConfig.clientTokenSecret, {
      subject: client.id,
      expiresIn: authConfig.tokenExpiresIn,
    });

    return {
      token,
    }
  }
}