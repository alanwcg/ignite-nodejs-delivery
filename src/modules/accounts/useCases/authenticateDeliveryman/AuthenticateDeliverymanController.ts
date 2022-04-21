import { Request, Response } from 'express';

import { AuthenticateDeliverymanUseCase } from './AuthenticateDeliverymanUseCase';

export class AuthenticateDeliverymanController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { username, password } = request.body;

    const useCase = new AuthenticateDeliverymanUseCase();
    const result = await useCase.execute({
      username,
      password,
    });

    return response.json(result);
  }
}