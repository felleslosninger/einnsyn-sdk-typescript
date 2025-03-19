# <img src="https://einnsyn.no/8ebf89f8e40d3eb75183.svg" width="180px" alt="eInnsyn"/>

TypeScript SDK for the eInnsyn API

## Usage

Install the package via npm:

```sh
npm install https://github.com/felleslosninger/einnsyn-sdk-typescript
```

Import and use it in your TypeScript project:

```typescript
import { EInnsynClient } from 'einnsyn-sdk';
```

## Authentication

The SDK supports multiple authentication methods:

- JWT
- Username/Password
- API Key

## Examples

### Creating a client instance

```typescript
// Client set-up (all options are optional)
const client = new EInnsynClient({
  baseUrl: 'https://api.einnsyn.no',
  appInfo: 'My eInnsyn client',
  username: 'eInnsynUser@example.com',
  password: 'myPassword',
  jwtToken: '...',
  apiKey: 'secret_apikey',
});
```

### Authenticating using JWT

When authenticating as an organization through Ansattporten, you would supply your JWT like this:

```typescript
const authenticatedClient = new EInnsynClient({
  jwt: '...',
});
```

### Authenticating using an eInnsyn username / password

```typescript
const authenticatedClient = new EInnsynClient({
  username: 'eInnsynUser@example.com',
  password: '...',
});
```

### Authenticating using an API key

```typescript
const authenticatedClient = new EInnsynClient({
  apiKey: 'secret_...',
});
```

### Fetching content

```typescript
// Get a saksmappe
const saksmappe = await client.saksmappe.get('sm_...');
console.log(saksmappe.offentligTittel);

// Get all journalposts in the saksmappe
const journalpostList = await client.saksmappe.getJournalpost('sm_...');

// Iterate over all journalposts
for await (const journalpost of client.iterate(journalpostList)) {
  console.log(`${journalpost.offentligTittel}`);
}
```

### Iterating over paginated lists
You can automatically iterate over paginates lists like this:
```
const journalpostList = await client.saksmappe.getJournalpost('sm_...');

// Iterate over all journalposts
for await (const journalpost of client.iterate(journalpostList)) {
  console.log(`${journalpost.offentligTittel}`);
}
```

### Expanding fields

You can expand fields in your queries to include related entities:

```typescript
// Non-expanded:
const saksmappe = await client.saksmappe.get('sm_...');
console.log(saksmappe);
// Example output:
// {
//   entity: 'Saksmappe',
//   id: 'sm_...',
//   offentligTittel: 'Saksmappe title',
//   offentligTittelSensitiv: 'Saksmappe title with sensitive data',
//   saksaar: 2025,
//   sakssekvensnummer: 1,
//   journalpost: ['jp_...'],
// }

// Expanded:
const expandedSaksmappe = await client.saksmappe.get('sm_...', { expand: ['journalpost'] });
console.log(expandedSaksmappe);
// Example output:
// {
//   entity: 'Saksmappe',
//   id: 'sm_...',
//   offentligTittel: 'Saksmappe title',
//   offentligTittelSensitiv: 'Saksmappe title with sensitive data',
//   saksaar: 2025,
//   sakssekvensnummer: 1,
//   journalpost: [{
//     offentligTittel: 'Journalpost title',
//     offentligTittelSensitiv: 'Journalpost title with sensitive data',
//     journalaar: 2025,
//     journalsekvensnummer: 1,
//     journalpostnummer: 1,
//     journalposttype: 'inngaaende_dokument',
//     journaldato: '2025-01-01',
//   }],
// }
```

### Adding / updating content

```typescript
// Create a containing Arkiv
const arkiv = await client.arkiv.add({
  tittel: 'Arkiv title',
});

// Create a containing Arkivdel
const arkivdel = await client.arkiv.addArkivdel(arkiv.id, {
  tittel: 'Arkivdel title'
});

// Create a saksmappe with a Journalpost
const saksmappe = await client.arkivdel.addSaksmappe(arkivdel.id, {
  offentligTittel: 'Saksmappe title',
  offentligTittelSensitiv: 'Saksmappe title with sensitive data',
  saksaar: 2025,
  sakssekvensnummer: 1,
  journalpost: [{
    offentligTittel: 'Journalpost title',
    offentligTittelSensitiv: 'Journalpost title with sensitive data',
    journalaar: 2025,
    journalsekvensnummer: 1,
    journalpostnummer: 1,
    journalposttype: 'inngaaende_dokument',
    journaldato: '2025-01-01',
  }]
});

// Add a Journalpost with a Dokumentbeskrivelse to an existing Saksmappe
const journalpost = await client.saksmappe.addJournalpost(saksmappe.id, {
    offentligTittel: 'Second Journalpost',
    offentligTittelSensitiv: 'Second Journalpost title with sensitive data',
    journalaar: 2025,
    journalsekvensnummer: 2,
    journalpostnummer: 2,
    journalposttype: 'inngaaende_dokument',
    journaldato: '2025-01-03',
    dokumentbeskrivelse: [{
      tittel: 'Dokumentbeskrivelse title',
      tittelSensitiv: 'Title with sensitive data',
      dokumentnummer: 1,
      tilknyttetRegistreringSom: 'vedlegg',
    }]
});

// Update an existing Saksmappe
const updatedSaksmappe = await client.saksmappe.update(saksmappe.id, {
  offentligTittel: 'Updated offentligTittel',
});
```

### Deleting content

```typescript
const deletedSaksmappe = client.saksmappe.delete(saksmappe.id);
```

### Search

```typescript
// Search for "robot"
const searchResultList = client.search({
  query: 'robot',
});

// Iterate all results
for await (const searchResult of client.iterate(searchResultList)) {
    if (isSaksmappe(result)) {
      // This is a Saksmappe.
      console.log(`Saksmappe: ${result.offentligTittel}`);
    } else if (isJournalpost(result)) {
      // This is a Journalpost.
      console.log(`Journalpost - ${result.offentligTittel}`);
    } else if (isMoetemappe(result)) {
      // This is a Moetemappe.
      console.log(`Moetemappe - ${result.offentligTittel}`);
    } else if (isMoetesak(result)) {
      // This is a Moetesak.
      console.log(`Moetesak - ${result.offentligTittel}`);
    } else {
      // Unknown search result, should not happen.
      console.log(`Unknown result type`);
    }
}

// Search for "robot", in documents by a given enhet
const enhetsRobotList = client.search({
  query: 'robot',
  administrativEnhet: 'enh_...',
});

// Advanced search
const advancedSearch = client.search({
  query: 'advanced query',
  administrativEnhet: 'enh_...',
  excludeAdministrativEnhet: 'enh_...',
  sortBy: 'publisertDato',
  sortOrder: 'asc',
});
```

## API Documentation

For detailed API documentation, please refer to the [eInnsyn API Specification](https://github.com/felleslosninger/einnsyn-api-spec).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
