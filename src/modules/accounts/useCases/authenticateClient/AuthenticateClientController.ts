import { Request, Response } from 'express';

import { AuthenticateClientUseCase } from './AuthenticateClientUseCase';

export class AuthenticateClientController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { username, password } = request.body;

    const useCase = new AuthenticateClientUseCase();
    const result = await useCase.execute({
      username,
      password,
    });

    return response.json(result);
  }
}