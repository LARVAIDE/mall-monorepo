import { create } from 'zustand';

import { composeMiddleware } from '../../middleware';
import { CommoditySlice, createCommoditySlice } from './commodities';

export const commodityDomain = create<CommoditySlice>()(
  composeMiddleware(
    (...arg) => ({
      ...createCommoditySlice(...arg),
    }),
    'commodityDomain',
  ),
);

export const useCommodityDomain = commodityDomain;
