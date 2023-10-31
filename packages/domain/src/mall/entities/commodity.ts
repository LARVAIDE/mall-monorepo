import { CommodityHandler, Currency, ICommodityDTO } from '@/mall/types';

export class Commodity implements ICommodityDTO {
  id: string;
  name: string;
  description: string;
  currency: Currency;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  deleted: boolean;

  constructor({
    id,
    name,
    description,
    currency,
    createdAt,
    updatedAt,
    deletedAt,
    deleted,
  }: Omit<ICommodityDTO, CommodityHandler>) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.currency = currency;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
    this.deleted = deleted;
  }

  create() {}

  update() {}

  delete() {}
}
