export class AppError {
  readonly name: string;
  readonly message: string;
  readonly status: number;

  constructor(message: string, status: number, name = 'Error') {
    this.name = name;
    this.status = status;
    this.message = message;
  }
}