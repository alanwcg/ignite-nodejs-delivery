import { Request, Response } from 'express';

import { CreateDeliveryUseCase } from './CreateDeliveryUseCase';

export class CreateDeliveryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { client_id } = request;
    const { item_name } = request.body;

    const useCase = new CreateDeliveryUseCase();
    const result = await useCase.execute({
      item_name,
      client_id,
    });

    return response.json(result);
  }
}