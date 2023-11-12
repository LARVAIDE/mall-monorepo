import { create } from 'zustand';

import { composeMiddleware } from '../../middleware';
import { createCommoditySlice } from './commodities';
import type { CommoditySlice } from './commodities.d';

export const commodityDomain = create<CommoditySlice>()(
  composeMiddleware(
    (...arg) => ({
      ...createCommoditySlice(...arg),
    }),
    'commodityDomain',
  ),
);

export const useCommodityDomain = commodityDomain;
