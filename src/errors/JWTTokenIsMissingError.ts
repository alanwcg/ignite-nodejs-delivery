import { AppError } from './AppError';

export class JWTTokenIsMissingError extends AppError {
  constructor(
    message: string,
    status: number,
    name = 'JWTTokenIsMissingError'
  ) {
    super(message, status, name);
  }
}