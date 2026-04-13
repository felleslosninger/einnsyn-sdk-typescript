import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';

import EInnsynClient from '../../src/EInnsynClient.ts';
import { NetworkError } from '../../src/common/error/EInnsynError.ts';

type FetchInput = string | URL | Request;

type FetchMock = {
  mockResolvedValueOnce(value: Response): unknown;
  mock: {
    calls: Array<[FetchInput, RequestInit?]>;
  };
};

type EndpointCase = {
  name: string;
  responseBody: unknown;
  bogusResponseBody: unknown;
  run: () => Promise<unknown>;
  expectedUrl: string;
  expectedMethod: string;
  expectedBody?: string;
};

type EntityValidatorCase = {
  entityName: string;
  validator: (obj: unknown) => boolean;
  listValidator: (obj: unknown) => boolean;
  valid: unknown;
  invalid: unknown;
  cursor?: 'next' | 'previous';
};

type CrudResource = {
  list(query?: unknown): Promise<unknown>;
  get(id: string, query?: unknown): Promise<unknown>;
  update(id: string, body: unknown): Promise<unknown>;
  delete(id: string): Promise<unknown>;
  add?(body: unknown): Promise<unknown>;
};

export type StandardEntityResourceSuite = {
  suiteName: string;
  entityName: string;
  basePath: string;
  id: string;
  validator: (obj: unknown) => boolean;
  listValidator: (obj: unknown) => boolean;
  getResource: (client: EInnsynClient) => CrudResource;
  addBody?: unknown;
  updateBody?: unknown;
};

type EndpointCaseSuite = {
  suiteName: string;
  description: string;
  buildCases: (
    harness: ReturnType<typeof setupClientHarness>,
  ) => readonly EndpointCase[];
};

const INVALID_ENTITY = { entity: 'UnexpectedEntity' };

export const createJsonResponse = (body: unknown) =>
  new Response(JSON.stringify(body), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });

export const getFetchUrl = (input: FetchInput): string => {
  if (typeof input === 'string') {
    return input;
  }
  if (input instanceof URL) {
    return input.href;
  }
  return input.url;
};

export const setupClientHarness = () => {
  let client: EInnsynClient;
  let fetchMock: ReturnType<typeof vi.fn<typeof fetch>>;

  beforeEach(() => {
    fetchMock = vi.fn<typeof fetch>();
    vi.stubGlobal('fetch', fetchMock);

    client = new EInnsynClient({
      baseUrl: 'https://example.com',
      appInfo: 'SDK tests',
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  return {
    get client(): EInnsynClient {
      return client;
    },
    get fetchMock(): FetchMock {
      return fetchMock;
    },
  };
};

export const defineEndpointTests = (
  getFetchMock: () => FetchMock,
  cases: readonly EndpointCase[],
  description: string,
) => {
  test.each(cases)(`$name ${description}`, async (testCase) => {
    const fetchMock = getFetchMock();
    fetchMock.mockResolvedValueOnce(createJsonResponse(testCase.responseBody));

    const response = await testCase.run();

    expect(response).toStrictEqual(testCase.responseBody);

    const [url, init] = fetchMock.mock.calls[0];
    expect(getFetchUrl(url)).toBe(testCase.expectedUrl);
    expect(init?.method).toBe(testCase.expectedMethod);
    expect(init?.body).toBe(testCase.expectedBody);
  });
};

export const defineBogusResponseTests = (
  getFetchMock: () => FetchMock,
  cases: readonly EndpointCase[],
) => {
  test.each(cases)('rejects bogus responses from $name', async (testCase) => {
    const fetchMock = getFetchMock();
    fetchMock.mockResolvedValueOnce(
      createJsonResponse(testCase.bogusResponseBody),
    );

    const promise = testCase.run();
    await expect(promise).rejects.toBeInstanceOf(NetworkError);
    await expect(promise).rejects.toMatchObject({
      message: 'Unknown response type',
      type: 'networkError',
    });
  });
};

export const defineEntityValidatorTests = (
  cases: readonly EntityValidatorCase[],
) => {
  test.each(cases)('is$entityName accepts matching entities', (testCase) => {
    expect(testCase.validator(testCase.valid)).toBe(true);
  });

  test.each(cases)('is$entityName rejects other entity types', (testCase) => {
    expect(testCase.validator(testCase.invalid)).toBe(false);
  });

  test.each(cases)('is$entityName rejects undefined', (testCase) => {
    expect(testCase.validator(undefined)).toBe(false);
  });

  test.each(
    cases,
  )('isPaginated$entityNameList accepts matching entity lists', (testCase) => {
    const cursorKey = testCase.cursor ?? 'next';

    expect(
      testCase.listValidator({
        items: [testCase.valid],
        [cursorKey]: '/page/2',
      }),
    ).toBe(true);
  });

  test.each(
    cases,
  )('isPaginated$entityNameList accepts empty lists', (testCase) => {
    expect(testCase.listValidator({ items: [] })).toBe(true);
  });

  test.each(
    cases,
  )('isPaginated$entityNameList rejects mismatched entity lists', (testCase) => {
    expect(testCase.listValidator({ items: [testCase.invalid] })).toBe(false);
  });

  test.each(
    cases,
  )('isPaginated$entityNameList rejects undefined', (testCase) => {
    expect(testCase.listValidator(undefined)).toBe(false);
  });
};

export const defineStandardEntityResourceSuite = (
  descriptor: StandardEntityResourceSuite,
) => {
  describe(descriptor.suiteName, () => {
    const harness = setupClientHarness();
    const updateBody = descriptor.updateBody ?? {};

    const endpointCases: EndpointCase[] = [
      {
        name: 'list',
        responseBody: {
          items: [{ entity: descriptor.entityName }],
        },
        bogusResponseBody: {
          items: [INVALID_ENTITY],
        },
        run: () => descriptor.getResource(harness.client).list(),
        expectedUrl: `https://example.com${descriptor.basePath}`,
        expectedMethod: 'get',
      },
      {
        name: 'get',
        responseBody: {
          entity: descriptor.entityName,
        },
        bogusResponseBody: INVALID_ENTITY,
        run: () => descriptor.getResource(harness.client).get(descriptor.id),
        expectedUrl: `https://example.com${descriptor.basePath}/${descriptor.id}`,
        expectedMethod: 'get',
      },
      {
        name: 'update',
        responseBody: {
          entity: descriptor.entityName,
        },
        bogusResponseBody: INVALID_ENTITY,
        run: () =>
          descriptor
            .getResource(harness.client)
            .update(descriptor.id, updateBody),
        expectedUrl: `https://example.com${descriptor.basePath}/${descriptor.id}`,
        expectedMethod: 'patch',
        expectedBody: JSON.stringify(updateBody),
      },
      {
        name: 'delete',
        responseBody: {
          entity: descriptor.entityName,
        },
        bogusResponseBody: INVALID_ENTITY,
        run: () => descriptor.getResource(harness.client).delete(descriptor.id),
        expectedUrl: `https://example.com${descriptor.basePath}/${descriptor.id}`,
        expectedMethod: 'delete',
      },
    ];

    if (descriptor.addBody !== undefined) {
      endpointCases.splice(1, 0, {
        name: 'add',
        responseBody: {
          entity: descriptor.entityName,
        },
        bogusResponseBody: INVALID_ENTITY,
        run: async () => {
          const resource = descriptor.getResource(harness.client);
          if (resource.add === undefined) {
            throw new Error(`${descriptor.suiteName} does not implement add()`);
          }
          return resource.add(descriptor.addBody);
        },
        expectedUrl: `https://example.com${descriptor.basePath}`,
        expectedMethod: 'post',
        expectedBody: JSON.stringify(descriptor.addBody),
      });
    }

    defineEndpointTests(
      () => harness.fetchMock,
      endpointCases,
      'uses the expected entity endpoint',
    );
    defineBogusResponseTests(() => harness.fetchMock, endpointCases);
    defineEntityValidatorTests([
      {
        entityName: descriptor.entityName,
        validator: descriptor.validator,
        listValidator: descriptor.listValidator,
        valid: { entity: descriptor.entityName },
        invalid: INVALID_ENTITY,
      },
    ]);
  });
};

export const defineEndpointCaseSuite = (suite: EndpointCaseSuite) => {
  describe(suite.suiteName, () => {
    const harness = setupClientHarness();
    const endpointCases = suite.buildCases(harness);

    defineEndpointTests(
      () => harness.fetchMock,
      endpointCases,
      suite.description,
    );
    defineBogusResponseTests(() => harness.fetchMock, endpointCases);
  });
};
