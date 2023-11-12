import { Commodity } from '@/commodity/entity';
import type { CurrencyType } from '@/commodity/entity/commodity.d';

export interface CommoditySlice {
  /** 所有商品 */
  commodities: Commodity[];
  /** 等待获取商品信息 */
  waitingCommodities: boolean;
  /** 获取商品信息 */
  getCommodities(currency: CurrencyType): Promise<any>;
}
