class AppError extends Error {
  private readonly statusCode: number;

  constructor(message: string, statusCode: number = 500) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
  }
}

export { AppError };
