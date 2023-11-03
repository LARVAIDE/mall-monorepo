import { StateCreator, StoreMutatorIdentifier } from 'zustand';
import { devtools, subscribeWithSelector } from 'zustand/middleware';

import { isProdEnv } from './utils';

export type ComposeMiddleware = <
  T,
  Mps extends [StoreMutatorIdentifier, unknown][] = [],
  Mcs extends [StoreMutatorIdentifier, unknown][] = [],
  N extends string = string,
>(
  f: StateCreator<T, [...Mps, ['zustand/devtools', never], ['zustand/subscribeWithSelector', never]], Mcs>,
  storeName: N,
) => StateCreator<T, Mps, [['zustand/devtools', T], ['zustand/subscribeWithSelector', T], ...Mcs]>;

export const composeMiddleware = ((f, storeName) =>
  devtools(subscribeWithSelector(f), { name: storeName, enabled: !isProdEnv })) as ComposeMiddleware;
