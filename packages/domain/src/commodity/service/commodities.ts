import { faker } from '@faker-js/faker';
import { StateCreator } from 'zustand/vanilla';

import { Commodity } from '@/commodity/entities';
import { CurrencyType } from '@/commodity/types';

const { commerce, finance, date } = faker;
const initValue = {
  id: '',
  name: '',
  loading: false,
};

export interface CommoditySlice {
  id: string;
  name: string;
  loading: boolean;

  /** 获取商品信息 */
  getCommodities(currency: CurrencyType): Promise<any>;

  /** 重置仓库 */
  resetRepository(): void;
}

export const createCommoditySlice: StateCreator<CommoditySlice, [], [], CommoditySlice> = (set, get) => ({
  ...initValue,

  getCommodities: async (currency) => {
    set(() => ({ loading: true }));

    // TODO: 接口调用
    // const { code, data, message } = await AdapterService.getCommodities(currency);
    // if error
    // NotifyService.error();

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
