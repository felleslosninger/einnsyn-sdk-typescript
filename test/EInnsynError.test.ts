import { describe, expect, test } from 'vitest';

import {
  AuthenticationError,
  AuthorizationError,
  BadRequestError,
  ConflictError,
  EInnsynError,
  InternalServerError,
  MethodNotAllowedError,
  NetworkError,
  NotFoundError,
  resolveError,
  TooManyRequestsError,
  TooManyUnverifiedOrdersError,
  ValidationError,
} from '../src/common/error/EInnsynError.ts';

describe('resolveError', () => {
  test.each([
    {
      type: 'authenticationError',
      expectedClass: AuthenticationError,
      expectedType: 'authenticationError',
    },
    {
      type: 'authorizationError',
      expectedClass: AuthorizationError,
      expectedType: 'authorizationError',
    },
    {
      type: 'badRequest',
      expectedClass: BadRequestError,
      expectedType: 'badRequest',
    },
    {
      type: 'conflict',
      expectedClass: ConflictError,
      expectedType: 'conflict',
    },
    {
      type: 'internalServerError',
      expectedClass: InternalServerError,
      expectedType: 'internalServerError',
    },
    {
      type: 'methodNotAllowed',
      expectedClass: MethodNotAllowedError,
      expectedType: 'methodNotAllowed',
    },
    {
      type: 'notFound',
      expectedClass: NotFoundError,
      expectedType: 'notFound',
    },
    {
      type: 'tooManyRequests',
      expectedClass: TooManyRequestsError,
      expectedType: 'tooManyRequests',
    },
    {
      type: 'tooManyUnverifiedOrders',
      expectedClass: TooManyUnverifiedOrdersError,
      expectedType: 'tooManyUnverifiedOrders',
    },
  ])('maps $type to the expected SDK error class', ({
    type,
    expectedClass,
    expectedType,
  }) => {
    const error = resolveError({
      type,
      message: `Message for ${type}`,
    });

    expect(error).toBeInstanceOf(expectedClass);
    expect(error.message).toBe(`Message for ${type}`);
    expect(error.type).toBe(expectedType);
  });

  test('maps validation errors to ValidationError instances', () => {
    const error = resolveError({
      type: 'validationError',
      message: 'Validation failed',
      fieldError: [{ fieldName: 'query', message: 'Required' }],
    });

    expect(error).toBeInstanceOf(ValidationError);
    if (!(error instanceof ValidationError)) {
      throw new Error('Expected ValidationError');
    }
    expect(error.message).toBe('Validation failed');
    expect(error.type).toBe('validationError');
    expect(error.fieldError).toStrictEqual([
      { fieldName: 'query', message: 'Required' },
    ]);
  });

  test('preserves network error metadata', () => {
    const error = resolveError({
      type: 'networkError',
      message: 'Connection failed',
      baseUrl: 'https://api.einnsyn.no',
    });

    expect(error).toBeInstanceOf(NetworkError);
    if (!(error instanceof NetworkError)) {
      throw new Error('Expected NetworkError');
    }
    expect(error.message).toBe('Connection failed');
    expect(error.type).toBe('networkError');
    expect(error.baseUrl).toBe('https://api.einnsyn.no');
  });

  test('preserves the explicit undefined type branch', () => {
    const error = resolveError({
      type: 'undefined',
      message: 'Original message',
    });

    expect(error).toBeInstanceOf(EInnsynError);
    expect(error).not.toBeInstanceOf(AuthenticationError);
    expect(error.message).toBe('Original message');
    expect(error.type).toBe('undefined');
  });

  test('falls back to EInnsynError for unknown types', () => {
    const error = resolveError({ type: 'unexpectedError' });

    expect(error).toBeInstanceOf(EInnsynError);
    expect(error.message).toBe('Unknown error');
    expect(error.type).toBe('unexpectedError');
  });
});
