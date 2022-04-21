import { AppError } from '../../../errors/AppError';

export class AuthenticationError extends AppError {
  constructor(
    message: string,
    status: number,
    name = 'AuthenticationError'
  ) {
    super(message, status, name);
  }
}