import type { FC } from 'react';

import useDialogStore from './store';
import { Dialog, DialogComponent } from './types';
import useDialog from './useDialog';

const RenderDialog: FC = () => {
  const RegisteredDialogs = useDialogStore((state) => state.dialogs);
  const RegisteredDialogList = Array.from(RegisteredDialogs.values());
  console.log(
    '%c [Registered Dialog]: ',
    'color: green; background: white; font-weight: bold; border-radius: 3px',
    RegisteredDialogList,
  );
  return (
    <>
      {RegisteredDialogList.map((D) => (
        <D.comp key={D.id} id={D.id} visible={D.visible} props={D.props} />
      ))}
    </>
  );
};

export function withDialogCreator(Comp: DialogComponent): FC<Dialog> {
  return ({ visible, id, ...props }) => {
    const { open, close, afterClose } = useDialog(id);
    return <Comp {...props} visible={visible} id={id} open={open} close={close} afterClose={afterClose} />;
  };
}

const { init, open, close, destroyAll } = useDialogStore.getState();
export const NottaDialog = {
  DialogView: RenderDialog,
  init,
  open,
  close,
  destroyAll,
};
