import { describe, expect, test } from 'vitest';

import { isBase, isPaginatedBaseList } from '../src/entities/base/Base.ts';

const BASE_ENTITY_NAMES = [
  'ApiKey',
  'Enhet',
  'Bruker',
  'Arkiv',
  'Arkivdel',
  'Klasse',
  'Klassifikasjonssystem',
  'Moetemappe',
  'Saksmappe',
  'Journalpost',
  'Moetesak',
  'Moetedokument',
  'Korrespondansepart',
  'Skjerming',
  'Utredning',
  'Moetesaksbeskrivelse',
  'Dokumentbeskrivelse',
  'Dokumentobjekt',
  'Vedtak',
  'Votering',
  'Moetedeltaker',
  'Identifikator',
  'Behandlingsprotokoll',
  'Innsynskrav',
  'InnsynskravBestilling',
  'LagretSak',
  'LagretSoek',
  'Tilbakemelding',
] as const;

type BaseEntityName = (typeof BASE_ENTITY_NAMES)[number];

const createBaseEntity = (entity: BaseEntityName, id = 'entity_123') => ({
  entity,
  id,
  deleted: false,
});

describe('Base validators', () => {
  test.each(BASE_ENTITY_NAMES)('isBase accepts %s entities', (entity) => {
    expect(isBase(createBaseEntity(entity))).toBe(true);
  });

  test('isBase rejects unknown entities', () => {
    expect(
      isBase({
        entity: 'UnknownEntity',
        id: 'unknown_123',
        deleted: false,
      }),
    ).toBe(false);
  });

  test('isBase rejects undefined', () => {
    expect(isBase(undefined)).toBe(false);
  });

  test('isPaginatedBaseList accepts empty lists', () => {
    expect(isPaginatedBaseList({ items: [] })).toBe(true);
  });

  test('isPaginatedBaseList accepts lists of supported entities', () => {
    expect(
      isPaginatedBaseList({
        items: [
          createBaseEntity('Journalpost', 'journalpost_123'),
          createBaseEntity('Saksmappe', 'saksmappe_123'),
          createBaseEntity('Vedtak', 'vedtak_123'),
        ],
        next: '/search?startingAfter=vedtak_123',
      }),
    ).toBe(true);
  });

  test('isPaginatedBaseList rejects unknown entities', () => {
    expect(
      isPaginatedBaseList({
        items: [
          createBaseEntity('Journalpost', 'journalpost_123'),
          {
            entity: 'UnknownEntity',
            id: 'unknown_123',
            deleted: false,
          },
        ],
      }),
    ).toBe(false);
  });

  test('isPaginatedBaseList rejects undefined', () => {
    expect(isPaginatedBaseList(undefined)).toBe(false);
  });
});
