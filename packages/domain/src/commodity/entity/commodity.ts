import type { CommodityCurrency, ICommodityDTO, IPurchaseProperties } from './commodity.d';

const MaxPercent = 100;

export class Commodity implements ICommodityDTO {
  id: string;
  name: string;
  description: string;
  currency: CommodityCurrency;
  originalPrice: number;
  price: number;
  category: string;
  images: string[];
  specification: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  available: boolean;
  purchaseProperties: Record<string, IPurchaseProperties>[];

  constructor({
    id,
    name,
    description,
    currency,
    originalPrice,
    price,
    category,
    images,
    specification,
    createdAt,
    updatedAt,
    deletedAt,
    available,
    purchaseProperties,
  }: Omit<ICommodityDTO, 'displayPrice' | 'displayDiscountPercent'>) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.currency = currency;
    this.originalPrice = originalPrice;
    this.price = price;
    this.category = category;
    this.images = images;
    this.specification = specification;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
    this.available = available;
    this.purchaseProperties = purchaseProperties;
  }

  displayPrice(currencySymbol: string): string {
    return `${currencySymbol} ${this.price}`;
  }

  displayDiscountPercent(): string {
    return `${this.price > this.originalPrice ? '+' : '-'} ${(this.price / this.originalPrice) * MaxPercent}%`;
  }
}
