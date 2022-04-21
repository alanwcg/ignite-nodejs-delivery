import { Request, Response } from 'express';

import { UpdateEndedDateUseCase } from './UpdateEndedDateUseCase';

export class UpdateEndedDateController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { deliveryman_id } = request;
    const { id: delivery_id } = request.params;

    const useCase = new UpdateEndedDateUseCase();
    const result = await useCase.execute({
      delivery_id,
      deliveryman_id,
    });

    return response.json(result);
  }
}