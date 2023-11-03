export enum CurrencyType {
  CNY = 'CNY',
  USD = 'USD',
  HKD = 'HKD',
}

export enum CurrencySymbol {
  '$' = '$',
  '¥' = '¥',
  'HK$' = 'HK$',
}

/**
 * @example { code: 'USD', name: 'US Dollar', symbol: '$' }
 */
export interface CommodityCurrency {
  name: string;
  code: string;
  symbol: string;
}

export interface ICommodityDTO {
  /** 商品id */
  id: string;
  /** 商品名称 */
  name: string;
  /** 商品描述 */
  description: string;
  /** 币种信息 */
  currency: CommodityCurrency;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  available: boolean;
}

export type CommodityHandler = 'displayPrice';
