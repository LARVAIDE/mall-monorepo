import { lazy, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { faker } from '@faker-js/faker';

import { add } from '@mall/base';

import DialogScheduler from './dialog-scheduler';
// import WelcomeDialog from './dialog-scheduler/dialogs/welcome-dialog';

const MountCart = (el: Element) => {
  // eslint-disable-next-line no-magic-numbers
  el.innerHTML = `在您的购物车中有${faker.finance.amount({ min: 1, max: 10 })}件商品, add:${add(1, 2)}`;
};

const root = createRoot(document.getElementById('cart-root'));
const App = () => {
  const [renderList, setRenderList] = useState<any>([]);
  const dialogScheduler = new DialogScheduler();

  useEffect(() => {
    dialogScheduler.mount(lazy(() => delayForDemo(import('./dialog-scheduler/dialogs/setting-dialog'))));
    // dialogScheduler.mount(<WelcomeDialog />);
    setRenderList(dialogScheduler.renderList());
  }, []);
  console.log(dialogScheduler.renderList());
  return <>{...renderList}</>;
};
root.render(<App />);

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#prod-cart');
  if (el) MountCart(el);
}

function delayForDemo(promise: Promise<any>) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}

export { MountCart };
