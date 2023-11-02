export interface CommoditySlice {
  id: string;
  name: string;
  loading: boolean;

  /** 获取商品信息 */
  getCommodities(currency: string): Promise<any>;

  /** 重置仓库 */
  resetRepository(): void;
}
