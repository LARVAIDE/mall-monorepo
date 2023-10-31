export enum Currency {
  CNY = 'CNY',
  USD = 'USD',
  HKD = 'HKD',
}

export interface ICommodityDTO {
  /** 商品id */
  id: string;
  /** 商品名称 */
  name: string;
  /** 商品描述 */
  description: string;
  /** 币种 */
  currency: Currency;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  deleted: boolean;
}

export type CommodityHandler = 'create' | 'update' | 'delete';
