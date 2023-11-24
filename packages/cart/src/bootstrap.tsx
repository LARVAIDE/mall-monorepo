import { createRoot } from 'react-dom/client';
import { faker } from '@faker-js/faker';

import { add } from '@mall/base';

import { DialogsProvider } from './dialog-scheduler';
import Page from './page';

const MountCart = (el: Element) => {
  // eslint-disable-next-line no-magic-numbers
  el.innerHTML = `在您的购物车中有${faker.finance.amount({ min: 1, max: 10 })}件商品, add:${add(1, 2)}`;
};

const root = createRoot(document.getElementById('cart-root') as Element);

const App = () => {
  return (
    <DialogsProvider>
      <Page />
    </DialogsProvider>
  );
};
root.render(<App />);

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#prod-cart');
  if (el) MountCart(el);
}

export { MountCart };
