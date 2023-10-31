import { StateCreator } from 'zustand/vanilla';

import { CommoditySlice } from '@/mall/types';

const initValue = {
  id: '',
  name: '',
  loading: false,
};

export const createCommoditySlice: StateCreator<CommoditySlice, [], [], CommoditySlice> = (set, get) => ({
  ...initValue,

  async getCommodities(currency) {
    set(() => ({ loading: true }));

    // TODO: 接口调用
  },

  resetRepository() {
    set(() => ({ ...initValue }));
  },
});
