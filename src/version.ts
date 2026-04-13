declare const __EINNSYN_SDK_VERSION__: string | undefined;

const hasInjectedVersion = typeof __EINNSYN_SDK_VERSION__ !== 'undefined';
export const version = hasInjectedVersion ? __EINNSYN_SDK_VERSION__ : 'dev';
