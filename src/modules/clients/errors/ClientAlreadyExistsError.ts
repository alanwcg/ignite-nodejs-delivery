import { AppError } from '../../../errors/AppError';

export class ClientAlreadyExistsError extends AppError {
  constructor(
    message: string,
    status: number,
    name = 'ClientAlreadyExistsError'
  ) {
    super(message, status, name);
  }
}