import { AppError } from '../../../errors/AppError';

export class DeliveryNotFoundError extends AppError {
  constructor(
    message: string,
    status: number,
    name = 'DeliveryNotFoundError'
  ) {
    super(message, status, name);
  }
}