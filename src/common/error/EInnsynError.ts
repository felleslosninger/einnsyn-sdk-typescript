// Auto-generated from our API specification
// https://github.com/felleslosninger/einnsyn-api-spec

export class EInnsynError extends Error {
  type: string;

  constructor(message: string, type: string) {
    super(message);
    this.type = type;
  }
}

export class AuthenticationError extends EInnsynError {
  constructor(message: string) {
    super(message, 'authenticationError');
  }
}

export class AuthorizationError extends EInnsynError {
  constructor(message: string) {
    super(message, 'authorizationError');
  }
}

export class BadRequestError extends EInnsynError {
  constructor(message: string) {
    super(message, 'badRequest');
  }
}

export class ConflictError extends EInnsynError {
  constructor(message: string) {
    super(message, 'conflict');
  }
}

export class InternalServerError extends EInnsynError {
  constructor(message: string) {
    super(message, 'internalServerError');
  }
}

export class MethodNotAllowedError extends EInnsynError {
  constructor(message: string) {
    super(message, 'methodNotAllowed');
  }
}

export class NetworkError extends EInnsynError {
  baseUrl?: string;

  constructor(message: string, baseUrl?: string) {
    super(message, 'networkError');
    this.baseUrl = baseUrl;
  }
}

export class NotFoundError extends EInnsynError {
  constructor(message: string) {
    super(message, 'notFound');
  }
}

export class ValidationError extends EInnsynError {
  fieldError: Array<{
    fieldName: string;
    value?: string;
    message?: string;
  }>;

  constructor(
    message: string,
    fieldError: Array<{
      fieldName: string;
      value?: string;
      message?: string;
    }>,
  ) {
    super(message, 'validationError');
    this.fieldError = fieldError;
  }
}

export function resolveError(json: unknown) {
  const type = (json as { type: string })?.type;
  switch (type) {
    case 'undefined':
      return new EInnsynError(
        (json as EInnsynError).message,
        (json as EInnsynError).type,
      );
    case 'authenticationError':
      return new AuthenticationError((json as AuthenticationError).message);
    case 'authorizationError':
      return new AuthorizationError((json as AuthorizationError).message);
    case 'badRequest':
      return new BadRequestError((json as BadRequestError).message);
    case 'conflict':
      return new ConflictError((json as ConflictError).message);
    case 'internalServerError':
      return new InternalServerError((json as InternalServerError).message);
    case 'methodNotAllowed':
      return new MethodNotAllowedError((json as MethodNotAllowedError).message);
    case 'networkError':
      return new NetworkError(
        (json as NetworkError).message,
        (json as NetworkError).baseUrl,
      );
    case 'notFound':
      return new NotFoundError((json as NotFoundError).message);
    case 'validationError':
      return new ValidationError(
        (json as ValidationError).message,
        (json as ValidationError).fieldError,
      );
    default:
      return new EInnsynError('Unknown error', type);
  }
}
