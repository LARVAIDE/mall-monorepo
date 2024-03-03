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

/** 购买属性 */
interface IPurchasePropertiesList {
  displayName: string;
  value: string;
}

export interface IPurchaseProperties {
  /** 显示名称 */
  displayTitle: string;
  /** 购买属性列表  */
  propsList: IPurchasePropertiesList[];
  /** 限购数量 */
  maxLimitBuyNumber: number;
  /** 购买数量 */
  buyNumber: number;
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
  /** 原价 */
  originalPrice: number;
  /** 现价 */
  price: number;
  /** 分类 */
  category: string;
  /** 图片 */
  images: string[];
  /** 规格 */
  specification: string;
  /** 创建时间 */
  createdAt: Date;
  /** 更新时间 */
  updatedAt: Date;
  /** 删除时间 */
  deletedAt: Date;
  /** 是否可用 */
  available: boolean;
  /** 购买属性 */
  purchaseProperties: Record<string, IPurchaseProperties>[];
  /**
   * 商品展示价格
   *
   * @param {string} currencySymbol - (optional) The currency symbol to use. If not provided, the default currency symbol will be used.
   * @return {string} The formatted price string.
   */
  displayPrice: (currencySymbol: string) => string;
  /**
   * 商品折扣力度
   *
   * @return {string} The percentage discount as a string.
   */
  displayDiscountPercent: () => string;
}
