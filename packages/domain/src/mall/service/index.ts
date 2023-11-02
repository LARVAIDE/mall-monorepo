import { create } from 'zustand';

import { createCommoditySlice } from './commodities';
import { CommoditySlice } from '@/mall/types';
import { composeMiddleware } from '@/middleware';

export const mallDomain = create<CommoditySlice>()(
  composeMiddleware(
    (...arg) => ({
      ...createCommoditySlice(...arg),
    }),
    'mallDomain',
  ),
);

export const useMallDomain = mallDomain;
