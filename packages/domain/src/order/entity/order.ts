import { Commodity } from '@/commodity/entity';
import { IOrderDTO, OrderStatus } from './order.d';

export class Order implements IOrderDTO {
  id: string;
  address: string;
  commodityList: Commodity[];
  totalPrice: number;
  status: OrderStatus;
  comments: string;
  createdAt: Date;
  updatedAt: Date;
  canceledAt: Date;
  deletedAt: Date;

  constructor({
    id,
    address,
    commodityList,
    totalPrice,
    status,
    comments,
    createdAt,
    updatedAt,
    canceledAt,
    deletedAt,
  }: Omit<IOrderDTO, 'updateOrderStatus' | 'displayTotalPrice' | 'updateAddress'>) {
    this.id = id;
    this.address = address;
    this.commodityList = commodityList;
    this.totalPrice = totalPrice;
    this.status = status;
    this.comments = comments;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.canceledAt = canceledAt;
    this.deletedAt = deletedAt;
  }

  /** 更新订单状态 */
  updateOrderStatus(id: string, status: OrderStatus): void {}

  /** 展示总价 */
  displayTotalPrice(currencySymbol: string): string {
    return `${currencySymbol} ${this.totalPrice}`;
  }

  /** 修改收货地址 */
  updateAddress(address: string): void {}
}
