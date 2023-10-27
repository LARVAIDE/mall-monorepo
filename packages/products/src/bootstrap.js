import faker from 'faker';

import { add } from '@mall-base/utils';

function mount(el) {
  let products = '';

  for (let i = 1; i <= 5; i++) {
    products += `<div>${faker.commerce.productName()} price: ${add(1 + 2)}</div>`;
  }
  el.innerHTML = products;
}

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-products');
  if (el) mount(el);
}

export { mount };
