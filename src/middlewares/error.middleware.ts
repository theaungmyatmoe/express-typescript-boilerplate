import { Response, Request, NextFunction } from 'express';
import { ErrorResponseContract } from '../contracts';

export function errorHandler(err: Error, req: Request, res: Response<ErrorResponseContract>, next: NextFunction) {
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
  });
}