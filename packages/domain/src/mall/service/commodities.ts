import { StateCreator } from 'zustand/vanilla';

import { CommoditySlice } from '@/mall/types';
import { Commodity } from '@/mall/entities';
import { faker } from '@faker-js/faker';

const { commerce, finance, date } = faker;

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
    // const { code, data, message } = await AdapterService.getCommodities(currency);

    set(() => ({ loading: false }));
    return [
      new Commodity({
        id: finance.bitcoinAddress(),
        name: commerce.productName(),
        description: commerce.productDescription(),
        currency: finance.currency(),
        createdAt: date.anytime(),
        updatedAt: date.anytime(),
        deletedAt: date.anytime(),
        available: false,
      }),
    ];
  },

  resetRepository() {
    set(() => ({ ...initValue }));
  },
});
