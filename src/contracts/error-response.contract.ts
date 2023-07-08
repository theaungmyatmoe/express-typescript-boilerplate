import { MessageResponseContract } from './message-response.contract';

export interface ErrorResponseContract extends MessageResponseContract {
  stack?: string
}