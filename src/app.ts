import 'dotenv/config';
import 'express-async-errors';

import express, { NextFunction, Request, Response } from 'express';

import { router } from './routes';
import { AppError } from './errors/AppError';

export const app = express();
app.use(express.json());
app.use(router);

app.get('/', (request: Request, response: Response) => {
  return response.json({ message: 'Deliveries API' });
});

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.status).json({
        error: error.name,
        messsage: error.message,
      });
    }

    return response.status(500).json({
      error: 'Error',
      message: error.message,
    });
  }
);
