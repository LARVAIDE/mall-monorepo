import { Commodity } from '@/commodity/entity';
import type { CurrencyType } from '@/commodity/entity/types';

export interface CommoditySlice {
  /** 所有商品 */
  commodities: Commodity[];
  /** 等待获取商品信息 */
  waitingCommodities: boolean;
  /** 获取商品信息 */
  getCommodities(currency: CurrencyType): Commodity[];
}
