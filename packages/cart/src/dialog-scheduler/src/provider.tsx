import { createContext, useState } from 'react';

import dialogScheduler from '../internal/scheduler';
import type { DialogComponent } from '../internal/scheduler.d';

const initDialogContext = {
  mount: (d: DialogComponent) => {},
  unmount: () => {},
  destroyAll: () => {},
};

export const DialogContext = createContext(initDialogContext);

export const DialogsProvider = ({ children }) => {
  const [dialogList, setDialogList] = useState(dialogScheduler.renderList());

  const mount = (dialog: DialogComponent) => {
    dialogScheduler.mount(dialog);
    setDialogList(dialogScheduler.renderList());
  };

  const unmount = () => {
    const popDialog = dialogScheduler.unmount();
    setDialogList(dialogScheduler.renderList());
    return popDialog;
  };

  const destroyAll = () => {
    dialogScheduler.destroyAll();
    setDialogList(dialogScheduler.renderList());
  };

  return (
    <DialogContext.Provider
      value={{
        mount,
        unmount,
        destroyAll,
      }}
    >
      {children}
      {...dialogList}
    </DialogContext.Provider>
  );
};
