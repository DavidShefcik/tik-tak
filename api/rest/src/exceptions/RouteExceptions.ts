import { HttpException, HttpStatus } from '@nestjs/common';

/**
 * Thrown when a given route is not found
 */
export class RouteNotFoundException extends HttpException {
  constructor() {
    super('Route not found!', HttpStatus.NOT_FOUND);
  }
}

/**
 * Thrown when a request is unauthenticated
 */
export class UnauthenticatedException extends HttpException {
  constructor() {
    super('You must be logged in to do this!', HttpStatus.UNAUTHORIZED);
  }
}

/**
 * Throw when a request is unauthorized
 */
export class UnauthorizedException extends HttpException {
  constructor() {
    super('You are not allowed to do this!', HttpStatus.FORBIDDEN);
  }
}
