import { faker } from '@faker-js/faker';

import { mallDomain } from '@mall/domain';

export function mount(el) {
  const products = `<div>${faker.commerce.productName()} price: ${faker.finance.amount({ min: 5, max: 10 })}</div>`;

  const commodities = mallDomain.getState().getCommodities();
  console.log(commodities);
  el.innerHTML = products;
}

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#prod-cart');
  if (el) mount(el);
}
