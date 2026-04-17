// Representative smoke coverage for richer generated child-resource routes.
import type { Dokumentbeskrivelse } from '../src/entities/dokumentbeskrivelse/Dokumentbeskrivelse.ts';
import type { Korrespondansepart } from '../src/entities/korrespondansepart/Korrespondansepart.ts';
import type { SkjermingRequest } from '../src/entities/skjerming/Skjerming.ts';
import { defineEndpointCaseSuite } from './support/entityResourceHarness.ts';

const createDokumentbeskrivelse = (
  overrides: Partial<Dokumentbeskrivelse> = {},
): Dokumentbeskrivelse => ({
  entity: 'Dokumentbeskrivelse',
  id: 'db_123',
  deleted: false,
  tittel: 'Attachment ***',
  tittelSensitiv: 'Attachment no 1',
  dokumentnummer: 1,
  tilknyttetRegistreringSom: 'vedlegg',
  ...overrides,
});

const createKorrespondansepart = (
  overrides: Partial<Korrespondansepart> = {},
): Korrespondansepart => ({
  entity: 'Korrespondansepart',
  id: 'kp_123',
  deleted: false,
  korrespondansepartNavn: 'Ola ****',
  korrespondansepartNavnSensitiv: 'Ola Nordmann',
  korrespondanseparttype: 'avsender',
  ...overrides,
});

defineEndpointCaseSuite({
  suiteName: 'journalpost nested endpoints',
  description: 'uses the expected nested journalpost route',
  buildCases: (harness) =>
    [
      {
        name: 'addDokumentbeskrivelse',
        responseBody: createDokumentbeskrivelse({ id: 'db_124' }),
        bogusResponseBody: { entity: 'Journalpost' },
        run: () =>
          harness.client.journalpost.addDokumentbeskrivelse('jp_123', {
            tittel: 'Attachment ****',
            tittelSensitiv: 'Attachment no 1',
            dokumentnummer: 1,
            tilknyttetRegistreringSom: 'vedlegg',
          }),
        expectedUrl:
          'https://example.com/journalpost/jp_123/dokumentbeskrivelse',
        expectedMethod: 'POST',
        expectedBody: JSON.stringify({
          tittel: 'Attachment ****',
          tittelSensitiv: 'Attachment no 1',
          dokumentnummer: 1,
          tilknyttetRegistreringSom: 'vedlegg',
        }),
      },
      {
        name: 'deleteDokumentbeskrivelse',
        responseBody: createDokumentbeskrivelse({ id: 'db_124' }),
        bogusResponseBody: { entity: 'Journalpost' },
        run: () =>
          harness.client.journalpost.deleteDokumentbeskrivelse(
            'jp_123',
            'db_124',
          ),
        expectedUrl:
          'https://example.com/journalpost/jp_123/dokumentbeskrivelse/db_124',
        expectedMethod: 'DELETE',
      },
      {
        name: 'listKorrespondansepart',
        responseBody: {
          items: [createKorrespondansepart()],
        },
        bogusResponseBody: { items: [{ entity: 'Journalpost' }] },
        run: () =>
          harness.client.journalpost.listKorrespondansepart('jp_123', {
            id: 'jp_123',
            journalpostId: 'jp_123',
            limit: 5,
          }),
        expectedUrl:
          'https://example.com/journalpost/jp_123/korrespondansepart?id=jp_123&journalpostId=jp_123&limit=5',
        expectedMethod: 'GET',
      },
      {
        name: 'addSkjerming',
        responseBody: { entity: 'Skjerming' },
        bogusResponseBody: { entity: 'Journalpost' },
        run: () =>
          harness.client.journalpost.addSkjerming('jp_123', {
            tilgangsrestriksjon: 'restricted',
          } satisfies SkjermingRequest),
        expectedUrl: 'https://example.com/journalpost/jp_123/skjerming',
        expectedMethod: 'POST',
        expectedBody: JSON.stringify({
          tilgangsrestriksjon: 'restricted',
        }),
      },
    ] as const,
});
