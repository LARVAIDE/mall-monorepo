import { create } from 'zustand';

import { createCommoditySlice } from '@/mall/service/commodities';
import { CommoditySlice } from '@/mall/types';
import composeMiddleware from '@/middleware';

export const mallDomain = create<CommoditySlice>()(
  composeMiddleware(
    (...arg) => ({
      ...createCommoditySlice(...arg),
    }),
    'mallDomain',
  ),
);

/** with react hooks */
export const useMallDomain = mallDomain;
