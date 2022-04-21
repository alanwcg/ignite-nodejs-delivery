import { Request, Response } from 'express';

import { CreateDeliverymanUseCase } from './CreateDeliverymanUseCase';

export class CreateDeliverymanContoller {
  async handle(request: Request, response: Response): Promise<Response> {
    const { username, password } = request.body;

    const useCase = new CreateDeliverymanUseCase();
    const result = await useCase.execute({
      username,
      password,
    });

    return response.json(result);
  }
}