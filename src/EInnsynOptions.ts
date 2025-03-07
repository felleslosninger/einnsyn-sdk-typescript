export type EInnsynOptions = {
  baseUrl?: string;
  apiKey?: string;
  username?: string;
  password?: string;
  jwt?: string;
  actingAs?: string;
  maxThrottleRetries?: number;
  appInfo?: string;
};

export const defaultOptions: EInnsynOptions = {
  baseUrl: 'https://api.einnsyn.no',
  maxThrottleRetries: 10,
};
