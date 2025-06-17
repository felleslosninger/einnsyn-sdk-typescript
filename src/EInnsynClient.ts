import { EInnsynClientBase } from './EInnsynClientBase';
import { type EInnsynOptions, defaultOptions } from './EInnsynOptions';
import { EInnsynRequester } from './EInnsynRequester';

export default class EInnsynClient extends EInnsynClientBase {
  public iterate: EInnsynRequester['iterate'];
  public fetchNextPage: EInnsynRequester['fetchNextPage'];
  public fetchPreviousPage: EInnsynRequester['fetchPreviousPage'];

  constructor(incomingOptions: EInnsynOptions = {}) {
    const options = {
      ...defaultOptions,
      ...incomingOptions,
    };
    const requester = new EInnsynRequester(options);
    super(requester);

    this.iterate = requester.iterate.bind(requester);
    this.fetchNextPage = requester.fetchNextPage.bind(requester);
    this.fetchPreviousPage = requester.fetchPreviousPage.bind(requester);
  }
}
