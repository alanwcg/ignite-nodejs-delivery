import { Request, Response } from 'express';

import { FindAllNotDeliveredUseCase } from './FindAllNotDeliveredUseCase';

export class FindAllNotDeliveredController {
  async handle(request: Request, response: Response): Promise<Response> {
    const useCase = new FindAllNotDeliveredUseCase();
    const result = await useCase.execute();

    return response.json(result);
  }
}