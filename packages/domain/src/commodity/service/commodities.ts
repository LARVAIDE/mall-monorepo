import { faker } from '@faker-js/faker';
import { StateCreator } from 'zustand/vanilla';

import { Commodity } from '@/commodity/entity';
import type { CommoditySlice } from './commodities.d';

const { commerce, finance, date } = faker;
const initValue = {
  commodities: [],
  waitingCommodities: false,
};

export const createCommoditySlice: StateCreator<CommoditySlice, [], [], CommoditySlice> = (set, get) => ({
  ...initValue,

  getCommodities: async (currencyCode) => {
    set(() => ({ waitingCommodities: true }));

    // TODO: 接口调用
    // const { code, data, message } = await AdapterService.getCommodities(currencyCode);
    // if error
    // NotifyService.error();

    set(() => ({ waitingCommodities: false, commodities: [] }));
    return [
      new Commodity({
        id: finance.bitcoinAddress(),
        name: commerce.productName(),
        description: commerce.productDescription(),
        currency: finance.currency(),
        originalPrice: ~~commerce.price({ min: 150, max: 200 }),
        price: ~~commerce.price({ min: 100, max: 149 }),
        category: commerce.department(),
        images: [faker.image.url()],
        specification: commerce.productDescription(),
        createdAt: date.anytime(),
        updatedAt: date.anytime(),
        deletedAt: date.anytime(),
        available: false,
        purchaseProperties: [],
      }),
    ];
  },
});
