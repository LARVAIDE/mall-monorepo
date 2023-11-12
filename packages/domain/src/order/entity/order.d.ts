import type { Commodity } from '@/commodity/entity';

/**
 * 订单状态
 */
export enum OrderStatus {
  /** 等待付款 */
  Pending = 'Pending',
  /** 未付款 */
  Unpaid = 'Unpaid',
  /** 已付款 */
  Paid = 'Paid',
  /** 等待发货 */
  PendingShipment = 'PendingShipment',
  /** 已发货 */
  Shipped = 'Shipped',
  /** 已完成 */
  Completed = 'Completed',
  /** 已取消 */
  Canceled = 'Canceled',
}

export interface IOrder {
  /** 订单 ID */
  id: string;
  /** 收货地址 */
  address: string;
  /** 商品列表 */
  commodityList: Commodity[];
  /** 订单总价 */
  totalPrice: number;
  /** 订单状态 */
  status: OrderStatus;
  /** 订单备注 */
  comments: string;
  /** 创建时间 */
  createdAt: Date;
  /** 更新时间 */
  updatedAt: Date;
  /** 取消时间 */
  canceledAt: Date;
  /** 删除 */
  deletedAt: Date;
}
