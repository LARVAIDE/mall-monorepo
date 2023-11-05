import { faker } from '@faker-js/faker';
import { StateCreator } from 'zustand/vanilla';

import { Order, OrderStatus } from '../entity';
import { IOrderSlice } from './order.d';

const {} = faker;
const initValue = {
  generating: false,
  orderListLoading: false,
  orderList: [],
};

export const pendingPayOrderSlice: StateCreator<IOrderSlice, [], [], IOrderSlice> = (set, get) => ({
  ...initValue,

  generateOrder: (commodities, currency) => {
    set(() => ({ generating: true }));

    // TODO: 接口调用
    // const { code, data, message } = await AdapterService.generateOrder(currencyCode);
    set(() => ({ generating: false }));

    return new Order({
      id: faker.datatype.uuid(),
      address: faker.address.city(),
      commodityList: commodities,
      totalPrice: 0,
      status: OrderStatus.Pending,
      comments: '',
      createdAt: new Date(),
      updatedAt: new Date(),
      canceledAt: new Date(),
      deletedAt: new Date(),
    });
  },

  deleteCompletedOrder: async (id) => {
    set(() => ({ generating: true }));

    // TODO: 接口调用
    // const { code, data, message } = await AdapterService.deleteCompletedOrder(id);
    set(() => ({ generating: false }));

    return [];
  },

  getCompletedOrders: () => {
    set(() => ({ orderListLoading: true }));

    const CompletedOrderList = get().orderList.filter((order) => order.status === OrderStatus.Completed);

    set(() => ({ orderListLoading: false }));

    return CompletedOrderList;
  },
});
