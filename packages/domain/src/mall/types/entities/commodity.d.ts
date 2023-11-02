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

export interface CommodityCurrency {
  code: CurrencyType;
  name: string;
  symbol: CurrencySymbol;
}

export interface ICommodityDTO {
  /** 商品id */
  id: string;
  /** 商品名称 */
  name: string;
  /** 商品描述 */
  description: string;
  /** 币种信息 */
  currency: Currency;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  available: boolean;
}

export type CommodityHandler = 'displayPrice';
