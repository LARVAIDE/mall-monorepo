import type { ReactElement } from 'react';
import { createContext, useState } from 'react';

import dialogScheduler, { DialogPayload } from '../internal/scheduler';

const initDialogContext = {
  dialogScheduler,
  mount: (d: ReactElement, k: DialogPayload) => {},
  unmount: () => {},
  destroyAll: () => {},
  forceUpdate: () => {},
};

export const DialogContext = createContext(initDialogContext);

export const DialogsProvider = ({ children }) => {
  const [, setForceUpdate] = useState(0);

  const mount = (dialog: ReactElement, payload: any = {}) => {
    const { props, visible, keepAlive } = payload;
    dialogScheduler.add(dialog, { props, visible, keepAlive });
    forceUpdate();
  };

  const unmount = () => {
    dialogScheduler.remove();
    forceUpdate();
  };

  const destroyAll = () => {
    dialogScheduler.destroyAll();
    forceUpdate();
  };

  const forceUpdate = () => {
    setForceUpdate(Date.now());
  };

  return (
    <DialogContext.Provider
      value={{
        dialogScheduler,
        mount,
        unmount,
        destroyAll,
        forceUpdate,
      }}
    >
      {children}
      {...dialogScheduler.renderList()}
    </DialogContext.Provider>
  );
};
