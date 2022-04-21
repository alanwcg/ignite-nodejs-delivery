import { Request, Response } from 'express';

import { CreateClientUseCase } from './CreateClientUseCase';

export class CreateClientContoller {
  async handle(request: Request, response: Response): Promise<Response> {
    const { username, password } = request.body;

    const useCase = new CreateClientUseCase();
    const result = await useCase.execute({
      username,
      password,
    });

    return response.json(result);
  }
}