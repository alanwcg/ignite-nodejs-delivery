import { AppError } from './AppError';

export class InvalidJWTTokenError extends AppError {
  constructor(
    message: string,
    status: number,
    name = 'InvalidJWTTokenError'
  ) {
    super(message, status, name);
  }
}