import { AppError } from '../../../errors/AppError';

export class DeliverymanAlreadyExistsError extends AppError {
  constructor(
    message: string,
    status: number,
    name = 'DeliverymanAlreadyExistsError'
  ) {
    super(message, status, name);
  }
}