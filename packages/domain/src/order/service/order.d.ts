import { Commodity } from '@/commodity/entity';
import { CurrencyType } from '@/commodity/types';
import { IOrder } from '@/order/entity';

export interface IOrderSlice {
  /** 订单生成状态 */
  generating: boolean;

  /** 加载订单列表状态 */
  orderListLoading: boolean;

  /** 订单列表 */
  orderList: IOrder[];

  /** 生成订单 */
  generateOrder(commodities: Commodity[], currency: CurrencyType): IOrder;

  /** 删除已完成订单 */
  deleteCompletedOrder(id: string): Promise<Array<IOrder | never>>;

  /** 获取已完成订单列表 */
  getCompletedOrders(): Array<IOrder | never>;
}
