import EInnsynClient from './';
import { isJournalpost } from './entities/journalpost/Journalpost';
import { isMoetemappe } from './entities/moetemappe/Moetemappe';
import { isMoetesak } from './entities/moetesak/Moetesak';
import { isSaksmappe } from './entities/saksmappe/Saksmappe';

const client = new EInnsynClient({
  baseUrl: 'https://api.test.einnsyn.no',
});

(async () => {
  // const saksmappeList = await client.saksmappe.list();
  // let counter = 0;
  // for await (const saksmappe of client.iterate(saksmappeList)) {
  //   console.log(
  //     `${++counter}: ${saksmappe.saksnummer} - ${saksmappe.offentligTittel}`,
  //   );
  // }

  const search = await client.search.search({
    entity: ['Moetemappe'],
    sortBy: 'publisertDato',
    query: 'test',
    limit: 10,
  });
  let counter = 0;
  for await (const result of client.iterate(search)) {
    if (isSaksmappe(result)) {
      console.log(`${++counter}: Saksmappe: ${result.offentligTittel}`);
    } else if (isJournalpost(result)) {
      console.log(`${++counter}: Journalpost - ${result.offentligTittel}`);
    } else if (isMoetemappe(result)) {
      console.log(`${++counter}: Moetemappe - ${result.offentligTittel}`);
    } else if (isMoetesak(result)) {
      console.log(`${++counter}: Moetesak - ${result.offentligTittel}`);
    } else {
      console.log(`${++counter}: Unknown result type`);
    }
  }
})();
