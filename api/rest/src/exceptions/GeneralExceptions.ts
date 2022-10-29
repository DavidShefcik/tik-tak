import { HttpException, HttpStatus } from '@nestjs/common';

/**
 * Thrown when an unspecified error occurs
 */
export class InternalServerException extends HttpException {
  constructor() {
    super('Something unexpected happened!', HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
