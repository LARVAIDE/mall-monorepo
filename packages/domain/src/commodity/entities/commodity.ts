import { CommodityCurrency, CommodityHandler, ICommodityDTO } from '@/commodity/types';

export class Commodity implements ICommodityDTO {
  id: string;
  name: string;
  description: string;
  currency: CommodityCurrency;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  available: boolean;

  constructor({
    id,
    name,
    description,
    currency,
    createdAt,
    updatedAt,
    deletedAt,
    available,
  }: Omit<ICommodityDTO, CommodityHandler>) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.currency = currency;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
    this.available = available;
  }

  displayPrice() {}
}
