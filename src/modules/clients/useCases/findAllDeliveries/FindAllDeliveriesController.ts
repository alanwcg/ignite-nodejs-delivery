import { Request, Response } from 'express';
import { FindAllDeliveriesUseCase } from './FindAllDeliveriesUseCase';

export class FindAllDeliveriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { client_id } = request;

    const useCase = new FindAllDeliveriesUseCase();
    const result = await useCase.execute(client_id);

    return response.json(result);
  }
}