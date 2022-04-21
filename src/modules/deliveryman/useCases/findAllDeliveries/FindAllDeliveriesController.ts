import { Request, Response } from 'express';
import { FindAllDeliveriesUseCase } from './FindAllDeliveriesUseCase';

export class FindAllDeliveriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { deliveryman_id } = request;

    const useCase = new FindAllDeliveriesUseCase();
    const result = await useCase.execute(deliveryman_id);

    return response.json(result);
  }
}