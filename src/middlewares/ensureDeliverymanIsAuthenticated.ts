import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import { authConfig } from '../config/auth';
import { InvalidJWTTokenError } from '../errors/InvalidJWTTokenError';
import { JWTTokenIsMissingError } from '../errors/JWTTokenIsMissingError';

type Payload = {
  sub: string;
}

export async function ensureDeliverymanIsAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new JWTTokenIsMissingError('JWT Token is missing.', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub } = verify(token, authConfig.deliverymanTokenSecret) as Payload;

    request.deliveryman_id = sub;

    next();
  } catch {
    throw new InvalidJWTTokenError('Invalid JWT token.', 401);
  }
}